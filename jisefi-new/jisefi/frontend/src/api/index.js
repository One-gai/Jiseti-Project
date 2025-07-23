import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Base URL for the API
    timeout: 10000, // Request timeout
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        // You can add headers or modify the request here
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors globally
        return Promise.reject(error);
    }
);

export default api;