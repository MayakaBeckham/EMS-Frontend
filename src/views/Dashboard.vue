<template>
  <div class="p-6 min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">

    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>

    <!-- Search & Filter -->
    <div class="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0 md:space-x-2">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name or email"
        class="border px-3 py-2 rounded w-full md:w-1/2 dark:bg-gray-700 dark:text-gray-100"
      />
      <select v-model="filterDepartment" class="border px-3 py-2 rounded dark:bg-gray-700 dark:text-gray-100">
        <option value="">All Departments</option>
        <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
      </select>
      <select v-model="filterRole" class="border px-3 py-2 rounded dark:bg-gray-700 dark:text-gray-100">
        <option value="">All Roles</option>
        <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
      </select>
    </div>

    <!-- Employee Table -->
    <table class="min-w-full border bg-white dark:bg-gray-700 mt-6">
      <thead class="bg-blue-600 dark:bg-blue-800 text-white">
        <tr>
          <th class="py-2 px-4 border">ID</th>
          <th class="py-2 px-4 border">Name</th>
          <th class="py-2 px-4 border">Email</th>
          <th class="py-2 px-4 border">Department</th>
          <th class="py-2 px-4 border">Role</th>
          <th class="py-2 px-4 border">Status</th>
          <th class="py-2 px-4 border">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="text-center border-b"
          v-for="employee in filteredEmployees"
          :key="employee.id"
        >
          <td class="py-2 px-4">{{ employee.id }}</td>
          <td class="py-2 px-4">{{ employee.name }}</td>
          <td class="py-2 px-4">{{ employee.email }}</td>
          <td class="py-2 px-4">{{ employee.department }}</td>
          <td class="py-2 px-4">{{ employee.role }}</td>
          <td class="py-2 px-4">
            <span
              :class="[
                'px-2 py-1 rounded text-white text-sm',
                employee.status === 'Active' ? 'bg-green-600' :
                employee.status === 'Inactive' ? 'bg-red-600' :
                'bg-gray-500'
              ]"
            >
              {{ employee.status }}
            </span>
          </td>
          <td class="py-2 px-4 space-x-2">
            <router-link
              :to="`/edit/${employee.id}`"
              class="text-blue-600 hover:underline"
            >Edit</router-link>
            <router-link
              :to="`/employee/${employee.id}`"
              class="text-gray-600 hover:underline"
            >Details</router-link>
            <button
              @click="deleteEmployee(employee.id)"
              class="text-red-600 hover:underline"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getEmployees, saveEmployees } from '../utils/storage'

// Reactive employee list
const employees = ref(getEmployees())

// Filters & search
const searchQuery = ref('')
const filterDepartment = ref('')
const filterRole = ref('')

const departments = ['IT', 'HR', 'Finance', 'Marketing', 'Operations']
const roles = ['Manager', 'Developer', 'Recruiter', 'Analyst', 'Staff']

// Computed filtered employees
const filteredEmployees = computed(() => {
  return employees.value.filter(emp => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesDept = filterDepartment.value ? emp.department === filterDepartment.value : true
    const matchesRole = filterRole.value ? emp.role === filterRole.value : true
    return matchesSearch && matchesDept && matchesRole
  })
})

// Delete employee
const deleteEmployee = id => {
  employees.value = employees.value.filter(emp => emp.id !== id)
  saveEmployees(employees.value)
}
</script>
