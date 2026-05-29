import { createRouter, createWebHistory } from 'vue-router'
import CompositionView from '@/views/CompositionView.vue'
import OptionView from '@/views/OptionView.vue'

const routes = [
  { path: '/', component: CompositionView },
  { path: '/option', component: OptionView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
