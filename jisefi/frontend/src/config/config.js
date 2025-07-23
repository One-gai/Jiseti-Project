const config = {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY || '',
};

export const API_BASE_URL = config.apiUrl;
export default config;