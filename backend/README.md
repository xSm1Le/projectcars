# Autoverwaltungs-App Backend-Dokumentation

## Einrichtung

Stellen Sie sicher, dass Node.js und npm auf Ihrem System installiert sind.
Installieren Sie die notwendigen NPM-Pakete durch Ausführung von `npm install
express mongoose bcrypt jsonwebtoken dotenv cors` im Wurzelverzeichnis Ihres Projekts. 

Erstellen Sie eine `.env`-Datei im Wurzelverzeichnis und definieren Sie die Umgebungsvariablen

`MONGODB_URI` (Ihre MongoDB-Verbindungszeichenfolge) und `JWT_SECRET` (ein Geheimnis für die Signierung von JWTs).

## API-Endpunkte

### Benutzerverwaltung

- **Benutzer registrieren**
  - **POST /api/users/register**
  - Body: `{ "username": "beispieluser", "password": "sehrgeheimespasswort", "isAdmin": true }`

- **Benutzer anmelden**
  - **POST /api/users/login**
  - Body: `{ "username": "beispieluser", "password": "sehrgeheimespasswort" }`

- **Alle Benutzer anzeigen (nur Admin)**
  - **GET /api/users/**
  - Header: `Authorization: Bearer <token>`

- **Benutzer löschen (nur Admin)**
  - **DELETE /api/users/:id**
  - Header: `Authorization: Bearer <token>`


### Modelle

- **User-Modell (models/user.js)**
  - **username: String, erforderlich, eindeutig**
  - password: String, erforderlich
  - isAdmin: Boolean, erforderlich, Standardwert: false
