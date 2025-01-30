<script setup>
import { ref, defineEmits } from 'vue';
import { questionState } from "../state/state.js";
//State inicializálása
const qaState = questionState();
const questions = ref([]);
const userAnswers = ref([]);
const indexes = ref([]);
const ok = ref(0);
const prefix = "button";

const emit = defineEmits(['reset']);

questions.value = qaState.getQuestions();
userAnswers.value = qaState.getUserAnswers();
indexes.value = qaState.getQuestionsIndexes();

const good = (index) =>{
    ok.value += 1;
    bad(index);
}

const bad = (index) =>{
    document.querySelector("#"+prefix+index).remove();
}

const newQuiz = () => {
    ok.value = 0;
    qaState.clearState();
    emit("reset");
}
</script>

<template>
    <section>
        <h2>Summa</h2>
        <p v-for="index in indexes" class="df">
            <span>
                <label>{{ questions[index].getQuestion() }}</label>
            <label class="answer">{{ questions[index].getAnswer() }}</label>
            <label class="userAnswer">{{ userAnswers[index] }}</label>
            </span>
            <span class="buttons" :id="prefix+index">
                <button @click="good(index)">Good</button>
                <button @click="bad(index)">Bad</button>
            </span>
        </p>
        <h3>{{ ok }} / {{ qaState.getQuestionsLength() }}</h3>
        <button @click="newQuiz">New quiz</button>
    </section>
</template>

<style scoped>
p button:last-of-type{
    background-color: red;
    color: #fff;
}
h3{
    text-align: center;
    font-size: 40px;
    padding: 40px 0 0 0;
    margin: 0;
}
span{
    width: calc(100% - 190px);
}
.buttons{
    width: 190px;
}
.df{
    display: flex;
    justify-content: space-between;
}
p{
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}
.answer,
.userAnswer {
    text-transform: none;
}

.answer {
    color: greenyellow;
}

.userAnswer {
    color: aqua;
}
</style>
