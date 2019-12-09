// 公共方法的封装
/**
 * 生成随机四位验证码
 */
let variCode = () => {
  const str = '1234567890abcdefghijklmnopqrstuvwxyz'
  let newStr = ''
  let n = NaN
  for (i = 0 ;i < 4; i++ ) {
    n = Math.floor(Math.random()*(str.length))
    newStr += str[n]
  }
  return newStr
}
/**
 * 邮箱验证的方法封装
 * @param {String} email 
 */
const variEmail = (email) => {
  let reg = new RegExp('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')
  return reg.test(email)
}
/**
 * 手机验证的封装方法
 * @param {String} phone  电话号码
 */
const variPhone = (phone) => {
  let reg = new RegExp(/^1[34578]\d{9}$/)
  return reg.test(phone)
}
/**
 * 验证信息是否为空
 * @param {Function} res 服务器的方法 
 * @param {Arr} data 需要验证的 数组  
 */
const isempty = (res,data) => {
  for (item of data) {
    if (!item) {
      return res.json({
        status: 500,
        message: '请输入正确的信息'
      })
    }
  }
}
 
module.exports = {
  variCode,
  variEmail,
  isempty,
  variPhone
}