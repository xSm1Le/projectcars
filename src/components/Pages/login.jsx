import React from 'react';
import { Navbar } from '../reusables/nav';
import './login.css';

import { useNavigate } from 'react-router';

export const Login = () => {
    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate('/register');
    };

    return (
        <section>
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
            <div>
                <input type="submit" value="Login" />
                <input type="submit" value="Passwort vergessen" />
                <input type="submit" value="Registrieren" onClick={navigateToRegister} />
            </div>
            </div> 

        </section>
    )
}