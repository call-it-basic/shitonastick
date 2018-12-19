const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<img src="https://image.shutterstock.com/image-vector/shit-ice-cream-on-stick-450w-1226591767.jpg">'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
