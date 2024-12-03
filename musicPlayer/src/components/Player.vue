<script setup>
    import { defineProps, computed, ref } from 'vue';
    import Track from "../classes/Track.js"
    import AudioPlayer from 'vue3-audio-player'
    import 'vue3-audio-player/dist/style.css'
    
    const props = defineProps({
        track: Track
    })

    const trackInfo = computed(() => 
        props.track ? props.track.getTitle() + " - " + props.track.getArtist() : "Ninc zeneszám kiválasztva"
    )

    const getAudioURL = (audioURL) => {
        return new URL(audioURL, import.meta.url).href
    }

    const audioOptions = computed (() => ({
        src : props.track ? getAudioURL(props.track.getFile()) : '',
        title : props.track ? props.track.getTitle() : 'Nincs zeneszám',
    }))

    const audioRef = ref(null)

    const start = () => {
        if(props.track && audioRef.value){
            audioRef.value.play();
        }else{
            alert("Nincs kiválasztva zeneszám")
        }
    }
    const stop = () => {
        if(props.track && audioRef.value){
            audioRef.value.pause();
        }else{
            alert("Nincs zeneszám elindítva")
        }
    }
</script>

<template>
    <section>
        <h2>Jelenlegi szám:  {{ trackInfo }}</h2>
        <AudioPlayer ref="audioRef" :option="audioOptions"/>
        <button @click="start()">Lejátszás</button>
        <button @click="stop()">Megállítás</button>
    </section>
</template>

<style scoped>
    section{
        text-align: center;
    }
    h2{
        font-size: 20px;
    }
    button{
        margin: 10px;
        padding: 10px 15px;
        border: none;
        color: #fff;
        background-color: #007bff;
        border-radius: 5px;
    }
    button:hover{
        cursor: pointer;
        background-color: blue;
    }
</style>