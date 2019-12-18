// 集中发送ajax的地方
// 所有ajax发送的地方
// import Vue from 'vue'
// import { axiosRequest, get, post } from './axios'
import { axiosRequest } from './axios'
// 登录请求 params是一个对象，包含该data
// let loginRequest = (params) => {
// 	Vue.$request('login', 'post', params.data).then((res) => {
// 		params.success()
// 	}).catch((error) => {
// 		params.error(error)
// 	})
// }
// 登录
let loginRequest = (params) => {
	axiosRequest('backLogin', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 验证码
let codeRequest = (params) => {
	axiosRequest('backRetrieve', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 登录时间
let logonTimeRequest = (params) => {
	axiosRequest('backislogin', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 找回密码
let retrieveRequest = (params) => {
	axiosRequest('backupdate', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 咖啡胶囊
// 发布商品
let goodsRequest = (params) => {
	axiosRequest('getCoffgCapLists', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 添加商品
let addGoodsRequest = (params) => {
	axiosRequest('addCoffcap', 'post', params.data, {
		headers: { 'Content-Type': 'multipart/form-data' }
	}).then(function (res) {
		params.success(res)
		console.log(res)
		console.log('res: ', res)
	}).catch((error) => {
		console.log(error)
		params.error(error)
	})
}
// 删除商品
let spliceGoodsRequest = (params) => {
	axiosRequest('deletecoffCap', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 修改
let updatecoffGoodsRequest = (params) => {
	axiosRequest('updatecoffCap', 'post', params.data, {
		headers: { 'Content-Type': 'multipart/form-data' }
	}).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 香型请求
let aromaGoodsRequest = (params) => {
	axiosRequest('getCoffCaparoma', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 买家信息
let UserRequest = (params) => {
	axiosRequest('getUsers', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 咖啡机
let Coffeemachine = (params) => {
	axiosRequest('getCoffeeMachineLists', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
export {
	loginRequest,
	codeRequest,
	retrieveRequest,
	logonTimeRequest,
	goodsRequest,
	addGoodsRequest,
	spliceGoodsRequest,
	updatecoffGoodsRequest,
	aromaGoodsRequest,
	UserRequest,
	Coffeemachine
}
