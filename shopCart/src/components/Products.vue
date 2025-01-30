<script setup>
import { ref, computed, defineEmits, watchEffect } from 'vue';
import { pData } from '../data/prudctDatas';
import {state} from '../state/state.js';
import Product from '../classes/Product.js';

var search = ref("");
const emit = defineEmits(['products-size'])
const filteredProducts = computed(() => {
  var tmp = pData.filter((product) => 
    product.name.toLowerCase().includes(search.value.toLowerCase()) ||
    product.desc.toLowerCase().includes(search.value.toLowerCase()) ||
    product.price.toString().includes(search.value)
  );
  emit('products-size', tmp.length);
  return tmp;
});

const product = ref();
const addToCart = (p) => {
  var prod = new Product(p.name, p.price, 1);
  product.value = {...prod}
}

watchEffect(() => {
  state.product = product.value;
});

    
</script>
<template>
     <section>
            <h2>Products</h2>
            <div class="mb-3">
              <input v-model="search" type="search" class="form-control" placeholder="Filter...">
            </div>
            <div class="products">
              <div v-for="product in filteredProducts" class="product d-flex align-items-center">
                <div>
                  <h3>{{ product.name }}</h3>
                  <p>{{ product.desc }}</p>
                  <p class="price">$ {{ product.price }}</p>
                </div>
                <div>
                  <button type="button" class="btn" @click="addToCart(product)">Add to cart</button>
                </div>
              </div>
            </div>
          </section>
</template>
<style scoped>
  section{
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
  }
  .form-control{
    margin-top: 15px;
    border: 10px solid #ccc;
  }
  h3{
    font-size: 20px;
  }    
  .product{
    border-bottom: 1px solid #ccc;
    padding-top: 15px;
  }
  .product:last-child{
    border-bottom: none;
  }
  .btn{
    width: 120px;
    margin-left: 40px;
  }
</style>