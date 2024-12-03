<script setup>
import { reactive, ref, watch } from "vue";
import { airports } from "../data/Airports.js";

const ap = ref("");
const searchResults = reactive({});

const searchForAirport = (name) => {
    searchResults.airports = airports.filter((airport) => airport.name.toLowerCase().includes(name));
};  

const formatAirport = (airport) => ({
    country: airport.country.name.en,
    city: airport.city.name.en,
    phone: airport.contacts.phone,
});

watch(ap, (newValue) => {
  if (newValue.length === 0) {
    searchResults.airports = {};
  }
})
</script>

<template>
    <form>
        <label>Type in an airport!</label>
        <input v-model="ap" />
        <p><a class="btn" @click="searchForAirport(ap.toLowerCase())">Click me to refresh!</a></p>
    </form>
    <div v-if="ap.length !== 0" v-for="airport in searchResults.airports" :key="airport.id" class="airportLista">
        <h1><span>Airport: </span> {{ airport.name }}</h1>
        <h3><span>Country: </span>{{ formatAirport(airport).country }}</h3>
        <h3><span>City: </span>{{ formatAirport(airport).city }}</h3>
        <h3><span>Phone: </span>{{ formatAirport(airport).phone }}</h3>
    </div>
</template>
<style scoped>
form {
    text-align: center;
    background-color: #3AB982;
}

label {
    font-weight: bold;
    display: block;
}

form,
.airportLista {
    padding: 20px;
}

.airportLista {
    background-color: grey;
    margin-top: 20px;
}

span {
    color: #3AB982;
}

.btn {
    text-decoration: none;
    background-color: black;
    border-radius: 10px;
    padding: 10px
}

.btn,
.airportLista {
    color: white;
}
</style>