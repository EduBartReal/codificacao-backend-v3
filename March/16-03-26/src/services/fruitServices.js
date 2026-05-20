const fruits = require('../data/fruits')

const getById = (id) => {
    return fruits.find(f => f.id === parseInt(id))
}

module.exports = { getById }