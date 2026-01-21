import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CartView from '../views/CartView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsView
    },
    {
        path: '/products/:id',
        name: 'product-detail',
        component: ProductDetailView,
        props: true
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
