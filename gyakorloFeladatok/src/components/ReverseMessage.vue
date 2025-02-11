<script setup>
    import { ref } from 'vue';
    const message = ref("Hello World!")


    const reverseMessage = () => {
        message.value = message.value.split("").reverse().join("");
    }
    const appendMark = () => {
        message.value += "!"
    }
    const resetMessage = () => {
        message.value = "Hello World!"
    }
</script>
<template>
    <section>
        <h1>{{ message }}</h1>
        <button @click="reverseMessage()">Reverse message</button>
        <button @click="appendMark()">Append !</button>
        <button @click="resetMessage()">Reset</button>
    </section>
</template>
<style scoped>
    
</style>