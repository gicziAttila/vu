import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Blog.vue";
import BlogExpanded from "../components/BlogExpanded.vue";
import UserBlogs from "../components/UserBlogs.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/blog-expanded/:id",
        component: BlogExpanded,
        props: true
    },
    {
        path: "/user-blogs/:userId/:blogId",
        component: UserBlogs,
        props: true
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;