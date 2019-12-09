<template>
  <div class="layui-side layui-bg-black">
		<div class="layui-side-scroll">
			<!-- 左侧导航区域（可配合layui已有的垂直导航） -->
			<ul class="layui-nav layui-nav-tree"  lay-filter="test">
				<li class="layui-nav-item"><router-link to="/home">首页</router-link></li>
				<li class="layui-nav-item">
					<a href="javascript:;">解决方案</a>
					<dl class="layui-nav-child">
						<dd><a href="javascript:;">列表一</a></dd>
						<dd><a href="javascript:;">列表二</a></dd>
						<dd><a href="">超链接</a></dd>
					</dl>
				</li>
				<li class="layui-nav-item"><router-link to="/user">买家地址</router-link></li>
				<li class="layui-nav-item"><a href="">发布商品</a></li>
				<li class="layui-nav-item"><a href="">用户信息</a></li>
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
//   data () {
//     return {
//     }
//   },
//   mounted: function () {
//     this.$nextTick(function () {
//       window.layui.use('flow', function(){
//         let flow = window.layui.flow
//         flow.load({
//           elem: '#LAY_demo2' // 流加载容器
//           ,scrollElem: '#LAY_demo2' // 滚动条所在元素，一般不用填，此处只是演示需要。
//           ,isAuto: false
//           ,isLazyimg: true //
//           ,done: function(page, next){ // 加载下一页
//             // 模拟插入
//             setTimeout(function(){
//               let lis = [];
//               for(let i = 0; i < 6; i++){
//                 lis.push('<li><img lay-src="http://s17.mogucdn.com/p2/161011/upload_279h87jbc9l0hkl54djjjh42dc7i1_800x480.jpg?v='+ ( (page-1)*6 + i + 1 ) +'"></li>')
//               }
//               next(lis.join(''), page < 6) // 假设总页数为 6
//             }, 500)
//           }
//         })
//       })
//     })
//   }
}
</script>

<style lang="less">
@import './css/index.less';
</style>
