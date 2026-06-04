import axios from 'axios';

// Base API URL
export const API_BASE_URL = 'http://localhost:5000/api';   // Change this in production

// Configured Axios Instance
export const Api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,                    // 10 seconds
});

// Optional: Add request interceptor (e.g., for auth token)
// Api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token'); // or wherever you store token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Optional: Response interceptor (for error handling)
// Api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('API Error:', error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

// export default Api;