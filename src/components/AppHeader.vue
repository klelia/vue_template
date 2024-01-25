<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Boolpress</a>
    <button class="navbar-toggler" @click="toggleMenu()" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :class="{'show': showMenu}" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li class="nav-item" v-for="(item, index) in menu" :key="index">
            <router-link class="nav-link" active-class="active" :to="{name: item.name}">{{ item.label }}</router-link>
         
        </li>
       
      </ul>
      <div class="d-flex">
        <a href="http://127.0.0.1:8000/admin" class="btn btn-dark">Area Riservata</a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "AppHeader",
    data(){
        return {
            menu: [
                {
                    label: "Home",
                    name: 'home'
                    
                },
                {
                    label: "Posts",
                    name: 'posts',
                   
                },
                {
                    label: "Contacts",
                    name: 'contacts',
                   
                }
            ],
            showMenu: false
        }
    },
    methods:{
      toggleMenu(){
        this.showMenu = !this.showMenu;
      }
    }
}
</script>

<style lang="scss" scoped></style>