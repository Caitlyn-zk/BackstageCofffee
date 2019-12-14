<template>
	<div class="nps-back-user">
		<div class="nps-body-title">
			买家信息表
		</div>
		<div>
			<el-table
				:data="tableData"
				border
				height="90%"
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
				width="100">
				</el-table-column>
				<el-table-column
				prop="distributeclass"
				label="经销商"
				width="100">
				</el-table-column>
				<el-table-column
				prop="address"
				label="收货地址"
				width="100">
				</el-table-column>
				<el-table-column
				prop="distributeclass"
				label="经销商"
				width="100">
				</el-table-column>
				<el-table-column
				prop="language"
				label="语言"
				width="100">
				</el-table-column>
				<el-table-column
				prop="shippingNotes"
				label="装运通知单"
				width="100">
				</el-table-column>
				<el-table-column
				prop="subscription"
				label="订阅"
				width="100">
				</el-table-column>
				<el-table-column label="配送信息">
					<el-table-column label="地址">
						<el-table-column
						prop="city"
						label="城市"
						width="100">
						</el-table-column>
						<el-table-column
							prop="city"
							label="市区"
							width="120">
						</el-table-column>
						<el-table-column
						prop="deliveryAddress"
						label="详细送货地址"
						width="100">
						</el-table-column>
						<el-table-column
						prop="phone"
						label="电话"
						width="100">
						</el-table-column>
						<el-table-column
						prop="postCode"
						label="邮政编码"
						width="100">
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
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			tableData: []
		}
	},
	methods: {
		deleteRow (index, rows) {
			rows.splice(index, 1)
		}
	}
}
</script>

<style lang='less'>
@import './css/index.less';
</style>
