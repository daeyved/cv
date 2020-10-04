import Vue from 'vue'
import VueRouter from 'vue-router'
import mydetails from './../components/PersonalDetails.vue'
import jobs from './../components/EmploymentHistory.vue'
import education from './../components/Education.vue'
import skills from './../components/Skills.vue'

Vue.use(VueRouter)

export const routes = [
  { path: '/', component: mydetails},
  { path: '/employment', component: jobs},
  { path: '/education', component: education},
  { path: '/skills', component: skills}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
