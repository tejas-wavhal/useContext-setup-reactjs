// src/context/GlobalContext.js

import React, { createContext, useState, useContext } from 'react';

// Create a Context
const GlobalContext = createContext();

// Create a provider component
const GlobalProvider = ({ children }) => {
    const [state, setState] = useState({ user: null, loading: false });
    console.log("🚀 ~ GlobalProvider ~ state:", state)

    const fetchData = async () => {
        setState({ ...state, loading: true });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await response.json();
            setState({ user: data, loading: false });
        } catch (error) {
            console.error('Error fetching data:', error);
            setState({ ...state, loading: false });
        }
    };

    return (
        <GlobalContext.Provider value={{ state, setState, fetchData }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook to use the GlobalContext
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
