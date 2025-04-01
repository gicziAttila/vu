<script setup>
import { ref } from 'vue';
const props = defineProps({
    name: String,
    picture: String
})
</script>
<template>
    <div>
        <img :src="picture">
        <h1>{{name}}</h1>
    </div>
</template>
<style scoped>
    
</style>