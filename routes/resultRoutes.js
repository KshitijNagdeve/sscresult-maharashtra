import express from 'express'
import { getResult } from '../controller/resultController.js'

const router = express.Router()

router.post('/result', getResult)

export default router