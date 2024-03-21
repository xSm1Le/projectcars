import { SlideShow } from '../reusables/swiper';
import './landingpage.css';
import { useNavigate } from 'react-router';
import { useAuth } from '../global/checkStatus';


export const Landingpage = () => {
    const navigate = useNavigate();
    const {isAuth} = useAuth(); // Token aus dem globalen Zustand


    const navigateIsAuth = (path) => { 
        if (isAuth) {
            navigate(path);
        } else {
            navigate('/login');
        }
    }

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