// src/services/apiService.ts
import axios from 'axios';

// Set up a base URL for the API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Define a service to fetch users
export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

// Define a service to fetch posts
export const fetchPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};

// Define a service to fetch comments
export const fetchComments = async () => {
  try {
    const response = await api.get('/comments');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching comments');
  }
};

// Exporting the axios instance itself in case we need more custom calls
export default api;
