<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
    message: String,
    type: String,
});

const notificationBackground = () => {
    if (props.type === "success") {
        document.getElementById("textElement").style.backgroundColor = 'green';
    } else if (props.type === "error") {
        document.getElementById("textElement").style.backgroundColor = 'red';
    } else if (props.type === "warning") {
        document.getElementById("textElement").style.backgroundColor = 'yellow';
    } else {
        alert("A notification típusa nem megfelelő");
    }
};

watchEffect(() => {
    notificationBackground();
});
</script>

<template>
    <p id="textElement">Az üzenet: {{ message }}</p>
</template>

<style lang="">
</style>