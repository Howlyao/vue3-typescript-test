

const express = require('express');
const app = express(); 
const cors = require('cors');

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/chart-data', (req, res) => {
  let data = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  res.json(data)
})


app.post('/chart-value', (req, res) => {
  console.log(req.body)
  res.status(200).send('ok')
})

app.listen(3000, () => {
  console.log('start server')
})