import express from 'express'
import mongoose from 'mongoose'
import resultRoutes from './routes/resultRoutes.js'
import path from 'path'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 11400;


const app = express()
app.use(cors({ origin: "*" }))
app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
})

// mongoose.connect('mongodb://127.0.0.1:27017/resultDB')

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
    .catch(error => console.log(error))

app.use('/students', resultRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

