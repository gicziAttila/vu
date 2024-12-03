<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const felhaszValasz = ref("")

const felhaszValaszchange = ((option) => {
    felhaszValasz.value = option
})

const props = defineProps({
    quiz: Object
})

const emit = defineEmits(
    ['answer']
)

const emitValasz = (() => {
    emit('answer', felhaszValasz.value)
    felhaszValasz.value = ""
})
</script>

<template>
    <section>
        <h1>{{ props.quiz["question"] }} </h1>
        <div class="wrapper">
            <div class="buttons" v-for="option in props.quiz['options']">
                <button @click="felhaszValaszchange(option)">{{ option }}</button>
            </div>
        </div>
        <div class="nextButtonBackground">
            <button class="tovabbGomb" v-if="felhaszValasz" @click="emitValasz">Tovább</button>
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
    max-width: 700px;
}

.buttons {
    flex: 0 0 45%;
    max-width: 200px;
}

button {
    margin: 10px;
    padding: 10px;
    width: 100%;
    font-weight: bold;
}
.tovabbGomb {
    background-color: #3AB982;
    display: inline-block;
    width: 100%;
    margin-left: 5px;
    padding: 10px;
}

button:focus {
    color: black;
    background-color: #3AB982;
}
</style>