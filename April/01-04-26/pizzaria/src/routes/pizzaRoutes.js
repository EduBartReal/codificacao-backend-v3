import express from 'express'
const route = express.Router()

import { pizzasServices } from '../services/pizzaServices.js'

route.get('/', (req, res) => {
    res.json(pizzasServices.getPizzas())
});

route.get('/:id', (req, res) => {
    const { id } = req.params
    const pizza = pizzasServices.getById(id)

    if (!pizza) {
        return res.status(404).json({
            msg: 'Pizza nao encontrada'
        })
    }
    
    res.json(pizza);
});

export default route;
