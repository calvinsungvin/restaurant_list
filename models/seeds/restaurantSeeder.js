  
const Restaurant = require('../restaurant')
const restaurantList = require('./restaurant.json')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')
const User = require('../user')
const bcrypt = require('bcryptjs')



const SEED_USER = [
{
  name: 'user1',
  email: 'user1@example.com',
  password: '12345678'
}, 
{
  name: 'user2',
  email: 'user2@example.com',
  password: '12345678'
}
]

db.once('open', () => {
  Promise.all(Array.from(
    { length: 2 },
    (_, i) => {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(SEED_USER[i].password, salt))
        .then(hash =>
          User.create({
            name: SEED_USER[i].name,
            email: SEED_USER[i].email,
            password: hash
          }))
        .then(user => {
          const userId = user._id
          const list = []
          restaurantList.results.forEach((restaurant, index) => {
            if (user.name === 'user1') {
              if (index < 3) {
                list.push(restaurant)
              }
            }
            if (user.name === 'user2') {
              if (index >= 3 && index < 6) {
                list.push(restaurant)
              }
            }
          })
          return { list, userId }
        })
        .then(data => {
          return Promise.all(Array.from(
            { length: 3 },
            (_, i) => Restaurant.create({
              name: data.list[i].name,
              name_en: data.list[i].name_en,
              category: data.list[i].category,
              image: data.list[i].image,
              location: data.list[i].location,
              phone: data.list[i].phone,
              google_map: data.list[i].google_map,
              rating: data.list[i].rating,
              description: data.list[i].description,
              userId: data.userId
            })
          ))
        })
        .then(() => {
          console.log('done.')
          process.exit()
        })
    }
  ))
})