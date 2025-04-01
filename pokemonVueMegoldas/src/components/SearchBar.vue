<script setup>
    import { ref, defineEmits } from 'vue';
    const pokemonName = ref("");
    const emit = defineEmits(['search'])
    const search = () => {
        emit("search", pokemonName.value)
    }
</script>
<template lang="">
    <section>
    <div class="container">
        <form class="pt-3 pb-3 w-50 mx-auto">
            <div class="mb-3 d-flex">
                <input type="email" class="form-control me-2" id="exampleFormControlInput1" placeholder="Pokémon neve..." v-model="pokemonName">
                <button type="button" class="btn btn-primary" @click="search">Keresés</button>
            </div>
        </form>
    </div>
    </section>
</template>
<style scoped></style>