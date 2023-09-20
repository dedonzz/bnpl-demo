import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LimitView from '../views/LimitView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import PayView from '../views/PayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Limit',
      component: LimitView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/pay',
      name: 'Pay',
      component: () => import('../views/PayView.vue')
    }
  ]
})

export default router
