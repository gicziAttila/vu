<script setup>
    import { ref, defineProps } from 'vue';
    import Blog from '../classes/Blog';

    const props = defineProps({
        blogList: Array,
        index: Number
    })
</script>
<template>
    <section>
        <h1>{{ props.blogList[props.index].getTitle() }}</h1>
        <RouterLink to="/">Vissza</RouterLink>
    </section>
</template>
<style scoped>
    
</style>