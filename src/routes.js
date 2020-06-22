import mydetails from './components/PersonalDetails.vue'
import jobs from './components/EmploymentHistory.vue'
import education from './components/Education.vue'
import contact from './components/Contact.vue'

export const routes = [
  { path: '/', component: mydetails},
  { path: '/employment', component: jobs},
  { path: '/education', component: education},
  { path: '/contact', component: contact}
]
