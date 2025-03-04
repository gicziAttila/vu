<script setup>
import { ref } from 'vue';
const message = ref("")
const textMessage = ref("")
</script>
<template>
    <section>
        <div>
            <input type="text" v-model="textMessage">
            <p>{{ message }}</p>
            <button @click="message = textMessage">Show message</button>
        </div>
    </section>
</template>

<style scoped>

</style>