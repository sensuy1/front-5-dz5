import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const FormPage = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'UPDATE_USER_INFO',
            payload: {
                name,
                age,
                gender
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
            <button type="submit">Submit</button>
        </form>
    );
}
export default FormPage
