const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  res.json({ message: 'Hello!' })
})

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Running on port ${port} `)
})
