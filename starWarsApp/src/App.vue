<script setup>
import { ref } from 'vue';
import Buttons from './components/Buttons.vue';
import Planets from './components/Planets.vue';
import axios from 'axios';
const nextPlanet = ref(0)
const allId = ref([])
const crudApi = "https://reeldev.hu/api/67bd91b18fb14639186019/starWarsPlanets"
const uploadPlanet = async (name, population, climate) => {
  await axios.post(crudApi, {
    name: name,
    population: population,
    climate: climate
  })
    .then(response => {
      console.log("Sikeres feltöltés")
    })
    .catch(error => {
      console.error("Error: " + error)
    })
  nextPlanet.value++
}
const addPlanet = async () => {
  await axios.get("https://swapi.py4e.com/api/planets/")
    .then(response => {
      const planetData = response.data.results[nextPlanet.value];
      uploadPlanet(planetData.name, planetData.population, planetData.climate)
    }).catch(error => {
      console.error("Hiba a bolygó lekérésben: " + error)
    })
}
const getAllId = async () => {
  await axios.get(crudApi)
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        allId.value.push(response.data[i].id)
        nextPlanet.value = response.data.length
      }
    })
}
const deleteAll = async () => {
  for (let i = 0; i < allId.value.length; i++) {
    await axios.delete(crudApi + "/" + allId.value[i])
      .then(() => {
        nextPlanet.value = 0
      })
      .catch(error => {
        console.error("Hiba a törlésben: " + error)
      })
  }
  alert("Sikeres törlés")   
}
getAllId()
</script>

<template>
  <header>
    <img src="./assets/logo.png">
  </header>
  <main>
    <h1>Planets</h1>
    <div class="planets">
      <Planets :bolygoszam="nextPlanet" />
    </div>
    <aside>
      <Buttons @add-planet="addPlanet" @delete-all="deleteAll" />
    </aside>
  </main>
  <footer>
    <p>All rights reserved!</p>
  </footer>
</template>

<style scoped>
header {
  text-align: center;
  background-color: yellow;
}

header img {
  width: 200px;
  height: 50%;
  margin: 10px;
}

main {
  color: white;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  max-width: 100%;
  margin: 0 auto;
  align-items: center;
}

.planets {
  color: white;
  margin: 10%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-width: 100%;
  align-content: center;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: yellow;
  height: 50px;
}
</style>
