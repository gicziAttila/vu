<script setup>
import { ref, watch, watchEffect } from 'vue';
const checkBoxList = ref(['Jack', 'John', 'Mike'])
const selectList = ref(['A', 'B', 'C'])
const pickedRadio = ref("");
const textInput = ref("")
const selectedValue = ref("");
const checkedNames = ref([])
const checkboxInput = ref(false)

const updateCheckedNames = (event) => {
    const value = event.target.value;
    const isChechked = event.target.checked;
    if(isChechked){
        checkedNames.value.push(value)
    }else{
        const index = checkedNames.value.indexOf(value);
        if (index > -1) {
          checkedNames.value.splice(index, 1);
        }
    }
}
</script>
<template>
    <section>
        <h1>Text input</h1>
        <input type="text" v-model="textInput">
        <p> {{ textInput }}</p>
        <h1>Checkbox</h1>
        <input type="checkbox" v-model="checkboxInput">
        <p>Checked: {{ checkboxInput }}</p>
        <h1>MultiCheckbox</h1>
        <div v-for="names in checkBoxList">
            <input type="checkbox" @change="updateCheckedNames" :value="names"><label for="">{{names}}</label>
        </div>        
        <p>Checked names: {{ checkedNames }}</p>
        <h1>Radio</h1>
        <form>
            <input type="radio" v-model="pickedRadio" name="radiob" value="One"><label>One</label>
            <input type="radio" v-model="pickedRadio" name="radiob" value="Two"><label>Two</label>
        </form>
        <p>Picked: {{ pickedRadio }}</p>
        <h1>Select</h1>
        <select v-model="selectedValue">
            <option v-for="option in selectList">{{ option }}</option>
        </select>
        <p>Selected: {{ selectedValue }}</p>
    </section>
</template>
<style scoped>
    
</style>