<script setup>
import { defineProps, ref, defineEmits } from 'vue';
    const emit = defineEmits(['update'])
    const props = defineProps({
        checked: Boolean
    })
    const buttonChecked = ref(props.checked)
    const toggle = () => {
        buttonChecked.value = !buttonChecked.value
        emit("update")
    }
</script>
<template>
    <p><button @click="toggle">{{ buttonChecked?"ON":"OFF" }}</button></p>
</template>
<style scoped>
    
</style>