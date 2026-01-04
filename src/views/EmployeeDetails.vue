<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Employee Details</h2>

    <div v-if="employee" class="bg-white p-4 border rounded shadow">
      <p><strong>ID:</strong> {{ employee.id }}</p>
      <p><strong>Name:</strong> {{ employee.name }}</p>
      <p><strong>Email:</strong> {{ employee.email }}</p>
    </div>

    <div v-else class="text-red-600">
      Employee not found.
    </div>

    <router-link to="/" class="mt-4 inline-block text-blue-600 hover:underline">
      Back to Dashboard
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// Sample employee data (same as Dashboard)
const employees = ref([
  { id: 1, name: 'Beckham Mayaka', email: 'Beckhammayaka59@gmail.com.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com' },
])

// Get route params
const route = useRoute()
const employeeId = Number(route.params.id)

// Find employee by ID
const employee = computed(() => employees.value.find(emp => emp.id === employeeId))
</script>
