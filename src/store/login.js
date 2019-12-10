let state = {
	info: {},
	token: ''
}
let mutations = {
	changeUser(state, data) {
		state.info = data.info
		state.token = data.token
	},
	changeCode(state, data) {
		state.info = data.info
		state.token = data.code
	}
}

export default {
	state: state,
	mutations
}