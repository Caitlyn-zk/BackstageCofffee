let state = {
	tableDataroducts: [],
	updataform: {},
	userTableData: []
}
let mutations = {
	// 渲染咖啡机表
	coffeeMachine(state, data) {
		for (let prop in data) {
			// console.log(data[prop].img)
			data[prop].img = JSON.parse(data[prop].img)
		}
		// data.map((item) => {
		// 	// console.log(item.img)
		// 	// 对象转数组
		// 	item.img = JSON.parse(item.img)
		// 	item.imgpic = item.img[0] || ''
		// 	console.log(item.imgpic)
		// })
		state.tableDataroducts = data
		console.log(state.tableDataroducts)
	},
}
export default {
	state: state,
	mutations
}
