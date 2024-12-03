<script setup>
  import { ref } from "vue";
  import Playlist from "./components/Playlist.vue"
  import Player from "./components/Player.vue";

  const selectedTrack = ref(null);

  const trackSelected = (track) => {
    selectedTrack.value = track
  }

</script>

<template>
  <header>
    <h1>Zenelejátszó</h1>
  </header>
  <main>
    <Playlist @track-selected="trackSelected"/>
    <Player :track="selectedTrack"/>
  </main>
  <footer>

  </footer>
</template>

<style scoped>

</style>
