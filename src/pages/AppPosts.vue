<template>
  
    <h1>Post List</h1>
    <div class="row">
        <div class="col-12 col-md-4 col-lg-3" v-for="post in store.posts" :key="post.id">
            <AppCard :post="post"/>
        </div>
    </div>
    <nav class="d-flex justify-content-center align-items-center my-4">
        <ul class="pagination">
    <li class="page-item" :class="{'disabled': currentPage === 1}">
        <button class="page-link" :disabled="currentPage === 1" @click="getAllPosts(currentPage - 1)">Previous
        </button>
    </li>
    <li class="page-item" v-for="n in lastPage">
        <button class="page-link" @click="getAllPosts(n)">{{n}}</button>
    </li> 
    <li class="page-item" :class="{'disabled': currentPage === lastPage}">
        <button class="page-link" :disabled="currentPage === lastPage" @click="getAllPosts(currentPage + 1)">Next
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
                total: 0          
            }
        },
        methods: {
            getAllPosts(pageNum){
                axios.get(`${this.store.apiBaseUrl}/posts`,{params: {page: pageNum}}).then((res)=>{
                    console.log(res.data);
                    this.store.posts = res.data.results.data;
                    this.currentPage = res.data.results.current_page;
                    this.lastPage = res.data.results.last_page;
                    this.total = res.data.results.total;
                }).catch((err)=>{
                    console.log('error', err);
                })
                   
                }
            },
            created(){
                this.getAllPosts(this.currentPage);
            }
        }
</script>

<style lang="scss" scoped>

</style>