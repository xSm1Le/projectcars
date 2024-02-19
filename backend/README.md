# Autoverwaltungs-App Backend-Dokumentation

## Einrichtung

Stellen Sie sicher, dass Node.js und npm auf Ihrem System installiert sind.
Installieren Sie die notwendigen NPM-Pakete durch Ausführung von `npm install
express mongoose bcrypt jsonwebtoken dotenv cors` im Wurzelverzeichnis Ihres Projekts. 

Erstellen Sie eine `.env`-Datei im Wurzelverzeichnis und definieren Sie die Umgebungsvariablen

`MONGODB_URI` (Ihre MongoDB-Verbindungszeichenfolge) und `JWT_SECRET` (ein Geheimnis für die Signierung von JWTs).

## API-Endpunkte



### Benutzerregistrierung

- **URL**: `/users/register`
- **Methode**: `POST`
- **Body-Parameter**:
  - `email`: Die E-Mail-Adresse des Benutzers.
  - `password`: Das Passwort des Benutzers.
  - `superPassword`: Das Super Passwort für die Passwortzurücksetzung.
- **Antwort**:
  - **Erfolg**: Statuscode 201 mit einer Nachricht, dass der Benutzer erfolgreich registriert wurde.
  - **Fehler**: Statuscode 400 bei Validierungsfehlern oder 500 bei Serverfehlern.

### Benutzeranmeldung

- **URL**: `/users/login`
- **Methode**: `POST`
- **Body-Parameter**:
  - `email`: Die E-Mail-Adresse des Benutzers.
  - `password`: Das Passwort des Benutzers.
- **Antwort**:
  - **Erfolg**: Statuscode 200 mit einem JWT im Antwortbody.
  - **Fehler**: Statuscode 401 bei falschen Anmeldedaten oder 500 bei Serverfehlern.

### Passwortzurücksetzung

- **URL**: `/users/reset-password`
- **Methode**: `POST`
- **Body-Parameter**:
  - `email`: Die E-Mail-Adresse des Benutzers.
  - `superPassword`: Das Super Passwort des Benutzers.
  - `newPassword`: Das neue Passwort des Benutzers.
- **Antwort**:
  - **Erfolg**: Statuscode 200 mit einer Nachricht, dass das Passwort erfolgreich zurückgesetzt wurde.
  - **Fehler**: Statuscode 401 bei falschem Super Passwort oder 500 bei Serverfehlern.

### Alle Benutzer anzeigen

- **URL**: `/users`
- **Methode**: `GET`
- **Antwort**:
  - **Erfolg**: Statuscode 200 mit einer Liste von Benutzer-E-Mails.
  - **Fehler**: Statuscode 500 bei Serverfehlern.

### E-Mail-Adresse ändern

- **URL**: `/user/email`
- **Methode**: `PUT`
- **Body-Parameter**:
  - `userId`: Die ID des Benutzers, dessen E-Mail geändert werden soll.
  - `newEmail`: Die neue E-Mail-Adresse des Benutzers.
- **Antwort**:
  - **Erfolg**: Statuscode 200 mit einer Bestätigungsnachricht.
  - **Fehler**: Statuscode 400, wenn die E-Mail bereits verwendet wird; Statuscode 404, wenn der Benutzer nicht gefunden wird; Statuscode 500 bei Serverfehlern.

## Fehlerbehandlung

Alle Endpunkte geben im Fehlerfall ein JSON-Objekt zurück, das mindestens ein `message` Feld mit einer Beschreibung des Fehlers enthält.
