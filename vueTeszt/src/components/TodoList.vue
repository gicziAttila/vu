<script setup>
import { ref } from 'vue';
import { todos } from '../datas/todo';
const todosRef = ref(todos)
</script>
<template>
    <section>
        <ul class="todos">
            <li v-for="todo in todosRef">{{ todo.text }}</li>
        </ul>
    </section>
</template>
<style scoped>

</style>