import React from 'react';
import { useSelector } from 'react-redux';

const ShowPage = () => {
    const user = useSelector(state => state.form.user)
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
        </div>
    );
};

export default ShowPage
