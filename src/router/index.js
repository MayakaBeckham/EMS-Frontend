import { createRouter, createWebHistory } from 'vue-router'

// Views
import Dashboard from '../views/Dashboard.vue'
import AddEmployee from '../views/AddEmployee.vue'
import EditEmployee from '../views/EditEmployee.vue'
import EmployeeDetails from '../views/EmployeeDetails.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'

// Routes
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/add',
    name: 'AddEmployee',
    component: AddEmployee,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit/:id', // Make sure ":id" param matches Dashboard router-link
    name: 'EditEmployee',
    component: EditEmployee,
    meta: { requiresAuth: true }
  },
  {
    path: '/employee/:id',
    name: 'EmployeeDetails',
    component: EmployeeDetails,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

// Create router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Global navigation guard for authentication
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedInUser')
  
  if (to.meta.requiresAuth && !loggedIn) {
    next('/login') // Redirect to login if not authenticated
  } else if ((to.name === 'Login' || to.name === 'Register') && loggedIn) {
    next('/') // Redirect logged-in users away from login/register
  } else {
    next()
  }
})

export default router
