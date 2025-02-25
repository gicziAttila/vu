<script setup>
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios';
import Blog from '../classes/Blog';
import Comment from '../classes/Comment';

const props = defineProps({
    userId: Number,
    blogId: Number
});
const userName = ref("");

const fetchUser = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
    .then(response => {
        userName.value = response.data.name;
        setBlogList()
    })
    .catch(error => {
        console.error("Error fetching user data: " + error);
    });
}

const blogList = ref([])

const setBlogList = async() => {
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        for (let i = 0; i < Object.keys(response.data).length; i++) {
            if(response.data[i].userId == props.userId){
                var blog = new Blog(response.data[i].id, response.data[i].title, response.data[i].body)
                blogList.value.push(blog)   
            }
        }
    })
    .catch(error => {
        console.error("Hiba lépett fel az adatkérés során: " + error)
    })
}
const blogComments = ref([])
const selectedComment = ref()
const commentShow = ref(false)

const loadComments = async() => {
    commentShow.value = !commentShow.value
    blogComments.value = []
    await axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(response => {
        for (let i = 0; i < Object.keys(response.data).length; i++) {
                if(response.data[i].postId == selectedComment.value){
                    var comments = new Comment(response.data[i].email, response.data[i].body)
                    blogComments.value.push(comments)   
            }
        }
    })
    .catch(error => {
        console.error("Hiba lépett fel az adatkérés során: " + error)
    })
}

onMounted(() => {
    fetchUser();
});
</script>
<template>
    <h1>{{userName}} bejegyzései</h1>
    <p>Bejegyzések</p>
    <select v-model="selectedComment">
        <option selected>Válasszon...</option>
        <option v-for="blogs in blogList" :value="blogs.getId()">{{ blogs.getTitle() }}</option>
    </select>
    <button @click="loadComments()">Kommentek megtekintése</button>
    <div v-if="commentShow">
        <ul>
            <li v-for="comment in blogComments">{{ comment.getEmail() }}<p>{{ comment.getComment() }}</p></li>
        </ul>
    </div>
    <RouterLink :to="{ path: '/blog-expanded/' + props.blogId }">Vissza a bejegyzésehez</RouterLink>
</template>
<style scoped></style>