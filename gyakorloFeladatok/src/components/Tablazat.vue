<script setup>
import {ref, defineProps} from "vue";

const switchCompareName = ref(true);
const switchComparePower = ref(true);
const props = defineProps({
  tableData: Array
})

const sortByName = () => {
  if(switchCompareName.value){
    props.tableData.sort( (a,b) => a.getName().localeCompare(b.getName()));
  }
  else{
    props.tableData.sort( (a,b) => b.getName().localeCompare(a.getName()));
  }
  switchCompareName.value = !switchCompareName.value
}
const sortByPower = () => {
  if(switchComparePower.value) {
    props.tableData.sort((a, b) => a.getPower() - b.getPower());
  }
  else{
    props.tableData.sort((a, b) => b.getPower() - a.getPower());
  }
  switchComparePower.value = !switchComparePower.value
}
</script>

<template>
  <section>
    <table>
      <thead>
      <tr>
        <th @click="sortByName()"><p>Name<span v-if="switchCompareName">↑</span><span v-else>↓</span></p>
        </th>
        <th @click="sortByPower()"><span v-if="switchComparePower">↑</span><span v-else>↓</span>Power</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in props.tableData">
        <td>{{ data.getName() }}</td>
        <td>{{ data.getPower() }}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
</style>