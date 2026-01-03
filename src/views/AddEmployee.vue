<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Add Employee</h2>
    <form @submit.prevent="addEmployee" class="space-y-4">
      <div>
        <label class="block mb-1">Name</label>
        <input v-model="name" type="text" class="w-full border px-3 py-2 rounded" required>
      </div>
      <div>
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="w-full border px-3 py-2 rounded" required>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const router = useRouter()

const addEmployee = () => {
  // You can replace this with Firebase or backend API
  console.log('Employee Added:', { name: name.value, email: email.value })
  router.push('/')
}
</script>
