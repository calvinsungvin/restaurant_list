const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

//showing adding new page
router.get('/new', (req, res) => {
    return res.render('new')
  })
  
  //Create
  router.post('/create', (req, res) => {
    if (req.body.image.length === 0) {
      req.body.image =
        'https://www.teknozeka.com/wp-content/uploads/2020/03/wp-header-logo-33.png'
    }
    const restaurant = req.body
    return Restaurant.create(restaurant)
      .then(() => res.redirect('/'))
      .catch((error) => console.error(error))
  })
  
  //Show Details
  router.get('/:id', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
      .lean()
      .then((restaurant) => res.render('show', { restaurant }))
      .catch((error) => console.error(error))
  })
  
  //Update (Get)
  router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
      .lean()
      .then((restaurant) => res.render('edit', { restaurant }))
      .catch((error) => console.error(error))
  })
  
  //Update (Post)
  router.put('/:id', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
      .then((restaurant) => {
        restaurant = Object.assign(restaurant, req.body)
        return restaurant.save()   
      })
      .then(() => res.redirect(`/restaurants/${id}`))
      .catch((error) => console.error(error))
  })
  
  //Delete
  router.delete('/:id', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
      .then((restaurant) => restaurant.remove())
      .then(() => res.redirect('/'))
      .catch((error) => console.error(error))
  })
  
  // Search
  router.get('/search', (req, res) => {
      const keyword = req.query.keyword
      console.log(req.query)
      console.log(keyword)
      Restaurant.find({ name: { $regex: keyword, $options: "i" } })
      .lean()
      .then(restaurants => res.render('index', { restaurants }))
      .catch(error => console.log(error))
    })
  


module.exports = router