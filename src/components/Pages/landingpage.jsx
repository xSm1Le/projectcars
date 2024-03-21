import { SlideShow } from '../reusables/swiper';
import './landingpage.css';
import { useNavigate } from 'react-router';
import { useAuth } from '../global/checkStatus';
import { jwtDecode } from 'jwt-decode';


export const Landingpage = () => {
    const navigate = useNavigate();
    const {isAuth} = useAuth(); // if token is available, isAuth is true
    const { token } = useAuth(); // token value is stored in token
    const decodedToken = jwtDecode(token); // Entschlüsseln des Tokens
    const userId = decodedToken.userId; // Extrahieren der Benutzer-ID aus dem Token


// navigateIsAuth 
   console.log(token);
    const navigateIsAuth = (path) => { 
        if (isAuth) {
           
            navigate(path); // Navigiere zur angegebenen Route, wenn der Benutzer authentifiziert ist
        } else {
            navigate('/login'); // Navigiere zur Login-Seite, wenn der Benutzer nicht authentifiziert ist
        }
    }

    //------------------------------------------------------------------


    
   

    return (
        <section className="mainLanding">
            <section className='yourDateLP' >
                <div className='LPDates'>
                    <img src="../favicon-32x32.png" alt="beispiel auto" />
                    <h2>Dein nächster Termin</h2>
                </div>
            </section>
            {/* <h2>Deine Fahrzeuge</h2> */}
            <div className='yourCarsLP'>
            <h2>Deine Fahrzeuge</h2>
                <SlideShow />
            </div>
            <ul className='LPButtons'>
                <li>
                    <button className="button-13" role="button" onClick={() => navigateIsAuth('/mycars')}>Fahrzeuge</button>
                </li>
                <li>
                    <button className="button-13" role="button" onClick={() => navigateIsAuth('/add')}>Hinzufügen</button>
                </li>
                <li>
                    <button className="button-13" role="button" onClick={() => navigateIsAuth('/kalender')}>Kalender</button>
                </li>
            </ul>
        </section>
    )
}