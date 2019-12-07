// 公共方法的封装

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
module.exports = {
  variCode
}