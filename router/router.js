let backLogin = require('./backLogin')
let login = require('./login')
let coffeeCap = require('./coffeeCap')
let coffeeMachine = require('./coffeeMachine')
let router = Object.assign({}, backLogin, login, coffeeCap, coffeeMachine)

module.exports = router
