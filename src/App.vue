<template>
  <div id="app" @click="clicked">
		<router-view name="Index"></router-view>
		<router-view></router-view>
  </div>
</template>

<script>
// import Index from 'components/Index'
export default {
	name: 'App',
	data () {
		return {
			// 最后点击时间
			aTime: new Date().getTime(),
			// 当前时间
			cTime: new Date().getTime(),
			// 超出时间
			tOut: 10 * 60 * 1000
		}
	},
	mounted () {
		window.setInterval(this.tTime, 1000)
	},
	methods: {
		clicked () {
			// 当前页面点击更新时间
			this.aTime = new Date().getTime()
		},
		tTime () {
			this.cTime = new Date().getTime()
			if (this.ctTime - this.lTime > 10) {
				if (JSON.parse(sessionStorage.getItem('Login')) === true) {
					// 退出登录
				}
			}
		}
	}
}
</script>

<style>
</style>
