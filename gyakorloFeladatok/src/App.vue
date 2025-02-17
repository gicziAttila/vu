<script setup>
 import InputBoxes from './components/InputBoxes.vue';
import Listamuveletek from './components/Listamuveletek.vue';
import ListamuveletekSecond from './components/ListamuveletekSecond.vue';
import ReverseMessage from './components/ReverseMessage.vue';
 import Tablazat from "./components/Tablazat.vue";

 import {ref, watchEffect} from "vue";
 import {gridData} from "./data/gridData.js";
 import GridData from "./classes/GridData.js";
 const datas = ref([]);
 const filterBox = ref("");
 gridData.forEach(item => {
   datas.value.push(new GridData(item.name, item.power));
 });
 watchEffect(() => {
   datas.value = gridData
       .filter(item => item.name.includes(filterBox.value))
       .map(item => new GridData(item.name, item.power));
 });
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
    <h1>5. feladat</h1>
    <p><input type="text" v-model="filterBox"></p>
    <Tablazat :table-data="datas"/>
  </main>
</template>

<style scoped>
</style>
