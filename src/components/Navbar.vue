<template>
  <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">Employee Management</h1>
    <ul class="flex space-x-4">
      <li><router-link to="/" class="hover:text-gray-200">Dashboard</router-link></li>
      <li><router-link to="/add" class="hover:text-gray-200">Add Employee</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
// No script needed for static links
</script>
