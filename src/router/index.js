import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import AddEmployee from '../views/AddEmployee.vue'
import EditEmployee from '../views/EditEmployees.vue'

const routes = [
  { 
    path: '/', 
    name: 'Dashboard',
    component: Dashboard 
  },
  { 
    path: '/add', 
    name: 'AddEmployee',
    component: AddEmployee 
  },
  { 
    path: '/edit/:id', 
    name: 'EditEmployee',
    component: EditEmployee 
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router