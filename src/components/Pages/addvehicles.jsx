
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../global/checkStatus'
import { MyVehiclesButtons } from '../reusables/myvehicles'
import './buttons.css'
import './addvehicles.css'

export const AddAllCars = () => {
  const navigate = useNavigate()
  const { token } = useAuth()
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
  // Die Arrays bleiben leer, wenn keine Einträge vorhanden sind
/*   const [kilometerstandHistory, setKilometerstandHistory] = useState([]);
  const [tuevHistory, setTuevHistory] = useState([]);
  const [oelwechselHistory, setOelwechselHistory] = useState([]);
  const [serviceHistory, setServiceHistory] = useState([]); */


  const handleSubmit = async (event) => {
    event.preventDefault();

    const fahrzeugDaten = {
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
    /*   kilometerstandHistory,
      tuevHistory,
      oelwechselHistory,
      serviceHistory */
    };

    try {
      const response = await fetch('https://carsdatabase.cyclic.app/api/cars/', {
        method: 'POST',
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
      else { alert('Fehler beim Hinzufügen des Fahrzeugs') }

    } catch (error) {
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
       
        
      {/*   <input type='text' placeholder='Kilometerstand Historie' value={kilometerstandHistory} onChange={(e) => setKilometerstandHistory(e.target.value)} />
        <input type='text' placeholder='Tüv Historie' value={tuevHistory} onChange={(e) => setTuevHistory(e.target.value)} />
        <input type='text' placeholder='Ölwechsel Historie' value={oelwechselHistory} onChange={(e) => setOelwechselHistory(e.target.value)} />
        <input type='text' placeholder='Service Historie' value={serviceHistory} onChange={(e) => setServiceHistory(e.target.value)} /> */}
        </div>
        </form>
      </div>
    </section>
  )
}
=======
import { useEffect, useState } from "react";
import "./addvehicles.css";
import { MyVehiclesButtons } from "../reusables/myvehicles";
import './buttons.css';
import { CarForm } from "./Forms/carForm";
import { TrailerForm } from "./Forms/trailerForm";


export const AddAllCars = () => {
    const [cartype, setCartype] = useState('');

 useEffect(() => {}, [cartype]);


    return (
        <section>
            <div className="addCarsOverview">
                <div className="topButtons">
                    <button className="button-13" role="button">Bild Hinzufügen</button>
                </div>
                    <MyVehiclesButtons setCartype={setCartype}/>
                    {cartype === "car" && <CarForm cartype={cartype}/>}
                    {cartype === "bike" && <CarForm cartype={cartype}/>}
                    {cartype === "tractor" && <CarForm cartype={cartype}/>}
                    {cartype === "trailer" && <TrailerForm cartype={cartype}/>}
                    {cartype === "camper" && <CarForm cartype={cartype}/>}
            </div>
        </section>
    )
}

