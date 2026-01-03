<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Edit Employee</h2>
    <form @submit.prevent="updateEmployee" class="space-y-4">
      <div>
        <label class="block mb-1">Name</label>
        <input v-model="name" type="text" class="w-full border px-3 py-2 rounded" required>
      </div>
      <div>
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="w-full border px-3 py-2 rounded" required>
      </div>
      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Update</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const name = ref('')
const email = ref('')

onMounted(() => {
  // Replace this with fetching data from backend
  const employeeId = route.params.id
  console.log('Editing Employee ID:', employeeId)
  name.value = 'John Doe'
  email.value = 'john@example.com'
})

const updateEmployee = () => {
  console.log('Employee Updated:', { name: name.value, email: email.value })
  router.push('/')
}
</script>
