import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Server from "../components/projects/server/Server.vue"
import NotFound from "../components/NotFound.vue"

const routes = [
  { path: '/projects/server', component: Server },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
