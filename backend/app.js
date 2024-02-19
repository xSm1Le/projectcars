import express from 'express'  
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './src/config/db.js'
import routes from './src/routes/indexRoute.js'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('API is running....')
}
);

app.use('/api', routes)

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// Path: backend/src/config/db.js