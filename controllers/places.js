const router = require('express').Router()

let places = [{
  name: 'Best Ramen',
  city: 'Las Vegas',
  state: 'NV',
  cuisines: 'Asian, Japanese',
  pic: 'http://placekitten.com/250/250'
}, {
  name: 'The Brunch Spot',
  city: 'Las Vegas',
  state: 'NV',
  cuisines: 'Brunch, Coffee',
  pic: 'http://placekitten.com/250/250'
}]

router.get('/', (req, res) => {
  res.render('places/index', { places })
})

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
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    res.render('places/show', { place: places[id] })
  }
})

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    res.render('places/edit', { place: places[id] })
  }
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    res.redirect(`/places/${id}`)
  }
})

module.exports = router