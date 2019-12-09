import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Login from 'components/Login'
import Retrieveps from 'components/Login/retrieveps'
import User from 'components/contentBody/user'
import Home from 'components/contentBody/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
			name: 'Index',
			component: Index,
			meta: {
				requireUser: 1
			},
			children: [{
				path: 'home',
				component: Home,
				meta: {
					requireUser: false
				}
			}, {
					path: 'user',
					component: User,
					meta: {
						requireUser: false
					}
				}]
		}, {
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				requireUser: 2
			}
		}, {
			path: '/retrieveps',
			name: 'retrievepsin',
			component: Retrieveps,
			meta: {
				requireUser: false
			}
		}, {
			path: '/user',
			name: 'User',
			component: User,
			meta: {
				requireUser: false
			}
		}
  ]
})
