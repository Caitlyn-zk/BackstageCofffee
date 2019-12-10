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
console.log(axiosRequest)

// 全局路由 路由拦截
router.beforeEach((to, from, next) => {
	let token = window.localStorage.getItem('token')
	if (to.meta.requireUser && to.meta.requireUser === 1) {
		// 判断用户登录
		if (token) {
			next()
		} else {
			next('/login')
		}
	} else if (to.meta.requireUser && to.meta.requireUser === 2) {
		// 判断是否登录 登录了就不能进入当前页面
		if (token) {
			// 如果登陆了，就直接进入首页
			next('/')
		} else {
			next()
		}
	} else {
		// 不需要登录 直接进入首页
		next()
		// eslint-disable-next-line no-tabs
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
