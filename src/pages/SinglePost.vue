<template>
   
        <div v-if="post">
            <h1 >{{ post.title }}</h1>
            <img :src="`${store.imgPath}${post.image}`" :alt="post.title">
        </div>
        <router-link class="nav-link"  :to="{name: 'single-post', params: {slug: 'radio-podcast-e-digitale-al-posto-della-televisione-la-cultura-si-frammenta'}}">radio-podcast-e-digitale-al-posto-della-televisione-la-cultura-si-frammenta</router-link>
   
   
    
</template>

<script>
import axios from 'axios';
import { store } from '../store';
    export default {
        name: 'SinglePost',
        data(){
            return{
                store,
                post: null
            }
        },
        methods:{
            getPostData(){
                //console.log(this.$route);
                axios.get(`${this.store.apiBaseUrl}/posts/${this.$route.params.slug}`).then((res)=>{
                    console.log(res.data)
                    if(res.data.results){
                        this.post = res.data.results
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                   
                }).catch((err)=>{
                    console.log('error', err);
                })
            }
        },
        created(){
            this.getPostData()
        }
    }
</script>

<style lang="scss" scoped>

</style>