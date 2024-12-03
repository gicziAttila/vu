<script setup>
    import { ref } from 'vue';
    let showFirst = ref(true);

    const changeShowFirst = () => {
        showFirst.value = !showFirst.value;
        console.log(showFirst.value);
    }

</script>
<template>
    <p v-if="showFirst" class="firstMessage">Ez itt az első szöveg. Kattints a gombra ha a másikat szeretnéd látni :(</p>
    <p v-else class="secondMessage">Ez itt a második szöveg, kattints ismét a gombra ha az előzőt szeretnéd látni :)</p>
    <p><a class="btn" @click="changeShowFirst()">Gomb</a></p>
</template>

<style scoped>
    .btn{
        text-decoration: none;
        background-color: red;
        padding: 10px;
        border-radius: 10px;
        color: white;
        margin-top: 20px;
        cursor: pointer;
    }
    p{
        padding-bottom: 20px;
        font-weight: bold;
    }
</style>