<script setup>
import { ref, defineEmits } from 'vue';
import { questionState } from "../state/state.js";
//State inicializálása
const qaState = questionState();
const answer = ref();

const hasBeenShown = ref([]);
const questions = ref([]);
const index = ref();
const emit = defineEmits(['summa']);

questions.value = qaState.getQuestions();

const generateQuestion = () => {
    if (hasBeenShown.value.length < qaState.getQuestionsLength()) {
        do {
            index.value = Math.floor(Math.random() * qaState.getQuestionsLength());
        } while (hasBeenShown.value.includes(index.value));
        hasBeenShown.value.push(index.value);
    }
    else {
        index.value = -1;
        qaState.setQuestionsIndexes(hasBeenShown.value);
        emit("summa");
    }
}
generateQuestion();

const next = () =>{
    qaState.addUserAnswer(answer.value);
    answer.value = "";
    generateQuestion();
}
</script>

<template>
    <section>
        <h2>Quiz</h2>
        <p>
            <label>{{ questions[index].getQuestion() }}</label>
        </p>
        <p>
            <label>Answer: </label>
            <input type="text" v-model="answer">
        </p>
        <p>
            <button @click="next">Next</button>
        </p>
    </section>
</template>

<style scoped></style>
