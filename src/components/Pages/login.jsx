import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useAuth } from '../global/checkStatus';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './buttons.css';
import './login.css';
import config from '../global/configAPI';

export const Login = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Zustand für Ladeindikator hinzugefügt

    const navigateToRegister = () => navigate('/register'); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${config.API_BASE_URL}/api/users/login`, {
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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="loginSection">
            <div className="LoginPage">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                {isLoading ? 
                    <div className='loading'>
                        <img src={'./loading.gif'}className="loading-icon" alt="loading" />
                    </div>  
                    : 
                    <ul>
                        <li>
                            <input type="email" placeholder="e-Mail Adresse"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </li>
                        <li className="passwordInput">
                            <input type={showPassword ? 'text' : 'password'} name='pw' minLength="8"
                                value={password} placeholder="Passwort"
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                            <button type="button" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </li>
                    </ul>}
                    <div className="buttonsLogin">
                        <button className="button-13" type="submit" disabled={isLoading}>
                            {isLoading ? 'Einloggen ...' : 'Einloggen'}
                        </button>
                        <button className="button-13" role="button" onClick={navigateToRegister}>Passwort Vergessen?</button>
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