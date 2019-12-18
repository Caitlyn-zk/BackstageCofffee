<template>
	<div class="nps-back-user">
		<div class="nps-body-title">
			买家信息表
		</div>
		<div>
			<el-table
			:data="userTableData"
			max-height="850"
			style="width: 100%">
				<el-table-column
				prop="id"
				label="序号"
				width="50">
				</el-table-column>
				<el-table-column
				prop="surname"
				label="姓"
				width="60">
				</el-table-column>
				<el-table-column
					prop="name"
					label="名字"
					width="100">
				</el-table-column>
				<el-table-column
				prop="email"
				label="电子邮件"
				width="150">
				</el-table-column>
				<el-table-column
					prop="location"
					label="国家"
					width="100">
				</el-table-column>
				<el-table-column
					prop="language"
					label="语言"
					width="120">
				</el-table-column>
				<el-table-column
				prop="distributeclass"
				label="分布类"
				width="100">
				</el-table-column>
				<el-table-column
				prop="deliveryAddress"
				label="分布类"
				width="60">
				</el-table-column>
				<el-table-column
				prop="title"
				label="描述"
				width="100">
				</el-table-column>
				<el-table-column
				prop="shippingNotes"
				label="装运通知单"
				width="100">
				</el-table-column>
				<el-table-column label="配送信息">
					<el-table-column label="地址">
						<el-table-column
						prop="city"
						label="城市"
						width="60">
						</el-table-column>
						<el-table-column
						prop="address"
						label="收货地址"
						width="150">
						</el-table-column>
						<el-table-column
						prop="phone"
						label="电话"
						width="120">
						</el-table-column>
						<el-table-column
						prop="postCode"
						label="邮政编码"
						width="100">
						</el-table-column>
						<el-table-column
						prop="shippingNotes"
						label="备注"
						width="100">
						</el-table-column>
						<el-table-column
						prop="subscription"
						label="啥"
						width="100">
						</el-table-column>
					</el-table-column>
				</el-table-column>
				<el-table-column
					fixed="right"
					label="操作"
					width="120">
					<template slot-scope="scope">
						<el-button
							@click.native.prevent="deleteRow(scope.$index, tableData)"
							type="text"
							size="small">
							移除
						</el-button>
						<el-button type="text" size="small">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import {UserRequest} from 'commonjs/Requestaxios'
export default {
	data () {
		return {
			userTableData: []
		}
	},
	created () {
		this.UserList()
		console.log(this.userTableData)
	},
	methods: {
		deleteRow (index, rows) {
			rows.splice(index, 1)
		},
		// 请求用户地址渲染
		UserList () {
			// ajax封装的使用
			// 请求表的数据
			UserRequest({
				data: {
					email: this.userTableData.email
				},
				error: () => {
				},
				success: (res) => {
					if (res.status === 200) {
						console.log(res)
						// 存入vuex中
						console.log(res.data)
						// this.$store.commit('UserListdata', res.data)
						this.$message({
							message: '数据返回成功',
							showClose: true,
							duration: 1000,
							onClose: () => {
								console.log(111)
								this.userTableData = res.data
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
