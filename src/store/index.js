import Vue from 'vue'
import Vuex from 'vuex'
import Top from 'components/Common/top'
import layui from 'layui'

Vue.use(Vuex)

export default new Vuex.Store({
	// vuex 中存储的数据
	modules: {
		Top
	},
	// 只有通过mutations中的方法去改变state
	mutations: {

	},
	actions: {
	},
	getters: {

	}
})
