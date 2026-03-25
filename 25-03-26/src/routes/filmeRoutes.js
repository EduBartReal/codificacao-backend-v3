import express from 'express'
const route = express.Router()

import { filmeService } from '../services/filmeService.js'

route.get('/', (req, res) => {
    res.json(filmeService.getFilmes())
});

route.get('/:id', (req, res) => {
    const { id } = req.params
    const filme = filmeService.getById(id)

    if (!filme) {
        return res.status(404).json({
            msg: 'Filme não encontrado'
        })
    }
    res.json(filme)

})

export default route 