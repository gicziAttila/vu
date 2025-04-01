<script setup>
import { ref, defineProps } from 'vue';
const emit = defineEmits(['add', 'remove'])
const props = defineProps({
    pokemons: Array,
    isFavourite: Boolean
})
const add = (p) => {
    emit("add", p)
}
const remove = (i) => {
    emit("remove", i)
}
</script>
<template lang="">
    <section>
        <div class="container">
            <div class="d-flex flex-wrap aling-items-center">
                <div v-for="(pokemon, index) in pokemons" class="card m-3">
                    <div class="card-body text-center">
                        <p><img :src="pokemon.url" class="w-100 mb-3"></p>
                        <h5 class="card-title">{{pokemon.name}}</h5>
                        <p v-if="!isFavourite"><i class="bi bi-suit-heart-fill" @click="add(pokemon)"></i></p>
                        <p v-else><i class="bi bi-trash-fill" @click="remove(index)"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>