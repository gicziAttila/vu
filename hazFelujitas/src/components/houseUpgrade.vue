<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import Room from '../classes/rooms.js'
import { getId } from 'firebase/installations';


const props = defineProps({
    room: Room
});

const emit = defineEmits(['checkbox-change'])

function checkboxClick(index) {
    emit('checkbox-change', index)
}


</script>
<template>
    <h2>Felújítási munka: </h2>
    <form v-for="(option, index) in room.getOptions()" :key="index">
      <input type="checkbox" v-model="option.selected" @change="checkboxClick(index)">
      <label>{{ option.text }}</label>
    </form>
  </template>
<style scoped>
input {
    padding: 10px;
    margin: 20px;
}

form {
    margin-bottom: 20px;
}
</style>