<script setup>
import axios from 'axios';
import { ref, computed } from 'vue';
import Pokemon from '../classes/Pokemon';
import PokemonDetails from './PokemonDetails.vue';
const pokemonList = ref([])
const pokemonName = ref("");
const getPokemonsName = async() => {
    await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302")
    .then(response =>{
        for (let i = 0; i <response.data.count;i++){
                setPokemonList(response.data.results[i].url)
        }
    })
    .catch(error => {
        console.error("Hiba az api keresekor " + error)
    })
}
const setPokemonList = async(pokemonUrl) => {
    await axios.get(pokemonUrl)
    .then(response =>{
        var pokemon = new Pokemon(response.data.name, response.data.sprites.front_default)
        pokemonList.value.push(pokemon)
    })
    .catch(error => {
        console.error("Hiba az api keresekor " + error)
    })
}
getPokemonsName()
const filteredPokemonList = computed(() => {
    return pokemonList.value.filter((pokemon) => 
        pokemon.getName().toLowerCase().includes(pokemonName.value.toLowerCase())
    );
});
</script>
<template>
    <header>
        <div>
        <p><RouterLink to="favourites">Kedvencek</RouterLink></p>
    </div>
    <div>
        <input type="text" placeholder="Keress egy pokémont" v-model="pokemonName">
    </div>
    </header>
    <main v-if="pokemonName">
        <div v-for="pokemons in filteredPokemonList">
        <PokemonDetails :name="pokemons.getName()" :picture="pokemons.getPicture()"/>
    </div>
    </main>
</template>
<style scoped>
    main{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    PokemonDetails{
        padding: 15px;
    }
</style>