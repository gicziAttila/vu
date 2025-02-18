import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Blog.vue";
import BlogExpanded from "../components/BlogExpanded.vue";
import Blog from "../classes/Blog";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/blog-expanded",
        component: BlogExpanded,
        props: { blogList: Array, index: Number}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;