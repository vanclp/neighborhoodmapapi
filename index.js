const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const fetch = require('node-fetch')

const app = express()

app.use(cors())

//fetch details from yelp api
app.get('/location/:id', (req, res) => {
  const url = `${config.url}/${req.params.id}`
  fetch(url, { headers: { Authorization: `Bearer ${config.api}` } })
    .then(response => response.text())
    .then(body => res.send(body))
    .catch(err => {
      res.status(500)
    })
})

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})
