import {createRouter, createWebHistory, type Router} from 'vue-router'
import MainView from "@/views/MainView.vue";

const routes = [
  {
    path: '/',
    component: MainView
  }
]
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
