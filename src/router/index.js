import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import AddEmployee from '../views/AddEmployee.vue'
import EditEmployee from '../views/EditEmployee.vue'
import EmployeeDetails from '../views/EmployeeDetails.vue' // <-- import the new view
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
  { 
    path: '/employee/:id', // <-- route for EmployeeDetails
    name: 'EmployeeDetails',
    component: EmployeeDetails 
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router