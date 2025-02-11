<script setup>
import { ref } from 'vue';

const szamLista = ref([1, 2, 3]);
const showList = ref(true);

const toggleList = () => {
    showList.value = !showList.value;
};
const pushNumber = () => {
    if(szamLista.value.length <= 0){
        szamLista.value.push(1)
    }else{
        szamLista.value.push(szamLista.value.length+1)
    }
}
const popNumber = () => {
    szamLista.value.pop();
}
const reverseList = () => {
    szamLista.value.reverse()
}
</script>

<template>
    <section>
        <button @click="toggleList()">Toggle list</button>
        <button @click="pushNumber()">Push Number</button>
        <button @click="popNumber()">Pop number</button>
        <button @click="reverseList()">Reverse List</button>
        <ul v-if="showList">
            <li v-for="number in szamLista" :key="number"> {{ number }}</li>
        </ul>
        <p v-else>List in not empty, but hidden.</p>
    </section>
</template>

<style scoped>
</style>