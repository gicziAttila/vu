<script setup>
import Plots from './components/Plots.vue'
</script>

<template>
  <header>
    <h1>Plots for sale App</h1>
  </header>
  <main>
    <section>
      <Plots />
    </section>
  </main>
  <footer>
    <p>Plots for sale App</p>
    </footer>
</template>

<style scoped>
  header,footer {
    background-color: #3AB982;
    color: #FFF;
    padding: 10px 0px;
  }
  main {
    background-image: url(assets/bg.jpg);
    min-height: 780px;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 5%;
  }
  section{
    background-color: rgba(255,255,255,0.7);
    width: calc(90% - 40px);
    margin: 0px auto;
    display: block;
    padding: 20px;
    border-radius: 10px;
  }
  footer{
    text-align: center;
    font-weight: 700;
  }
</style>
