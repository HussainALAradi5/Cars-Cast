const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')

const carRouter = require('./routes/car')
const daySpellRouter = require('./routes/daySpells')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const User = require('./models/user')
/* User.insertMany({
  userName: 'Hussain',
  email: 'hussainAradi.ha@gmail.com',
  type: 'client',
  isActive: true
}) */
const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

const methodOverride = require('method-override')
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

app.use('/', carRouter)
app.use('/user', userRouter)
app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT}`)
})
