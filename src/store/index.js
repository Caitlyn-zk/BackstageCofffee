import Vue from 'vue'
import Vuex from 'vuex'
import Login from './login'
import goodsRequest from './goodsRequest.js'
import coffeeMachine from './coffeeMachine.js'

Vue.use(Vuex)

export default new Vuex.Store({
	// vuex 中存储的数据
	modules: {
		Login,
		goodsRequest,
		coffeeMachine
	},
	// 只有通过mutations中的方法去改变state
	mutations: {
	},
	actions: {
	},
	getters: {
	}
})
