<template>
	<div class="nps-back-user">
		<div class="nps-body-title">
			发布商品
			<table class="layui-table" lay-data="{height:315, url:'/api/getcoffeeCap', page:true, id:'test'}" lay-filter="test">
				<thead>
					<tr>
						<th lay-data="{field:'id', width:80, sort: true}">ID</th>
						<th lay-data="{field:'title', width:80}">用户名</th>
						<th lay-data="{field:'description', width:80, sort: true}">性别</th>
						<th lay-data="{field:'bakingDescription'}">城市</th>
						<th lay-data="{field:'placefOrigin'}">签名</th>
						<th lay-data="{field:'experience', sort: true}">积分</th>
						<th lay-data="{field:'score', sort: true}">评分</th>
						<th lay-data="{field:'classify'}">职业</th>
						<th lay-data="{field:'wealth', sort: true}">财富</th>
					</tr>
				</thead>
			</table>
		</div>
	</div>
</template>

<script>
import api from 'commonjs/api.js'
// import User from './user'
export default {
	components: {
		
	},
	created () {
		window.layui.use('table', function(){
			var table = window.layui.table
			// 第一个实例
			// table.render({
			// 	elem: '#demo'
			// 	,height: 312
			// 	,url: '/api/updatecoffCap' // 数据接口
			// 	,page: true // 开启分页
			// 	,cols: [[ // 表头
			// 		{field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
			// 		,{field: 'username', title: '用户名', width:80}
			// 		,{field: 'sex', title: '性别', width:80, sort: true}
			// 		,{field: 'city', title: '城市', width:80} 
			// 		,{field: 'sign', title: '签名', width: 177}
			// 		,{field: 'experience', title: '积分', width: 80, sort: true}
			// 		,{field: 'score', title: '评分', width: 80, sort: true}
			// 		,{field: 'classify', title: '职业', width: 80}
			// 		,{field: 'wealth', title: '财富', width: 135, sort: true}
			// 	]]
			// })
			
		})
	}
}
</script>
<style lang='less'>
@import './css/index.less';
</style>
