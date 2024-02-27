import React from 'react';
import { SlideShow } from '../comps/swiper';
import './landingpage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


export const Landingpage = () => {
    const navigate = useNavigate();

    const navigateToAddcars = () => {
        navigate('/addcars');
    };

    const navigateToTermine = () => {
        navigate('/termine');
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
            <section className='yourCarsLP'>
                <h2>Deine Fahrzeuge</h2>
                <SlideShow />
                <ul className='LPButtons'>
                    <li>
                    <button class="button-13" role="button" onClick={navigateToMyCars}>Fahrzeuge</button>
                    </li>
                    <li>
                    <button class="button-13" role="button" onClick={navigateToAddcars}>Hinzufügen</button>
                    </li>
                    <li>
                    <button class="button-13" role="button" onClick={navigateToTermine}>Termine</button>
                    </li>
                </ul>
            </section>
        </section>
    )
}