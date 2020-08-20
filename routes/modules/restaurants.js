const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

//showing adding new page
router.get('/new', (req, res) => {
    return res.render('new')
  })
  
  //Create
  router.post('/create', (req, res) => {
    const userId = req.user._id
    const {name} = req.body
    return Restaurant.create({ name, userId })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
  })
  
  //Show Details
  router.get('/:id', (req, res) => {
    const _id = req.params.id
    const userId = req.user._id
    return Restaurant.findOne({_id, userId})
      .lean()
      .then((restaurant) => res.render('show', { restaurant }))
      .catch((error) => console.error(error))
  })
  
  //Update (Get)
  router.get('/:id/edit', (req, res) => {
    const userId = req.user._id
    const _id = req.params.id
    return Restaurant.findOne({_id, userId})
      .lean()
      .then((restaurant) => res.render('edit', { restaurant }))
      .catch((error) => console.error(error))
  })
  
  //Update (Post)
  router.put('/:id', (req, res) => {
    const userId = req.user._id
    const _id = req.params.id

    return Restaurant.findOne({_id, userId})
      .then((restaurant) => {
        restaurant = Object.assign(restaurant, req.body)
        return restaurant.save()   
      })
      .then(() => res.redirect('/'))
      .catch((error) => console.error(error))
  })
  
  //Delete
  router.delete('/:id', (req, res) => {
    const userId = req.user._id
    const _id = req.params.id

    return Restaurant.findOne({_id, userId})
      .then((restaurant) => restaurant.remove())
      .then(() => res.redirect('/'))
      .catch((error) => console.error(error))
  })
  


module.exports = router