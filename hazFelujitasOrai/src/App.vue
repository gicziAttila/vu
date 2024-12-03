<script setup>
import { ref, watch } from "vue";
import { rooms } from "./data/rooms.js"

const roomData = ref(rooms)
const helyseg = ref("")
const options = ref([])

watch(helyseg, () =>{
    options.value = (roomData.value.find(room => room.name === helyseg.value)).options;
})
</script>

<template>
    <header>
        <h1>Házfelújítás</h1>
    </header>
    <main>
        <section>
            <form>
                <div class="mb-3">
                    <label class="form-label">Helyiség</label>
                    <select class="form-select" v-model="helyseg">
                        <option value="">Válasszon</option>
                        <option v-for="room in roomData" :value="room.name">{{ room.name }}</option>
                    </select>
                </div>
            </form>
            <div v-if="helyseg != ''">
                <div class="mb-3">
                    <label class="form-label">Felújítási munka</label>
                    <div class="form-check" v-for="munka in options">
                        <input class="form-check-input" type="checkbox" :value="munka" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{ munka }}
                        </label>
                    </div>
                </div>
            </div>
            <div v-else>
                <p>Nincs kiválasztva helyiség</p>
            </div>
            <div v-if="helyseg != ''" class="mb-3">
                <label class="form-label">Felújítási összeg</label>
                <input type="number" class="form-control">
            </div>
            <div v-if="helyseg != ''" class="mb-3">
                <button class="btn btn-warning">Tovább</button>
            </div>
        </section>
    </main>
    <footer>
        <p>Copyright</p>
    </footer>
</template>

<style scoped>
form {
    width: 80%;
    margin: 30px auto;
    padding: 10px;
}

.form-label {
    font-weight: bold;
}

.form-check {
    padding-left: 40px;
}
</style>
