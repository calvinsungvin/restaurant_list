const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')

// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/', home)
// 將網址結構符合 /restaurants 字串開頭的 request 導向 todos 模組
router.use('/restaurants', restaurants)

module.exports = router