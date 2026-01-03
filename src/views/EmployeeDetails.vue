<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Employee Details</h1>

    <div v-if="employee" class="bg-white shadow-md rounded p-6 space-y-4">
      <div><strong>ID:</strong> {{ employee.id }}</div>
      <div><strong>Name:</strong> {{ employee.name }}</div>
      <div><strong>Email:</strong> {{ employee.email }}</div>
      <div><strong>Position:</strong> {{ employee.position }}</div>
      <div><strong>Department:</strong> {{ employee.department }}</div>
      <div><strong>Phone:</strong> {{ employee.phone }}</div>

      <router-link
        :to="`/edit/${employee.id}`"
        class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Edit Employee
      </router-link>
    </div>

    <div v-else class="text-gray-500">
      Loading employee details...
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

export default {
  setup() {
    const route = useRoute()
    const employee = ref(null)

    // Example: Fetch employee data by ID
    const fetchEmployee = (id) => {
      // Replace this with your actual data source (API or array)
      const dummyData = [
        { id: 1, name: "John", email: "john@example.com", position: "Developer", department: "IT", phone: "123456" },
        { id: 2, name: "Alice", email: "alice@example.com", position: "Designer", department: "Design", phone: "789012" },
      ]
      return dummyData.find((e) => e.id == id)
    }

    onMounted(() => {
      const id = route.params.id
      employee.value = fetchEmployee(id)
    })

    return { employee }
  }
}
</script>

<style scoped>
/* Tailwind handles most styling */
</style>
