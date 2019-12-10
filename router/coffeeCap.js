// 咖啡胶囊的回调函数
let common = require('../common/common')
let data = require('../control/data/data')
// 分页获取咖啡胶囊商品列表
let getcoffeeCap = async (req,res) => {
  let page = req.body.page || req.query.page
  let count = req.body.count || req.query.count
  page = Number(page)
  count = Number(count)
  common.isempty(res, [page, count])
  let start = (page - 1)*count
  let arr = [start,count]
  let result =await data.getCoffeeCapList(arr)
  if (result.length > 0) {
    res.json({
      status: 200,
      data: result,
      message: '分类查询成功'
    })
  } else {
    return res.json({
      status: 508,
      message: '分页失败'
    })
  }
}
// 咖啡胶囊筛选
let coffFilter = async (req,res) => {
  let classification = Number(req.body.coffeeClassification || req.query.coffeeClassification)
  let strength = Number(req.body.strength || req.query.strength)
  let aroma = Number(req.body.aroma || req.query.aroma)
  let capamount = Number(req.body.capamount || req.query.capamount)
  if(!classification && !strength && !aroma && !capamount) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  // 创建对象 获得发送的字符串
  let object = {}
  object.classification = classification
  object.strength = strength
  object.aroma = aroma
  object.capamount = capamount
  let str =''
  for(prop in object) {
    if(isNaN(object[prop])) {
      delete object[prop]
    } else {
        str += prop
    }
  }
  // 定义一个空数组
  let arr = []
  arr.push(classification, strength, aroma, capamount)
  arr = arr.filter(function(s){
    if(s !== NaN) {
      return s 
    }
  })
  let result = null
  switch (str) {
    case 'classification':
      result = await data.getCoffeeCapByClass(arr)
      break;
    case 'classificationstrength':
      result = await data.getCoffByClassStrength(arr)
      break;
    case 'classificationaroma':
      result = await data.getCoffByClassAroma(arr)
      break;
    case 'classificationcapamount':
      result = await data.getCoffByClassCapAmount(arr)
      break;    
    case 'classificationstrengtharoma':
      result = await data.getCoffByClassStrengthAroma(arr)
      break;
    case 'classificationaromacapamount':
      result = await data.getCoffByClassAromaCapamount(arr)
      break;
    case 'classificationstrengthcapamount':
      result = await data.getCoffByClassStrengthCapamount(arr)
      break;
    case 'classificationstrengtharomacapamount':
      result = await data.getCoffByClassStrengthAromaCapamount(arr)
      break;
    case 'strength':
      result = await data.getCoffeeCapByStrength(arr)
      break;  
    case 'strengtharoma':
      result = await data.getCoffByStrengthAroma(arr)
      break;
    case 'strengthcapamount':
      result = await data.getCoffByStrengthCapacount(arr)
      break;
    case 'strengtharomacapamount':
      result = await data.getCoffByStrengthAromaCapamount(arr)
      break;
    case 'aroma':
      result = await data.getCoffeeCapByAroma(arr)
      break;  
    case 'aromacapamount':
      result = await data.getCoffByAromaCapacount(arr)
      break;
    case 'capamount':
      result = await data.getCoffeeCapByCapamount(arr)
      break;
  }
  if (result) {
    res.json({
      status: 200,
      data: result
    })
  } else {
    res.json({
      status: 500,
      message: '没查到！'
    })
  }
}
// 按咖啡强度查询 
// let getCoffeeCapByStrength = async (req, res) => {
//   let strength = req.body.strength || req.query.strength
//   if (!strength) {
//     return res.json({
//       status: 500,
//       message: '请输入强度'
//     })
//   }

// }
module.exports = {
  getcoffeeCap,
  coffFilter
}
