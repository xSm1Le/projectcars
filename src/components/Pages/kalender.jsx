import { useState, useRef } from "react";
import { Navbar } from "../reusables/nav";
import { Calendar } from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './kalender.css';

export const Kalender = () => {
    const [value, onChange] = useState(new Date());
    const textareaRef = useRef(null);

    const focusTextarea = () => {
        textareaRef.current.focus();
    };

    return (
        <section>
            <Navbar />
            <section className='yourDates'>
                <h2 className='datesh2'>Kalender</h2>
                <Calendar onChange={onChange} value={value} />
            </section>
            <section>
                <div className='DButtons'>
                    <button className='DButton' onClick={focusTextarea}>
                        Notiz
                    </button>
                    <button className='DButton' onClick={focusTextarea}>
                        Termin hinzufügen
                    </button>
                </div>
                {/* brauchen wir die form? */}
                <form action="">
                    <textarea ref={textareaRef} name="note" id="note" cols="48" rows="7"></textarea>
                </form>
            </section>
        </section>
    )
}
