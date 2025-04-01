<script setup>
import Navigation from './components/Navigation.vue';

</script>

<template>
  <header>
    <p class="text-center"><img src="./assets/pokeapi_256.png" alt="poké-img"></p>
  </header>
  <Navigation />
  <main>
    <router-view />
  </main>
  <footer class="footer fixed-bottom">
    <p class="text-center text-white">Minden jog fenttartva!</p>
  </footer>
</template>

<style scoped></style>
