<script setup>
import { ref, reactive } from 'vue';


const list1 = ref([1,2,3,4,5]);
const addData = () => {
    if (list1.value.length > 0) {
        var number = list1.value[list1.value.length - 1] + 1;
        list1.value.push(number);
    } else {
        list1.value.push(1);
    }
}
</script>
<template>
    <div class="container">
        <h1 class="szoveg">Lista kiiratás</h1>
        <ul>
            <li v-for="item in list1" class="lista">{{ item }} </li>
        </ul>
        <button class="btn" @click="addData()">Vegyél fel még egy elemet</button>
    </div>
</template>
<style scoped>
    .btn{
        font-weight: bold;
        height: 3rem;
        border-radius: 10px;
    }
    .lista{
        margin-left: 50px;
    }
</style>