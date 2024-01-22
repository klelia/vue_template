<template>
    <div class="card">
        <img :src="`${store.imgPath}${post.image}`" class="card-img-top" alt="...">
        <router-link :to="{ name: 'single-post', params: { slug: post.slug } }" class="btn btn-primary">
    {{ post.title }}
</router-link>
    </div>
</template>

<script>
import { store } from "../store";
export default {
        name: 'AppCard',
        props: ['post'],
        data(){
            return {
                store
            }
        }
        
}
</script>

<style lang="scss" scoped>

</style>