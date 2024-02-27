import React from "react";
import "./myvehicles.css";

export const MyVehiclesButtons = () => {
    return (
        <section>
                <div className="iconsButtons">
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild Auto" />
                    </div>
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild Zweirad" />
                    </div>
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild GroßFahrzeug" />
                    </div>
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild Anhänger" />
                    </div>
                    <div className="icons">
                        <img src="../public/pwa-192x192.png" alt="Beispielbild Wohnmobile" />
                    </div>
                </div>
        </section>
    )
}