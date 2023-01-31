import { createRouter, createWebHistory } from 'vue-router';
import Default from '../components/Default.vue';
import Home from '../pages/Home.vue';
import FilterByCategory from '../pages/FilterByCategory.vue';
import FilterByName from '../pages/FilterByName.vue';

const routes = [
    {
        path: '/',
        component: Default,
        children: [
            {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/category/:category?',
        name: 'category',
        component: FilterByCategory,
    },
    {
        path: '/name/:name?',
        name: 'name',
        component: FilterByName,
    }
        ]
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;