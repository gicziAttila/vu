<script setup>
import { ref } from 'vue';
const emit = defineEmits(['favourite', 'delete', 'like'])
const props = defineProps({
    images: Array
})
const addFavourite = (kep) => {
    emit('favourite', kep)
}
const deleteFavorite = (kep) => {
    emit('delete', kep)
}
const setLike = (kep) => {
    emit('like', kep)
}
</script>

<template>
    <section>
        <div class="cards d-flex flex-wrap">
            <div class="card m-2" style="width: 10rem;" v-for="kep in images">
            <div class="card-body text-center">
                <p class="m-0 mb-4"><img :src="kep.getUrl()" class="card-img-top" alt="RandomKutya"></p>
                <i v-if="kep.getIsFavorite()" class="bi bi-star-fill red" @click="deleteFavorite(kep)"></i>
                <i v-else class="bi bi-star-fill" @click="addFavourite(kep)"></i>
                <p class="text-center mt-2" v-if="kep.getIsFavorite()"><i @click="setLike(kep)" class="bi bi-hand-thumbs-up-fill me-2"></i>{{ kep.getLikes() }}</p>
            </div>
        </div>
        </div>
    </section>
</template>

<style scoped>
    img{
        width: 100%;
        height: 100px;
        object-fit: cover;
        object-position: center;
    }
    i:hover{
        color: yellow
    }
    i.red:hover{
        color: red
    }
</style>
