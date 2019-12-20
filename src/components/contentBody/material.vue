<template>
	<div  class="nps-back-user nps-back-user-main">
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="个人资料" name="first">
				<div class="nps-back-title">基本资料</div>
				<div class="nps-back-lists">
					<p>亲爱的用户，您的个人基本资料如下</p>
					<img src=""/>
				</div>
				<el-card class="box-card" :data="userlist">
					<div class="text item">
						用户名：{{userlist.nickname}}
					</div>
					<div class="text item">
						邮箱：{{userlist.email}}
					</div>
					<div class="text item">
						密码：这是一个秘密，一个只有你知道的密码
					</div>
					<div class="text item">
						评论：{{userlist.remark}}
					</div>
				</el-card>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userlist: {},
			activeName: 'first'
		};
	},
	created () {
		this.Usermaterial()
	},
	methods: {
		handleClick (tab, event) {
			// console.log(tab, event);
		},
		Usermaterial () {
			let userlisr = window.localStorage.getItem('info')
			console.log(userlisr)
			console.log(JSON.parse(userlisr))
			this.userlist = JSON.parse(userlisr)
		}
	}
}
</script>

<style lang='less'>
@import './css/index.less';
</style>
