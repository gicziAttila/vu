<script setup>
import { ref, watch, defineProps } from 'vue';
import Planet from '../classes/Planet';
import axios from 'axios';
const crudApi = "https://reeldev.hu/api/67bd91b18fb14639186019/starWarsPlanets"

const planetList = ref([])

const props = defineProps({
    bolygoszam: Number
});

const getAllPLanet = async() => {
    planetList.value = []
    for(let i =0; i<props.bolygoszam; i++){
        await axios.get(crudApi)
        .then(response => {
            const bolygo = new Planet(response.data[i].name, response.data[i].population, response.data[i].climate)
            planetList.value.push(bolygo)
        })
        .catch(error => {
            console.error("Error a lekérésben: " + error)
        })
    }
}
watch(() => props.bolygoszam, () => {
    getAllPLanet()
})
</script>
<template>
    <div class="row row-cols-3">
        <div v-for="planet in planetList" class="card col m-5" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ planet.getName() }}</h5>
                <p class="card-text">Population: {{ planet.getPopulation() }}</p>
                <p class="card-text">Climate: {{ planet.getClimate() }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>