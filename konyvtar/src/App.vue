<script setup>
import { ref, defineEmits, watch } from 'vue';
import LoadBooks from './components/LoadBooks.vue';
import KolcsonzottKonyvek from './components/KolcsonzottKonyvek.vue';

const showAllBooks = ref(false);
const bookSearch = ref("")
var kolcsonzottKonyvek = ref([]);
const kolcsonzottKonyvekSzama = ref(0);
const konyvKolcsonzes = ref(false);


const kolcsonzes = (book) => {
    for (var i = 0; i < kolcsonzottKonyvek.value.length; i++) {
      if (kolcsonzottKonyvek.value[i].getName() === book.getName()) {
        alert("A könyv mar kölcsönzött")
        return;
    }
  }
    kolcsonzottKonyvek.value.push(book);
    kolcsonzottKonyvek.value.sort((a,b) => a.getAzon().localeCompare(b.getAzon()));
    alert("A könyv sikeresen kölcsönözve")
    kolcsonzottKonyvekSzama.value++;
    console.log(book.getName())
}
const kolcsonzottPage = () => {
  konyvKolcsonzes.value = true
}

const searchBookFunction = () => {
}

const giveBack = (index) => {
  kolcsonzottKonyvek.value.splice(index, 1);
  kolcsonzottKonyvekSzama.value--;
}

watch(() => showAllBooks.value, (newSearch) => {
  if (newSearch) {
    bookSearch.value = "";
  }
})
</script>

<template>
  <header>
    <h1>Könyvtár app</h1>
  </header>
  <main>
    <section v-if="!konyvKolcsonzes">
      <form>
        <label>Keresés a könyvek között</label>
        <p @click="kolcsonzottPage()">Kölcsönzött: {{ kolcsonzottKonyvekSzama }} db</p>
        <input :disabled="showAllBooks" v-model="bookSearch" type="text" placeholder="Könyv címe vagy azonosítója" />
        <div class="form-check form-switch">
          <input v-model="showAllBooks" class="form-check-input" type="checkbox" role="switch"
            id="flexSwitchCheckDefault">
          <label class="form-check-label" for="flexSwitchCheckDefault">Minden könyv mutatása</label>
        </div>
        <a class="btn btn-warning">Tovább</a>
      </form>
    <LoadBooks :show-all-books="showAllBooks" :search="bookSearch" @kolcsonzes="kolcsonzes"/>
    </section>
    <section v-else>
      <kolcsonzottKonyvek :kolcsonzottKonyvek="kolcsonzottKonyvek" :kolcsonzottKonyvekSzama="kolcsonzottKonyvekSzama" :visszaBerles="konyvKolcsonzes" @go-back="konyvKolcsonzes = false" @give-back="giveBack()"/>
    </section>
    </main>
</template>

<style scoped></style>
