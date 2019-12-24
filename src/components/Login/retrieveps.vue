<template>
	<div class="nps-login-main">
		<div class="nps-login-main-bar layui-anim-rotate">
			<form :model="loginForm" class="layui-form text-align-c font-16"  action="">
				<h2 class="font-26 margin-tb-30">咖啡大师找回密码</h2>
				<div class="layui-form-item">
					<div class="layui-inline">
						<label class="layui-form-label">请输入邮箱：</label>
						<div class="layui-input-inline" prop="username">
							<input type="text" v-model="loginForm.username" name="email" lay-verify="email|Codeemal" placeholder="请输入邮箱" autocomplete="off" class="layui-input"/>
						</div>
					</div>
					<div class="layui-inline">
						<label class="layui-form-label">请输入验证码：</label>
						<div class="layui-input-inline" prop="code" >
							<input type="text" name="code" v-model="loginForm.code" lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input"/>
							<a @click="countDown()" type="button" :loading="loginLoading" class="nps-retrieveps-but fl">获取验证码</a>
						</div>
					</div>
					<div class="layui-inline">
						<label class="layui-form-label">请输入新密码：</label>
						<div class="layui-input-inline" prop="password">
							<input type="password" v-model="loginForm.password" name="pass" lay-verify="required|pass" placeholder="请输入密码" autocomplete="off" class="layui-input nps-password"/>
						</div>
					</div>
					<div class="layui-inline nps-repassword">
						<label class="layui-form-label">再输入新密码：</label>
						<div class="layui-input-inline">
							<input value="" type="password" name="repassword" lay-verify="required|confirmPass" placeholder="请输入密码" autocomplete="off" class="layui-input"/>
						</div>
					</div>
				</div>
				<div class="layui-form-item">
					<div class="layui-input-block">
						<a class="layui-btn" @click="formRetrieveps(loginForm)" :loading="loginLoading" lay-submit lay-filter="formDemo">提交返回登录</a>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {codeRequest, retrieveRequest} from 'commonjs/Requestaxios'
 export default {
	data () {
		return {
			loginLoading: true,
			loginForm: {
				username: '',
				password: '',
				code: ''
			}
		}
	},
	mounted () {
		this.formRetrieveps()
	},
	methods: {
		// 倒计时
		countDown (count) {
			count = 30
			var code = window.document.getElementsByClassName('nps-retrieveps-but')
			// let codehtml = count + 's后重新获取'
			code[0].classList.add('get-code')
			// ajax封装的使用 验证码
			codeRequest({
				data: {
					email: this.loginForm.username
					// password: this.loginForm.password,
					// code: this.loginForm.code
				},
				error: () => {
					this.loginLoading = false
					// console.log(1232)
				},
				success: (res) => {
					console.log(res)
					this.loginLoading = false
					if (res.status === 200) {
						// 存入vuex中
						this.$store.commit('changeCode', res.data)
						this.$message({
							message: '验证码发送成功,如果没收到，请在60秒后重新发送',
							showClose: true,
							duration: 2000,
							onClose: () => {
								// this.$router.push('/login')
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
			var timer = setInterval(function () {
				count--
				console.log(count)
				// codehtml.innerHtml(count + 's后重获')
				// /* 3.设置cookie*/
				// document.cookie('cookia', count)
				// 结束倒计时
				if (count <= 0) {
					clearInterval(timer)
					// codehtml.removeClass('disabled').innerHtml('重新获取')
					code[0].classList.remove('get-code')
					// document.querySelector.removeCookie('cookia')
				}
			}, 1000)
		},
		// 找回密码
		formRetrieveps (formname) {
			console.log(formname)
			var pass = document.getElementsByClassName('nps-password')
			console.log(pass.pass.value)
			window.layui.use('form', () => {
				var form = window.layui.form
				form.verify({
					pass: [
						/^[\S]{6,18}$/,
						'密码必须6到18位，且不能出现空格'
					],
					confirmPass: (value) => {
						if (pass.pass.value !== value) {
							return '两次密码输入不一致！'
						}
					}
				})
				// 监听提交
				form.on('submit(formDemo)', (data) => {
					console.log(data)
					// window.layer.msg(JSON.stringify(data.field))
					// let pass = data.field.password
					// let repass = data.field.repassword
					retrieveRequest({
						data: {
							email: this.loginForm.username,
							password: this.loginForm.password,
							variCode: this.loginForm.code
						},
						error: () => {
							this.loginLoading = false
							console.log(1232)
						},
						success: (res) => {
							this.loginLoading = false
							if (res.status === 200) {
								// 存入vuex中
								this.$store.commit('changeUpdata', res.data)
								this.$message({
									message: '密码成功找回，3s后返回登录',
									showClose: true,
									duration: 2000,
									onClose: () => {
										this.$router.push('/login')
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
					console.log(data)
					// 阻止表单跳转
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
