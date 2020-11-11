import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Servers from "../components/servers/Servers.vue"

const routes = [
  { path: '*', component: Servers }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
