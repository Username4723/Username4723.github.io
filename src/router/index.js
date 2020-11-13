import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Server from "../components/projects/server/Server.vue"
import Dnd from "../components/projects/Dnd.vue"

import Contact from "../components/about/Contact.vue"
import Skills from "../components/about/Skills.vue"
import Experience from "../components/about/Experience.vue"

import HomePage from "../components/HomePage.vue"

import NotFound from "../components/NotFound.vue"
import WorkInProgress from "../components/WorkInProgress.vue"

const routes = [
  { path: '/', component: HomePage },
  { path: '/wip', component: WorkInProgress }, // Avoid unused error

  { path: '/about/skills', component: Skills },
  { path: '/about/experience', component: Experience },
  { path: '/about/contact', component: Contact },

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
