<template>
	<div class="nps-back-user">
		<div class="nps-body-title">
			购物车列表
		</div>
		<div>
			<el-table
				:data="shoppingCartlist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				border
				style="width: 100%">
				<el-table-column
					fixed
					prop="id"
					label="ID"
					width="60">
				</el-table-column>
				<el-table-column
					prop="npscommodity"
					label="添加量商品"
					width="120">
				</el-table-column>
				<el-table-column
					prop="commodity"
					label="商品姓名"
					width="160">
				</el-table-column>
				<el-table-column
					prop="userId"
					label="用户id"
					width="150">
				</el-table-column>
				<el-table-column
					prop="quantity"
					label="量"
					width="100">
				</el-table-column>
				<el-table-column
					prop="totalPrice"
					label="总计（元）"
					width="120">
				</el-table-column>
				<el-table-column
					prop="STATUS"
					label="状态"
					width="200">
				</el-table-column>
				<el-table-column
					fixed="right"
					label="操作"
					width="100">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.$index, shoppingCartlist)" type="text" size="small">查看</el-button>
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
				:total="shoppingCartlist.length">    <!--//这是显示总共有多少数据，-->
			</el-pagination>
		</div>
	</div>
</template>

<script>
import {getOrderListRequest} from 'commonjs/Requestaxios'
var api = 'http://192.168.97.240:3000/'
// import qs from 'qs'
export default {
	data () {
		return {
			shoppingCartlist: [],
			// 用于计算数据的长度
			// newsLength: 0,
			// 默认的页码 初始页
			currentPage: 1,
			// 默认单页渲染数据的条数
			pagesize: 5,
			// 定义一个变量来存放方法
			newsShow: '',
			api,
			formLabelWidth: '120px'
		}
	},
	created () {
		this.ShippingCartList()
	},
	watch: {
		// '$store.state.goodsRequest.tableData' () {
		// 	this.tableData = this.$store.state.goodsRequest.tableData
		// 	// console.log(this.tableData)
		// },
		// '$store.state.goodsRequest.updataform' () {
		// 	this.updataform = this.$store.state.goodsRequest.updataform
		// 	// console.log(this.tableData)
		// 	// this.updataform.img
		// }
	},
	methods: {
		// 删除行
		handleClick (index, row) {
			// row.splice(index, 1)
			// console.log(index)
			let tableid = row[index].id
			// console.log(this.tableData)
			console.log(row[index].id)
		},
		// 初始页currentPage、初始每页数据数pagesize和数据data
		handleSizeChange: function (size) {
			this.pagesize = size
			// console.log(this.pagesize)// 每页下拉显示数据
		},
		handleCurrentChange: function (currentPage) {
			this.currentPage = currentPage
			console.log(this.currentPage)// 点击第几页
		},
		ShippingCartList () {
			console.log(123455)
			getOrderListRequest({
				data: {
					id: this.shoppingCartlist.id,
					userId: this.shoppingCartlist.userId
				},
				error: () => {
				},
				success: (res) => {
					console.log(res.data)
					if (res.status === 200) {
						// 存入vuex中
						// this.$store.commit('changeShippingCart', res.data)
						this.$message({
							message: '数据返回成功',
							showClose: true,
							duration: 1000,
							onClose: () => {
								// console.log(res.data)
								this.shoppingCartlist= res.data
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
