const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

let messages = []

app.post('/send', (req, res) => {
  messages.push(req.body)
  console.log("Data masuk:", req.body)
  res.json({ success: true })
})

app.get('/messages', (req, res) => {
  res.json(messages)
})

const PORT = 3000
app.listen(PORT, '0.0.0.0', () => {
  console.log('Server berjalan di port', PORT)
})
