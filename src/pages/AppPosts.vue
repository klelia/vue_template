<template>
   <main class="container">
    <h1>Post List</h1>
    <div class="row">
    <div class="col-12 col-md-4 col-lg-3" v-for="post in store.posts" :key="post.id">
        <AppCard :post="post"/>
    </div>
   
    </div>
   </main>

        	

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
            }
        },
        methods: {
            getAllPosts(){
                axios.get(`${this.store.apiBaseUrl}/posts`).then((res)=>{
                    console.log(res.data);
                    this.store.posts = res.data.results.data;
                }).catch((err)=>{
                    console.log('error', err);
                })
                   
                }
            },
            created(){
                this.getAllPosts();
            }
        }
</script>

<style lang="scss" scoped>

</style>