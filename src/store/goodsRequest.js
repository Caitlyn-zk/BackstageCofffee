let state = {
	tableData: [],
	updataform: {},
	userTableData: []
}
let mutations = {
	// 渲染咖啡胶囊表
	changeGoods(state, data) {
		console.log(1231234)
		console.log(data[0].img[0])
		for (let sprop in data) {
			console.log(data[sprop].img)
			data[sprop].img = JSON.parse(data[prop].img)
		}
		// data.map((item) => {
		// 	// console.log(item.img)
		// 	// 对象转数组
		// 	item.img = JSON.parse(item.img)
		// 	item.imgpic = item.img[0] || ''
		// 	console.log(item.imgpic)
		// })
		console.log(1254781)
		state.tableData = data
		console.log(state.tableData)
	},
	// 修改商品
	updataceff (state, data) {
		data.img = data.img[0] || ''
		state.updataform = data
	},
	// 用户信息渲染
	UserListdata (state, data) {
		state.userTableData = data
	}
}
export default {
	state: state,
	mutations
}
