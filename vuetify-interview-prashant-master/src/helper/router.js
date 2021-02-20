import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/Welcome'
import Enroll from '../components/Enroll'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Enroll },
    { path: '/welcome', component: Welcome },
    { path: '*', redirect: '/' }
  ]
})
