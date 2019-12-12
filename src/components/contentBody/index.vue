<template>
	<div class="nps-back-user">
		<div class="nps-body-title">
			发布商品
		</div>
		<div>
			<el-table
				:data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				border
				style="width: 100%">
				<el-table-column
					prop="id"
					label="id"
					width="60">
				</el-table-column>
				<el-table-column
					prop="classification"
					label="分类"
					width="100">
				</el-table-column>
				<el-table-column
					prop="name"
					label="商品姓名"
					width="100">
				</el-table-column>
				<el-table-column
					prop="title"
					label="描述"
					width="180">
				</el-table-column>
				<el-table-column
					prop="img"
					label="图片"
					width="">
					<template scope="scope">
						<img :src="api + scope.row.imgpic" width="60" height="60" class="head_pic"/>
					</template>
				</el-table-column>
				<el-table-column
					prop="backingDescription"
					label="烘焙方式"
					width="100">
				</el-table-column>
				<el-table-column
					prop="placefOrigin"
					label="原产地"
					width="80">
				</el-table-column>
				<el-table-column
					prop="strength"
					label="强度"
					width="80">
				</el-table-column>
				<el-table-column
					prop="capAmount"
					label="杯型"
					width="100">
				</el-table-column>
				<el-table-column
					prop="value"
					label="香型"
					width="100">
				</el-table-column>
				<el-table-column
					prop="acidity"
					label="酸度"
					width="100">
				</el-table-column>
				<el-table-column
					prop="bitterness"
					label="苦度"
					width="100">
				</el-table-column>
				<el-table-column
					prop="alcohol"
					label="酒精度"
					width="100">
				</el-table-column>
				<el-table-column
					prop="degreeofBaking"
					label="摄氏度"
					width="100">
				</el-table-column>
				<el-table-column
					prop="coffeeClassification"
					label="咖啡的分类"
					width="100">
				</el-table-column>
				<el-table-column
					prop="price"
					label="价格"
					width="100">
				</el-table-column>
				<el-table-column
					prop="discountPrice"
					label="优惠"
					width="100">
				</el-table-column>
				<el-table-column
					prop="taste"
					label="味道"
					width="100">
				</el-table-column>
				<el-table-column
					prop="createTime"
					label="上传时间"
					width="100">
				</el-table-column>
				<el-table-column
					fixed="right"
					label="操作"
					width="100">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
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
				:total="tableData.length">    <!--//这是显示总共有多少数据，-->
			</el-pagination>
		</div>
	</div>
</template>

<script>
import {goodsRequest} from 'commonjs/Requestaxios'
var api = 'http://192.168.97.240:3000/coffeeCap/'
export default {
	data () {
		return {
			tableData: [],
			// 用于计算数据的长度
			newsLength: 0,
			// 默认的页码 初始页
			currentPage: 1,
			// 默认单页渲染数据的条数
			pagesize: 5,
			// 定义一个变量来存放方法
			newsShow: '',
			api
		}
	},
	components: {
	},
	created () {
		// console.log(this.$store)
		this.handleUserList()
		// let img = JSON.stringify(this.img)
	},
	watch: {
		'$store.state.goodsRequest.tableData' () {
			// console.log($store.state)
			this.tableData = this.$store.state.goodsRequest.tableData
		}
	},
	methods: {
		// 删除行
		handleClick (row) {
		console.log(row)
	},
	// 初始页currentPage、初始每页数据数pagesize和数据data
	handleSizeChange: function (size) {
		this.pagesize = size
		console.log(this.pagesize)// 每页下拉显示数据
	},
	handleCurrentChange: function (currentPage) {
		this.currentPage = currentPage
		console.log(this.currentPage)// 点击第几页
	},
	handleUserList () {
		// ajax封装的使用
			goodsRequest({
				data: {
					id: this.tableData.id,
					name: this.tableData.name
				},
				error: () => {
					// this.loginLoading = false
					// console.log(1232)
				},
				success: (res) => {
					// console.log(res)
					// console.log(res.data)
					if (res.status === 200) {
						// 存入vuex中
						// console.log(this.$store)
						this.$store.commit('changeGoods', res.data)
						// console.log(this.$store.state.tableData)
						this.$message({
							message: '数据返回成功',
							showClose: true,
							duration: 1000,
							onClose: () => {
								console.log(res.data)
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
