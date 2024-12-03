<script setup>
import { plotsData } from "../data/plots.js";
import { ref, watch } from "vue";

var plots = ref(plotsData);
const max = 5
var width = ref("");
var length = ref("");
var price = ref("");

var inc = ref(0);

const addPlot = () => {
    plots.value.push({
        width: width.value,
        length: length.value,
        price: price.value
    })
    alert("Sikeres hozzáadás!")
    width.value = length.value = price.value = "";
};

const sortByPrice = () =>{
    plots.value.sort( (a,b) => a.price - b.price);
}
const increase = (index) =>{
    plots.value[index].price *= 1.5;
    inc.value += 1;
}
const clear = () =>{
    var valasz = confirm("Biztos torlod?")
    if(valasz){
        plots.value.splice(2, 3);
    }
}
watch(inc, () =>{
    sortByPrice();
})
sortByPrice();
</script>
<template>
    <div v-if="plots.length < max">
        <h2>Add Plot ({{ max }} / {{ plots.length }})</h2>
        <form>
            <label>Width (meter)</label>
            <input type="number" v-model="width"></input>
            <label>Length (meter)</label>
            <input type="number" v-model="length"></input>
            <label>Price (million Huf)</label>
            <input type="number" v-model="price"></input>
            <button @click.prevent="addPlot()">Add to list</button>
        </form>
    </div>
    <div class="plots" v-else>
        <h2>Plots for sale</h2>
        <table>
            <thead>
                <tr>
                    <th>Width</th>
                    <th>Length</th>
                    <th>Price</th>
                    <th>Price inc.</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(plot, index) in plots" :class="{'redBg' : plot.price>=3}">
                    <td> {{ plot.width }}</td>
                    <td> {{ plot.length }}</td>
                    <td> {{ plot.price }}</td>
                    <td><span v-if="plot.price < 3" @click.prevent="increase(index)">Increase</span></td>
                </tr>
            </tbody>
        </table>
        <button @click.prevent="clear()">Clear</button>
    </div>
</template>
<style scoped>
.redBg{
    background-color: rgb(228, 135, 135);
}
h2 {
    border-bottom: 2px solid #34495F;
}

h2,
label {
    color: #34495F;
}

label, button, span {
    font-weight: 700;
}

label,
input,
button {
    display: block;
    border-radius: 10px;
    border: none;
    margin-top: 10px;
}

input {
    padding: 10px 5px;
    width: calc(100% - 10px);
}

button {
    padding: 10px 0px;
    cursor: pointer;
    margin-top: 20px;
}
table, label,
input,
button {
    width: 100%;
}

thead, button{
    background-color: #34495F;
    color: white;
}

table{
    border-collapse: collapse;
    text-align: center;
}
td{
    border: 1px solid black;
}
td,th {
    padding: 5px;
}
span{
    text-transform: uppercase;
    color: #3Ab982;
}
button, span{
    text-transform: uppercase;
}
.plots button{
    width: auto;
    margin: 20px auto 0px auto;
    padding: 10px 20px;
}
</style>