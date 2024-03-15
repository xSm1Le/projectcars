import React from "react";
import "./myvehicles.css";

export const MyVehiclesButtons = ({setCartype}) => {
    return (
        <section  className="vehicleSection">
                <div className="iconsButtons">
                    <div className="icons" onClick={() => setCartype("car")}>
                        <img src="../icons_liste/autos.png" alt="Beispielbild Auto" className="vehicleimg" />
                    </div>
                    <div className="icons" onClick={() => setCartype("bike")}>
                        <img src="../icons_liste/motorrad.png" alt="Beispielbild Zweirad" className="vehicleimg" />
                    </div>
                    <div className="icons"onClick={() => setCartype("tractor")}>
                        <img src="../icons_liste/traktor.png" alt="Beispielbild GroßFahrzeug" className="vehicleimg" />
                    </div>
                    <div className="icons"onClick={() => setCartype("trailer")}>
                        <img src="../icons_liste/anhanger.png" alt="Beispielbild Anhänger" className="vehicleimg" />
                    </div>
                    <div className="icons"onClick={() => setCartype("camper")}>
                        <img src="../icons_liste/wohnmobil.png" alt="Beispielbild Wohnmobile" className="vehicleimg" />
                    </div>
                </div>
        </section>
    )
}