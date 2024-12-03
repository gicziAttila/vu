<script setup>
import { ref } from 'vue'
import { quizData } from "./data/quizData.js"
import Question from './components/Question.vue'
import Questions from "./classes/Questions.js"

const kerdes = ref(0) // Reaktív változó
const kerdesek = []
var helyesValaszok = 0;

for (var i = 0; i < quizData.length; i++) {
  var k = new Questions(quizData[i].question, quizData[i].options, quizData[i].correctAnswer)
  kerdesek.push(k)
}

// Üzenet fogadása a gyerek komponenstől
const check = ({ index, answer }) => {
  // Ellenőrizzük, hogy a válasz helyes-e
  const helyesValasz = kerdesek[index].getGoodAnswer()
  if (answer === helyesValasz) {
    helyesValaszok++;
  }
  kerdes.value++;
}

const reset = () =>{
  helyesValaszok = 0;
  kerdes.value = 0;
}
</script>

<template>
  <header>
    <h1>Kérdezz-felelek játék</h1>
  </header>
  <main>
    <div v-if="kerdes<kerdesek.length">
      <section class="kerdes">Kérdés: {{ kerdes + 1 }} / 10</section>
      <section>
        <div v-for="(k, index) in kerdesek" :class="{ 'dnone': kerdes != index }">
          <Question :question="k" :index="index" @sendAnswer="check" />
        </div>
      </section>
    </div>
    <div class="question" v-else>
      <h2>Kvíz vége</h2>
      <p class="helyes">Helyes válaszok: {{ helyesValaszok }} / 10</p>
      <p class="btn" @click="reset()">Újraindítás</p>
    </div>
  </main>
  <footer>
    Copyright
  </footer>
</template>

<style scoped>
.helyes{
  font-weight: bold;
}
.question{
  margin-top: 20px;
}
.dnone {
  display: none;
}

section {
  padding: 10px 0px;
}

.kerdes {
  font-weight: bold;
  text-align: center;
  font-size: 18px;
}

footer {
  margin-top: 20px;
}
.btn{
  background-color: #021A36;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  margin: 0px auto;
}
</style>
