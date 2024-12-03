<script setup>
import { defineProps, defineEmits } from 'vue';
import {comments} from '../data/Blogs.js'
/*
const props = defineProps({
    title: String,
    body: String,
    likes: Number,
    show: Boolean,
})
*/
const props = defineProps({
    blog: Object,
    isReading: Boolean

})
const emit = defineEmits(['increase-likes', 'read-more', 'back'])
const sendMessage = () => {
    emit('increase-likes');
}
const readMore = () => {
    emit('read-more');
}
const back = () => {
    emit('back');
}

const lead = props.blog.body.substring(0, 100);
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
        <p v-if="!isReading"> {{ lead }}...<br><span @click="readMore()">Read more &raquo;</span></p>
        <p v-else> {{ blog.body }}</p>
        <div class="df" v-if="!isReading">
            <p> Likes: {{ blog.likes }}</p>
            <p><a @click="sendMessage()">Like</a></p>
        </div>
        <div v-else>
            <div v-if="blog.comments.length!=0">
                <h2>Comments</h2>
                <ul>
                    <li></li>
                </ul>
            </div>
            <span @click="back()">Back</span>
        </div>
    </div>

</template>
<style scoped>
.bodyEnd {
    border-bottom: 1px solid #fff;
}

span {
    color: aqua;
}

.df {
    display: flex;
    justify-content: space-between;
}

a {
    background-color: #ccc;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

a:hover {
    background-color: black;
    color: #ccc;
}
</style>