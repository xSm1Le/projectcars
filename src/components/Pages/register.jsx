import { useNavigate } from 'react-router';
import { useState } from 'react';
import './register.css';
import './buttons.css';
import config from '../global/configAPI';


export const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [superPassword, setSuperPassword] = useState('');
    const [message, setMessage] = useState('');

    const validateInputs = () => {
        // Einfache Client-seitige Validierung (Beispiel)
        if (!email || !password || !superPassword) {
            setMessage('Bitte füllen Sie alle Felder aus.');
            return false;
        }
        if (password.length < 8) {
            setMessage('Das Passwort muss mindestens 8 Zeichen lang sein.');
            return false;
        }
        if (superPassword.length < 12) {
            setMessage('Das Super-Passwort muss mindestens 12 Zeichen lang sein.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateInputs()) {
            return; // Stoppt die Verarbeitung, wenn die Validierung fehlschlägt
        }

        const response = await fetch(`${config.API_BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, superPassword }),
        });

        if (response.ok) {
            setMessage('Benutzer erfolgreich registriert. Sie werden zur Anmeldeseite weitergeleitet.');
            setTimeout(() => navigate('/login'), 3000); // Leitet nach 3 Sekunden zur Login-Seite um
        } else {
            const errorResponse = await response.json();
            setMessage(errorResponse.message || 'Ein Fehler ist aufgetreten.');
        }
    };

    return (
        <section className="registerSection">
            <div className="registerPage">
                <h1>Registrierung</h1>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <input type="email" placeholder="e-Mail Adresse"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        </li>
                        <li>
                            <input 
                            type="password" 
                            minLength="8" 
                            placeholder="Passwort" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} required />
                        </li>
                        <li>
                            <input type="password" 
                            minLength="12" 
                            placeholder="Super Passwort festlegen" 
                            value={superPassword} onChange={(e) => setSuperPassword(e.target.value)} required />
                        </li>
                    </ul>
                <div>
                    <button className="button-13" type="submit">Registrieren</button>
                </div>
                <div>
                    <button className="button-13" role="button" onClick={() => navigate('/login')}>Abbrechen</button>
                </div>
                </form>
                <div>
                    <p>{message}</p>
                </div>
            </div>
        </section>
    )
}
