import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import AddProduct from './components/AddProduct.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/signup', component: Signup },
        { path: '/addproduct', component: AddProduct }
    ]
})

export default router