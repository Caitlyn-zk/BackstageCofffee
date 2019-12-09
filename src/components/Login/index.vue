<template>
	<div class="nps-login-main">
		<div class="nps-login-main-bar layui-anim-rotate">
			<form class="layui-form text-align-c font-16"  action="">
				<h2 class="font-26 margin-tb-30">咖啡大师登录</h2>
				<div class="layui-form-item">
					<div class="layui-inline">
						<label class="layui-form-label">请输入邮箱</label>
						<div class="layui-input-inline ">
							<input type="text" name="email" lay-verify="email" placeholder="请输入邮箱" autocomplete="off" class="layui-input"/>
						</div>
					</div>
					<div class="layui-inline">
						<label class="layui-form-label">请输入密码</label>
						<div class="layui-input-inline">
							<input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input"/>
						</div>
					</div>
				</div>
				<div class="text-align-l margin-l-35 padding-l-35">
					<input type="checkbox" name="" title="记住密码" lay-skin="primary" />
					<span><router-link to="retrieveps">找回密码</router-link></span>
				</div>
				<div class="layui-form-item">
					<div class="layui-input-block">
						<button class="layui-btn" lay-submit @click="formlogin" lay-filter="formDemo">立即提交</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {loginRequest} from 'commonjs/Requestaxios'
 export default {
	data () {
		return {
		}
	},
	created () {
		window.layui.use('form', function () {
			var form = window.layui.form
			// 监听提交
			form.on('submit(formDemo)', function (data) {
				// window.layer.msg(JSON.stringify(data.field))
				let logindata = JSON.stringify(data.field)
				window.localStorage.setItem('token', logindata)
				this.$router.push('/')
				return false
			})
		})
	},
	methods: {
		formlogin (formname) {
			console.log(123)
			console.log(formname.value)
			// loginRequest({
			// 	data: {
			// 		mobile: this.user.username,
			// 		password: this.user.password
			// 	}
			// })
		}
	}
}
</script>

<style lang="less">
@import './css/index.less';
</style>
