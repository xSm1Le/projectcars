import React from 'react';
import { Navbar } from '../reusables/nav';
import { SlideShow } from '../comps/swiper';
import './landingpage.css';

export const Landingpage = () => {
    return (
        <section>
            <Navbar />

            <section className='yourCarsLP'>
                <h2>Deine Fahrzeuge</h2>
                <SlideShow />
                <div className='LPButtons'>
                    <button className='LPButton'>Fahrzeug verwalten</button>
                    <button className='LPButton'>Fahrzeug hinzufügen</button>
                    <button className='LPButton'>Termin verwalten</button>
                </div>
            </section>
        </section>
    )
}