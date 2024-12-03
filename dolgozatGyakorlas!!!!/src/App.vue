<script setup>
import BevasarloLista from './components/BevasarloLista.vue'
</script>

<template>
  <header>
    <h1>Shopping List App</h1>
  </header>
  <main>
    <BevasarloLista />
  </main>
  <footer>
    <p>All rights reserved!</p>
  </footer>
</template>

<style scoped>
  header, footer{
    background-color: #34495f;
    color: white;
    text-align: center;
    padding: 10px 0px;
  }
  main{
    padding: 30px;
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%; 
  }
</style>
