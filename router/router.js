let backLogin = require('./backLogin')
let login = require('./login')
let coffeeCap = require('./coffeeCap')
let router = Object.assign({}, backLogin, login, coffeeCap)

module.exports = router
