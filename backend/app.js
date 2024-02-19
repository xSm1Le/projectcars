import express from 'express'  
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './src/config/db.js'


dotenv.config()

connectDB()

