import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `apiKey 1224`,
    apiKey: import.meta.env.VITE_API_KEY
  }
})

export { API }
