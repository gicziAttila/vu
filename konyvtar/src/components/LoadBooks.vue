<script setup>
import { ref, defineProps, watch, defineEmits} from 'vue';
import { books } from '../data/books';
import Book from '../classes/Book';

const props = defineProps({
    showAllBooks: Boolean,
    search: String,
})


var booksToLoad = ref([]);
var showBooks = ref(false)

for (var i = 0; i < books.length; i++) {
    var book = new Book(books[i].azon, books[i].name, books[i].authors, books[i].img);
    booksToLoad.value.push(book);
}

const emit = defineEmits(['kolcsonzes']);
const kolcsonzes = (book) => {
    emit('kolcsonzes', book);
}

const getImageURL = (imageURL) => {
  return new URL(imageURL, import.meta.url).href;
};
</script>
<template>
    <h2>Találatok: {{ booksToLoad.length }} db</h2>
    <div v-if="showAllBooks" v-for="(book, index) in booksToLoad" class="card col-lg-6" style="width: 18rem;">
        <img :src="getImageURL(book.getImg())" class="card-img-top" :title="book.getName() + ' - ' + book.getAuthors()">
        <div class="card-body">
            <h5 class="card-title">{{book.getName()}}</h5>
            <p class="card-text">{{ book.getAzon() }}</p>
            <a class="btn btn-primary" @click="kolcsonzes(book)">Kölcsönzés</a>
        </div>
    </div>
    <div v-if="showBooks" v-for="(book, index) in showBooks" class="card col-lg-6" style="width: 18rem;">
        <img :src="getImageURL(book.getImg())" class="card-img-top" :title="book.getName() + ' - ' + book.getAuthors()">
        <div class="card-body">
            <h5 class="card-title">{{book.getName()}}</h5>
            <p class="card-text">{{ book.getAzon() }}</p>
            <a class="btn btn-primary" @click="kolcsonzes(book)">Kölcsönzés</a>
        </div>
    </div>
</template>
<style scoped></style>