<script setup>
import { ref } from 'vue';
import AddQuestion from './components/AddQuestion.vue';
import Quiz from './components/Quiz.vue';
import Summa from './components/Summa.vue';

const isQuiz = ref(false);
const isSumma = ref(false);

const startQuiz = () => {
  isQuiz.value = true;
}
const summa = () => {
  isSumma.value = true;
}
</script>

<template>
  <header>
    <h1>Q&A App</h1>
  </header>
  <main>
    <div v-if="!isSumma">
      <AddQuestion v-if="!isQuiz" @startQuiz="startQuiz" />
      <Quiz v-else @summa="summa"/>
    </div>
    <div v-else>
      <Summa />
    </div>
  </main>
  <footer>
    <p>Copyright - All rights reserved!</p>
  </footer>
</template>

<style scoped></style>
