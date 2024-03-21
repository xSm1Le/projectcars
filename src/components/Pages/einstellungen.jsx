
import './einstellungen.css';
import './buttons.css';


export const Einstellungen = () => {
    return (
        <section className="settingsMain"> 
            <div className="ueberschrift"> 
                <h1>Einstellungen</h1>
            </div>
            <div className="ueberschrift">
                <h3>Profileinstellungen</h3>
            </div>
            <div>
                <p>Dein Profilbild ändern</p>
                <button className="button-13">ändern </button>
                <p>Deinen Namen ändern</p>
                <button className="button-13">ändern</button>
                <p>Deine E-Mail ändern</p>
                <button className="button-13">ändern</button> 
                <p>Dein Passwort ändern</p>
                <button className="button-13">ändern</button>
            </div>
            <div className="ueberschrift">
                <h3 >App Einstellungen</h3>
                <p>Darkmode (in Arbeit)</p>
            </div>
        </section>
    )
}