import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Initialisiere den Token aus dem localStorage
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Bestimme den Authentifizierungsstatus basierend auf der Existenz eines Tokens
    const isAuth = !!token;

    useEffect(() => {
        // Wenn ein Token vorhanden ist, speichere es im localStorage
        if (token) {
            localStorage.setItem('token', token);
        } else {
            // Entferne den Token aus dem localStorage, wenn `token` null ist
            localStorage.removeItem('token');
        }
    }, [token]);

    // Bereitstellen von `token`, `setToken` und `isAuth` im Kontext
    return (
        <AuthContext.Provider value={{ token, setToken, isAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

// Benutzerdefinierter Hook, um den Auth-Kontext zu verwenden
export const useAuth = () => useContext(AuthContext);

// export default AuthContext; // Entfernt, da wir den Kontext in der Datei verwenden, in der er erstellt wird
