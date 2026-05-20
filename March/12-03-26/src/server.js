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
    success: true,
    data: fruits,
  })
})

app.get('/', (req, res) => {
  res.send('paz gamer')
})

// app.get('/students', (req, res) => {
//   res.json({
//     success: true,
//     data: students,
//   })
// })

// GET - buscar aluno by id

app.get('/students/:id', (req, res) =>{
  const id = parseInt(req.params.id)
  const student = students.find(a => a.id === id)
  if (!student) {
    return res.status(404).json({
      success: false,
      message: 'student not found'
    })
  }

  res.json({
    success: true,
    data: student
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//POST - create a new student

app.post('/students', (req, res) =>{
  const{names, years} = req.body

  if (!names || !years){
    return res.status(400).json({
      success: false,
      message: "name and years are necessary"
    })
  }


const newStudent = {
  id: alunos.leght + 1,
  names,
  years,
}

students.push(newStudent)

res.status(201).json({
  success: true,
  data: newStudent,
  message: "Cool"
})

})