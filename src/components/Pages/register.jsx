import React from 'react';
import { Navbar } from '../reusables/nav';
import './register.css';


export const Register = () => {
    return (
        <section>
            <Navbar />
            <div className="registerPage">
                <h1>Registrierung</h1>
                <ul>
                    <li>
                        <input type="email" placeholder="e-Mail Adresse / Benutzername" />
                    </li>
                    <li>
                        <input type="password" minLength="8" placeholder="Passwort" />
                    </li>
                    <li>
                        <input type="password" minLength="12" placeholder="Super Passwort festlegen" />
                    </li>
                </ul>
                <div>
                    <input type="submit" value="Registrierung Abschließen" />
                </div>
            </div>
        </section>
    )
}