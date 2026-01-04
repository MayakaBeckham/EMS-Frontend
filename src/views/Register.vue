<template>
  <div class="p-6 max-w-md mx-auto mt-20">
    <h2 class="text-2xl font-bold mb-4">Register</h2>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label class="block mb-1">Name</label>
        <input v-model="name" type="text" class="w-full border px-3 py-2 rounded"/>
      </div>
      <div class="mb-4">
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="w-full border px-3 py-2 rounded"/>
      </div>
      <div class="mb-4">
        <label class="block mb-1">Password</label>
        <input v-model="password" type="password" class="w-full border px-3 py-2 rounded"/>
      </div>
      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Register</button>
    </form>
    <p class="mt-4">
      Already have an account?
      <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

const register = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  if (users.find(u => u.email === email.value)) {
    alert('Email already exists')
    return
  }
  const newUser = { id: Date.now(), name: name.value, email: email.value, password: password.value }
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('loggedInUser', JSON.stringify(newUser))
  router.push('/')
}
</script>
