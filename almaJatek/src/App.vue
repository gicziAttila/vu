<script setup>
  import { ref } from 'vue'
  import gameArea from './components/gameArea.vue';

  var isStart = ref(false);
  var score = ref(0);

  const start = () =>{
    isStart.value = true
    score.value = 0;
  }
  const updateScore = (pont) =>{
    score.value+=pont
    if(score.value==10){
      alert("Gratulálunk győztél!")
      isStart.value = false;
    }
    else if(score.value==-10){
      alert("Sajnáljuk vesztettél!")
      isStart.value = false;
    }
  }
</script>

<template>
  <header>
    <h1>Almaszedős játék</h1>
  </header>
  <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <gameArea :start="isStart" @update-score="updateScore"/>
          </div>
          <div class="col-lg-3">
            <aside>
              <div class="score">Pont: {{ score }}</div>
              <h2>Játékszabályok</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque id sequi praesentium nisi sint modi voluptatem hic, nobis, ipsa laudantium distinctio vero. Rerum numquam ducimus velit atque perspiciatis, quae eius.</p>
              <button type="button" class="btn btn-warning" @click="start()">Játék indítása</button>
            </aside>
          </div>
        </div>
      </div>
  </main>
  <footer>
    <p>Copyright</p>
  </footer>
</template>

<style scoped>
  header, footer{
    text-align: center;
    padding: 10px 0px;
    background-color: #d6322f;
    color: #fff;
  }
  header {
    border-bottom: 5px solid #fff;
  }
  footer {
    border-top: 5px solid #fff;
  }
  main{
    background-image: url("./assets/bg.webp");
    background-attachment: fixed;
    background-size: cover;
  }
  aside{
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    color: #fff;
    text-align: center;
    min-height: 560px;
  }
  .score{
    background-color: #d6322f;
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 20px;
    font-size: 600;
  }
</style>
