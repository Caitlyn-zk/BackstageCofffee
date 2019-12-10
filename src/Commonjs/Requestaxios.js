// 集中发送ajax的地方
// 所有ajax发送的地方
// import Vue from 'vue'
import { axiosRequest, get, post } from './axios'
// 登录请求 params是一个对象，包含该data
// let loginRequest = (params) => {
// 	Vue.$request('login', 'post', params.data).then((res) => {
// 		params.success()
// 	}).catch((error) => {
// 		params.error(error)
// 	})
// }
let loginRequest = (params) => {
	axiosRequest('backLogin', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
	axiosRequest('backRetrieve', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
export {
	loginRequest
}
