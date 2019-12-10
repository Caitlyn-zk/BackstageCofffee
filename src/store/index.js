import Vue from 'vue'
import Vuex from 'vuex'
import Login from 'components/Login/index.vue'

Vue.use(Vuex)

export default new Vuex.Store({
	// vuex 中存储的数据
	modules: {
		Login
	},
	// 只有通过mutations中的方法去改变state
	mutations: {
	},
	actions: {
	},
	getters: {
	}
})
