const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// routes setting
app.get('/', (req, res) => {
 res.render('index', {restaurants: restaurantList.results})
})



  app.get('/restaurants/:r_id', (req, res) => {
    const restaurant = restaurantList.results.find(r => r.id.toString() === req.params.r_id)
    res.render('show', { r: restaurant })
  })

//   app.get('/search', (res, req) => {
//       const keyword = req.query.keyword
//       const r = restaurantList.results.filter((r) => {
//           return r.name.toLowerCase().includes(req.query.keyword.toLowerCase())
//       })
//       res.render('index', {restaurants: restaurantList.results, keyword})
//   })

app.get('/search', (req, res) => {
    const keyword = req.query.keyword
    const restaurants = restaurantList.results.filter(restaurant => restaurant.name.toLowerCase().includes(keyword.toLowerCase()))
    res.render('index', { restaurants, keyword })
  })

  app.use(express.static('public'))

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})