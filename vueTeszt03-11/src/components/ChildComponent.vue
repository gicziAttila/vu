<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['greet']);
const props = defineProps({
  name: String
});

const sendGreet = () => {
  if (props.name !== "") {
    const greeting = "Hello " + props.name + "!";
    emit("greet", greeting);
  }
};
</script>

<template>
  <h2>Child</h2>
  <button @click="sendGreet">Send message!</button>
</template>

<style scoped>
</style>