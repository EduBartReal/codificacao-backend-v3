import express from 'express'
import { studentServices } from '../services/studentServices.js'

const route = express.Router()

route.get("/", (req, res) => {
    res.json(studentServices.getAll())
})

export default route