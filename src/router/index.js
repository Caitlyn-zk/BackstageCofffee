import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Login from 'components/Login'
import Retrieveps from 'components/Login/retrieveps'
import User from 'components/contentBody/user'
import Home from 'components/contentBody/home'
import bodyIndex from 'components/contentBody/index'
// import fenye from 'components/contentBody/fenye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
			name: 'home',
			components: {
				default: Home,
				Index: Index
			},
			meta: {
				requireUser: 1
			},
			children: [{
					path: 'user',
					component: User,
					meta: {
						requireUser: false
					}
			}, {
					path: 'bodyindex',
					component: bodyIndex,
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
// {
// 	path: 'home',
// 		component: Home,
// 			meta: {
// 		requireUser: false
// 	}
// },
