<script setup>
import { ref, watchEffect } from 'vue';

const searchQuery = ref("")

const runSearch = () => {
    searchQuery.value = ""
}
</script>

<template>
    <input type="text" v-model="searchQuery">
    <button @click="runSearch">Keres</button>
</template>

<style lang="">
</style>