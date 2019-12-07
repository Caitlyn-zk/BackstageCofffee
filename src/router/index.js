import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Login from 'components/Login'
import Retrieveps from 'components/Login/retrieveps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
			name: 'Index',
			component: Index
		}, {
			path: '/login',
			name: 'login',
			component: Login
		}, {
			path: '/retrieveps',
			name: 'retrievepsin',
			component: Retrieveps
		}
  ]
})
