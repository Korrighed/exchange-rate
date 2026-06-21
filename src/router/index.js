import { createRouter, createWebHistory } from 'vue-router'
import CompositionView from '@/views/CompositionView.vue'

const routes = [
  { path: '/', component: CompositionView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
