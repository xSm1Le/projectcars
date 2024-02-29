import React from 'react';
import './login.css';
import { useNavigate } from 'react-router';
import './buttons.css';

export const Login = () => {
    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate('/register');
    };

    return (
        <section className="loginsection">
            <div className="Loginpage">
                <h1>Login</h1>
                <ul>
                    <li>
                        <input type="email" placeholder="e-Mail Adresse / Benutzername" />
                    </li>
                    <li>
                        <input type="password" minLength="8" placeholder="Passwort" />
                    </li>
                </ul>
                <div className="buttonsLogin">
                    <div className="loginButton">
                        <button className="button-13" role="submit">Einloggen</button>
                    </div>
                    <div className="loginButton">
                        <button className="button-13" role="button" onClick={navigateToRegister}>Passwort Vergessen?</button>
                    </div>
                    <div className="loginButton">
                        <button className="button-13" role="button" onClick={navigateToRegister}>Registrierung</button>
                    </div>
                </div>
            </div> 
        </section>
    )
}