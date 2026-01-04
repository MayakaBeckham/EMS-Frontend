<template>
  <div class="p-6 max-w-md mx-auto mt-20">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="w-full border px-3 py-2 rounded"/>
      </div>
      <div class="mb-4">
        <label class="block mb-1">Password</label>
        <input v-model="password" type="password" class="w-full border px-3 py-2 rounded"/>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
    </form>
    <p class="mt-4">
      Don't have an account?
      <router-link to="/register" class="text-blue-600 hover:underline">Register</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const login = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const user = users.find(u => u.email === email.value && u.password === password.value)
  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user))
    router.push('/')
  } else {
    alert('Invalid email or password')
  }
}
</script>
