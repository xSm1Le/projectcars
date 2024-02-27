import React from 'react';
import './register.css';
import './buttons.css';


export const Register = () => {
    return (
        <section className="registerSection">
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
                    <button class="button-13" role="button">Registrieren</button>
                </div>
            </div>
        </section>
    )
}