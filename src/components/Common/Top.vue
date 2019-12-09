<template>
	<div class="layui-header nps-top-title">
		<div class="layui-logo">
			<img src="./image/zk-logo.png"/>
		</div>
		<!-- 头部区域（可配合layui已有的水平导航） -->
		<ul class="layui-nav layui-layout-left">
			<li class="layui-nav-item"><a href="">控制台</a></li>
			<li class="layui-nav-item"><a href="">商品管理</a></li>
			<li class="layui-nav-item"><a href="">用户</a></li>
			<li class="layui-nav-item">
				<a href="javascript:;">其它系统</a>
				<dl class="layui-nav-child">
					<dd><a href="">邮件管理</a></dd>
					<dd><a href="">消息管理</a></dd>
					<dd><a href="">授权管理</a></dd>
				</dl>
			</li>
		</ul>
		<ul class="layui-nav layui-layout-right" v-if="login">
			<li class="layui-nav-item">
				<a href="javascript:;">
					<img src="http://t.cn/RCzsdCq" class="layui-nav-img">
					咖啡大师
				</a>
				<dl class="layui-nav-child">
					<dd><a href="">基本资料</a></dd>
					<dd><a href="">安全设置</a></dd>
				</dl>
			</li>
			<li class="layui-nav-item"><a href="">退出登录</a></li>
		</ul>
		<!-- 没有登录时 -->
		<ul class="layui-nav layui-layout-right" v-else>
			<li class="layui-nav-item"><router-link to="/login">前往登陆登录</router-link></li>
			<li class="layui-nav-item"><a href="">注册</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			login: true
		}
	}
}
</script>

<style lang="less">
@import './css/index.less';
</style>
