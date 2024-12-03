<script setup>
    import {reactive, ref, watch} from "vue";
    import {its} from "../data/Items.js"

    var items = reactive([]);

    items.push(...its);

    var name = ref("");
    var price = ref("");
    var sort = ref(1);

    const addToList = () => {
        items.push({name: name.value, price: price.value});
        name.value = price.value = "";
    }
    const deleteItem = (index) => {
        var valasz = confirm("Törölni szeretnéd e az elemet: " + items[index].name)
        if(valasz){
            items.splice(index, 1);
        }
    }
    const sortByName = () =>{
        items.sort((a, b) => a["name"].localeCompare(b["name"]))
    }
    const sortByDesc = () =>{
        items.sort((a, b) => {return b.price - a.price});
    }

    watch(sort, () =>{
        if(sort.value == 1){
            sortByName();
        }
        else{
            sortByDesc();
        }
    })


</script>
<template>
    <h2>Add the item to list</h2>
    <form>
        <div class="df">
            <div>
                <label>Item name:</label>
                <input type="text" v-model="name">
            </div>
            <div>
                <label>Price:</label>
                <input type="number" v-model="price">
            </div>
        </div>
        <button @click.prevent="addToList()">Add to list</button>
    </form>
    <h2>Shopping list</h2>
    <p v-if="items.length == 0">A lista üres!</p>
    <div v-if="items.length != 0">
        <label>Sort:</label>
        <select v-model="sort">
            <option value="1">By Name</option>
            <option value="2">By Price DESC</option>
        </select>
        <ul>
            <li v-for="(item, index) in items">{{item.name}}, {{ item.price }} Ft <span @click="deleteItem(index)" :class="{'displayNone': item.name.toLowerCase() == 'kenyér'}">Törlés</span></li>
        </ul>
    </div>
</template>
<style scoped>
.df {
    display: flex;
    justify-content: space-between;
}

label {
    display: block;
    color: #3AB982;
}

form{
    padding-bottom: 20px;
    border-bottom: 2px solid #34495f;
}

select, input{
    padding: 5px;
}
select{
    width: 100%;
}
button {
    background-color: #3AB982;
    padding: 20px 20px;
    border: none;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    margin-top: 20px;
}
span{
    color: red;
}
span, label{
    font-weight: 700;
}
.displayNone{
    display: none;
}
</style>