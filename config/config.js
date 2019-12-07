let mysqlConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'nespresso'
}
let emailConfig = {
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: '2622353599@qq.com',
    pass: 'hjpavdauzrkzeagd'  
  }
}
module.exports = {
  mysqlConfig,
  emailConfig
}