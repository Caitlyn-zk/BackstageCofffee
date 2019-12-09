<template>
	<div class="nps-retrieveps-main">
		<div class="nps-login-main-bar layui-anim-rotate">
			<form class="layui-form text-align-c font-16"  action="">
				<h2 class="font-26 margin-tb-30">咖啡大师找回密码</h2>
				<div class="layui-form-item">
					<div class="layui-inline">
						<label class="layui-form-label">请输入邮箱：</label>
						<div class="layui-input-inline ">
							<input type="text" name="email" lay-verify="email" placeholder="请输入邮箱" autocomplete="off" class="layui-input"/>
						</div>
					</div>
					<div class="layui-inline">
						<label class="layui-form-label">请输入验证码：</label>
						<div class="layui-input-inline ">
							<input type="text" name="email" lay-verify="email" placeholder="请输入验证码" autocomplete="off" class="layui-input"/>
							<button type="button" class="nps-retrieveps-but fl">获取验证码</button>
						</div>
					</div>
					<div class="layui-inline">
						<label class="layui-form-label">请输入新密码：</label>
						<div class="layui-input-inline">
							<input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input"/>
						</div>
					</div>
					<div class="layui-inline">
						<label class="layui-form-label">再输入新密码：</label>
						<div class="layui-input-inline">
							<input type="password" name="repassword" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input"/>
						</div>
					</div>
				</div>
				<div class="layui-form-item">
					<div class="layui-input-block">
						<button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
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
				let pass = data.field.password
				let repass = data.field.repassword
				if (pass === repass) {
					console.log('通过')
				} else {
					window.layer.msg('输入密码不一致，请重新输入')
				}
				return false
			})
		})
	}
}
</script>

<style lang="less">
@import './css/index.less';
</style>
