import mydetails from './components/PersonalDetails.vue'
import jobs from './components/EmploymentHistory.vue'
import education from './components/Education.vue'
import skills from './components/Skills.vue'

export const routes = [
  { path: '/', component: mydetails},
  { path: '/employment', component: jobs},
  { path: '/education', component: education},
  { path: '/skills', component: skills}
]
