import express from 'express'
import route from './routes/carsRoutes.js'

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.use("/cars", route)

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})