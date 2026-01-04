<template>
  <nav class="bg-blue-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center shadow">
    <!-- Logo / Title -->
    <div class="font-bold text-xl">
      EMS Dashboard
    </div>

    <!-- Navigation Links -->
    <div class="space-x-4 flex items-center">
      <router-link to="/" class="hover:underline">Dashboard</router-link>
      <router-link to="/add" class="hover:underline">Add Employee</router-link>
      <router-link to="#" class="hover:underline">Departments</router-link>
      <router-link to="#" class="hover:underline">Roles</router-link>

      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode" class="ml-4 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded">
        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

// Dark mode state
const darkMode = ref(document.documentElement.classList.contains('dark'))

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Keep dark mode in sync if user changes it externally
watchEffect(() => {
  darkMode.value = document.documentElement.classList.contains('dark')
})
</script>
