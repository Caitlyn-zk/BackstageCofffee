let state = {
	tableData: [],
	updataform: {},
	userTableData: []
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
	// 修改商品
	updataceff (state, data) {
		console.log(data)
		state.updataform = data
	},
	// 用户信息渲染
	UserListdata (state, data) {
		console.log(data)
		state.userTableData = data
	}
}
export default {
	state: state,
	mutations
}
