<template>
		<div class="layui-layout layui-layout-admin">
			<Top></Top>
			<Left></Left>
			<!-- 内容主体区域 -->
			<div class="layui-body">
				<!-- 内容主体区域 -->
				<div style="padding: 15px;padding-right: 0px; padding-bottom: 0px; height: 100%;">
					<router-view></router-view>
				</div>
			</div>
			<Footer></Footer>
		</div>
</template>

<script>
import Top from 'components/Common/Top'
import Left from 'components/Common/Left'
import Footer from 'components/Common/footer'
export default {
	name: 'App',
	data () {
		return {
		}
	},
	components: {
		Top,
		Left,
		Footer
	},
	created () {
		window.layui.use('element', function () {
			var element = window.layui.element
			// console.log(element)
		})
	}
}
</script>

<style>
</style>
