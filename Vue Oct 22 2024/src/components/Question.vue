<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import Questions from "../classes/Questions"

const emit = defineEmits(['sendAnswer'])
const answer = ref()

const props = defineProps({
    question: Questions,
    index: Number
})

const send = () => {
    emit('sendAnswer', { index: props.index, answer: answer.value })
}
</script>

<template>
    <div class="question">
        <h2>{{ question.getQuestion() }}</h2>
        <form class="df">
            <div v-for="a in question.getAnswers()">
                <input v-model="answer" type="radio" name="answer" :value="a">{{ a }}
            </div>
            <div><input type="button" value="Tovább" @click="send" /></div>
        </form>
    </div>
</template>

<style scoped>
.df {
    display: flex;
    flex-direction: column;
}

.df div {
    padding: 10px 0px;
}

input[type="button"] {
    margin: 0px auto;
    display: block;
    padding: 10px 20px;
    border: none;
    background-color: #021A36;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
}
</style>
