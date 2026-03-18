import express from 'express'

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.json('No routes here')
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})