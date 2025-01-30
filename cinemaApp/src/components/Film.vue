<script setup>
import { ref } from "vue";
import { movieDatas } from "../data/movies.js";
import { screeningsData } from "../data/screenings.js";
import { screenings } from "../state/state.js";


const movieState = screenings();
const currentScreeningData = ref();
const showSeats = ref(false)
const prefix = "seat"

function getImageUrl(image) {
    return new URL("../" + image, import.meta.url).href;
}
const setSeats = (time) => {
    showSeats.value = true;
    currentScreeningData.value = movieState.getScreenings().find(ms =>(ms.getTime() === time && ms.getMovieId() === movieState.getFilmId()));
}
const setColor = (sor,oszlop) => {
    document.querySelector("#" + prefix + sor + oszlop).style.backgroundColor="red";
    if(currentScreeningData.value.isFree(sor,oszlop)){
        currentScreeningData.value.setSeet(sor,oszlop);
    }
}
const reserve = () => {
    const screen = movieState.getScreenings();
    const movie = screen.find(
        (screening) =>
            screening.getMovieId() === currentScreeningData.value.getMovieId() &&
            screening.getTime() === currentScreeningData.value.getTime() &&
            screening.getRoomId() === currentScreeningData.value.getRoomId()
    );

    if (movie) {
        movie.setSeets(currentScreeningData.value.getSeets());
        movieState.setScreeningsData(screen);
        alert("Seats reserved successfully!");
    } else {
        alert("Error reserving seats. Please try again.");
    }
};


const movie = movieDatas.find(movie => movie.id === movieState.getFilmId());
const movieScreenings = screeningsData.filter(screening => screening.movieId === movieState.getFilmId());
</script>

<template>
    <section>
        <h2>{{ movie.title }}</h2>
        <p class="center"><img :src="getImageUrl(movie.image)" :alt="movie.title"></p>
        <p>{{ movie.description }}</p>
        <hr>
    </section>
    <section>
        <h2>Screenings</h2>
        <div class="df">
            <div class="time" v-for="ms in movieScreenings" @click="setSeats(ms.time)">
                {{ ms.time }}
            </div>
        </div>
    </section>
    <section v-if="showSeats">
        <h2>Seats - {{ currentScreeningData.getRoomId() }} - {{ currentScreeningData.getTime() }}</h2>
        <div class="df" v-for="(sor, i) in currentScreeningData.getSeets()">
            <div class="seats" v-for="(oszlop, j) in sor.length">
                <span :id="prefix+i+j" @click="setColor(i, j)"></span>
            </div>
        </div>
        <button @click="reserve()">Reserve</button>
    </section>
    <section>
        <p><router-link to="/">&laquo; Back</router-link></p>
    </section>
</template>

<style scoped>
.df{
    justify-content: center;
}
.time, button{
    background-color: #FDCD00;
    padding: 10px 20px;
    margin: 10px;
    color: #000;
    font-weight: 700;
}
.time, .seats span, button{
    border-radius: 10px;
}
.seats span{
    margin-bottom: 20px;
    display: inline-block;
    padding: 20px;
    background-color: green;
    margin: 10px
}
button{
    border: none;
    margin: 20px auto;
    display: block;
}
</style>
