export const MyCarFormModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Dein Fahrzeug</h2>
            </div>
            <form>
                <li>
                    <label htmlFor="marke">Marke</label>
                    <input type="text" id="marke" name="marke" />
                </li>
                <li>
                    <label htmlFor="modell">Modell</label>
                    <input type="text" id="modell" name="modell" />
                </li>
                <li>
                    <label htmlFor="kennzeichen">Kennzeichen</label>
                    <input type="text" id="kennzeichen" name="kennzeichen" />
                </li>
                <li>
                    <label htmlFor="kilometerstand">Kilometerstand</label>
                    <input type="text" id="kilometerstand" name="kilometerstand" />
                </li>
                <li>
                    <label htmlFor="nächsterTÜV">Nächster TÜV</label>
                    <input type="text" id="nächsterTÜV" name="nächsterTÜV" />
                </li>
                <li>
                    <label htmlFor="nächsterÖlwechsel">Nächster Ölwechsel</label>
                    <input type="text" id="nächsterÖlwechsel" name="nächsterÖlwechsel" />
                </li>
            </form>
            <div>
                <button>Fahrzeug löschen</button>
                <button onClick={onClose}>Schließen</button>
            </div>
        </div>
    )
};

