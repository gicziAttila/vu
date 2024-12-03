<script setup>
    import { defineEmits } from 'vue'
    import Track from "../classes/Track.js"
    import {t} from "../data/Tracks.js"

    var tracks = []
    for(var i = 0; i<t.length;i++){
        var tr = new Track(t[i].title, t[i].artist, t[i].file);
        tracks.push(tr);
    }

    const emit = defineEmits(['trackSelected'])
    

    const selectTrack = (track) => {
        emit('trackSelected', track)
    }

</script>

<template>
    <section>
        <h2>Lejátszási lista</h2>
        <ul>
            <li v-for="track in tracks" @click="selectTrack(track)">{{ track.getTitle() }} - {{ track.getArtist() }}</li>
        </ul>
    </section>
</template>

<style scoped>
    section{
        padding-bottom: 150px;
        border-bottom: 1px solid white;
    }
    ul{
        padding: 0;
        width: 50%;
    }
    li{
        list-style-type: none;
        padding: 5px 10px;
        background-color: gray;
        margin-bottom: 5px;
        border-radius: 5px;
    }
    li:hover{
        background-color: #efefef;
        cursor: pointer;
    }
</style>