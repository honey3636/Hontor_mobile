import { createWebHistory,createRouter } from "vue-router";
import HomePage from "../view/HomePage.vue";

const routes=[
    {
        name:'HomePage',
        path:'/',
        component:HomePage
    },
 
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;