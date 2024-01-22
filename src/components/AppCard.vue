<template>
    <div class="card">
        <img :src="`${store.imgPath}${post.image}`" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ truncateTitle }}</h5>
            <p class="card-text">{{ truncateBody }}</p>
            <router-link :to="{ name: 'single-post', params: { slug: post.slug } }" class="btn btn-primary">
    View detail
</router-link>
        
        </div>
        
    </div>
</template>

<script>
import { store } from "../store";
export default {
        name: 'AppCard',
        props: ['post'],
        data(){
            return {
                store,
                titleMaxLen: 25,
                bodyMaxLen: 100,
            }
        },
        computed:{
            truncateTitle(){
                if(this.post.title.length > this.titleMaxLen){
                    return this.post.title.substr(0,this.titleMaxLen) + '...';
                }
                return this.post.title;            
            },
            truncateBody(){
                if(this.post.body.length > this.bodyMaxLen){
                    return this.post.body.substr(0,this.bodyMaxLen) + '...';
                }
                return this.post.body;            
            }
        }
        
}
</script>

<style lang="scss" scoped>

</style>