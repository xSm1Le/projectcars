import React from 'react';
import './login.css';
import { useNavigate } from 'react-router';
import './buttons.css';
import { useState } from 'react';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const navigateToRegister = () => {
        navigate('/register');
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
            setMessage('Erfolgreich eingeloggt.');
        } else {
            const errorResponse = await response.json();
            setMessage(errorResponse.message || 'Ein Fehler ist aufgetreten. Bitte überprüfe deine Logindaten.');
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
                            <button className="button-13" role="button" onClick={navigateToRegister}>Passwort Vergessen?</button>
                        </div>
                        <div>
                            <button className="button-13" role="button" onClick={navigateToRegister}>Registrierung</button>
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