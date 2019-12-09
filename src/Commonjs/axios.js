// 封装axios请求 promise
import axios from 'axios'
// 配置公共信息时
import { api } from './api'
import qs from 'qs'

axios.defaults.baseURL = api

// 封装直接post，get 请求都能发送请求的方法
let axiosRequest = function (url, method = 'get', data = {}) {
	return new Promise((resolve, reject) => {
		axios({
			url: '',
			method: method,
			// 用于post请求 qs.stringify(data)序列化对象转换为字符串
			data: qs.stringify(data),
			// get请求
			params: data
		}).then((res) => {
			// 请求成功，resolve返回后台数据
			resolve(res.data)
		}).catch((error) => {
			// 请求失败返回错误信息
			reject(error)
		})
	})
}

// get post 分开
let get = function (url, data) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: data
		}).then((res) => {
			// 请求成功返回的后台数据
			resolve(res.data)
		}).catch((error) => {
			reject(error)
		})
	})
}
// post
let post = function (url, data) {
	return new Promise((resolve, reject) => {
		axios.post(url, qs.stringify(data)).then((res) => {
			// 请求成功返回的后台数据
			resolve(res.data)
		}).catch((error) => {
			reject(error)
		})
	})
}
export {
	axiosRequest,
	get,
	post
}
