<script setup>
 import InputBoxes from './components/InputBoxes.vue';
import Listamuveletek from './components/Listamuveletek.vue';
import ListamuveletekSecond from './components/ListamuveletekSecond.vue';
import ReverseMessage from './components/ReverseMessage.vue';
</script>

<template>
  <header>
    <h1>Gyakorló feladatok</h1>
  </header>
  <main>
    <h1>1. feladat</h1>
    <ReverseMessage />
    <hr>
    <h1>2. feladat</h1>
    <Listamuveletek />
    <hr>
    <h1>3. feladat</h1>
    <ListamuveletekSecond />
    <hr>
    <h1>4. feladat</h1>
    <InputBoxes />
  </main>
</template>

<style scoped>
</style>
