const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/numbers', function (req, res) {
    res.json([1,2,3,4,5]);
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})