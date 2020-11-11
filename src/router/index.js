import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Servers from "../components/servers/Servers.vue"
import NotFound from "../components/NotFound.vue"

const routes = [
  { path: 'servers', component: Servers },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
