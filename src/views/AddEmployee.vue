<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Add Employee</h2>

    <form @submit.prevent="addEmployee" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block mb-1">Name</label>
        <input
          v-model="name"
          type="text"
          class="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block mb-1">Email</label>
        <input
          v-model="email"
          type="email"
          class="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <!-- Department -->
      <div>
        <label class="block mb-1">Department</label>
        <select
          v-model="department"
          class="w-full border px-3 py-2 rounded"
          required
        >
          <option disabled value="">Select Department</option>
          <option>IT</option>
          <option>Human Resources</option>
          <option>Finance</option>
          <option>Marketing</option>
          <option>Operations</option>
        </select>
      </div>

      <!-- Role -->
      <div>
        <label class="block mb-1">Role</label>
        <select
          v-model="role"
          class="w-full border px-3 py-2 rounded"
          required
        >
          <option disabled value="">Select Role</option>
          <option>Manager</option>
          <option>Staff</option>
          <option>Intern</option>
        </select>
      </div>

      <!-- Status -->
      <div>
        <label class="block mb-1">Status</label>
        <select
          v-model="status"
          class="w-full border px-3 py-2 rounded"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Add Employee
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getEmployees, saveEmployees } from '../utils/storage'

const router = useRouter()

const name = ref('')
const email = ref('')
const department = ref('')
const role = ref('')
const status = ref('Active')

const addEmployee = () => {
  const employees = getEmployees()

  employees.push({
    id: Date.now(),
    name: name.value,
    email: email.value,
    department: department.value,
    role: role.value,
    status: status.value
  })

  saveEmployees(employees)
  router.push('/')
}
</script>
