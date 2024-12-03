<script setup>
    import {tasks} from "../data/todos.js";
    import {ref, watch} from "vue";

    var teendo = ref("");
    var select = ref(1);
    var completed = ref(false)
    var todoList = ref(tasks);

    var hozzaAd = () => {
        todoList.value.push({text: teendo.value, completed: completed.value});
        teendo.value = "";
    }

    var filteredList = ref([])

    var updateFilteredList = () => {
        if (select.value == 2) {
            filteredList.value = todoList.value.filter(item => item.completed);
        } else if (select.value == 3) {
            filteredList.value = todoList.value.filter(item => !item.completed);
        } else {
            filteredList.value = todoList.value;
        }
    }

    watch(select, () => {
        updateFilteredList();
    });

    const deleteItem = (index) => {
        var valasz = confirm("Törölni szeretnéd e az elemet: " + todoList.value[index].text)
        if(valasz){
            todoList.value.splice(index, 1);
        }
    }

</script>
<template>
    <form>
        <label for="teendo">Teendő</label>
        <input type="text" v-model="teendo" id="teendo">
        <button @click.prevent="hozzaAd()">Submit</button>
    </form>
    <div>
        <select v-model="select">
            <option value="1">Mind</option>
            <option value="2">Befejezett</option>
            <option value="3">Befejezetlen</option>
        </select>
        <ul>
            <div v-if="select == 2 || select == 3">
                <li v-for="(item, index) in filteredList" :key="item.text">
                <p :class="{ 'keszTask': item.completed }">{{ item.text }}</p><input type="checkbox" v-model="item.completed"><span :class="{ 'dpNone': item.text.toLowerCase().includes('fontos')}" @click.prevent="deleteItem(index)">Törlés</span>
                </li>
            </div>
            <div v-else>
                <li v-for="(item, index) in todoList" :key="item.text">
                <p :class="{ 'keszTask': item.completed }">{{ item.text }}</p><input type="checkbox" v-model="item.completed"><span :class="{ 'dpNone': item.text.toLowerCase().includes('fontos')}" @click.prevent="deleteItem(index)">Törlés</span>
                </li>
            </div>
        </ul>
    </div>
</template>
<style scoped>
    .keszTask {
        text-decoration: line-through;
    }
    .dpNone {
        display: none;
    }
</style>