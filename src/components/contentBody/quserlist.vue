<template>
	<div  class="nps-back-user nps-back-user-main">
		<div class="nps-body-title">
			INFO表
		</div>
		<el-table
			:data="UserList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
			border
			style="width: 100%">
			<el-table-column
				fixed
				prop="inforId"
				label="ID"
				width="50">
			</el-table-column>
			<el-table-column
				prop="firstName"
				label="姓名"
				width="120">
			</el-table-column>
			<el-table-column
				prop="title"
				label="称谓"
				width="120">
			</el-table-column>
			<el-table-column
				prop="lastName"
				label="姓氏"
				width="120">
			</el-table-column>
			<el-table-column
				prop="customerNumber"
				label="会员"
				width="100">
			</el-table-column>
			<el-table-column
				prop="chooseLocation"
				label="地址"
				width="120">
			</el-table-column>
			<el-table-column
				prop="email"
				label="邮件地址"
				width="120">
			</el-table-column>
			<el-table-column
				prop="phon"
				label="电话号码"
				width="120">
			</el-table-column>
			<el-table-column
				prop="postCode"
				label="邮政编码"
				width="120">
			</el-table-column>
			<el-table-column
				prop="MessageCategory"
				label="消息类别"
				width="120">
			</el-table-column>
			<el-table-column
				prop="repliedLanguage"
				label="回复语言"
				width="120">
			</el-table-column>
			<el-table-column
				prop="capsuleType"
				label="胶囊类别"
				width="120">
			</el-table-column>
			<el-table-column
				prop="InfoIndex"
				label="索引"
				width="120">
			</el-table-column>
			<el-table-column
				prop="message"
				label="输入信息"
				width="150">
			</el-table-column>
			<el-table-column
				prop="subject"
				label="主题"
				width="120">
			</el-table-column>
			<el-table-column
				prop="attachment"
				label="附件"
				width="160">
			</el-table-column>
			<!-- <el-table-column
				prop="createTime"
				label="时间"
				width="120">
			</el-table-column> -->
			<el-table-column
				fixed="right"
				label="操作"
				width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[5, 10, 20, 40]"
			:page-size="pagesize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="UserList.length">    <!--//这是显示总共有多少数据，-->
		</el-pagination>
	</div>
</template>

<script>
import {UserInofRequest} from 'commonjs/Requestaxios'
export default {
	data() {
		return {
				// 用于计算数据的长度
			// newsLength: 0,
			// 默认的页码 初始页
			currentPage: 1,
			// 默认单页渲染数据的条数
			pagesize: 5,
			// 定义一个变量来存放方法
			newsShow: '',
			UserList: []
		};
	},
	created () {
		this.UserInofList()
	},
	methods: {
			// 初始页currentPage、初始每页数据数pagesize和数据data
		handleSizeChange: function (size) {
			this.pagesize = size
			// console.log(this.pagesize)// 每页下拉显示数据
		},
		handleCurrentChange: function (currentPage) {
			this.currentPage = currentPage
			console.log(this.currentPage)// 点击第几页
		},
		handleClick(row) {
			console.log(row);
		},
		UserInofList () {
			console.log(123455)
			// 请求表的数据
			UserInofRequest({
				data: {
					inforId: this.UserList.inforId,
					name: this.UserList.name
				},
				error: () => {
				},
				success: (res) => {
					console.log(res)
					console.log(res.data)
					if (res.status === 200) {
						// 存入vuex中
						// this.$store.commit('coffeeMachine', res.data)
						this.$message({
							message: '数据返回成功',
							showClose: true,
							duration: 1000,
							onClose: () => {
								this.UserList = res.data
							}
						})
					} else {
						this.$message({
							message: res.message,
							type: 'error',
							showClose: true,
							duration: 3000
						})
					}
				}
			})
		}
	}
}
</script>

<style lang='less'>
@import './css/index.less';
</style>
