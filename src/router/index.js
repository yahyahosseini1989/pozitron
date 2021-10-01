import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UNewProduct from '../views/UPanel/UProducts/UNewProducts/UNewProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/UNewProduct',
    name: 'UNewProduct',
    component: UNewProduct
  },
  {
    path: '/about',
    name: 'About',
    component: UNewProduct
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes
})

export default router
