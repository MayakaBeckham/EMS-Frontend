<template>
  <div class="p-6 max-w-md mx-auto mt-20">
    <h2 class="text-2xl font-bold mb-4">Profile</h2>
    <form @submit.prevent="updateProfile">
      <div class="mb-4">
        <label class="block mb-1">Name</label>
        <input v-model="user.name" type="text" class="w-full border px-3 py-2 rounded"/>
      </div>
      <div class="mb-4">
        <label class="block mb-1">Email</label>
        <input v-model="user.email" type="email" class="w-full border px-3 py-2 rounded" disabled/>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const user = reactive(JSON.parse(localStorage.getItem('loggedInUser') || '{}'))

const updateProfile = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const index = users.findIndex(u => u.id === user.id)
  if (index !== -1) {
    users[index] = user
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('loggedInUser', JSON.stringify(user))
    alert('Profile updated successfully!')
  }
}
</script>
