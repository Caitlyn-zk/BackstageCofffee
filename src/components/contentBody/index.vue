<template>
	<div class="nps-back-user">
		<div class="nps-body-title">
			咖啡胶囊
		</div>
		<div>
			<div class="nps-table-title-add">
				<el-button type="" @click="dialogFormVisible = true">添加商品<i class="el-icon-upload el-icon--right"></i></el-button>
			</div>
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
						<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
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
			<!-- 弹框 -->
		<el-dialog title="添加收货地址" append-to-body :visible.sync="dialogFormVisible">
			<el-form name="nps-dialogAdd" :model="form" class="nps-dialogAdd">
				<el-form-item label="商品分类" :label-width="formLabelWidth">
					<el-input name="classification" v-model="form.classification" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品名字" :label-width="formLabelWidth">
					<el-input name="name" v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品描述" :label-width="formLabelWidth">
					<el-input name="title" v-model="form.title" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品详情描述" :label-width="formLabelWidth">
					<el-input name="description" v-model="form.description" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品图片" :label-width="formLabelWidth">
					<el-input name="img" v-model="form.img" type="file" accept="image/*" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="烘焙方式" :label-width="formLabelWidth">
					<el-input name="bakingDescription" v-model="form.bakingDescription" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="原产地" :label-width="formLabelWidth">
					<el-input name="placefOrigin" v-model="form.placefOrigin" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="强度" :label-width="formLabelWidth">
					<el-input name="strength" v-model="form.strength" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="杯型" :label-width="formLabelWidth">
					<el-input name="capAmount" v-model="form.capAmount" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="香型" :label-width="formLabelWidth">
					<el-input name="aroma" v-model="form.aroma" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="酸度" :label-width="formLabelWidth">
					<el-input name="acidity" v-model="form.acidity" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="苦度" :label-width="formLabelWidth">
					<el-input name="bitterness" v-model="form.bitterness" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="酒精度" :label-width="formLabelWidth">
					<el-input name="alcohol" v-model="form.alcohol" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="摄氏度" :label-width="formLabelWidth">
					<el-input name="degreeofBaking" v-model="form.degreeofBaking" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="咖啡类型" :label-width="formLabelWidth">
					<el-input name="coffeeClassification" v-model="form.coffeeClassification" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="价格" :label-width="formLabelWidth">
					<el-input name="price" v-model="form.price" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="优惠" :label-width="formLabelWidth">
					<el-input name="discountPrice" v-model="form.discountPrice" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="味道" :label-width="formLabelWidth">
					<el-input name="taste" v-model="form.taste" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="addVisible">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import {goodsRequest, addGoodsRequest} from 'commonjs/Requestaxios'
var api = 'http://192.168.97.222:3000/'
// import qs from 'qs'
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
			api,
			dialogTableVisible: false,
			dialogFormVisible: false,
			form: {
				classification: '1',
				name: 'nanem',
				title: '1',
				description: '',
				img: '',
				bakingDescription: '1',
				placefOrigin: 'skjsjk',
				price: '12.2',
				aroma: '',
				strength: '',
				bitterness: '',
				alcohol: '',
				acidity: '',
				degreeofBaking: '',
				coffeeClassification: '',
				discountPrice: '',
				taste: '',
				capAmount: ''
			},
			formLabelWidth: '120px'
		}
	},
	components: {
	},
	created () {
		this.handleUserList()
		// console.log(this.form.options)
		// console.log(item.placefOrigin)
	},
	watch: {
		'$store.state.goodsRequest.tableData' () {
			this.tableData = this.$store.state.goodsRequest.tableData
			console.log(this.tableData)
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
		// 添加商品
		addVisible () {
			this.dialogFormVisible = false
			// ajax封装的使用
			// 存入vuex中
			console.log(this.form)
			let addCoffeeCapForm = document.querySelector('.nps-dialogAdd')
			console.log(addCoffeeCapForm)
			let addCoffeeCapFormData = new FormData(addCoffeeCapForm)
			addCoffeeCapFormData.append('se', 1)

			console.log(addCoffeeCapFormData)
			addGoodsRequest({
				data: addCoffeeCapFormData,
				error: () => {
					this.$message({
						message: '错了错了'
					})
				},
				success: (res) => {
					if (res.status === 200) {
						console.log(res)
						// 存入vuex中
						// this.$store.commit('changeAddGoods', res.data)
						this.$message({
							message: '添加成功',
							showClose: true,
							duration: 1000,
							onClose: () => {
								this.handleUserList()
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
		},
		handleUserList () {
			// ajax封装的使用
			// 请求表的数据
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
					if (res.status === 200) {
						// console.log(res)
						// 存入vuex中
						this.$store.commit('changeGoods', res.data)
						this.$message({
							message: '数据返回成功',
							showClose: true,
							duration: 1000,
							onClose: () => {
								// console.log(res.data)
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
