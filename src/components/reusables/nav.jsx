import { Link } from 'react-router-dom';
import './nav.css';


export const Navbar = () => {
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
                    <li className="navButton">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="navButton">
                    <Link to="/login">Login</Link>
                    </li>
                </li>
            </ul>
        </nav>
    );
}