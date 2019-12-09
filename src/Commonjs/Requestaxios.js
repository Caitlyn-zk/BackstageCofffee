// 集中发送ajax的地方
// 所有ajax发送的地方
import Vue from 'vue'

// 登录请求 params是一个对象，包含该data
let loginRequest = (params) => {
	Vue.$request('login', 'post', params.data).then((res) => {
		params.success()
	}).catch((error) => {
		params.error()
	})
}

export {
	loginRequest
}

