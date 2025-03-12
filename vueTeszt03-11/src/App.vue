<script setup>
  import { ref } from "vue";
  import ButtonComponent from "./components/ButtonComponent.vue"
  import ToggleButton from "./components/ToggleButton.vue";
import FormComponent from "./components/FormComponent.vue";
import ItemListComponent from "./components/ItemListComponent.vue";
import ParentComponent from "./components/ParentComponent.vue";
import ChildComponent from "./components/ChildComponent.vue";
</script>

<template>
  <ButtonComponent />
  <ToggleButton :checked="true"/>
  <FormComponent />
  <ItemListComponent />
  <hr>
  <ParentComponent />
</template>

<style scoped>
</style>
