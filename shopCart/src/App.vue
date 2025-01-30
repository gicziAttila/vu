<script setup>
import Cart from './components/Cart.vue';
import Products from './components/Products.vue';
import Snow from './classes/Snow';
import { ref } from 'vue';

const area = document.querySelector('body');
var snowInterval = setInterval(() => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const snow = new Snow(x, 0, Math.random() * 3 + 2, 'body');
  snow.fall();
}, 200);


var size = ref(0);

const setSize = (tmp) => {
  size.value = tmp;
}
</script>
<template>
  <div class="mainContainer">
    <header>
      <h1>Cart App</h1>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <Cart />
          </div>
          <div class="col-lg-9">
            <Products @products-size="setSize" />
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container">
        <p class="text-end mt-3 fw-bold"># of products {{ size }}</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
