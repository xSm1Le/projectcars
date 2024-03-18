import './nav.css';
import '../Pages/buttons.css';
import { useNavigate } from 'react-router';
import { useAuth } from '../global/checkStatus';


export const Navbar = () => {
    const navigate = useNavigate();
    const {token} = useAuth();

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToRegister = () => {
        navigate('/register');
    };

    const navigateToHome = () => {
        navigate('/');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        navigate('/login', { replace: true });
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <img src="https://via.placeholder.com/150" alt="logo" onClick={navigateToHome} />
                </li>
                <li className="PJName">
                    <h1>
                        Project Cars
                    </h1> 
                </li>
                <li className="iconButtons">
                    <div>
                        {token && <img src="../benutzer.png" alt="Benutzer Icon" className="benutzericonNav" />}

                    </div>
                    <div>
                        {!token && <button className="button-13" role="button" onClick={navigateToLogin}>Einloggen</button>}
                        {!token && <button className="button-13" role="button" onClick={navigateToRegister}>Registrieren</button>}
                        {token && <nav role="navigation">
                            <div id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                                <ul id="menu">
                                    <a href=""><li><button className="button-13" role="button" onClick={handleLogout}>Ausloggen</button></li></a>
                                    <a href=""><li><button className="button-13" role="button">Einstellungen</button></li></a>
                                </ul>
                            </div>
                        </nav>}
                    </div>
                </li>
            </ul>
        </nav>
    );
}