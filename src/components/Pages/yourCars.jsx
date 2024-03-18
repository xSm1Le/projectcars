import { useEffect, useState } from "react";
import { MyVehiclesButtons } from "../reusables/myvehicles.jsx";
import './yourCars.css';


export const YourCars = () => {
    const [cartype, setCartype] = useState('');

 useEffect(() => {}, [cartype]);

    return (
        <section className="yourCars">
            <div>
                <MyVehiclesButtons setCartype={setCartype}/>
            </div>
            <div className="allImages">
                <div className="carImg">
                    <img src="../public/pwa-192x192.png" alt="Beispielbild Auto1" />
                    <h4>Carname 1</h4>
                </div>
                <div className="carImg">
                    <img src="../public/pwa-192x192.png" alt="Beispielbild Auto1" />
                    <h4>Carname 2</h4>
                </div>
                <div className="carImg">
                    <img src="../public/pwa-192x192.png" alt="Beispielbild Auto1" />
                    <h4>Carname 3</h4>
                </div>
                <div className="carImg">
                    <img src="../public/pwa-192x192.png" alt="Beispielbild Auto1" />
                    <h4>Carname 4</h4>
                </div>
            </div>
        </section>
    );
};