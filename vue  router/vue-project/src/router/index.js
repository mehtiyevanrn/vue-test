import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Product from '../components/Product.vue'
import Detail from '../components/Detail.vue'
import Registr from '../components/Registr.vue'
import Basket from '../components/Basket.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      beforeEnter: (to, from, next) => {
        if (store.getters.tokenSend) {
          next()
        } else {
          next('/registr')
        }
      }
    },
    {
      path: '/product',
      component: Product,
      name: 'product',
      beforeEnter: (to, from, next) => {
        if (store.getters.tokenSend) {
          next()
        } else {
          next('/registr')
        }
      }
    },
    {
      path: '/detail/:slug/:id',
      component: Detail,
      name: 'detail',
      beforeEnter: (to, from, next) => {
        if (store.getters.tokenSend) {
          next()
        } else {
          next('/registr')
        }
      }
    },
    {
      path: "/registr",
      component: Registr,
      name: 'registr'
    },
    {
      path: "/baskets",
      component: Basket,
      name: 'baskets'
    },
  ]
})

export default router
