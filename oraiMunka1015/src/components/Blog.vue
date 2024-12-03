<script setup>
import { defineProps, defineEmits } from 'vue';
/*
const props = defineProps({
    title: String,
    body: String,
    likes: Number,
    show: Boolean,
})
*/
const props = defineProps({
    blog: Object
    
})
const emit = defineEmits(['increase-likes'])
const sendMessage = () =>{
    emit('increase-likes');
}
</script>
<!--
<template>
    <div>
        <h2> {{ props.title }}</h2>
        <p> {{ body }}</p>
        <p> Likes: {{ likes }}</p>
    </div>
</template>
-->
<template>
    <div>
        <h2> {{ blog.title }}</h2>
        <p> {{ blog.body }}</p>
        <div class="df">
            <p> Likes: {{ blog.likes }}</p>
            <p><a @click="sendMessage()">Like</a></p>
        </div>
    </div>
</template>
<style scoped>
    .df{
        display: flex;
        justify-content: space-between;
    }
    a{
        background-color: #ccc;
        color: black;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    a:hover{
        background-color: black;
        color: #ccc;
    }
</style>