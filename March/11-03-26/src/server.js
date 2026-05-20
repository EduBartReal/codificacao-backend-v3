const express = require('express')
const app = express()
const port = 3000

const students = [
  {id: 1, name: "Édio", years: 35},
  {id: 2, name: "Educas", years: 17},
  {id: 3, name: "Maricas", years: 17},
]

const fruits = [
  {name: "banana", price:5.00},
  {name: "apple", price:3.00},
  {name: "tomato", price:2.50},
]

app.get('/fruits', (req, res) => {
  res.json({
    sucess: true,
    data: fruits,
  })
})

app.get('/', (req, res) => {
  res.send('paz gamer')
})

app.get('/students', (req, res) => {
  res.json({
    sucess: true,
    data: students,
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})