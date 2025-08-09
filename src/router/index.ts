import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * This the main page router where the urls subdirectories will be created
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/clean',
      name: 'Cleaning',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CleaningView.vue'),
    },
    {
      path: '/front',
      name: 'Front',
      component: () => import('../views/FrontView.vue'),
    },
    {
      path: '/coach',
      name: 'Party Coach',
      component: () => import('../views/PartyCoachView.vue'),
    },
    {
      path: '/cook',
      name: 'Cook',
      component: () => import('../views/CookView.vue'),
    },
    {
      path: '/kcash',
      name: 'Kitchen Cash',
      component: () => import('../views/KitchenCashView.vue'),
    },
  ],
})

export default router
