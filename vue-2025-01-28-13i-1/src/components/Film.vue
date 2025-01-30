<script setup>
import { movieDatas } from "../data/movies.js";
import { screeningsData } from "../data/screenings.js";
import { screenings } from "../state/state.js";


const movieState = screenings();

function getImageUrl(image) {
    return new URL("../" + image, import.meta.url).href;
}

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
            <div class="time" v-for="ms in movieScreenings">
                {{ ms.time }}
            </div>
        </div>
    </section>
    <section>
        <p><router-link to="/">&laquo; Back</router-link></p>
    </section>
</template>

<style scoped>
.df{
    justify-content: center;
}
.time{
    background-color: #FDCD00;
    padding: 10px 20px;
    margin: 10px;
    color: #000;
    font-weight: 700;
    border-radius: 10px;
}
</style>
