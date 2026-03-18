import express from 'express'
import route from './routes/studentRoutes.js'


const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.json('hi')
})

app.use("/students", route)

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})