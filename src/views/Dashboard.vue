<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
    <table class="min-w-full bg-white border">
      <thead class="bg-blue-600 text-white">
        <tr>
          <th class="py-2 px-4 border">ID</th>
          <th class="py-2 px-4 border">Name</th>
          <th class="py-2 px-4 border">Email</th>
          <th class="py-2 px-4 border">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center border-b" v-for="employee in employees" :key="employee.id">
          <td class="py-2 px-4">{{ employee.id }}</td>
          <td class="py-2 px-4">{{ employee.name }}</td>
          <td class="py-2 px-4">{{ employee.email }}</td>
          <td class="py-2 px-4 space-x-2">
            <router-link :to="`/edit/${employee.id}`" class="text-blue-600 hover:underline">Edit</router-link>
            <button @click="deleteEmployee(employee.id)" class="text-red-600 hover:underline">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const employees = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
])

const deleteEmployee = (id) => {
  employees.value = employees.value.filter(emp => emp.id !== id)
}
</script>
