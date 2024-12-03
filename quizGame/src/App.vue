<script setup>
import Quiz from './components/Quiz.vue';
import { ref } from 'vue';
import { quizData } from "../data/quizData"

const jelenlegPont = ref(1)
const joValasz = ref(0)
const max = quizData.length


const handleAnswer = (answer) => {
  if (answer == quizData[jelenlegPont.value]["correctAnswer"]) { 
    joValasz.value++
  }
  jelenlegPont.value++
}

const resetQuiz = (() => {
  jelenlegPont.value = 0
  joValasz.value = 0
})

</script>

<template>
  <header>
    <h1>Quiz</h1>
  </header>
  <main>
    <section v-if="jelenlegPont < max">
      <h2>Kérdés {{ jelenlegPont }}/{{ max }}</h2>
      <Quiz :quiz="quizData[jelenlegPont]" @answer="handleAnswer" />
    </section>

    <section v-else class="endScreen">
      <h1>Quiz vége!</h1>
      <h2>Helyes válaszok: {{ joValasz }}/{{ max }}</h2>
      <button @click="resetQuiz">Reset</button>
    </section>

  </main>
  <footer></footer>
</template>
<style scoped>
  header, footer {
    text-align: center;
  }
  .endScreen {
    text-align: center;
  }
</style>