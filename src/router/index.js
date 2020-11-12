import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Server from "../components/projects/server/Server.vue"
import Dnd from "../components/projects/Dnd.vue"
import NotFound from "../components/NotFound.vue"
import WorkInProgress from "../components/WorkInProgress.vue"

const routes = [
  { path: '/', component: WorkInProgress },
  { path: '/about/skills', component: WorkInProgress },
  { path: '/about/competitions', component: WorkInProgress },
  { path: '/about/experience', component: WorkInProgress },
  { path: '/about/contact', component: WorkInProgress },
  { path: '/projects/server', component: Server },
  { path: '/projects/dnd', component: Dnd },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
