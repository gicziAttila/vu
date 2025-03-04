<script setup>
    import { ref } from 'vue';
    const value = ref(0)

    const increaseValue = () => {
        value.value++
    }
</script>
<template>
    <section>
        <div class="buttonValue">
            <p>Count <span>{{ value }}</span></p>
            <button @click="increaseValue">Click to increase value</button>
        </div>
        <div>
            <img src="../assets/vue.svg" alt="Logo" title="vueLogo">
        </div>
    </section>
</template>
<style scoped>

</style>