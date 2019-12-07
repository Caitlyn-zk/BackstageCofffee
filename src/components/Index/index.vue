<template>
		<div class="layui-layout layui-layout-admin">
			<Top></Top>
			<Left></Left>
			<!-- 内容主体区域 -->
			<ContentBody></ContentBody>
			<Footer></Footer>
		</div>
</template>

<script>
import Top from 'components/Common/Top'
import Left from 'components/Common/Left'
import ContentBody from 'components/contentBody'
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
		ContentBody,
		Footer
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
