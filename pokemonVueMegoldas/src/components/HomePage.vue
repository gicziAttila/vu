<script setup>
import { ref } from 'vue';
import PokemonDetails from '../components/PokemonDetails.vue';
import SearchBar from '../components/SearchBar.vue';
import { kedvencPokemonok } from '../state/state';
import axios from 'axios';
const pokemons = ref([])
const pokemonState = kedvencPokemonok();
const search = async(pname) => {
    await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => {
        var temp = response.data.results.filter((data) => data.name.indexOf(pname) > -1)
        getDatas(temp)
    })
    .catch(error => {
        consoler.error("Error: " + error)
    })
}
const getDatas = async(data) => {
    pokemons.value = [];
    for (let i = 0; i< data.length; i++){
        await axios.get(data[i].url)
        .then(response => {
            var pokemon = {
                name: response.data.name,
                url: response.data.sprites.front_default
            }
            pokemons.value.push(pokemon)
        })
        .catch(error => {
            console.error("Error: " + error)
        })

    }
}
const addPoke = (p) => {
    if(pokemonState.isExist(p)){
        alert("A pokémon már bent van a kedvencekben")
    }
    else{
        pokemonState.add(p);
        alert("Sikeres hozzáadás")
    }
}
</script>

<template>
    <SearchBar @search="search"/>
    <PokemonDetails :pokemons="pokemons" :isFavourite="false" @add="addPoke"/>
</template>

<style scoped></style>
