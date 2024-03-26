import { useEffect, useState } from "react";
import { useAuth } from "../global/checkStatus"; // Pfad anpassen
import { jwtDecode } from 'jwt-decode'; // Korrekter Import
import './yourCars.css';
import config from '../global/configAPI';
import { MyVehiclesButtons } from "../reusables/myvehicles";



export const YourCars = () => {
    const { token } = useAuth();
    const [cars, setCars] = useState([]);
    const [cartype, setCartype] = useState('');
    const [editingCarId, setEditingCarId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        nächsteTüvUntersuchung: '',
        nächsteoelwechsel: '',
        nächsteoelwechselKm: '',
    });

    useEffect(() => {
        const fetchCars = async () => {
            if (!token) return;
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;
            try {
                const response = await fetch(`${config.API_BASE_URL}/api/cars/user/${userId}`, {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!response.ok) throw new Error('Fehler beim Laden der Autos');
                const data = await response.json();
                setCars(cartype ? data.cars.filter(car => car.fahrzeugart === cartype) : data.cars);
            } catch (error) {
                console.error("Fehler: ", error);
            }
        };

        fetchCars();
    }, [token, cartype]);

    const handleDelete = async (carId) => {
        const confirmDelete = window.confirm('Möchten Sie dieses Auto wirklich löschen?');
        if (confirmDelete) {
        try {
            const response = await fetch(`${config.API_BASE_URL}/api/cars/${carId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Fehler beim Löschen des Autos');
            setCars(prev => prev.filter(car => car._id !== carId));
        } catch (error) {
            console.error("Fehler: ", error);
        }
    }
    };
    


    const handleEditClick = (carId) => {
        setEditingCarId(carId);
        const car = cars.find(car => car._id === carId);
        setEditFormData({
            nächsteTüvUntersuchung: car.nächsteTüvUntersuchung.split('T')[0], // YYYY-MM-DD
            nächsteoelwechsel: car.nächsteoelwechsel.split('T')[0], // YYYY-MM-DD
            nächsteoelwechselKm: car.nächsteoelwechselKm,
        });
    };

    const handleEditFormChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEditFormSubmit = async (e) => {
        e.preventDefault();
        // API-Aufruf zum Aktualisieren der Autodaten
        console.log("Submit", editFormData);
        // Setze den Bearbeitungsmodus zurück
        setEditingCarId(null);
    };

    return (
        <section className="yourCars">
            <div>
                <MyVehiclesButtons setCartype={setCartype} />
            </div>
            <div className="allImages">
                {cars.map(car => (
                    <div key={car._id} className="carImg">
                        {editingCarId === car._id ? (
                            <form onSubmit={handleEditFormSubmit}>
                                <input type="date" name="nächsteTüvUntersuchung" value={editFormData.nächsteTüvUntersuchung} onChange={handleEditFormChange} />
                                <input type="date" name="nächsteoelwechsel" value={editFormData.nächsteoelwechsel} onChange={handleEditFormChange} />
                                <input type="number" name="nächsteoelwechselKm" value={editFormData.nächsteoelwechselKm} onChange={handleEditFormChange} />
                                <button type="submit">Speichern</button>
                            </form>
                        ) : (
                            <>
                                <h4>{car.marke} {car.modell}</h4>
                                <p>Kennzeichen: {car.kennzeichen}</p>
                                <p>Kraftstoff: {car.kraftstoff}</p>
                                <p>Leistung: {car.leistungKW} kW / {car.leistungPS} PS</p>
                                <p>Kilometerstand: {car.kilometerstand} km</p>
                                <p>Nächste TÜV-Untersuchung: {new Date(car.nächsteTüvUntersuchung).toLocaleDateString()}</p>
                                <p>Nächster Ölwechsel: {new Date(car.nächsteoelwechsel).toLocaleDateString()}</p>
                                <p>Nächster Ölwechsel bei: {car.nächsteoelwechselKm} km</p>
                                <div className="buttonstyle">
                                    <button className="button-13" onClick={() => handleEditClick(car._id)}>Bearbeiten</button>
                                    <button className="button-13" onClick={() => handleDelete(car._id)}>Löschen</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
