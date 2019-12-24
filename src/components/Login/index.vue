<template>
	<div class="nps-login-main">
		<div class="nps-login-main-bar layui-anim-rotate">
			<form :model="loginForm" class="layui-form text-align-c font-16"  action="">
				<h2 class="font-26 margin-tb-30">咖啡大师登录</h2>
				<div class="layui-form-item">
					<div class="layui-inline">
						<label class="layui-form-label">请输入邮箱</label>
						<div prop="username" class="layui-input-inline ">
							<input type="text" v-model="loginForm.username" name="email" lay-verify="email" placeholder="请输入邮箱" autocomplete="off" class="layui-input"/>
						</div>
					</div>
					<div class="layui-inline">
						<label class="layui-form-label">请输入密码</label>
						<div prop="passwrod" class="layui-input-inline">
							<input type="password" name="password" v-model="loginForm.password" lay-verify="required|password" placeholder="请输入密码" autocomplete="off" class="layui-input">
						</div>
					</div>
					<div class="text-align-l padding-l-35 clearfix">
						<template>
							<el-checkbox class="fl" v-model="checked">备选项</el-checkbox>
						</template>
						<span class="fr margin-r-30 padding-r-35"><router-link to="/retrieveps">找回密码</router-link></span>
					</div>
				</div>
				<div class="layui-form-item">
					<div class="layui-input-block">
						<a class="layui-btn" type="button" :loading="loginLoading" lay-submit @click.native.prevent="formlogin" lay-filter="formDemo">立即提交</a>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
// import axios from 'axios'
// import api from 'commonjs/api'
import {loginRequest} from 'commonjs/Requestaxios'
 export default {
	data () {
		return {
			checked: true,
			loginLoading: false,
			loginForm: {
				username: '',
				passwrod: ''
			}
		}
	},
	created () {
	},
	mounted () {
		this.formlogin()
	},
	methods: {
		formlogin (formname) {
			window.layui.use('form', () => {
				var form = window.layui.form
				console.log(form.verify)
				form.verify({
					password: [
						/^[\S]{6,18}$/,
						'密码必须6到18位，且不能出现空格'
					]
				})
				// console.log(form)
				// 监听提交
				form.on('submit(formDemo)', (data) => {
					// window.layer.msg(JSON.stringify(data.field))
					// 获取邮箱密码
					// let logindata = JSON.stringify(data.field)
					this.loginLoading = true
					// ajax封装的使用
					loginRequest({
						data: {
							email: this.loginForm.username,
							password: this.loginForm.password
						},
						error: () => {
							this.loginLoading = false
							// console.log(1232)
						},
						success: (res) => {
							// console.log(res)
							// console.log(this.loginForm.username)
							// console.log(this.loginForm.password)
							this.loginLoading = false
							if (res.status === 200) {
								// 存放token
								console.log(res.data.token)
								window.localStorage.setItem('token', res.data.token)
								window.localStorage.setItem('info', JSON.stringify(res.data.info))
								console.log(JSON.stringify(res.data.info))
								// 存入vuex中
								// console.log(res.data)
								this.$store.commit('changeUser', res.data)
								this.$message({
									message: '登录成功',
									showClose: true,
									duration: 2000,
									onClose: () => {
										this.$router.push('/')
									}
								})
							} else {
								this.$message({
									message: res.message,
									type: 'error',
									showClose: true,
									duration: 3000
								})
							}
						}
					})
					console.log(1232)
					return false
				})
			})
		}
	}
}
</script>

<style lang="less">
@import './css/index.less';
</style>
