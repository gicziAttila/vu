<script setup>
import { ref } from "vue";
import { telkek } from "../data/telek.js"

var telkekList = ref(telkek);
var hossz = ref();
var szel = ref();
var price = ref();
var max = ref(3);

var hozzad = () => {
    telkekList.value.push({ szelesseg: szelesseg.value, hosszusag: hosszusag.value, ar: price.value });
    hossz.value = szel.value = price.value = 0;
    alert("A hozzáadás sikeres volt!")
    max.value = max.value - 1;
    telkekList.value.sort((a,b) => {a.ar - b.ar});
}
var increase = (index) => {
    var otvenSzazalek = price.value[index] / 2;
    price.value[index] = price.value[index] + otvenSzazalek;
}
var clear = () => {
    var valasz = confirm("Biztos törölni szeretnéd a telkeket?")
    if(valasz){
        max.value = 3
        telkekList.value = [];
    }
}
</script>
<template>
    <div v-if="max > 0">
        <form>
            <h2>Telkek (5 / {{ max }})</h2>
            <label for="szelesseg">Szélesség</label>
            <input v-model="szel" type="number" id="szelesseg">
            <label for="hosszusag">Hosszúság</label>
            <input v-model="hossz" type="number" id="hosszusag">
            <label for="ar">Ár (M HUF)</label>
            <input v-model="price" type="number" id="ar">
            <button @click.prevent="hozzad()">Hozzáad</button>
        </form>
    </div>
    <div v-if="max == 0">
        <table>
            <thead>
                <tr>
                    <th>Szélesség</th>
                    <th>Hosszúság</th>
                    <th>Ár</th>
                    <th>Ár növelése</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(telek, index) in telkekList" :class="{'priceThreeTr' : price == 3}">
                    <td>{{ telek.szelesseg }}</td>
                    <td>{{ telek.hosszusag }}</td>
                    <td>{{ telek.ar }}</td>
                    <td :class="{'priceThreeButton' : price == 3}"><span><button @click.prevent="increase(index)">Increase</button></span></td>
                </tr>
            </tbody>
        </table>
        <button @click.prevent="clear()">Clear</button>
    </div>
</template>
<style scoped>
    .priceThreeTr{
        background-color: red;
    }
    .priceThreeButton{
        display: none;
    }
</style>