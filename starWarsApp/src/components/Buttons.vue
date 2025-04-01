<script setup>
    const emits = defineEmits(['addPlanet', 'deleteAll'])
    const addPlanet = () => {
        emits("addPlanet")
    }
    const deleteAll = () => {
        emits("deleteAll")
    }
</script>
<template>
    <section>
        <h1>Planet Actions</h1>
        <button class="m-3 bg-success text-white" @click="addPlanet">Add new</button>
        <button class="m-3 bg-warning text-white">Uppercase All</button>
        <button class="m-3 bg-danger text-white" @click="deleteAll">Delete All</button>
    </section>
</template>
<style scoped>
    section{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: white;
    }
</style>