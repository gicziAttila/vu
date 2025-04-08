<script setup>
import { ref } from 'vue';
import dogDetails from './dogDetails.vue';
import axios from 'axios';
import Dog from '../classes/Dog';
const api = "https://reeldev.hu/api/67f4f810e448e719528626/randomDogs"
const dogs = ref([])
const kedvencek = ref([])

const getDogs = async () => {
    dogs.value = []
    for (var i = 0; i < 10; i++) {
        await axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                var d = new Dog(response.data.message, false, 0)
                dogs.value.push(d)
            }).catch(error => {
                console.error("Error: " + error)
            })
    }
}
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
const addFavourite = async (img) => {
    var volt = false;
    for(var i = 0; i<kedvencek.value.length; i++){
        if(kedvencek.value[i].getUrl() == img.getUrl()){
            volt=true
        }
    }
    if(volt){
        alert("Ez a kép már szerepel a kedvencek között")
    }else{
        await axios.post(api, {
        url: img.getUrl(),
        isFavourite: true,
        likes: img.getLikes()
    })
        .then(response => {
            alert("Sikeres hozzáadás")
            getFavourites()
        }).catch(error => {
            console.error("Error: " + error)
        })
    }
}
getDogs()
getFavourites()
</script>

<template>
    <section>
        <dogDetails :images="dogs" @favourite="addFavourite"/>
    </section>
</template>

<style scoped></style>
