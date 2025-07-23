import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecordById } from '../../api/records';
import './RecordDetailPage.css'; // Assuming you have a CSS file for styling

const RecordDetailPage = () => {
    const { id } = useParams();
    const [record, setRecord] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecord = async () => {
            try {
                const data = await getRecordById(id);
                setRecord(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecord();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="record-detail">
            <h1>Record Details</h1>
            {record ? (
                <div>
                    <h2>{record.title}</h2>
                    <p>{record.description}</p>
                    {/* Add more fields as necessary */}
                </div>
            ) : (
                <p>No record found.</p>
            )}
        </div>
    );
};

export default RecordDetailPage;