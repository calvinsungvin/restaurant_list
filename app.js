const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const session = require('express-session')

const usePassport = require('./config/passport')
require('./config/mongoose')

//handlebars setup
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(session({
  secret: "This is my secret",
  resave: false,
  saveUninitialized: true
}))
//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
//static files setup
app.use(express.static('public'))
//method-override
app.use(methodOverride('_method'))

usePassport(app)

// showing pages
app.use(routes)


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})