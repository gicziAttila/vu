import { defineStore } from "pinia";
import { ref } from "vue";

export const kedvencPokemonok = defineStore("pokemons", () => {
    const kedvencek = ref([]);

    function add(p){
        kedvencek.value.push(p)
    }
    function getPokemons(){
        return kedvencek.value;
    }
    function remove(i){
        kedvencek.value.splice(i, 1)
    }
    function isExist(p){
        for(let i = 0; i<kedvencek.value.length; i++){
            if(kedvencek.value[i].name == p.name){
                return true
            }
        }
        return false
    }
    return {add, getPokemons, remove, isExist}
})