import express from 'express'  
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './src/routes/userRoutes.js'

dotenv.config() // Zugriff auf .env-Datei

const app = express(); // Express-App
const port = process.env.PORT || 5000; // Port

app.use(cors()); // CORS
app.use(express.json()); // JSON-Parser

// Datenbankverbindung
mongoose.connect(process.env.MONGODB_URI, {
  
}).then(() => console.log('MongoDB Verbindung erfolgreich.'))
  .catch(err => console.error('MongoDB Verbindung fehlgeschlagen: ', err)); // MongoDB-Verbindung herstellen


app.use('/api/users', userRouter) // User-Router


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)  // Server starten
});
