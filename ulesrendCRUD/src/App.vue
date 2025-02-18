<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import Diak from './classes/Diak';

  const SOR = 5
  const OSZLOP = 5;
  const ulesrend = ref(new Array(SOR).fill(null).map(()=> new Array(OSZLOP).fill(null)));

  const setUlesrend = async() => {
    for (let i = 0; i < ulesrend.value.length; i++) {
      for (let j = 0; j < ulesrend.value[i].length; j++) {
          await axios.get("http://localhost/ulesrend/api/get_tanulo.php?sor=" + i + "&oszlop=" + j)
          .then(response => {
            if(response.data.id!=undefined){
              ulesrend.value[i][j] = new Diak(response.data.id, response.data.nev, i,j);
            }else{
              ulesrend.value[i][j] = new Diak(-1, "", i,j);
            }
          })
          .catch(error => {
            console.error("Hiba lépett fel az adatbázis lekérésben: " + error)
          })
      }
    }
  }
  const del = async(did) => {
    await axios.delete("http://localhost/ulesrend/api/index.php", {
      params:{
        id: parseInt(did)
      }
    })
    .then(response => {
      setUlesrend()
    })
    .catch(error => {
      console.error("Hiba lépett fel a törlésben: " + error)
    })
  }
  const upd = async(did) => {
    var ujNev = prompt("Diák neve: ")
    await axios.put("http://localhost/ulesrend/api/index.php", {
      id: parseInt(did),
      nev: ujNev
    })
    .then(response => {
      setUlesrend()
    })
    .catch(error => {
      console.error("Hiba lépett fel az átírásban: " + error)
    })
  }
  const add = async(i,j) => {
    var ujNev = prompt("Diák neve: ")
    await axios.post("http://localhost/ulesrend/api/index.php", {
      nev: ujNev,
      sor: i,
      oszlop: j
    })
    .then(response => {
      setUlesrend()
    })
    .catch(error => {
      console.error("Hiba lépett fel az átírásban: " + error)
    })
  }

  setUlesrend();
</script>

<template>
  <main>
    <h1>Ülésrend</h1>
    <section>
      <div class="rows df" v-for="(sor, i) in ulesrend">
        <div class="cols" v-for="(oszlop, j) in sor">
          <div>
            <p @click="upd(oszlop.getId())">{{ oszlop.getNev() }}</p>
            <p v-if="oszlop.getId()==-1"><i class="bi bi-plus" @click="add(i,j)"></i></p>
            <p v-else><i class="bi bi-trash" @click="del(oszlop.getId())"></i></p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
    h1{
      text-align: center;
    }
    .df{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .df div{
      background-color: rgb(196, 136, 6);
      width: 200px;
      padding-top: 20px;
      color: #000;
      font-weight: 600;
      cursor: pointer;
      text-align: center;
    }
    .df div :hover{
      background-color: #fff;
    }
    .cols{
      margin: 20px;
    }
</style>
