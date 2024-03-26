
import { useState, useEffect } from "react";
import { Calendar } from "react-calendar";

import React, { useState, useRef } from "react";
import { Calendar } from 'react-calendar';
import moment from 'moment';

import 'react-calendar/dist/Calendar.css';
import './kalender.css';
import { useAuth } from "../global/checkStatus"; 
import { jwtDecode } from 'jwt-decode';
import config from '../global/configAPI';

export const Kalender = () => {

    const [value, setValue] = useState(new Date());
    const [termine, setTermine] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        const fetchCars = async () => {
            if (!token) {
                console.error("Token ist nicht verfügbar.");
                return;
            }

            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;
            
            try {
                const response = await fetch(`${config.API_BASE_URL}/api/cars/user/${userId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!response.ok) throw new Error('Fehler beim Abrufen der Fahrzeuge');
                const { cars } = await response.json();

                // Extrahiere Termine aus den Fahrzeugdaten
                const fetchedTermine = cars.reduce((acc, car) => {
                    if (car.nächsteTüvUntersuchung) acc.push(new Date(car.nächsteTüvUntersuchung));
                    if (car.nächsteoelwechsel) acc.push(new Date(car.nächsteoelwechsel));
                    return acc;
                }, []);

                setTermine(fetchedTermine);
            } catch (error) {
                console.error("Fehler: ", error.message);
            }
        };

        fetchCars();
    }, [token]); // Nutze token als Abhängigkeit

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const isTerminTag = termine.some(terminDatum =>
                date.getFullYear() === terminDatum.getFullYear() &&
                date.getMonth() === terminDatum.getMonth() &&
                date.getDate() === terminDatum.getDate()
            );
            return isTerminTag ? 'terminTag' : null;
        }

    const [dateState, setDateState] = useState(new Date());
    const [selectedDateNote, setSelectedDateNote] = useState({});
    const [showTextarea, setShowTextarea] = useState(false);
    const textareaRef = useRef(null);

    const changeDate = (date) => {
        setDateState(date);
        setSelectedDateNote(notes => ({
            ...notes,
            [moment(date).format('DD.MM.YYYY')]: notes[moment(date).format('DD.MM.YYYY')] || null
        }));
    };

    const focusTextarea = () => {
        setShowTextarea(true);
/*         textareaRef.focus(); löst consolen fehler aus...warum*/
    };

    const hideTextarea = () => {
        setShowTextarea(false);
    };


    const handleNoteChange = (e) => {
        const note = e.target.value;
        setSelectedDateNote({
            ...selectedDateNote,
            [moment(dateState).format('DD.MM.YYYY')]: note
        });

    };

    return (
        <section>

            <h2>Kalender</h2>
            <Calendar onChange={setValue} value={value} tileClassName={tileClassName} />
        </section>
    );
};

export default Kalender;

            <section className='yourDates'>
                <h2 className='datesh2'>Kalender</h2>
                <Calendar value={dateState} onChange={changeDate} />
                <div className="termine">
                    {selectedDateNote[moment(dateState).format('DD.MM.YYYY')] !== null ? (
                        <p><b>{selectedDateNote[moment(dateState).format('DD.MM.YYYY')]}</b></p>
                    ) : (
                        <p>Du hast am {moment(dateState).format('DD.MM.YYYY')} keinen Termin</p>
                    )}
                </div>
            </section>
            <section>
                <div className='DButtons'>
                    <button className='DButton' onClick={showTextarea ? hideTextarea : focusTextarea}>
                        {showTextarea ? "Speichern" : "Termin hinzufügen"}
                    </button>
                </div>
                {showTextarea && (
                    <form className="text">
                        <textarea
                            ref={textareaRef}
                            name="note"
                            id="note"
                            cols="25"
                            rows="5"
                            value={selectedDateNote[moment(dateState).format('DD.MM.YYYY')] || ''}
                            onChange={handleNoteChange}
                        ></textarea>
                    </form>
                )}
            </section>
        </section>
    )
};

