import { createRouter, createWebHashHistory } from "vue-router"
 
const routes = [
    {
        path: '/',
        name: 'Landing',
        component: () => import('@/views/Landing/Index.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/Index.vue')
    }, {
        path: '/shijing',
        name: 'Shijing',
        component: () => import('@/views/ShiJing/Index.vue')
    },
    {
        path: '/linong',
        name: 'Linong',
        component: () => import('@/views/Linong/Index.vue')
    },
    {
        path: '/shiKuMen',
        name: 'shiKuMen',
        component: () => import('@/views/shiKuMen/index.vue')
    },
    {
        path: '/xinghuo',
        name: 'xinghuo',
        component: () => import('@/views/Xinghuo/Index.vue')
    }
]
export const router = createRouter({
    history: createWebHashHistory('/shikumeng'),
    routes: routes
})
 
export default router