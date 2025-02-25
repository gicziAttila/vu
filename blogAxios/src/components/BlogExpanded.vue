<script setup>
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios';
import Blog from '../classes/Blog';

const props = defineProps({
    id: Number
});

const blog = ref(null);
const userId = ref(0);
const userName = ref("");

const fetchBlog = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
    .then(response => {
        userId.value = response.data.userId;
        blog.value = new Blog(response.data.id, response.data.title, response.data.body);
        fetchUser();
    })
    .catch(error => {
        console.error("Error fetching blog data: " + error);
    });
};

const fetchUser = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
    .then(response => {
        userName.value = response.data.name;
    })
    .catch(error => {
        console.error("Error fetching user data: " + error);
    });
}

onMounted(() => {
    fetchBlog();
});
</script>
<template>
    <section v-if="blog">
        <h1>{{ blog.getTitle() }}</h1>
        <p id="first">{{ blog.getBody() }}</p>
        <img src="https://placehold.co/600x400/orange/white">
        <p>{{ blog.getBody() }}</p>
        <p>{{ blog.getBody() }}</p>
        <p>Szerző: <RouterLink :to="{ path: '/user-blogs/' + userId + '/' + blog.getId() }">{{ userName }}</RouterLink></p>
        <RouterLink to="/">Vissza a bejegyzésekhez</RouterLink>
    </section>
    <p v-else>Loading...</p>
</template>
<style scoped>
    #first{
        font-weight: bold;
    }
</style>