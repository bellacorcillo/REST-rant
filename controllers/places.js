const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

  router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })

  router.get('/:id', (req, res) => {
    res.render('places/show')
  })  
  
  

module.exports = router
