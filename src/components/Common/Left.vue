<template>
  <div class="layui-side layui-bg-black">
		<div class="layui-side-scroll">
			<!-- 左侧导航区域（可配合layui已有的垂直导航） -->
			<ul class="layui-nav layui-nav-tree"  lay-filter="test">
				<li class="layui-nav-item"><router-link to="/">首页</router-link></li>
				<li class="layui-nav-item">
					<a href="javascript:;">发布商品</a>
					<dl class="layui-nav-child">
						<dd><router-link to="/bodyindex">咖啡胶囊</router-link></dd>
						<dd><router-link to="coffee">咖啡</router-link></dd>
						<dd><a href="">超链接</a></dd>
					</dl>
				</li>
				<li class="layui-nav-item"><router-link to="/user">买家地址</router-link></li>
				<li class="layui-nav-item"><router-link to="/">另外的表</router-link></li>
				<li class="layui-nav-item"><router-link to="/">用户信息</router-link></li>
					<li class="layui-nav-item layui-nav-itemed">
					<a class="" href="javascript:;">系统管理</a>
					<dl class="layui-nav-child">
						<dd><a href="javascript:;">管理层</a></dd>
						<dd><a href="javascript:;">员工层</a></dd>
						<dd><a href="javascript:;">销售商品</a></dd>
					</dl>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
}
</script>

<style lang="less">
@import './css/index.less';
</style>
