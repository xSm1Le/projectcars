import React from 'react';
import { Navbar } from '../reusables/nav';
import './login.css';

export const Login = () => {
    return (
        <section>
            <Navbar />
            <div className="Loginpage">
            <h1>Login</h1>
            <ul>
                <li>
                    <input type="email" placeholder="e-Mail Adresse / Benutzername" />
                </li>
                <li>
                    <input type="password" minlength="8" placeholder="Passwort" />
                </li>
            </ul>
            <div>
                <input type="submit" value="Login" />
                <input type="submit" value="Registrieren" />
            </div>
            </div> 

        </section>
    )
}