import axios from 'axios';
import { API_BASE_URL } from '../config/config';

const recordsApi = axios.create({
    baseURL: `${API_BASE_URL}/records`,
});

// Fetch all records
export const fetchRecords = async () => {
    const response = await recordsApi.get('/');
    return response.data;
};

// Fetch a single record by ID
export const fetchRecordById = async (id) => {
    const response = await recordsApi.get(`/${id}`);
    return response.data;
};

// Create a new record
export const createRecord = async (recordData) => {
    const response = await recordsApi.post('/', recordData);
    return response.data;
};

// Update an existing record
export const updateRecord = async (id, recordData) => {
    const response = await recordsApi.put(`/${id}`, recordData);
    return response.data;
};

// Delete a record
export const deleteRecord = async (id) => {
    const response = await recordsApi.delete(`/${id}`);
    return response.data;
};

export function getRecordById(id) {
  // Example using fetch or axios
  // return fetch(`${API_BASE_URL}/records/${id}`).then(res => res.json());
}