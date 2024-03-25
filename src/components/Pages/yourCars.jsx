import { useEffect, useState } from "react";
import { useAuth } from "../global/checkStatus"; // Pfad anpassen
import { MyVehiclesButtons } from "../reusables/myvehicles.jsx";
import { jwtDecode } from 'jwt-decode'; // Importieren von jwt-decode
import './yourCars.css';
import config from '../global/configAPI';

export const YourCars = () => {
    const { token } = useAuth(); // Token aus Authentifizierungskontext
    const [cars, setCars] = useState([]); // Zustand für geladene Autos
    const [cartype, setCartype] = useState('');

    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId; // Ersetzen Sie dies durch Ihre Methode zur Extraktion der Benutzer-ID

            const fetchCars = async () => {
                try {
                    const response = await fetch(`${config.API_BASE_URL}/api/cars/user/${userId}`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error('Fehler beim Laden der Autos');
                    }

                    const data = await response.json();
                    if (cartype) {
                        // Filtern der Autos basierend auf dem ausgewählten Fahrzeugtyp
                        const filteredCars = data.cars.filter(car => car.fahrzeugart === cartype);
                        setCars(filteredCars);
                    } else {
                        // Setzen aller Autos, wenn kein spezifischer Typ ausgewählt wurde
                        setCars(data.cars);
                    }
                } catch (error) {
                    console.error("Fehler: ", error);
                }
            };

            fetchCars();
            
        }
    }, [token, cartype, cars]);

    return (
        <section className="yourCars">
            <div>
                <MyVehiclesButtons setCartype={setCartype}/>
            </div>
            <div className="allImages">
                {cars.map(car => (
                    <div key={car._id} className="carImg">
                       {/*  <img src="../public/pwa-192x192.png" alt="Beispielbild Auto" /> */}
                        <h4>{car.marke} {car.modell}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};
