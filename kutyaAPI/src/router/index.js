import { createRouter, createWebHistory } from "vue-router";
import home from "../components/home.vue";
import favourites from "../components/favourites.vue";
const routes = [
    {
        path: "/",
        component: home
    },
    {
        path: "/favourites",
        component: favourites
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})
export default router;