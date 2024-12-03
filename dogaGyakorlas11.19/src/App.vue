<script setup>
import { ref, watch } from 'vue'
import Products from './classes/Products.js'
import { products } from './data/products.js'
import kosaroldal from './components/Kosar.vue'

var productsList = []
for (var i = 0; i < products.length; i++) {
  var newProduct = new Products(products[i].id, products[i].name, products[i].price, products[i].img);
  productsList.push(newProduct);
}

var kosar = ref(0)
const selectedProduct = ref();

const getProduct = (oneProduct) => {
    selectedProduct.value = oneProduct
    kosar.value += 1;
}


</script>

<template>
  <header>   
    <h1>Gyakorló Feladat</h1>
  </header>
  <main>
    <p class="text-end me-5">{{ kosar }} <a @click="kosarBetoltes()">Kosár</a></p>
    <div>
      <section>
        <h1>Termékek</h1>
        <div class="d-flex justify-content-center">
          <div v-for="oneProduct in productsList" class="card m-3" style="width: 18rem;">
            <img :src="oneProduct.getImg()" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ oneProduct.getName() }}</h5>
              <p class="card-text mt-3">{{ oneProduct.getPrice() }} Ft</p>
              <a class="btn btn-primary" @click="getProduct(oneProduct)">Kosárba</a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
      <kosaroldal :productslist="selectedProduct"/>
    </div>
  </main>
  <footer>
    <p>Copyright</p>
  </footer>
</template>

<style scoped>
header,
footer,
section {
  text-align: center;
}
</style>
