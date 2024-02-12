import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './src/routes/userRoutes.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Datenbankverbindung
mongoose.connect(process.env.MONGODB_URI, {
  
}).then(() => console.log('MongoDB Verbindung erfolgreich.'))
  .catch(err => console.error('MongoDB Verbindung fehlgeschlagen: ', err));


app.use('/api/users', userRouter)


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});
