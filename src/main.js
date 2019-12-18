// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import '../theme/index.css'
import { axiosRequest, get, post } from 'commonjs/axios'

Vue.use(ElementUi)
Vue.config.productionTip = false
Vue.prototype.$request = axiosRequest
Vue.prototype.$get = get
Vue.prototype.$post = post

// 全局路由 路由拦截
router.beforeEach((to, from, next) => {
	let token = window.localStorage.getItem('token')
	if (to.meta.requireUser) {
		// 判断用户登录
		if (token) {
			next()
		} else {
			next('/login')
		}
	} else {
		// 不需要登录 直接进入首页
		next()
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
	store,
  components: { App },
  template: '<App/>'
})
