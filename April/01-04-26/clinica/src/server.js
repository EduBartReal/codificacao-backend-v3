import express from 'express'
import route from './routes/clinicaRoutes.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.json("No routes here")
})

app.use('/clinica', route)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})