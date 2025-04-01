import {createWebHistory, createRouter} from "vue-router"
import Search from "../components/Search.vue"
import PokemonDetails from "../components/PokemonDetails.vue"
import Favourites from "../components/Favourites.vue"

const routes = [
    {
        path: "/",
        component: Search
    },
    {
        path:"/pokemonDetail",
        component: PokemonDetails
    },
    {
        path:"/favourites",
        component: Favourites
    }
]
const router= createRouter({
    history: createWebHistory(),
    routes
})
export default router