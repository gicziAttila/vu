<script setup>
import { defineEmits, ref, defineProps } from 'vue';
import { todoState } from '../state/state.js';
import Todo from '../classes/Todo.js';
import Modal from './Modal.vue';

const qaState = todoState();
const showModal = ref(false);

const changeStatus = (index) => {
    qaState.changeFresh()
    qaState.getTodo()[index].changeStatus();
    console.log(qaState.getTodo())
}
const deleteTodo = (index) => {
    if(confirm("Biztos szeretnéd törölni a következő todo-t: " + qaState.getTodo()[index].getName())){
        qaState.deleteTodo(index)
    }
}
const updateTodo = () => {
    showModal.value = !showModal.value
}
</script>
<template>
    <section>
        <p class="fresh">{{ qaState.getFresh() }}</p>
        <div v-for="(todo, index) in qaState.getTodo()">
            <p>{{ todo.getName() }}</p>
            <p>{{todo.getDate()}}</p>
            <div v-if="!todo.getStatus()">
                <button class="pendingButton" @click="changeStatus(index)">Pending</button>
            </div>
            <div v-else>
                <button class="pendingButton" @click="changeStatus(index)">Completed</button>
            </div>
            <button @click="updateTodo(index)">Update</button>
            <div v-if="showModal">
                <Modal @close="updateTodo()" :showModal="showModal" :name="todo.getName()" :date="todo.getDate()" :index="index"/>
            </div>
            <button v-if="todo.getStatus()" @click="deleteTodo(index)">Delete</button>
        </div>
        <div v-if="qaState.getTodo().length == 0">
            <p>List is empty</p>
        </div>
    </section>
</template>
<style scoped>
    .fresh{
        display: none;
    }
</style>