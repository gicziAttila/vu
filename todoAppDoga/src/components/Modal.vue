<script setup>
import { defineEmits, ref, defineProps } from 'vue';
import { todoState } from '../state/state.js';
import Todo from '../classes/Todo.js';
const name = ref("");
const date = ref("");
const qaState = todoState()

const props = defineProps({
    showModal: Boolean,
    nameUpdate: String,
    dateUpdate: String,
    index: Number
})

const emits = defineEmits(['add', 'close']);
const close = () => {
    emits('close');
}
const add = () => {
    // Új objektum létrehozása, hogy a Vue érzékelje a változást
    qaState.addTodo(new Todo(name.value, date.value, false))
    close();
}
const updateTodo = (index) => {
    qaState.getTodo()[index].updateTodo(nameUpdate, dateUpdate, index)
}
</script>
<template>
    <div class="modal" v-if="!showModal">
        <h2>Add event</h2>
        <p>
            <label for="">Name:</label>
            <input type="text" v-model="name">
        </p>
        <p>
            <label for="">Date:</label>
            <input type="date" v-model="date">
        </p>
        <p class="buttons">
            <button @click="close">Cancel</button>
            <button @click="add">Add</button>
        </p>
    </div>
    <div class="modal" v-else>
        <h2>Update</h2>
        <p>
            <label for="">Name:</label>
            <input type="text" v-bind="nameUpdate">
        </p>
        <p>
            <label for="">Date:</label>
            <input type="date" v-bind="dateUpdate">
        </p>
        <p class="buttons">
            <button @click="close">Cancel</button>
            <button @click="updateTodo(index)">Update</button>
        </p>
    </div>
</template>

<style scoped>
h2 {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
    text-align: center;
}

.modal {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #efefef;
    padding: 20px 30px;
    margin: 0px auto;
    color: #000;
}

label {
    font-weight: 700;
    display: block;
}

select {
    width: 100% !important;
}

input,
select {
    width: calc(100% - 20px);
    padding: 7px 10px;
    display: block;
    border: none;
}

.buttons {
    text-align: center;
}

.buttons button {
    border: none;
    padding: 10px 20px;
    font-weight: 700;
    color: #fff;
    border-radius: 10px;
    margin: 0px 10px;
}

.buttons button:hover {
    background-color: aqua;
}

.buttons button:first-of-type {
    background-color: red;
}

.buttons button:last-of-type {
    background-color: green;
}
</style>