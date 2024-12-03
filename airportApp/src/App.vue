<script setup>
import Airport from './components/Airport.vue'
</script>

<template>
  <main>
    <h1>Airport App!</h1>
    <p><img src="./assets/Repülőtér logó.avif"></p>
    <Airport/>
  </main>
</template>

<style scoped>
  img{
    width: 120px;
    height: 120px;
  }
  h1{
    color: lightgreen;
  }
  h1, p{
    text-align: center;
  }
</style>
