<script setup>
</script>

<template>
  <header>
    <h1>Bejegyzések</h1>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <p>Copyright@ - All rights reserved</p>
  </footer>
</template>

<style scoped>
  h1, footer{
    text-align: center;
  }
  h1 {
    color: lightgreen;
    margin-bottom: 20px;
  }
  footer{
    background-color: aqua;
    padding: 20px;
  }
</style>
