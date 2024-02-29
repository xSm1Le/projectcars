import React from 'react';
import './register.css';
import './buttons.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [superPassword, setSuperPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const navigateToLogin = () => {
        navigate('/login');
    };
        
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          const response = await fetch('https://carsdatabase.onrender.com/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, superPassword }),
          });
      
          if (response.ok) {
            setMessage('Benutzer erfolgreich registriert.');
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
                        <button className="button-13" role="button" onClick={navigateToLogin}>Abbrechen</button>
                    </div>
                </form>
            </div>
        </section>
    )
}