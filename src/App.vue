<template>
  <div id="app">
		<!-- <Top></Top>
    <router-view/>
			<el-button class="padding-10 font-36 line-36" type="">按钮</el-button>
			<Left></Left> -->
			<div class="layui-layout layui-layout-admin">
				<Top></Top>
				<Left></Left>
				<div class="layui-body">
					<!-- 内容主体区域 -->
					<div style="padding: 15px;">内容主体区域</div>
					<ContentBody></ContentBody>
				</div>
				<div class="layui-footer">
					<!-- 底部固定区域 -->
					© layui.com - 底部固定区域
				</div>
			</div>
  </div>
</template>

<script>
import Top from 'components/Common/Top'
import Left from 'components/Common/Left'
import ContentBody from 'components/contentBody'
export default {
	name: 'App',
	data () {
		return {
		}
	},
	components: {
		Top,
		Left,
		ContentBody
	},
	created () {
		window.layui.use('element', function () {
			var element = window.layui.element
			console.log(element)
		})
	}
}
</script>

<style>
</style>
