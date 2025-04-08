<script setup>
import { ref } from 'vue';
import DogDetails from './dogDetails.vue';
const api = "https://reeldev.hu/api/67f4f810e448e719528626/randomDogs"
import axios from 'axios';
import Dog from '../classes/Dog';
const kedvencek = ref([])
const getFavourites = async (img) => {
    kedvencek.value = []
    await axios.get(api)
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                var d = new Dog(response.data[i].url, response.data[i].isFavourite, response.data[i].likes)
                d.setCrudID(response.data[i].id)
                kedvencek.value.push(d)
            }
        }).catch(error => {
            console.error("Error: " + error)
        })
}
const removeFavorite = async (kep) => {
    if (confirm("Biztos szeretné törölni ezt a képet: " + kep.getUrl() + "?")) {
        await axios.delete(api + "/" + kep.getCrudID())
            .then(response => {
                alert("Sikeres törlés")
                getFavourites()
            }).catch(error => {
                console.error("Error: " + error)
            })
    }
}
const setLike = async(kep) => {
    await axios.put(api + "/" + kep.getCrudID(),{
        url: kep.getUrl(),
        isFavourite: true,
        likes: kep.getLikes() + 1
    }).then(response => {
        getFavourites()
    }).catch(error =>{
        console.error("Error: " + error)
    })
}
getFavourites()
</script>

<template>
    <section>
        <DogDetails :images="kedvencek" @delete="removeFavorite" @like="setLike"/>
    </section>
</template>

<style scoped></style>
