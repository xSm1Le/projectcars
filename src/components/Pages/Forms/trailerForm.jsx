import '../buttons.css';

export const TrailerForm = ({cartype}) => {


    return (
        <form className="angaben" onSubmit={(e) => formFunction(e,cartype)}>
            <input type="text" placeholder="Kennzeichen" />
            <input type="text" placeholder="Marke" />
            <input type="text" placeholder="Modell" />
            <input type="text" placeholder="Max KM/H" />
            <input type="text" placeholder="Volumen / Größe" />
            <input type="text" placeholder="Letzter TÜV Termin" />
            <input type="text" placeholder="letzter Service" />
            <button className="button-13">Hinzufügen</button>
        </form>
    )
}