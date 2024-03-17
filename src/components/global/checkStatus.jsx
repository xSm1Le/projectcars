import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();
const tFS = localStorage.getItem('token'); // tFS = tokenFromStorage


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(tFS || null);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    );
}; 

export const useAuth = () => useContext(AuthContext);