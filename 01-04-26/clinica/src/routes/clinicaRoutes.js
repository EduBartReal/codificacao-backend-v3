import express from 'express'
import { clinicaServices } from '../services/clinicaServices.js'

const route = express.Router()

route.get('/', (req, res) => {
    res.json(clinicaServices.getAll())
})

route.get('/:id', (req, res) => {
    const { id } = req.params
    const paciente = clinicaServices.getById(id)
    if (!paciente) return res.status(404).json({ message: 'Paciente não encontrado' })
    res.json(paciente)
})

route.post('/', (req, res) => {
    const { name, idade } = req.body
    if (!name || !idade) {
        return res.status(400).json({ message: 'Nome e idade são obrigatórios' })
    }
    const newPaciente = clinicaServices.create({ name, idade })
    res.status(201).json(newPaciente)
})

route.patch('/:id', (req, res) => {
    const { id } = req.params
    const atualizado = clinicaServices.updatePatch(id, req.body)
    if (!atualizado) return res.status(404).json({ message: 'Paciente não encontrado' })
    res.json(atualizado)
})

route.put('/:id', (req, res) => {
    const { id } = req.params
    const { name, idade } = req.body
    if (!name || !idade) {
        return res.status(400).json({ message: 'Nome e idade são obrigatórios para substituição completa' })
    }
    const atualizado = clinicaServices.updatePut(id, { name, idade })
    if (!atualizado) return res.status(404).json({ message: 'Paciente não encontrado' })
    res.json(atualizado)
})

route.delete('/:id', (req, res) => {
    const { id } = req.params
    const deleted = clinicaServices.delete(id)
    if (!deleted) return res.status(404).json({ message: 'Paciente não encontrado' })
    res.status(204).send()
})

export default route