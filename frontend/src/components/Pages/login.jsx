import React from 'react';
import { Navbar } from '../reusables/nav';

export const Login = () => {
    return (
        <section>
            <Navbar />
            <h1>Login</h1>
            <ul>
                <li>
                    Benutzername
                </li>
                <li>
                    Passwort
                </li>
                <li>
                    Passwort Bestätigen
                </li>
                <li>
                    e-Mail Adresse
                </li>
            </ul>
            <div>
                <button>
                    Login
                </button>
                <button>
                    Registrieren
                </button>
            </div>

        </section>
    )
}