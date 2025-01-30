<script setup>
import { ref } from 'vue'
import Todo from './components/Todo.vue'
import NewTodo from './components/NewTodo.vue'

const showAddTodo = ref(false)

const addNewTodo = () => {
  showAddTodo.value = !showAddTodo.value
}
</script>
<template>
    <header>
      <h1>Todo list</h1>
      <p @click="addNewTodo()">+</p>
    </header>
    <main>
      <div id="search">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div v-if="!showAddTodo">
        <Todo />
      </div>
      <div v-else>
        <NewTodo @changeTodo="addNewTodo()"/>
      </div>
  </main>
</template>

<style scoped>
header {
    margin: 30px 0 0 30px;
    padding: 0;
    display: flex;
    justify-content: space-between;
}

header p {
    font-size: 24px;
    color: #ccc;
    margin: 0 30px 0 0;
    padding: 0;
    cursor: pointer;
}

h1 {
    margin: 0;
}
#search {
  position: relative;
  width: 85%;
}

#search i {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: gray;
}

#search input {
  width: 100%;
  padding-left: 30px;
  box-sizing: border-box;
  height: 40px;
  font-size: 16px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 10px;
}

#search {
  margin: 0 30px 30px 30px;
}
</style>