import Vue from 'vue'
import VueRouter from 'vue-router'
import TimeLineView from '../views/TimeLineView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TimeLineView',
    component: TimeLineView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
