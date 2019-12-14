let state = {
	tableData: []
}
let mutations = {
	// 渲染咖啡胶囊表
	changeGoods (state, data) {
		console.log(data)
		data.map((item) => {
			// console.log(item.img)
			// 对象转数组
			item.img = JSON.parse(item.img)
			item.imgpic = item.img[0] || ''
		})
		state.tableData = data
	},
	// 添加商品
	changeAddGoods (state, data) {
		// data.map((item) => {
		// 	item.img = JSON.parse(item.img)
		// 	item.imgpic = item.img[0] || ''
		// })
		console.log(data)
		state.tableData = data
	}
}
export default {                                                                                                     
	state: state,
	mutations
}
