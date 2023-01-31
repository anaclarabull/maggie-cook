import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import MealList from '../pages/MealList.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: MealList,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;