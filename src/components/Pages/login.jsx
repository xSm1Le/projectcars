import { useNavigate } from 'react-router';
import { useState } from 'react';
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

    

    const navigateToRegister = () => navigate('/register');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://carsdatabase.cyclic.app/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setToken(data.token);
                navigate('/'); // Navigiere zur Startseite
                setMessage('Erfolgreich eingeloggt.');
            } else {
                setMessage(data.message || 'Bitte überprüfe deine Eingaben. Passwort oder Benutzername ist falsch!');
            }
        } catch (error) {
            setMessage('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <section className="loginSection">
            <div className="LoginPage">
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
                        <button className="button-13" type="submit" disabled={isLoading}>
                            {isLoading ? 'Einloggen...' : 'Einloggen'}
                        </button>
                        <button className="button-13" type="button" onClick={navigateToRegister}>
                            Registrieren
                        </button>
                    </div>
                    <div>
                        <p>{message}</p>
                    </div>
                    
                </form>
            </div>
        </section>
    )
}
