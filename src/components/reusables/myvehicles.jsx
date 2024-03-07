import React from "react";
import "./myvehicles.css";

export const MyVehiclesButtons = () => {

    return (
        <section  className="vehicleSection">
                <div className="iconsButtons">
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild Auto" className="vehicleimg" />
                    </div>
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild Zweirad" className="vehicleimg" />
                    </div>
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild GroßFahrzeug" className="vehicleimg" />
                    </div>
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild Anhänger" className="vehicleimg" />
                    </div>
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild Wohnmobile" className="vehicleimg" />
                    </div>
                </div>
        </section>
    )
}