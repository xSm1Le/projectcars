import { Link } from 'react-router-dom';
import './nav.css';
import '../Pages/buttons.css';
import { useNavigate } from 'react-router';


export const Navbar = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <img src="https://via.placeholder.com/150" alt="logo" />
                </li>
                <li className="PJName">
                    <h1>
                        Project Cars
                    </h1> 
                </li>
                <li>
                    <button className="button-13" role="button" onClick={navigateToHome}>Home</button>
                    <button className="button-13" role="button" onClick={navigateToLogin}>Einloggen</button>
                </li>
            </ul>
        </nav>
    );
}