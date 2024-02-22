import React from 'react';
import { SlideShow } from '../comps/swiper';
import './landingpage.css';
import { Link } from 'react-router-dom';


export const Landingpage = () => {
    return (
        <section>
            <section className='yourCarsLP'>
                <h2>Deine Fahrzeuge</h2>
                <SlideShow />
                <div >
                    <ul className='LPButtons'>
                        <li>
                            <Link to="/" className='LPButton'>Fahrzeug verwalten</Link>
                        </li>
                        <li>
                            <Link to="/addcars" className='LPButton'>Fahrzeug hinzufügen</Link>
                        </li>
                        <li>
                            <Link to="/" className='LPButton'>Termin verwalten</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}