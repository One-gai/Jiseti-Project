import React, { createContext, useContext, useState } from 'react';

const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRecords = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/records');
            const data = await response.json();
            setRecords(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <RecordContext.Provider value={{ records, fetchRecords, loading, error }}>
            {children}
        </RecordContext.Provider>
    );
};

export const useRecords = () => {
    return useContext(RecordContext);
};