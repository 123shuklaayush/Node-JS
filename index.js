
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))

app.get('/hello', (req, res) => {
  res.send('Hello World!')
  // res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/contact.html', (req, res) =>{
  // res.sendFile(path.join(__dirname, 'contact.html'))
  // res.status(500)
  res.json({"Harry":42})
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})