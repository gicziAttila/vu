<script setup>
const api = "https://reeldev.hu/api/probavizsga/karakterek";
import { ref } from 'vue';
import Karakter from '../classes/Karakter';
import karakterListaKomp from './karakterLista.vue';
import axios from 'axios';
import { szerepjatekKarakterek } from '../state/state';
const karakterLista = ref([]);
const stateStore = szerepjatekKarakterek();
const karakterekLekerese = async() => {
    await axios.get(api)
    .then(response => {
        for(var i = 0; i<response.data.length; i++){
            const karakterek = new Karakter(response.data[i].nev, response.data[i].faj, response.data[i].leiras, response.data[i].szint);

            var eddigi = stateStore.getSajatKarakter();
            var volt = false
            for(var j = 0; j<eddigi.length; j++){
                if(eddigi[j].getNev() == karakterek.getNev()){
                    volt=true;
                }
            }
            if(!volt){
                karakterLista.value.push(karakterek)
            }
        }
    }).catch(error => {
        console.error(error)
    })
}
const add = (i) => {
    stateStore.addSajatKarakter(karakterLista.value[i]);
    karakterLista.value.splice(i, 1);
}
karakterekLekerese()
</script>

<template>
    <section>
        <h2>Kezdőlap</h2>
        <karakterListaKomp :karakterLista="karakterLista" @hozzaadas="add"/>
    </section>
</template>

<style scoped></style>
