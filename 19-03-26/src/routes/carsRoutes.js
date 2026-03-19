import express from 'express'
import { carsServices } from '../services/carsServices.js'

const route = express.Router()

route.get("/", (req, res) => {
    res.json(carsServices.getAll())
})

export default route