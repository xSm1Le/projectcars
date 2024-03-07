import React from "react";
import "./myvehicles.css";

export const MyVehiclesButtons = () => {

    return (
        <section  className="vehicleSection">
                <div className="iconsButtons">
                    <div className="icons">
                        <img src="../icons_liste/autos.png" alt="Beispielbild Auto" className="vehicleimg" />
                    </div>
                    <div className="icons">
                        <img src="../icons_liste/motorrad.png" alt="Beispielbild Zweirad" className="vehicleimg" />
                    </div>
                    <div className="icons">
                        <img src="../icons_liste/traktor.png" alt="Beispielbild GroßFahrzeug" className="vehicleimg" />
                    </div>
                    <div className="icons">
                        <img src="../icons_liste/anhanger.png" alt="Beispielbild Anhänger" className="vehicleimg" />
                    </div>
                    <div className="icons">
                        <img src="../icons_liste/wohnmobil.png" alt="Beispielbild Wohnmobile" className="vehicleimg" />
                    </div>
                </div>
        </section>
    )
}