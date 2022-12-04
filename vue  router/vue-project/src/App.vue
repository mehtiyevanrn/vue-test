<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
<Footer></Footer>
</template>


<script>
export default {
 data() {
    
  },
  created(){
    this.$store.commit('tokenCheck')
    this.$store.dispatch('getProducts')
  }
}
</script>
<style scoped>

</style>
