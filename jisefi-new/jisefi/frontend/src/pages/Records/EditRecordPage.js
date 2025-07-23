import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getRecordById, updateRecord } from '../../api/records';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

const EditRecordPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const [record, setRecord] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecord = async () => {
            try {
                const data = await getRecordById(id);
                setRecord(data);
            } catch (err) {
                setError('Failed to fetch record');
            } finally {
                setLoading(false);
            }
        };

        fetchRecord();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecord({ ...record, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateRecord(id, record);
            history.push(`/records/${id}`);
        } catch (err) {
            setError('Failed to update record');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Edit Record</h1>
            <form onSubmit={handleSubmit}>
                <InputField
                    name="title"
                    label="Title"
                    value={record.title}
                    onChange={handleChange}
                />
                <InputField
                    name="description"
                    label="Description"
                    value={record.description}
                    onChange={handleChange}
                />
                <Button type="submit">Update Record</Button>
            </form>
        </div>
    );
};

export default EditRecordPage;