<template>
  <div id="app">
		<router-view name="Index"></router-view>
		<router-view></router-view>
  </div>
</template>

<script>
import {logonTimeRequest} from 'commonjs/Requestaxios'
// import Index from 'components/Index'
export default {
	name: 'App',
	data () {
		return {
			// token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6ImFhMTIzNDU2IiwiaWF0IjoxNTc2NTQ2ODc3LCJleHAiOjE1NzY1NDg2Nzd9.JATU_MPNONL5PHQdFi9xP43SglnYY9F5FzET6Lu2YI0'
		}
	},
	created () {
		let tokenlong = window.localStorage.getItem('token')
		// console.log(tokenlong)
		if (tokenlong !== null) {
			this.loginTime()
			// this.$router.push('/login')
		}
	},
	methods: {
		loginTime () {
			// ajax封装的使用
			// 请求表的数据
			let tokenlong = window.localStorage.getItem('token')
			logonTimeRequest({
				data: {
					token: tokenlong
				},
				error: () => {
				},
				success: (res) => {
					if (res.status === 200) {
						// 存入vuex中
						// this.$store.commit('UserListdata', res.data)
						this.$message({
							showClose: true,
							duration: 1,
							onClose: () => {
								// this.$router.push('/')
							}
						})
					} else {
						this.$message({
							message: res.message,
							type: 'error',
							showClose: true,
							duration: 3000,
							onClose: () => {
								window.localStorage.removeItem('token')
								window.localStorage.removeItem('info')
								window.location.reload()
								this.$router.push('/login')
							}
						})
					}
				}
			})
		}
	}
}
</script>

<style>
</style>
