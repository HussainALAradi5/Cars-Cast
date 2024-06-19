const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET
const hashPassword = async (password) => {
  //read new password
  let hashPassword = await bcrypt.hash(password, SALT_ROUNDS) //create hashed password with nth times encrypts
  return hashPassword
}
const comparePassword = async (storedPassword, password) => {
  //read both passwords,the login and the storedOne to compare both
  let passwordMatch = await bcrypt.compare(password, storedPassword)
  //if both passwords match return true otherwise false
  return passwordMatch
}
const createToken = (payload) => {
  //create token using the payload
  let token = jwt.sign(payload, APP_SECRET)
  //generate the token and encrypt it and return the token if the process finilize
  return token
}
const verifyToken = (req, res, next) => {
  const { token } = res.locals //pull the token stored in the request lifecycle state
  try {
    let payload = jwt.verify(token, APP_SECRET)
    if (payload) {
      res.locals.payload = payload //pull the decoded payload to the next function
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Verift TOken Error!' })
  }
}
const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1] //pull the token from request headrs
    if (token) {
      res.locals.token = token
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'Strip Token Error!' })
  }
}
module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword
}
