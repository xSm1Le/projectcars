import { SlideShow } from '../reusables/swiper';
import './landingpage.css';
import { useNavigate } from 'react-router';
import { useAuth } from '../global/checkStatus';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useEffect } from 'react';
import config from '../global/configAPI'; // Importiert die backend API-URL

export const Landingpage = () => {
    const navigate = useNavigate();
    const {isAuth} = useAuth(); // if token is available, isAuth is true
    const { token } = useAuth(); // token value is stored in token
    const [carWithNextAppointment, setCarWithNextAppointment] = useState(null);

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.userId;
    
                const fetchData = async () => {
                    const response = await fetch(`${config.API_BASE_URL}/api/cars/user/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    if (response.ok) {
                        const { cars } = await response.json();
                        const currentDate = new Date();
                        // Filtert Autos mit zukünftigen Terminen und sortiert sie
                        const futureCars = cars.filter(car => new Date(car.nächsteTüvUntersuchung) > currentDate);
                        const sortedFutureCars = futureCars.sort((a, b) => new Date(a.nächsteTüvUntersuchung) - new Date(b.nächsteTüvUntersuchung));
                        setCarWithNextAppointment(sortedFutureCars[0]); // Setzt das Auto mit dem nächstgelegenen zukünftigen Termin
                    }
                };
                fetchData();
            } catch (error) {
                console.error('Fehler bei der Decodierung des Tokens oder beim Abrufen der Daten:', error);
            }
        }
    }, [token]);
    
    //------------------------------------------------------------------    

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
                    <h3>Dein nächster Termin:</h3>
                    {carWithNextAppointment ? (
                        <div className='dateDiv'>
                            <p className='dateInfo'>{carWithNextAppointment.marke} {carWithNextAppointment.modell}</p>
                            <p className='dateInfo'>{carWithNextAppointment.kennzeichen}</p>
                            <p className='dateInfo'>{new Date(carWithNextAppointment.nächsteTüvUntersuchung).toLocaleDateString()}</p>
                        </div>
                    ) : (
                        <p className='dateDiv'>Kein Termin gefunden</p>
                    )}
                </div>
            </section>
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