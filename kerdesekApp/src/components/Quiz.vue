<script setup>
import { defineEmits, ref, computed} from "vue";
import Question from "../classes/Question.js";
import { questionState } from "../state/state.js";

//State inicializalasa
const qaState = questionState();
const answer = ref();

const hasBeenShow = ref([]);
const questions = ref([])
const index = ref();
const emit = defineEmits(['summa'])

questions.value = qaState.getQuestion();
const generateQuestion = () => {
  if (hasBeenShow.value.length < qaState.getQuestionsLength()) {
    do {
        index.value = Math.floor(Math.random() * qaState.getQuestionsLength())
    } while (hasBeenShow.value.includes(index.value));
    hasBeenShow.value.push(index.value)
    qaState.setQuestionIndexes(hasBeenShow.value);
  }
  else{
    index.value = -1;
    emit("summa")
  }
}
const next = () => {
  qaState.addUserAnswer(answer.value);
  answer.value = "";
  generateQuestion();
}
generateQuestion()
</script>
<template>
  <section>
    <h2>Add Question</h2>
    <p>
      <label> {{ questions[index].getQuestion() }}</label>
    </p>
    <p>
      <label>Answer:</label>
      <input type="text" v-model="answer">
    </p>
    <p>
      <button @click="next">Next</button>
    </p>
  </section>
</template>

<style scoped></style>