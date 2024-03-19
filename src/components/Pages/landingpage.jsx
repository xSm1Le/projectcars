import { SlideShow } from '../reusables/swiper';
import './landingpage.css';
import { useNavigate } from 'react-router';


export const Landingpage = () => {
    const navigate = useNavigate();

    const navigateToAddcars = () => {
        navigate('/add');
    };

    const navigateToKalender = () => {
        navigate('/kalender');
    };

    const navigateToMyCars = () => {
        navigate('/mycars');
    };

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
                    <button className="button-13" role="button" onClick={navigateToMyCars}>Fahrzeuge</button>
                </li>
                <li>
                    <button className="button-13" role="button" onClick={navigateToAddcars}>Hinzufügen</button>
                </li>
                <li>
                    <button className="button-13" role="button" onClick={navigateToKalender}>Termine</button>
                </li>
            </ul>
        </section>
    )
}