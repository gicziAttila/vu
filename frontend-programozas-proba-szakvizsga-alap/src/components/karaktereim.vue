<script setup>
    import karakterLista from './karakterLista.vue';
    import { szerepjatekKarakterek } from '../state/state';
    const karakterek = szerepjatekKarakterek().getSajatKarakter()

</script>

<template>
    <section>
        <h2>Saját karakterek</h2>
        <karakterLista :karakterLista="karakterek" :kedvencek="true"/>
    </section>
</template>

<style scoped></style>
