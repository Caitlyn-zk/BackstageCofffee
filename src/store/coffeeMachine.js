let state = {
	tableDataroducts: [],
	updataform: {},
	userTableData: []
}
let mutations = {
	// 渲染咖啡机表
	coffeeMachine(state, data) {
		console.log(data)
		for (let prop in data) {
			// console.log(data[prop].cMachineImg)
			data[prop].cMachineImg = JSON.parse(data[prop].cMachineImg)
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
	// 修改商品
	updataceff(state, data) {
		// data.img = data.img[0] || ''
		state.updataform = data
	},
}
export default {
	state: state,
	mutations
}
