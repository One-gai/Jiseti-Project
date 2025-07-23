import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/admin';

export const fetchAdminData = async () => {
    try {
        const response = await axios.get(`${API_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching admin data:', error);
        throw error;
    }
};

export const updateRecordStatus = async (recordId, status) => {
    try {
        const response = await axios.patch(`${API_URL}/records/${recordId}`, { status });
        return response.data;
    } catch (error) {
        console.error('Error updating record status:', error);
        throw error;
    }
};

export const deleteRecord = async (recordId) => {
    try {
        const response = await axios.delete(`${API_URL}/records/${recordId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting record:', error);
        throw error;
    }
};