<script setup>
import { defineProps, ref } from 'vue';

const melyikJegySzam = ref(0);

const props = defineProps({
    idNumber : Number,
    studentsList: Array
})

const goBack = () => {
    emit('go-back', melyikJegySzam.value);
}

const melyikJegy = (szam) => {
    melyikJegySzam.value = szam
}

const emit = defineEmits(['go-back'])

</script>
<template>
    <section>
        <h1>Új jegy hozzáadása</h1>
        <button @click="melyikJegy(1)" value="1">1</button>
        <button @click="melyikJegy(2)" value="2">2</button>
        <button @click="melyikJegy(3)" value="3">3</button>
        <button @click="melyikJegy(4)" value="4">4</button>
        <button @click="melyikJegy(5)" value="5">5</button>
        <a @click="goBack()">Hozzáad</a>
    </section>
</template>
<style scoped></style>