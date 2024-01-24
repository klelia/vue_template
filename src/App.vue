<template>
  <AppHeader />
  <main class="container">
    <router-view  :key="$route.path"></router-view>
  </main>
</template>

<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader
  },
}
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
</style>