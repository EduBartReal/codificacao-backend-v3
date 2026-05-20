import express from 'express';
import { fruitServices } from '../services/fruitServices.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const fruits = await fruitServices.getAllFruits();
    res.json(fruits);
});

export default router;