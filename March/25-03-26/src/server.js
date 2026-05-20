import express from 'express'
import route from './routes/filmeRoutes.js'
const app = express()
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta https://localhost:${PORT}`)
})

app.get("/", (req, res) => {
    res.json("No routes here" )
})

app.use('/filmes', route)