let express =  require('express') 
let bodyparse = require('body-parser')
let router = require('./router')


let jsonParse = bodyparse.json()
let urlEncoded = bodyparse.urlencoded({extended: false})

let app = express()
app.use(jsonParse)
app.use(urlEncoded)
// 静态资源文件
app.use(express.static('static'))

// 后台登陆接口
app.post('/backLogin', router.backLogin)
app.post('/backRetrieve', router.backRetrieve)
app.post('/backupdate', router.backupdate)
app.post('/backIslogin', router.backIslogin)

//前端页面登陆，注册接口
app.post('/register', router.register)
app.post('/login', router.login)
app.post('/islogin', router.islogin)
app.post('/changeInfor', router.changeInfor)
app.post('/pwdUpdate', router.pwdUpdate) 

// 咖啡胶囊的接口
app.post('/getcoffeeCap', router.getcoffeeCap)
app.post('/coffFilter',router.coffFilter)
// 端口监听
app.listen(3000,() => {
  console.log('port: 3000')
})