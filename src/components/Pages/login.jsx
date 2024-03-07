import React from 'react';
import './login.css';
import { useNavigate } from 'react-router';
import './buttons.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../global/checkStatus';

export const Login = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {} , [message]);

    const navigateToRegister = () => {
        navigate('/register');
    };

    const navigateToHome = () => {
        navigate('/');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('https://carsdatabase.onrender.com/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            setMessage('Erfolgreich eingeloggt.');
            setToken(data.token);
            navigateToHome();
        } else {
            const errorResponse = await response.json();
            setMessage(errorResponse.message || 'Bitte überprüfe deine Eingaben. Passwort oder Benutzername ist Falsch!');
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