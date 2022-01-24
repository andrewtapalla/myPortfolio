const router = require('express').Router()
//const places = require(../models/places.js)

router.get('/', (req, res) => {
    res.render('places/index')
})



module.exports = router