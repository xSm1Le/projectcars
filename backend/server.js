import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './src/routes/userRoutes.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))

app.use('/api/users', userRouter)


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
