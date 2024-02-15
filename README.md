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
