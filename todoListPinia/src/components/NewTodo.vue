<script setup>
import { ref, defineEmits } from 'vue'
import { todoState } from '../state/state.js'
import Todo from '../classes/Todo.js'

const name = ref()
const toDate = ref()
const desc = ref()

const qaState = todoState();
const emits = defineEmits(['changeTodo'])

const addNewTodo = () => {
    qaState.addTodo(name.value, toDate.value, desc.value, false)
    emits('changeTodo')
}   


</script>
<template>
    <section>
        <form>
            <input type="text" placeholder="Name" v-model="name"/>
            <input type="datetime-local" v-model="toDate"/>
            <input type="text" placeholder="Description" v-model="desc"/>
            <button type="button" @click="addNewTodo()">Add</button>
        </form>
    </section>
</template>
<style scoped>
input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    height: 40px;
    font-size: 16px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #eee;
    border-radius: 10px;
}
form{
    margin: 0 30px 0 30px;
    border-top: 1px solid #ccc;
}
button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    height: 40px;
    font-size: 16px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #eee;
    border-radius: 10px;
    cursor: pointer;
}
button:hover {
    background-color: #ccc;
}
</style>