import React from 'react';
import { SlideShow } from '../comps/swiper';
import './landingpage.css';
import { Link } from 'react-router-dom';


export const Landingpage = () => {
    return (
        <section>
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
                        <Link to="/" className='LPButton'>Fahrzeug verwalten</Link>
                    </li>
                    <li>
                        <Link to="/addcars" className='LPButton'>Fahrzeug hinzufügen</Link>
                    </li>
                    <li>
                        <Link to="/kalender" className='LPButton'>Termin verwalten</Link>
                    </li>
                </ul>
            </section>
        </section>
    )
}