import React, { useState, useRef } from "react";
import { Calendar } from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import './kalender.css';

export const Kalender = () => {
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
