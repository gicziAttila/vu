<script setup>
import { ref, defineEmits } from 'vue';
import Question from '../classes/Question.js';
import {questionState} from "../state/state.js";
//State inicializálása
const qaState = questionState();

const question = ref();
const answer = ref();

const emit = defineEmits(['startQuiz']);

const addQuestion = () =>{
    qaState.addQuestion(new Question(question.value, answer.value));
    question.value = answer.value = "";
    alert("The question is saved.");
}

const startQuiz = () =>{
    emit("startQuiz");
}
</script>

<template>
    <section>
        <h2>Add questions</h2>
        <p>
            <label>Question: </label>
            <input type="text" v-model="question">
        </p>
        <p>
            <label>Answer: </label>
            <input type="text" v-model="answer">
        </p>
        <p>
            <button @click="addQuestion">Add</button>
            <button v-if="qaState.getQuestionsLength() > 0" @click="startQuiz">Start quiz</button>
        </p>
    </section>
</template>

<style scoped></style>
