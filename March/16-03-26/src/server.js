const express = require('express')
const app = express()
const fruitsRoute = require('./routes/fruitsRoutes')

app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.send('There are no routes here.')
})

app.use('/fruits', fruitsRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})