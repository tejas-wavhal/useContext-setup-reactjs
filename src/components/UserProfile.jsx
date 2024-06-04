// src/components/UserProfile.js

import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/globalContext';

const UserProfile = () => {
    const { state, fetchData, setState } = useGlobalContext();
    const { user, loading } = state;

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            setState("tejas")
        }, 5000);
    }, []); // Fetch data on component mount



    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>No user data</p>
            )}
        </div>
    );
};

export default UserProfile;
