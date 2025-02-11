<script setup>
import todoList from './components/Todolist.vue'
import Modal from './components/Modal.vue';
import { computed, ref } from 'vue'
import { todoState } from './state/state';

const qaState = todoState();

const showModal = ref(false)
const listFilter = ref("");
const showModalClick = () => {
  showModal.value = !showModal.value
}
const filterList = computed(() => {
  return qaState.getTodo().filter((a) => {
    return a.getName().includes(listFilter.value)
  })
})
</script>

<template>
  <div>
    <header>
      <h1>Todo list</h1>
    </header>
    <main>
      <section>
        <p class="find">
          <input type="text" v-model="listFilter">
          <button @click="filterList()">Szűrés</button>
        </p>
      </section>
      <section>
        <button @click="showModalClick()">Add todo</button>
        <div v-if="showModal">
          <Modal @close="showModalClick()" />
        </div>
      </section>
      <todoList />
    </main>
    <footer>
      <p>@Copyright - All rights reserved</p>
    </footer>
  </div>
</template>

<style scoped>
.find{
  display: flex;
}
</style>
