<script setup>
    import { defineProps, ref, defineEmits } from 'vue';
    const emit = defineEmits(['item-selected'])
    const props = defineProps({
        items: Array
    })
    const selected = (item) => {
        emit("item-selected", item)
    }
</script>
<template>
    <ul>
        <li v-for="item in items" @click="selected(item)">{{ item.name }}</li>
    </ul>
</template>
<style scoped>
    
</style>