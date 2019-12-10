// 咖啡胶囊的数据操作
let query = require('../mysql')
/**
 * 分页获取咖啡胶囊的数据
 * @param {*} data  [start count]
 */
let getCoffeeCapList =async (data) => {
  let sql = 'select * from coffeeCapsule order by createTime desc limit ?, ?'
  let result = await query(sql, data).then((data) => {
    if(data.length > 0) {
      return data
    } else {
      return false 
    }
  })
  return result
}
/**
 * 通过分类获取咖啡胶囊
 * @param {Number} data 'coffeeClassification' 
 */
let getCoffeeCapByClass =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE fragrance.id = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过强度获取咖啡胶囊
 * @param {String} data  'strength'
 */
let getCoffeeCapByStrength =async  (data) => {
  let sql = 'select * from coffeeCapsule where strength = ? order by createTime desc'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过香调获取咖啡胶囊分类
 * @param {Number} data '香调' 
 */
let getCoffeeCapByAroma =async  (data) => {
  let sql = 'select * from coffeeCapsule where aroma = ? order by createTime desc'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过杯量获取咖啡胶囊分类
 * @param {Number} data '杯量' 
 */
let getCoffeeCapByCapamount =async  (data) => {
  let sql = 'select * from coffeeCapsule where capAmount = ? order by createTime desc'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过分类和强度查询咖啡胶囊的数据
 * @param {arr} data ['分类','强度']
 */
let getCoffByClassStrength =async  (data) => {
  let sql = 'select * from coffeeCapsule where coffeeClassification = ? && strength = ? order by createTime desc '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过分类和杯量查询咖啡胶囊的数据
 * @param {arr} data ['分类','杯量']
 */
let getCoffByClassCapAmount =async  (data) => {
  let sql = 'select * from coffeeCapsule where coffeeClassification = ? && capAmount = ?  order by createTime desc '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过分类和香调查询咖啡胶囊的数据
 * @param {arr} data ['分类','香调']
 */
let getCoffByClassAroma =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE cCap.coffeeClassification=? && fragrance.id = ? '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过强度和香调查询咖啡胶囊的数据
 * @param {arr} data ['咖啡强度','香调']
 */
let getCoffByStrengthAroma  =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE cCap.strength=? && fragrance.id = ? '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过强度和杯量查询咖啡胶囊的数据
 * @param {arr} data ['咖啡强度','杯量']
 */
let getCoffByStrengthCapacount  =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE cCap.strength=? && cCap.capAmount = ? '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过香调和杯量查询咖啡胶囊的数据
 * @param {arr} data ['香调','杯量']
 */
let getCoffByAromaCapacount  =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE fragrance.id = ? && cCap.capAmount = ? '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过分类、强度、香调、查询咖啡胶囊的数据
 * @param {arr} data ['分类','强度','香调']
 */
let getCoffByClassStrengthAroma  =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE coffeeClassification = ? && strength = ? && fragrance.id = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过分类、强度、杯量、查询咖啡胶囊的数据
 * @param {arr} data ['分类','强度','杯量']
 */
let getCoffByClassStrengthCapamount =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE coffeeClassification = ? && strength = ? && capAmount = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result    
}
/**
 *  通过分类、香调、杯量、查询咖啡胶囊的数据
 * @param {arr} data ['分类','香调','杯量']
 */
let getCoffByClassAromaCapamount =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE coffeeClassification = ? && fragrance.id = ? && capAmount = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result    
}
/**
 *  通过 分类、香调、杯量、强度 查询咖啡胶囊的数据
 * @param {arr} data ['分类','强度','香调','杯量']
 */
let getCoffByClassStrengthAromaCapamount =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE coffeeClassification = ? && strength=? && fragrance.id = ? && capAmount = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result    
}
/**
 *  通过 香调、杯量、强度 查询咖啡胶囊的数据
 * @param {arr} data ['强度','香调','杯量']
 */
let getCoffByStrengthAromaCapamount =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`id` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`id` WHERE strength=? && fragrance.id = ? && capAmount = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result    
}
module.exports = {
  getCoffeeCapList,
  getCoffeeCapByClass,
  getCoffeeCapByStrength,
  getCoffeeCapByAroma,
  getCoffeeCapByCapamount,
  getCoffByClassStrength,
  getCoffByClassCapAmount,
  getCoffByClassAroma,
  getCoffByStrengthAroma,
  getCoffByStrengthCapacount,
  getCoffByAromaCapacount,
  getCoffByClassStrengthAroma,
  getCoffByClassStrengthCapamount,
  getCoffByClassAromaCapamount,
  getCoffByClassStrengthAromaCapamount,
  getCoffByStrengthAromaCapamount
}