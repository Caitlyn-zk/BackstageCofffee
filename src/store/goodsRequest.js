let state = {
	tableData: []
}
let mutations = {
	changeGoods (state, data) {
		data.map((item) => {
			// console.log(item.img)
			// 对象转数组
			item.img = JSON.parse(item.img)
			item.imgpic = item.img[0] || ''
		})
		state.tableData = data
	}
}
export default {
	state: state,
	mutations
}
