const express = require('express')
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()
const router = require('./routes/index')
require('./config/database')
const mongo = require('connect-mongodb-session')(session)
const store = new mongo({
    uri: process.env.MONGODB,
    collection: 'sessions'
})

const app = express()

app.use(cors())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: store
}))

app.use('/', router)

app.listen(4000, () => console.log('Server listening on port 4000'))