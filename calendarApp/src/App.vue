<script setup>
import { ref, watchEffect } from 'vue';
import { state } from './state/state';
import Modal from './components/Modal.vue';
import Event from './classes/Event';

const actualEvents = ref([[], [], [], [], [], [], []]);
const show = ref(false);
const toggleModal = () => {
  show.value = !show.value;
};

watchEffect(() => {
  if (state.events) {
    actualEvents.value = state.events;
    for(let i = 0; i < actualEvents.value.length; i++){
      actualEvents.value[i].sort((a, b) => { return a.getTimeFrom().localeCompare(b.getTimeFrom());
      });
    }
  }
});
const deleteEvent = (dayIndex, eventIndex) => {
  if(confirm("Are you sure you want to delete " + state.events[dayIndex][eventIndex].getName() + " event?") ? state.events[dayIndex].splice(eventIndex, 1) : null);
};


</script>

<template>
  <Modal :show="show" @cancel="toggleModal"/>
  <header>
    <h1>2025</h1>
  </header>
  <main>
    <section>
      <button @click="toggleModal()">Add event</button>
      <table>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(events, dayIndex) in actualEvents">
              <div class="event" v-for="(event, eventIndex) in events">
                <h3>{{ event.getName() }}</h3>
                <div class="df" :style="{backgroundColor: event.getColor()}">
                  <p>{{ event.getTimeFrom() }}-{{ event.getTimeTo() }}</p>
                  <p @click="deleteEvent(dayIndex, eventIndex)"><i class="bi bi-trash"></i></p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer>
    <p>Copyright - All rights reserved</p>
  </footer>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.df {
  display: flex;
  justify-content: center;
}
.df i{
  padding-left: 10px;
  cursor: pointer;
}

h1,
footer,
.event {
  text-align: center;
}

section {
  width: 90%;
  margin: 0 auto;
}

table,
table td {
  border-collapse: collapse;
  border: 1px solid #ccc;
}

table {
  width: 100%;
}

table td {
  width: calc(100% / 7);
  padding: 5px;
  background-color: antiquewhite;
  vertical-align: top;
}

table th {
  padding: 10px;
  background-color: antiquewhite;
}

table,
.event,
button {
  color: #000;
}

.event {
  margin: 30px;
  background-color: white;
}

.event h3,
.event p {
  margin: 4px;
}

.event,
button {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

button {
  float: right;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  font-weight: 700;
  padding: 10px 20px;
}
</style>
