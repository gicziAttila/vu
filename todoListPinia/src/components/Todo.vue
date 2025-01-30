<script setup>
import { ref, watch, computed, watchEffect } from 'vue'
import { todoState } from '../state/state.js'
import Todo from '../classes/Todo.js'
import { storeToRefs } from 'pinia'

const qaState = todoState();
const showExpanded = ref(false)
var todoStatus = ref(false)

const todoExpanded = (index) => {
    showExpanded.value = !showExpanded.value
}
const toggleTask = qaState.toggleStatus();


</script>
<template>
    <section v-for="(todo, index) in qaState.getTodos()" :key="todo.id">
        <div id="todo">
            <div>
                <p id="title">{{ qaState.getTodos()[index].getName() }}</p>
                <p id="date">{{ todo.getToDate() }}</p>
            </div>
            <div>
                <p class="statusPending" v-if="!todo.getStatus()">Pending</p>
                <p class="statusCompleted" v-else>Completed</p>
                <p id="button" @click="todoExpanded(index)">></p>
            </div>
        </div>
        <div v-if="showExpanded" :class="{ expanded: showExpanded }">
            <p>{{ todo.getDesc() }}</p>
            <button type="submit" @click="qaState.toggleStatus(index)">Done</button>
        </div>
    </section>
</template>
<style scoped>
#todo:first-of-type {
    border-top: 1px solid #ccc;
}

#todo {
    border-bottom: 1px solid #ccc;
    margin: 0 30px 0 30px;
    display: flex;
    justify-content: space-between;
}

.expanded {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
}

#title {
    margin: 10px 0px 0px 0px;
    font-weight: 600;
}

#date,
#status {
    margin: 0;
    font-weight: 200;
}

.statusPending {
    background-color: orange;
    border-radius: 20px;
    padding: 5px;
    color: white;
}

.statusCompleted {
    background-color: green;
    border-radius: 20px;
    padding: 5px;
    color: white;
}

#button {
    padding: 5px;
    color: #ccc;
    cursor: pointer;
}

section div:last-of-type {
    display: flex;
    align-items: center;
    margin: 5px;
}
</style>