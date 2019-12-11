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
				prop="date"
				label="日期"
				width="150">
				</el-table-column>
				<el-table-column label="配送信息">
					<el-table-column
						prop="name"
						label="姓名"
						width="120">
					</el-table-column>
					<el-table-column label="地址">
						<el-table-column
							prop="province"
							label="省份"
							width="120">
						</el-table-column>
						<el-table-column
							prop="city"
							label="市区"
							width="120">
						</el-table-column>
						<el-table-column
							prop="address"
							label="地址"
							width="300">
						</el-table-column>
						<el-table-column
							prop="zip"
							label="邮编"
							width="120">
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
							<el-button type="text" size="small">编辑</el-button>
						</template>
					</el-table-column>
				</el-table-column>
			</el-table>
		</div>
		<!-- 弹框 -->
		<!-- <el-dialog title="添加收货地址" append-to-body :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="日期" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="姓名" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="省份" :label-width="formLabelWidth">
					<el-select
						v-model="value"
						multiple
						filterable
						remote
						reserve-keyword
						placeholder="请输入关键词"
						:remote-method="remoteMethod"
						:loading="loading">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog> -->
	</div>
</template>

<script>
export default {
	data () {
		return {
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}]
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
