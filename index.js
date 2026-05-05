import express from 'express'
import mongoose from 'mongoose'
import resultRoutes from './routes/resultRoutes.js'
import path from 'path'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
})

mongoose.connect('mongodb://127.0.0.1:27017/resultDB')
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log(error))

app.use('/students', resultRoutes)

app.listen(11400, () => {
    console.log("Server is running at http://localhost:11400")
})

