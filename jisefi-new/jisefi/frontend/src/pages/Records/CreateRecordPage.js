import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from '../../components/InputField';
import Button from '../../components/Button/Button';
import { createRecord } from '../../api/records';

const CreateRecordPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await createRecord({ title, description });
            history.push('/records'); // Redirect to records page after successful creation
        } catch (err) {
            setError('Failed to create record. Please try again.');
        }
    };

    return (
        <div>
            <h1>Create New Record</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <InputField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <Button type="submit">Create Record</Button>
            </form>
        </div>
    );
};

export default CreateRecordPage;