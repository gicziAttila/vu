<script setup>
import { ref, watch, computed } from 'vue'
import { rooms } from "./data/rooms.js"
import houseUpgrade from './components/houseUpgrade.vue'
import Room from "./classes/rooms.js"

const helyisegek = ref(rooms.map(room => new Room(room.id, room.name, room.options)))
const selectedRoomIndex = ref(0)

const selectedRoom = computed(() => {
  return helyisegek.value[selectedRoomIndex.value];
});

const checkboxHandle = (index) => {
  if (selectedRoom.value) {
    const currentOptions = selectedRoom.value.getOptions();
    currentOptions[index].selected = !currentOptions[index].selected;
    console.log(`Option ${index} in room ${selectedRoom.value.getId()} is now ${currentOptions[index].selected ? 'unselected' : 'selected'}`);
  }
}
const resetOptions = (room) => {
  room.getOptions().forEach(option => option.selected = false);
}

const nextRoomHandle = () => {
  if (selectedRoomIndex.value < helyisegek.value.length - 1) {
    selectedRoomIndex.value++;
    if (selectedRoom.value) {
      selectedRoom.value.resetOptions();
    }
  } else {
    console.log("Reached the last room");
  }
}

</script>

<template>
  <header>
    <h1>Házfelújítás</h1>
  </header>
  <main>
    <form>
      <label>Helyiség:</label>
      <select v-model="selectedRoomIndex">
        <option v-for="(helyseg, index) in helyisegek" :key="helyseg.getId()" :value="index">
          {{ helyseg.getName() }}
        </option>
      </select>
      <houseUpgrade v-if="selectedRoom" :key="selectedRoom.getId()" :room="selectedRoom"
        @checkbox-change="checkboxHandle" />
      <label>Becsült összeg:</label>
      <input type="number">
    </form>
    <button @click="nextRoomHandle">Tovább</button>
  </main>
  <footer>
    <h2>Copyright</h2>
  </footer>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

form {
  display: flex;
  flex-direction: column;
  font-weight: 700;
}

label {
  padding-bottom: 10px;
}

input,
select {
  padding: 5px;
  width: 350px;
  max-width: 100%;
}

button {
  margin-top: 20px;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header,
footer {
  text-align: center;
}

header {
  padding: 10px;
}

footer {
  border-top: solid 1px white;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>