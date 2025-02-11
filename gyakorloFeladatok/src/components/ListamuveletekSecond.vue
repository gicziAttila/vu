<script setup>
import { ref } from 'vue';
const numberList = ref([1,2,3,4,5])

const deleteNumber = (index) => {
    numberList.value.splice(index, 1);
}
const insertNumber = () => {
    if(numberList.value.length <= 0){
        numberList.value.push(1)
    }else{
        numberList.value.splice(Math.random() * numberList.value.length, 0, numberList.value.length+1)
    }
}
const resetList = () => {
    numberList.value =[1,2,3,4,5]
}
const shuffleList = () => {
    for(var i = numberList.value.length - 1; i>=0; i--){
        var j = Math.floor(Math.random() * (i+1))
        var temp = numberList.value[i];
        numberList.value[i] = numberList.value[j];
        numberList.value[j] = temp;
    }
}
</script>
<template>
    <section>
        <button @click="insertNumber">Insert at random index</button>
        <button @click="resetList()">Reset</button>
        <button @click="shuffleList()">Shuffle</button>
        <ul>
            <li v-for="number in numberList">{{ number }}<button @click="deleteNumber(index)">X</button></li>
        </ul>
    </section>
</template>
<style scoped>
    
</style>