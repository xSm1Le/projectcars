import { useEffect, useState } from "react";
import "./addvehicles.css";
import { MyVehiclesButtons } from "../reusables/myvehicles";
import './buttons.css';
import { CarForm } from "./Forms/carForm";
import { TrailerForm } from "./Forms/trailerForm";


export const AddAllCars = () => {
    const [cartype, setCartype] = useState('');

 useEffect(() => {}, [cartype]);


    return (
        <section>
            <div className="addCarsOverview">
                <div className="topButtons">
                    <button className="button-13" role="button">Bild Hinzufügen</button>
                    <button className="button-13" role="button">Fahrzeug Hinzufügen</button>
                </div>
                    <MyVehiclesButtons setCartype={setCartype}/>
                    {cartype === "car" && <CarForm cartype={cartype}/>}
                    {cartype === "bike" && <CarForm cartype={cartype}/>}
                    {cartype === "tractor" && <CarForm cartype={cartype}/>}
                    {cartype === "trailer" && <TrailerForm cartype={cartype}/>}
                    {cartype === "camper" && <CarForm cartype={cartype}/>}
            </div>
        </section>
    )
}