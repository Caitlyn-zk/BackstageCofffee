let state = {
	info: {},
	token: ''
}
let mutations = {
	changeUser (state, data) {
		state.info = data.info
		state.token = data.token
		console.log(data)
	},
	changeCode (state, data) {
		state.info = data.info
	},
	changeUpdata (state, data) {
		state.info = data.info
	}
}
export default {
	state: state,
	mutations
}
