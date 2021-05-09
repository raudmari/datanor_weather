import Vue from 'vue'
import VueRouter from 'vue-router'
import Ilm from '../views/Ilm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ilm',
    component: Ilm
  }
]

const router = new VueRouter({
  routes
})

export default router
