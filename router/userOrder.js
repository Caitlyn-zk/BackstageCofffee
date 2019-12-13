// 用户订单表的回调函数
let common = require('../common/common')
let data = require('../control/data/data')

// 添加订单的回调函数
let addUserOrder = async (req, res) => {
  let userId = Number(req.body.userId || req.query.userId)
  let status = req.body.status || req.query.status
  let goods = req.body.goods || req.query.goods
  // 定义一个变量表示价格计算状态
  let count = 1
  goods = JSON.parse(goods)

  let totalprice = NaN
  let allTotal = 0
  // 以时间戳作为订单号，保证唯一性
  let orderNumber = Date.now()
  if (goods.length>0) {
    for(item of goods) {
      let npscommodity = Number(item.npscommodity)
      let commodity = Number(item.commodity)
      let quantity = Number(item.quantity)
      let isEmptyArr = [npscommodity, commodity, quantity]
      common.isempty(res, isEmptyArr)
      let getPrice = [npscommodity,commodity,npscommodity,commodity]
      let priceResult = await data.computed(getPrice) 
      if (priceResult) {
        let price = priceResult[0].price
        let discountPrice = priceResult[0].discountPrice
        // 计算单个商品的总价
        totalprice = discountPrice * quantity
        allTotal += totalprice
        // 生成订单号
        let adduserOrderArr = [npscommodity, commodity, userId, quantity, orderNumber, totalprice, status]
        let result = data.addUserOrder(adduserOrderArr)
        if (result) {
          count = count * 1
        } else {
          count = count * 0
          res.json({
            status: 500,
            message: '这个商品购物车添加失败'
          })
        }
      } else {
        return res.json({
          status: 500,
          message: '不存在这个商品'
        })
      }
    }
    if (count) {
      res.json({
        status: 200,
        data: {
          allTotal: allTotal,
          orderNumber: orderNumber
        },
        message: '添加订单成功'
      })
    } else {
      res.json({
        status: 500,
        message: '添加订单失败'
      })
    }
  }
}

module.exports = {
  addUserOrder
}