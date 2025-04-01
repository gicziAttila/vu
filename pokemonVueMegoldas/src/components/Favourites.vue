<script setup>
import { ref } from 'vue';
import PokemonDetails from './PokemonDetails.vue';
import { kedvencPokemonok } from '../state/state';
const pokemonState = kedvencPokemonok();
const pokemonList = ref(pokemonState.getPokemons())

const removePoke = (i) => {
    if (confirm("Biztos szeretnéd törölni?")) {
        pokemonState.remove(i);
    }
}
</script>
<template>
    <section>
        <h2 class="text-center text-white">Favourites</h2>
        <PokemonDetails :pokemons="pokemonList" :isFavourite="true" @remove="removePoke"/>
    </section>
</template>
<style scoped>
    
</style>