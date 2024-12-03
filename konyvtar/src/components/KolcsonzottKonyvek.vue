<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import Book from '../classes/Book.js'

const props = defineProps({
    kolcsonzottKonyvekSzama: Number,
    kolcsonzottKonyvek: Array,
    visszaBerles: Boolean,
})

const emit = defineEmits(['go-back', 'give-back']);

const goBack = () => {
    emit('go-back');
}
const giveBack = (index) => {
    emit('give-back', index);
}

</script>
<template>
    <section>
        <form>
            <p>Kölcsönzött: {{ kolcsonzottKonyvekSzama }} db</p>
            <select>
                <option selected> Válasszon</option>
                <option v-for="(konyvek, index) in kolcsonzottKonyvek">{{ konyvek.getEve() }}</option>
            </select>
            <a @click="giveBack()">Visszaad</a>
            <a @click="goBack(index)">Vissza a kölcsönzéshez</a>
        </form>
    </section>
</template>
<style scoped></style>