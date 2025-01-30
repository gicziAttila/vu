<script setup>
import { state } from '../state/state';
import Product from '../classes/Product';
import { ref, watchEffect } from 'vue';
const cartProduct = ref([]);
const cartProductPrint = ref([]);

const summa = ref(0);
const pieces = ref(0);


watchEffect(() => {
  if (state.product) {
    var index = cartProduct.value.findIndex((product) => product.getName() === state.product.getName());
    if (index === -1) {
      cartProduct.value.push(state.product);
    }
    else {
      cartProduct.value[index].setPiece(cartProduct.value[index].getPiece() + 1);
    }
    cartProductPrint.value = [...cartProduct.value];
    summa.value = pieces.value = 0;
    for (var i = 0; i < cartProduct.value.length; i++) {
      summa.value += cartProduct.value[i].getPrice() * cartProduct.value[i].getPiece();
      pieces.value += cartProduct.value[i].getPiece();
    }
  }
});

const checkOut = () => {
  alert("Vásárlás megerősítve!");
  cartProduct.value = cartProductPrint.value = [];
  summa.value = pieces.value = 0;
  state.product = null;
}

</script>
<template>
  <aside>
    <h2>Cart</h2>
    <div class="cartProduct" v-for="product in cartProductPrint">
      <h3>{{ product.getName() }}</h3>
      <div class="d-flex">
        <div class="price">$ {{ product.getPrice() }}</div>
        <div class="quantity">Quantity: {{ product.getPiece() }}</div>
      </div>
    </div>
    <div class="total text-end" v-if="cartProduct.length>0">Total quantity: {{ pieces }}</div>
    <div class="mb-3" v-if="cartProduct.length>0">
      <button type="button" class="btn w-100" @click="checkOut()">Checkout ($ {{ summa }})</button>
    </div>
    <p class="text-center mt-3" v-if="cartProduct.length==0">A kosár üres!</p>
  </aside>
</template>
<style scoped>
aside {
  margin-top: 30px;
}

h3 {
  font-size: 18px;
}

.d-flex {
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 15px;
}

.btn {
  margin-top: 15px;
}
</style>