<script setup>
import { ref, watch } from "vue";
import Student from "./classes/Student"
import students from "./data/student"
import newJegy from "./components/newJegy.vue";
import NewJegy from "./components/newJegy.vue";

const stundentsList = ref([])
const szurtStudentsList = ref([])
const allGrades = ref([])
const getAtlagSzam = ref(0)
const getHianyzasok = ref(0)
const szurtNevOsztaly = ref("");
const ujJegyOldal = ref(false)
var jegy = ref(0); 

for (var i = 0; i < students.length; i++) {
  const s = new Student(students[i].id, students[i].name, students[i].class, students[i].grades, students[i].absences)
  stundentsList.value.push(s)
  for (var y = 0; y < students[i].grades.length; y++) {
    allGrades.value.push(students[i].grades[y]);
  }
}

const szures = () => {
  console.log("lenyomva")
  for (var i = 0; i < stundentsList.value.length; i++) {
    if (stundentsList.value[i].getName() == szurtNevOsztaly || stundentsList.value[i].getClasses() == szurtNevOsztaly){
      szurtStudentsList.value.push(stundentsList[i])
    }
  }
}
const ujJegy = (index) =>{
    ujJegyOldal.value = true
    console.log(index+1)
}
const jegyHozzaadasa = (melyikJegySzam) => {
    console.log(melyikJegySzam)
    ujJegyOldal.value = false
}

watch(allGrades, (newValue, oldValue) => {
  var sum = 0;
  for (var i = 0; i < oldValue.length; i++) {
    sum += newValue[i];
  }
  getAtlagSzam.value = sum / newValue.length;
  console.log(getAtlagSzam.value);
  for(var i = 0; i< stundentsList.length; i++){
    getHianyzasok.value += stundentsList.getAbsences.value;
  }

});

</script>

<template>
  <header>
    <h1>Osztálynapló</h1>
  </header>
  <main>
    <section v-if="!ujJegyOldal">
      <div>
        <p>{{ getHianyzasok }} Hiányzások</p>
        <p>Átlag {{ getAtlagSzam }}</p>
      </div>
      <form>
        <input type="text" v-model="szurtNevOsztaly">
        <select>
          <option>Válassz...</option>
        </select>
        <a @click="szures()">Szűrés</a>
        <a>Rendezés</a>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Diák</th>
            <th scope="col">Osztály</th>
            <th scope="col">Jegyek</th>
            <th scope="col">Hiányzások</th>
            <th scope="col">Új jegy</th>
            <th scope="col">Hiányzás</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in stundentsList">
            <td>{{ student.getName() }} </td>
            <td>{{ student.getClasses() }}</td>
            <td>{{ student.getGrades() }}</td>
            <td>{{ student.getAbsences() }}</td>
            <td @click="ujJegy(index)">Új jegy</td>
            <td>Hiányzás</td>
          </tr>
        </tbody>
      </table>
    </section>
    <div v-if="ujJegyOldal">
      <NewJegy :students-list="stundentsList" @go-back="jegyHozzaadasa()"/>
    </div>
  </main>
</template>

<style scoped></style>
