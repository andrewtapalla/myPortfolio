require('dotenv').config()
const express = require('express')
const app = express()

// MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
//app.use(express.urlencoded({ extended: true }))
//app.use(methodOverride('_method'))

// CONTROLLER & ROUTES
app.use('/places', require('./controllers/places'))


// HOME
app.get('/', (req, res) => {
  res.render('home')
})

// GET /places
app.get('/', (req, res) => {
  res.render('places/index')
})

//ERROR 404
app.get('*', (req, res) => {
  res.send('404 page')
})

app.listen(process.env.PORT)