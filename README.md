# projectcars
finalproject from DCI

Fahrzeugdaten die angegeben werden sollten von dem User:
- KFZ-Kennzeichen
- Hersteller
- Fahrzeug-Typ
- Modell
- Erstzulassung
- Kraftstoffart
- Schadstoffklasse
- Leistung kW
- Leistung PS
- Kilometer Stand
- Letzter TÜV Termin
- Letzter Ölwechsel
- Nächster Ölwechsel Nach Kilometern
- Nächster Ölwechsel Nach Zeit
- Letzter Service / Inspection


API -  Backend .

## Benutzerverwaltung

### Registrierung neuer Benutzer
- **Endpoint:** `POST /users/register`
- **Beschreibung:** Erstellt ein neues Benutzerkonto.

### Benutzeranmeldung
- **Endpoint:** `POST /users/login`
- **Beschreibung:** Authentifiziert Benutzer und stellt ein Token bereit.

### Benutzerprofil
- **Endpoint:** `GET /users/{userId}/profile`
- **Beschreibung:** Ruft Benutzerprofildaten ab.

### Profilaktualisierung
- **Endpoint:** `PATCH /users/{userId}/profile`
- **Beschreibung:** Aktualisiert Benutzerprofildaten.

### Passwort ändern
- **Endpoint:** `POST /users/{userId}/change-password`
- **Beschreibung:** Ermöglicht Benutzern, das Passwort zu ändern.

## Automanagement

### Auflistung aller Autos
- **Endpoint:** `GET /cars`
- **Beschreibung:** Listet alle einem Benutzer zugeordneten Autos auf.

### Hinzufügen neuer Autos
- **Endpoint:** `POST /cars`
- **Beschreibung:** Registriert ein neues Auto im Benutzerprofil.

### Detailansicht für Autos
- **Endpoint:** `GET /cars/{carId}`
- **Beschreibung:** Ruft Details eines spezifischen Autos ab.

### Autodetails aktualisieren
- **Endpoint:** `PATCH /cars/{carId}`
- **Beschreibung:** Aktualisiert die Details eines spezifischen Autos.

### Auto löschen
- **Endpoint:** `DELETE /cars/{carId}`
- **Beschreibung:** Entfernt ein Auto aus dem Benutzerprofil.

### Bild für Auto hochladen
- **Endpoint:** `POST /cars/{carId}/image`
- **Beschreibung:** Ermöglicht das Hochladen eines Bildes für ein Auto.

## Terminplanung und Historie

### Service-Termine planen
- **Endpoint:** `POST /cars/{carId}/appointments`
- **Beschreibung:** Legt neue Wartungs- und Service-Termine an.

### Terminübersicht
- **Endpoint:** `GET /cars/{carId}/appointments`
- **Beschreibung:** Ruft geplante Termine für ein Auto ab.



# Fahrzeugdaten API-Endpunkte

Die API-Endpunkte für die AutoManagerPro App erlauben es Benutzern, spezifische Informationen zu ihren Fahrzeugen einzugeben und zu verwalten. Nachfolgend finden Sie die Details, die von den Benutzern für jedes Fahrzeug angegeben werden sollten.

## Fahrzeug hinzufügen

- **Endpoint:** `POST /cars`
- **Beschreibung:** Ermöglicht Benutzern das Hinzufügen eines Fahrzeugs mit den folgenden Daten:

    | Feld                             | Beschreibung                        | Typ        | Erforderlich |
    |----------------------------------|-------------------------------------|------------|--------------|
    | `licensePlate`                   | KFZ-Kennzeichen                     | String     | Ja           |
    | `manufacturer`                   | Hersteller                          | String     | Ja           |
    | `vehicleType`                    | Fahrzeug-Typ                        | String     | Ja           |
    | `model`                          | Modell                              | String     | Ja           |
    | `firstRegistration`              | Erstzulassung                       | Date       | Ja           |
    | `fuelType`                       | Kraftstoffart                       | String     | Ja           |
    | `emissionClass`                  | Schadstoffklasse                    | String     | Ja           |
    | `powerKW`                        | Leistung in kW                      | Number     | Ja           |
    | `powerPS`                        | Leistung in PS                      | Number     | Ja           |
    | `mileage`                        | Kilometerstand                      | Number     | Ja           |
    | `lastTUV`                        | Letzter TÜV Termin                  | Date       | Ja           |
    | `lastOilChange`                  | Letzter Ölwechsel                   | Date       | Ja           |
    | `nextOilChangeMileage`           | Nächster Ölwechsel nach Kilometern  | Number     | Nein         |
    | `nextOilChangeDate`              | Nächster Ölwechsel nach Zeit        | Date       | Nein         |
    | `lastServiceInspection`          | Letzter Service / Inspektion        | Date       | Nein         |

- **Beispiel für eine Anfrage:**

```json
{
  "licensePlate": "B-AB 1234",
  "manufacturer": "Volkswagen",
  "vehicleType": "PKW",
  "model": "Golf",
  "firstRegistration": "2015-04-01",
  "fuelType": "Benzin",
  "emissionClass": "Euro 6",
  "powerKW": 110,
  "powerPS": 150,
  "mileage": 85000,
  "lastTUV": "2022-06-01",
  "lastOilChange": "2022-07-01",
  "nextOilChangeMileage": 95000,
  "nextOilChangeDate": "2023-01-01",
  "lastServiceInspection": "2022-07-01"
}
