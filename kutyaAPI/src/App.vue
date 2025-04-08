<script setup>
import Navbar from './components/navbar.vue';

</script>

<template>
  <header>
    <h1 class="text-center">Random kutyák</h1>
  </header>
  <Navbar />
  <main class="p-5">
    <router-view></router-view>
  </main>
  <footer class="pt-5">
    <p class="text-center">All rights reserved</p>
  </footer>
</template>

<style scoped>
</style>
