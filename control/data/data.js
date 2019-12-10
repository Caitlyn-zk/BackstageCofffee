let backLogin = require('./backLogin')
let login = require('./login')
let coffeeCap = require('./coffeeCap')
let data = Object.assign({},backLogin, login, coffeeCap)
module.exports = data