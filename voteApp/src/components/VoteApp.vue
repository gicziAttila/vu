<script setup>
    import {films} from '../data/films.js';
    import {ref} from "vue";

    var filmlist = ref(films);

    const filmImageUrl = (imageURL) => {
        return new URL(imageURL, import.meta.url).href;
    }

    const vote = (index) => {
        filmlist.value[index].vote++;
        sortFilms();
    }

    const sortFilms = () => {
        filmlist.value.sort((a,b) => b.vote - a.vote);
    }


</script>
<template>
    <section v-for="(film, index) in filmlist"class="df" v-bind:class="{'green-border' :film.vote>=10}">
        <div>
            <img :src="filmImageUrl(film.image)" alt="filmI">
        </div>
        <div>
            <div class="df">
                <h2>{{ film.name }}</h2>
                <div><strong @click="vote(index)">Vote</strong> | {{ film.vote }}</div>
            </div>
            <p>{{ film.description }}</p>
        </div>
    </section>
</template>
<style scoped>
    .green-border{
        border: 3px solid green;
    }
    .df {
       display: flex;
       justify-content: space-between;
       align-items: center;
    }
    section{
        background-color: #efefef;
        padding: 10px;
        width: 60%;
        margin: 0px auto;
        margin-bottom: 30px;
    }
    strong {
        color: green;
    }
    img {
        margin-right: 20px;
    }
    h2 {
        margin: 0;
        padding: 0;
    }
</style>