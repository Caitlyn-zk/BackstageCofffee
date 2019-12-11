<template>
	<div class="nps-home">
		<img src="./image/coffee-ol_L.jpg">
	</div>
</template>

<script>
export default {
	data () {
		return {
			a: 1
		}
	},
	methods: {
	},
	// 监听路由的变化
	watch: {
		$route (to, from) {
			let routerpath = to.path
			console.log(routerpath)
		}
	}
}
</script>

<style lang="less">
.nps-home {
	position: absolute;
	padding: 15px 0px 15px 215px;
	width: 100%;
	height: 80%;
	z-index: 1;
	// display: block;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
