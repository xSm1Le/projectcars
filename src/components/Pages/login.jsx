import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { useAuth } from '../global/checkStatus';
import './buttons.css';
import './login.css';


export const Login = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Zustand für Ladeindikator hinzugefügt

    useEffect(() => {} , [message]);

    const navigateToRegister = () => navigate('/register');

    const navigateToHome = () => navigate('/');
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Aktiviere den Ladeindikator
    
        try {
            const response = await fetch('https://carsdatabase.onrender.com/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            setIsLoading(false); // Deaktiviere den Ladeindikator
    
            if (response.ok) {
                const data = await response.json();
                setMessage('Erfolgreich eingeloggt.');
                setToken(data.token);
                navigateToHome(); // Verwenden Sie die navigateToHome Funktion hier
            } else {
                const errorResponse = await response.json();
                setMessage(errorResponse.message || 'Bitte überprüfe deine Eingaben. Passwort oder Benutzername ist falsch!');
            }
        } catch (error) {
            setIsLoading(false); // Stelle sicher, dass der Ladeindikator auch bei Fehlern deaktiviert wird
            setMessage('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        }
    };


    return (
        <section className="loginsection">
            <div className="Loginpage">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <input type="email" placeholder="e-Mail Adresse"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </li>
                        <li>
                            <input type="password" minLength="8"
                                value={password} placeholder="Passwort"
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </li>
                    </ul>
                    <div className="buttonsLogin">
                        <div className="loginButton">
                            <button className="button-13" type="submit">Einloggen</button>
                        </div>
                        <div>
                            <button className="button-13" role="button" onClick={navigateToRegister}>Registrieren</button>
                        </div>
                        <div>
                            <p>{message}</p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
