import React from "react";
import "./addcars.css";
import { MyVehiclesButtons } from "../reusables/myvehicles";
import './buttons.css';

export const AddCars = () => {
    return (
        <section>
            <div className="addCarsOverview">
                <div className="topButtons">
                    <button class="button-13" role="button">Bild Hinzufügen</button>
                    <button class="button-13" role="button">Fahrzeug Hinzufügen</button>
                </div>
                <div>
                    <MyVehiclesButtons />
                </div>
                <div className="angaben">
                    <input type="text" placeholder="Kennzeichen" />
                    <input type="text" placeholder="Marke" />
                    <input type="text" placeholder="Modell" />
                    <input type="text" placeholder="Kraftstoff" />
                    <input type="text" placeholder="Schadstoffklasse" />
                    <input type="text" placeholder="Leistung kW" />
                    <input type="text" placeholder="Leistung PS" />
                    <input type="text" placeholder="Kilometerstand" />
                    <input type="text" placeholder="Letzter TÜV Termin" />
                    <input type="text" placeholder="Letzter Ölwechsel" />
                    <input type="text" placeholder="Nächster Ölwechsel Nach Kilometern" />
                    <input type="text" placeholder="Datum Nächster Ölwechsel" />
                    <input type="text" placeholder="letzter Service" />
                </div>
            </div>
        </section>
    )
}