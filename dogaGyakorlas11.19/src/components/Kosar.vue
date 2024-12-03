<script setup>

import Products from '../classes/Products.js'

const props = defineProps({
    product: Products
})

const deleteProduct = () => {

}

console.log(props.allproducts)

</script>
<template>
    <section>
        <h1>Kosár</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Termék</th>
                    <th scope="col">Darabszám</th>
                    <th scope="col">Ár</th>
                    <th scope="col">Törlés</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="termekek in props.product">
                    <th>{{ termekek.getName }}</th>
                    <td>{{ termekek.getId }}</td>
                    <td>{{ termekek.getPrice }}</td>
                    <td><a @click="deleteProduct()">Törlés</a></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<style scoped></style>