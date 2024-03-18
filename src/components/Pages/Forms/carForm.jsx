import '../buttons.css';

export const CarForm = ({cartype}) => {


    return (
        <form className="angaben" onSubmit={(e) => formFunction(e,cartype)}>
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
            <button className="button-13">Hinzufügen</button>
        </form>
        
    )
}