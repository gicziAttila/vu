<script setup>
import BevasarloLista from './components/BevasarloLista.vue'
</script>

<template>
  <header>
    <h1>Shopping list App</h1>
  </header>
  <main>
    <div class="mainContent">
      <h1>Add item to the list</h1>
    </div>
    <BevasarloLista />
  </main>
  <footer>
    <h1>All rights reserved</h1>
  </footer>
</template>
<style scoped>
  header {
    background-color: darkblue;
    margin: 0;
    height: 100px;
    color: white
  }
  .mainContent{
    margin-top: 100px;
    color: darkblue;
  }
  .mainContent, header{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
