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
// 找回密码
let retrieveRequest = (params) => {
	axiosRequest('backupdate', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
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
		headers: { "Content-Type": "multipart/form-data" }
	}).then(function (res) {
		params.success(res)
		console.log(res)
		console.log('res: ', res)
	}).catch((error) => {
		console.log(error)
		params.error(error)
	})
}
export {
	loginRequest,
	codeRequest,
	retrieveRequest,
	goodsRequest,
	addGoodsRequest
}
