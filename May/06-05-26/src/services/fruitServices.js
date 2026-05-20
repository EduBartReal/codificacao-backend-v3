import pool from '../db/fruits.js';

class FruitServices {
    async getAllFruits() {
        const result = await pool.query('SELECT * FROM public."edu-bartellt_frutas"');
        return result.rows;
    }
}

export const fruitServices = new FruitServices();