<template>
	<div>
		主要内容
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	created () {
	},
	mounted () {
		window.layui.use('table', function () {
			var table = window.layui.table
			// 监听表格复选框选择
			table.on('checkbox(demo)', function (obj) {
				console.log(obj)
			})
			// 监听工具条
			table.on('tool(demo)', function (obj) {
				var data = obj.data
				if (obj.event === 'detail') {
					window.layer.msg('ID：' + data.id + ' 的查看操作')
				} else if (obj.event === 'del') {
					window.layer.confirm('真的删除行么', function (index) {
						obj.del()
						window.layer.close(index)
					})
				} else if (obj.event === 'edit') {
					window.layer.alert('编辑行：<br>' + JSON.stringify(data))
				}
			})
			var $ = window.layui.$, active = {
				getCheckData: function () { // 获取选中数据
					let checkStatus = table.checkStatus('idTest'),
					data = checkStatus.data
					window.layer.alert(JSON.stringify(data))
				},
				getCheckLength: function () { // 获取选中数目
					let checkStatus = table.checkStatus('idTest'),
					data = checkStatus.data
					window.layer.msg('选中了：' + data.length + ' 个')
				},
				isAll: function () { // 验证是否全选
					let checkStatus = table.checkStatus('idTest')
					window.layer.msg(checkStatus.isAll ? '全选' : '未全选')
				}
			}
			$('.demoTable .layui-btn').on('click', function () {
				let type = $(this).data('type')
				active[type] ? active[type].call(this) : ''
			})
		})
	}
}
</script>
<style>

</style>
