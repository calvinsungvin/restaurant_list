const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')

// 將網址結構符合 / 字串的 request 導向 home.js 模組
router.use('/', home)
// 將網址結構符合 /restaurants 字串開頭的 request 導向 restaurants.js 模組
router.use('/restaurants', restaurants)
// 將網址結構符合 /sort 字串開頭的 request 導向 sort.js 模組
router.use('/sort', sort)

module.exports = router