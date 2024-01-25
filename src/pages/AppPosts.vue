<template>
  <div class="d-flex justify-content-between align-items-center my-3">
    <h1>Post List</h1>
    <select name="category" id="category" class="form-control" style="max-width:300px;" v-model="selectedCategory" @change="setParams()">
        <option value="">--Choose category--</option>
        <option :value="category.id" v-for="(category, index) in store.categories" :key="index" >{{ category.name }}</option>
    </select>
  </div>
    
    <div class="row">
        <div class="col-12 col-md-4 col-lg-3" v-for="post in store.posts" :key="post.id">
            <AppCard :post="post"/>
        </div>
    </div>
    <nav class="d-flex justify-content-center align-items-center my-4">
        <ul class="pagination">
    <li class="page-item" :class="{'disabled': currentPage === 1}">
        <button class="page-link" :disabled="currentPage === 1" @click="setParams(currentPage - 1)">Previous
        </button>
    </li>
    <li class="page-item" v-for="n in lastPage">
        <button class="page-link" @click="setParams(n)">{{n}}</button>
    </li> 
    <li class="page-item" :class="{'disabled': currentPage === lastPage}">
        <button class="page-link" :disabled="currentPage === lastPage" @click="setParams(currentPage + 1)">Next
        </button>
    </li>   
  </ul>
</nav>
 

        	

</template>

<script>
 import { store } from "../store";
 import axios from "axios";
 import AppCard from '../components/AppCard.vue';
    export default {
        name: 'AppPosts',
        components: {
            AppCard
        },
        data(){
            return {
                store,
                currentPage: 1,
                lastPage: null,
                total: 0,
                selectedCategory: '',
                        
            }
        },
        methods: {
            setParams(pageNum=1){
                // 
                //     const params: {
                //         page: pageNum
                //     }
                // 
                const params = new URLSearchParams();
                params.append('page', pageNum);
                if(this.selectedCategory){
                    //params.category = this.selectedCategory;  
                    params.append('category', this.selectedCategory);                
                }
                //console.log(params);
                this.getAllPosts(params);
            },
            getAllPosts(params){
                axios.get(`${this.store.apiBaseUrl}/posts`, {params}).then((res)=>{
                    console.log(res.data);
                    //aggiungere controllo che l'array non sia vuoto
                    this.store.posts = res.data.results.data;
                    this.currentPage = res.data.results.current_page;
                    this.lastPage = res.data.results.last_page;
                    this.total = res.data.results.total;
                }).catch((err)=>{
                    console.log('error', err);
                })
                   
                },
                getAllCategories(){
                    axios.get(`${this.store.apiBaseUrl}/categories`).then((res)=>{
                        console.log(res.data);
                        this.store.categories = res.data.results;
                    }).catch((err)=>{
                        
                    })
                }
            },
            created(){
                this.getAllCategories();
                this.setParams();
                
            }
        }
</script>

<style lang="scss" scoped>

</style>