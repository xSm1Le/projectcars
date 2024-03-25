
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../global/checkStatus'
import { MyVehiclesButtons } from '../reusables/myvehicles'
import { jwtDecode }  from 'jwt-decode'
import './buttons.css'
import './addvehicles.css'
import  config  from '../global/configAPI'

export const AddAllCars = () => {
  const navigate = useNavigate()
  const { token } = useAuth()
  const decodedToken = jwtDecode(token);// Entschlüsseln des Tokens
  const userId = decodedToken.userId; // Extrahieren der Benutzer-ID aus dem Token
  const [fahrzeugart, setFahrzeugart] = useState(''); // Standardwert als PKW
  const [kennzeichen, setKennzeichen] = useState('');
  const [marke, setMarke] = useState('');
  const [modell, setModell] = useState('');
  const [baujahr, setBaujahr] = useState('');
  const [kraftstoff, setKraftstoff] = useState('');
  const [schadstoffklasse, setSchadstoffklasse] = useState('');
  const [leistungKW, setLeistungKW] = useState('');
  const [leistungPS, setLeistungPS] = useState('');
  const [kilometerstand, setKilometerstand] = useState('');
  const [nächsteTüvUntersuchung, setNächsteTüvUntersuchung] = useState('');
  const [nächsteoelwechsel, setNächsteoelwechsel] = useState('');
  const [nächsteoelwechselKm, setNächsteoelwechselKm] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fahrzeugDaten = {
      userId,
      fahrzeugart,
      kennzeichen,
      marke,
      modell,
      baujahr, // Achten Sie darauf, die Daten korrekt zu konvertieren, falls nötig
      kraftstoff,
      schadstoffklasse,
      leistungKW: Number(leistungKW),
      leistungPS: Number(leistungPS),
      kilometerstand: Number(kilometerstand),
      nächsteTüvUntersuchung: new Date(nächsteTüvUntersuchung),
      nächsteoelwechsel: new Date(nächsteoelwechsel),
      nächsteoelwechselKm: Number(nächsteoelwechselKm),
    
    };
 console.log(token)
    try {
      const response = await fetch(`${config.API_BASE_URL}/api/cars/addCar`, {
        method: 'POST',
        /* credentials: 'omit', */
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(fahrzeugDaten)
      })

      if (response.ok) {
        alert('Fahrzeug erfolgreich hinzugefügt');
        navigate('/myvehicles')
      }
      else {
        const errorResponse = await response.json();
        alert(errorResponse.message || 'Ein Fehler ist aufgetreten.');
    }

    } catch (error) {
      console.log (fahrzeugDaten)
      console.error(error)
    }

  };

  return (
    <section>
      <div className='addCarsOverview'>
        <form onSubmit={handleSubmit}>
        <div className='topButtons'>
          <button className='button-13' role='button'>
            Bild Hinzufügen
          </button>
          <button className='button-13' role='button' type='submit' >
            Fahrzeug Hinzufügen
          </button>
        </div>
        <div>
          <MyVehiclesButtons />
        </div>
        <div className='angaben'>
        <div>
            <label>Fahrzeugart:</label>
            <select value={fahrzeugart} onChange={(e) => setFahrzeugart(e.target.value)}>
              <option value="car">PKW</option>
              <option value="bike">Motorrad</option>
              <option value="tractor">Traktor</option>
              <option value="trailer">Anhänger</option>
              <option value="camper">Wohnmobil</option>
            </select>
          </div>
        <input type='text' placeholder='Kennzeichen' value={kennzeichen} onChange={(e) => setKennzeichen(e.target.value)} />
        <input type='text' placeholder='Marke' value={marke} onChange={(e) => setMarke(e.target.value)} />
        <input type='text' placeholder='Modell' value={modell} onChange={(e) => setModell(e.target.value)} />
        <input type='number' placeholder='Baujahr' value={baujahr} onChange={(e) => setBaujahr(e.target.value)} />
        <input type='text' placeholder='Kraftstoff' value={kraftstoff} onChange={(e) => setKraftstoff(e.target.value)} />
        <input type='text' placeholder='Schadstoffklasse' value={schadstoffklasse} onChange={(e) => setSchadstoffklasse(e.target.value)} />
        <input type='number' placeholder='Leistung in kW' value={leistungKW} onChange={(e) => setLeistungKW(e.target.value)} />
        <input type='number' placeholder='Leistung in PS' value={leistungPS} onChange={(e) => setLeistungPS(e.target.value)} />
        <input type='number' placeholder='Kilometerstand' value={kilometerstand} onChange={(e) => setKilometerstand(e.target.value)} />
        <input type='number' placeholder='Nächster Ölwechsel bei Kilometerstand' value={nächsteoelwechselKm} onChange={(e) => setNächsteoelwechselKm(e.target.value)} />
        <input type='date' placeholder='Nächste Tüv Untersuchung' value={nächsteTüvUntersuchung} onChange={(e) => setNächsteTüvUntersuchung(e.target.value)} />
        <input type='date' placeholder='Nächster Ölwechsel' value={nächsteoelwechsel} onChange={(e) => setNächsteoelwechsel(e.target.value)} />
       
        
     
        </div>
        </form>
      </div>
    </section>
  )
}

