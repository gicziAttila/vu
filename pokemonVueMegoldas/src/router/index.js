import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Favourites from "../components/Favourites.vue";

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/favourites",
        component: Favourites
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})
export default router;