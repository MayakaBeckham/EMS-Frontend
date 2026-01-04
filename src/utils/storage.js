// Key used in localStorage
const STORAGE_KEY = 'employees'

// Function to get employees from localStorage
export function getEmployees() {
  const data = localStorage.getItem(STORAGE_KEY)
  if (data) {
    return JSON.parse(data)
  }
  // Default sample employees if none exist
  const defaultEmployees = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com', department: 'IT', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', department: 'HR', role: 'Recruiter', status: 'Inactive' },
    { id: 3, name: 'Mike Johnson', email: 'mike@gmail.com', department: 'Finance', role: 'Analyst', status: 'Active' },
    { id: 4, name: 'Emily Davis', email: 'emily@gmail.com', department: 'Marketing', role: 'Manager', status: 'Active' },
    { id: 5, name: 'David Brown', email: 'david@gmail.com', department: 'Operations', role: 'Staff', status: 'Inactive' }
  ]
  // Save default employees to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultEmployees))
  return defaultEmployees
}

// Function to save employees to localStorage
export function saveEmployees(employees) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees))
}
