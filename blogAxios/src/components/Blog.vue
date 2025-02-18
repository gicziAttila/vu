<script setup>
import Blog from '../classes/Blog';
import axios from 'axios';
import { ref } from 'vue';

const blogList = ref([])

const setBlogList = async() => {
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        for (let i = 0; i < Object.keys(response.data).length; i++) {
            var blog = new Blog(response.data[i].id, response.data[i].title, response.data[i].body)
            blogList.value.push(blog)   
        }
    })
    .catch(error => {
        console.error("Hiba lépett fel az adatkérés során: " + error)
    })
}
setBlogList()
</script>
<template>
    <section v-for="(blog, index) in blogList">
        <h1>{{ blog.getTitle() }}</h1>
        <p>{{ blog.getBody()}}..<RouterLink to="blog-expanded" :blogList="blogList, index">Tovább</RouterLink></p>
    </section>
</template>
<style scoped>
    h1, p {
        margin: 0
    }
    section{
        margin: 30px;
        border-bottom: 1px solid grey;
        border-top: 1px solid grey;
    }
    h1{
        color: darkslategrey;
    }
    h1::first-letter{
        text-transform: capitalize;
    }
    span{
        color: lightgreen;
    }
</style>