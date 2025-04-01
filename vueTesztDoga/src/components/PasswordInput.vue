<script setup>
import { ref, watchEffect } from 'vue';

const showPassword = ref(false);
const passwordType = ref("password");
const password = ref("")

const showPasswordFunc = () => {
    if (showPassword.value) {
        passwordType.value = "text";
    } else {
        passwordType.value = "password";
    }
};
watchEffect(() => {
    showPasswordFunc();
});
</script>

<template>
    <input :type="passwordType" v-model="password">
    <input type="checkbox" v-model="showPassword">
</template>

<style lang="">
</style>