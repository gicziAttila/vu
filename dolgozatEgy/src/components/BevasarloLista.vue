<script setup>
import { ref, onBeforeMount } from "vue";
import { its } from "../data/Items.js"

const itemName = ref("");
const itemPrice = ref();
let itemTomb = ref(its);
const addToList = () => {
    itemTomb.value.push({
        name: itemName.value,
        price: itemPrice.value
    });
    itemName.value = itemPrice.value = "";
}

const priceByAsc = () =>{
    itemTomb.price.sort((a, b) => a.price - b.price)
}
const priceByDesc = () =>{
    itemTomb.price.sort((a, b) => a.price + b.price)
}

</script>
<template>
    <div>
        <form>
            <label>Item name:</label>
            <input v-model="itemName" type="text">
            <label>Price:</label>
            <input v-model="itemPrice" type="text">
        </form>
        <button @click.prevent="addToList()">Add to list</button>
        <div class="borderMain"></div>
        <h1>Shopping list</h1>
        <p>Sort:</p>
        <select>
            <option selected>Please choose a filtering</option>
            <option @change="priceByAsc()">By Price ASC</option>
            <option @change="priceByDesc()">By Price DESC</option>
        </select>
        <h1 v-if="itemTomb.length == 0">A lista üres</h1>
        <div v-if="itemTomb.length != 0">
            <li v-for="(items, index) in itemTomb">
                <ul>{{ items.name }} {{ items.price }} Ft <button v-if="items.name != 'kenyér'" @click.prevent="itemTomb.splice(index, 1)">Törlés</button></ul>
            </li>
        </div>

    </div>
</template>
<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>