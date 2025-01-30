<script setup>
  import { ref } from "vue";
  import AddQuestion from "./components/AddQuestion.vue";
  import Quiz from "./components/Quiz.vue";
  import Summa from "./components/Summa.vue";

  const isQuiz = ref(false);
  const isSumma = ref(false);
  const startQuiz = () => {
    isQuiz.value = true;
  };
  const summa = () => {
    isSumma.value = true
  }
  const reset = () => {
    isQuiz.value = false;
    isSumma.value = false;
  }
</script>

<template>
  <header>
    <h1>Kérdések app</h1>
  </header>
  <main>
    <div v-if="!isSumma">
      <AddQuestion v-if="!isQuiz" @startQuiz="startQuiz"/>
      <Quiz v-else @summa="summa"/>
    </div>
    <div v-else>
      <Summa @reset="reset"/>
    </div>
  </main>
  <footer>
    <p>Copyright</p>
  </footer>
</template>