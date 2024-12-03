<script setup>
import { ref, watch } from 'vue';
import Termekek from '../classes/Termek.js'
const termekTomb = ref([]);

const termekNeve = ref("");
const termekAra = ref(0);
const errorField = ref(0)
const errorMessage = ref("");
const termekTombSzamlalo = ref(0);

const hozzaAd = () => {
    errorField.value = 0;
    errorMessage.value = "";


    if (termekNeve.value == "") {
        errorField.value = 1;
        errorMessage.value = "A termék neve kötelező";
    } else if (termekNeve.value.length > 30) {
        errorField.value = 1;
        errorMessage.value = "A termék neve nem lehet 30 karakternél hosszabb";
    }
    else if (termekAra.value > 1000000) {
        errorField.value = 2;
        errorMessage.value = "A termék ára nem lehet 1.000.000 forintnál több";
    }
    else {
        var t = new Termekek(termekNeve.value, termekAra.value)
        termekTomb.value.push({
            termekNeve: t.getTermekNeve(),
            termekAra: t.getTermekAra()
        });
        termekNeve.value = termekAra.value = "";
    }
}

const sortbyABC = () => {
    termekTomb.value.sort((a, b) => {
        if (a.termekNeve.localeCompare(b.termekNeve) > 0) return 1;
        if (a.termekNeve.localeCompare(b.termekNeve) < 0) return -1;
        return 0;
    });
}
const sortByPrice = () => {
    termekTomb.value.sort((a, b) => a.termekAra - b.termekAra);
}

watch(termekTomb, () =>{
        if(termekTomb.length > 0){
            termekTombSzamlalo++;
            console.log(termekTombSzamlalo.value)
        }
    })
</script>
<template>
    <div class="formAlign">
        <form>
            <label for="#termekNeve" class="felsoLabel">Termék neve</label>
            <input v-model="termekNeve" id="#termekNeve" type="text" placeholder="Termék neve" :class="{'redBorder': errorField == 1}">
            <label for="#termekAra">Termék ára</label>
            <input v-model="termekAra" id="#termekAra" type="number" placeholder="Termék ára (Ft)" :class="{'redBorder': errorField == 2}">
            <button @click.prevent="hozzaAd()" class="btn">Hozzáadás</button>
            <p class="error" v-if="errorMessage.length != 0"> {{ errorMessage }}</p>
        </form>
    </div>
    <div class="tableAlign">
        <h1 v-if="termekTomb.length == 0">A lista üres</h1>
        <div v-if="termekTomb.length != 0">
            <table>
                <thead>
                    <tr>
                        <th><a href="#" class="thBtn" @click.prevent="sortbyABC()">Termékek neve</a></th>
                        <th><a href="#" class="thBtn" @click.prevent="sortByPrice()">Termékek Ára</a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(termek, index) in termekTomb">
                        <td>{{ termek.termekNeve }}</td>
                        <td>{{ termek.termekAra }} Ft</td>
                        <td class="deleteTd"><a href="#" class="deleteBtn" @click="termekTomb.splice(index, 1)">Törlés</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
.formAlign {
    display: flex;
    justify-content: center;
}

.tableAlign {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

th {
    padding: 10px;
}

table,
th,
td {
    border: 1px solid black;
}

.deleteTd {
    padding: 5px;
    background-color: red;
}

.deleteBtn,
.thBtn {
    text-decoration: none;
    color: white;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 300px;
    background-color: #e5eaf5;
    color: black;
    opacity: 70%;
}

input {
    margin: 10px;
    width: 200px;
    border-radius: 5px;
}
.btn{
    margin-top: 10px;
    padding: 10px;

}
.btn, input{
    background-color: #d0bdf4;
    border: 1px solid white;
}
.btn, form{
    border-radius: 10px;
}
.felsoLabel{
    margin-top: 30px;
}
.redBorder{
    border: 1px solid red;
}
.error {
    color: red;
}
</style>