import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue')
    },{
      path: '/pagination',
      name: 'pagination',
      component: () => import('../views/PaginationView.vue')
    }
  ]
})

export default router
