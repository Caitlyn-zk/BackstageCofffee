import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Login from 'components/Login'
import Retrieveps from 'components/Login/retrieveps'
import User from 'components/contentBody/user'
import Home from 'components/contentBody/home'
import bodyIndex from 'components/contentBody/index'
import Coffee from 'components/contentBody/coffee'

Vue.use(Router)

export default new Router({
	mode: 'history',  // 去掉url中的#
  routes: [
    {
      path: '/',
			name: 'home',
			components: {
				default: Home,
				Index: Index
			},
			meta: {
				requireUser: true
			},
			children: [{
					path: 'user',
					component: User,
					meta: {
						requireUser: true
					}
			}, {
					path: 'bodyindex',
					component: bodyIndex,
					meta: {
						requireUser: true
					}
				}, {
					path: 'coffee',
					component: Coffee,
					meta: {
						requireUser: true
					}
				}]
		}, {
			path: '/login',
			name: 'login',
			component: Login
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
				requireUser: true
			}
		}
  ]
})
// {
// 	path: 'home',
// 		component: Home,
// 			meta: {
// 		requireUser: false
// 	}
// },
