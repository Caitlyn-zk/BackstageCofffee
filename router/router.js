let backLogin = require('./backLogin')
let login = require('./login')
let router = Object.assign({}, backLogin, login)
module.exports = router
