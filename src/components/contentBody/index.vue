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
						<img :src=" api + scope.row.img[0]" width="60" height="60" class="head_pic"/>
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
						<el-button @click="handleClick(scope.$index, tableData)" type="text" size="small">删除</el-button>
						<el-button type="text" size="small" @click="updataceffdata(scope.$index, tableData)">编辑</el-button>
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
			<!-- 添加商品弹框 -->
		<el-dialog title="添加商品" append-to-body :visible.sync="dialogFormVisible">
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
		<!-- 修改商品弹框 -->
		<el-dialog title="编辑商品信息" append-to-body :visible.sync="dialogFormVisibledata">
			<el-form name="from" :model="updataform" class="nps-dialogupdata">
				<el-form-item label="ID" :label-width="formLabelWidth">
					<el-input name="id" v-model="updataform.id" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品分类" :label-width="formLabelWidth">
					<el-input name="classification" v-model="updataform.classification" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品名字" :label-width="formLabelWidth">
					<el-input name="name" v-model="updataform.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品描述" :label-width="formLabelWidth">
					<el-input name="title" v-model="updataform.title" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品详情描述" :label-width="formLabelWidth">
					<el-input name="description" v-model="updataform.description" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品图片" :label-width="formLabelWidth" >
					<input name="img" accept="image/*"  type="file"  autocomplete="off"/>
					<!-- <el-input name="img" type="file" accept="image/*" autocomplete="off"></el-input> -->
				</el-form-item>
				<el-form-item label="烘焙方式" :label-width="formLabelWidth">
					<el-input name="bakingDescription" v-model="updataform.bakingDescription" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="原产地" :label-width="formLabelWidth">
					<el-input name="placefOrigin" v-model="updataform.placefOrigin" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="强度" :label-width="formLabelWidth">
					<el-input name="strength" v-model="updataform.strength" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="杯型" :label-width="formLabelWidth">
					<el-input name="capAmount" v-model="updataform.capAmount" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="香型" :label-width="formLabelWidth">
					<el-select  class="nps-aroma" v-model="updataform.region" value=1 >
						<el-option :key="item.aromaId" v-for="item in aromadata" :label="item.value" :value="item.aromaId"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="酸度" :label-width="formLabelWidth">
					<el-input name="acidity" v-model="updataform.acidity" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="苦度" :label-width="formLabelWidth">
					<el-input name="bitterness" v-model="updataform.bitterness" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="酒精度" :label-width="formLabelWidth">
					<el-input name="alcohol" v-model="updataform.alcohol" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="摄氏度" :label-width="formLabelWidth">
					<el-input name="degreeofBaking" v-model="updataform.degreeofBaking" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="咖啡类型" :label-width="formLabelWidth">
					<el-input name="coffeeClassification" v-model="updataform.coffeeClassification" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="价格" :label-width="formLabelWidth">
					<el-input name="price" v-model="updataform.price" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="优惠" :label-width="formLabelWidth">
					<el-input name="discountPrice" v-model="updataform.discountPrice" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="味道" :label-width="formLabelWidth">
					<el-input name="taste" v-model="updataform.taste" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisibledata = false">取 消</el-button>
				<el-button type="primary" @click="updatecoffCap">确定修改</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import {goodsRequest,
 addGoodsRequest, 
 spliceGoodsRequest, 
 updatecoffGoodsRequest, 
 aromaGoodsRequest} from 'commonjs/Requestaxios'
var api = 'http://192.168.97.240:3000/'
// import qs from 'qs'
export default {
	data () {
		return {
			tableData: [],
			// 用于计算数据的长度
			// newsLength: 0,
			// 默认的页码 初始页
			currentPage: 1,
			// 默认单页渲染数据的条数
			pagesize: 5,
			// 定义一个变量来存放方法
			newsShow: '',
			api,
			dialogFormVisible: false,
			dialogFormVisibledata: false,
			form: {
				id: '',
				classification: '2',
				name: '咖啡',
				title: '这里是描述',
				description: '商品详情描述',
				img: '',
				bakingDescription: '1',
				placefOrigin: '中国',
				price: '62.2',
				aroma: '1',
				strength: '2',
				bitterness: '1',
				alcohol: '1',
				acidity: '2',
				degreeofBaking: '1',
				coffeeClassification: '1',
				discountPrice: '1',
				taste: '还可以',
				capAmount: '6'
			},
			aromadata: [],
			updataform: {},
			formLabelWidth: '120px'
		}
	},
	created () {
		this.handleUserList()
		console.log(this.tableData)
		// console.log(this.form.options)
		// console.log(item.placefOrigin)
	},
	watch: {
		'$store.state.goodsRequest.tableData' () {
			this.tableData = this.$store.state.goodsRequest.tableData
			console.log(this.tableData)
		},
		'$store.state.goodsRequest.updataform' () {
			this.updataform = this.$store.state.goodsRequest.updataform
			// console.log(this.tableData)
			// this.updataform.img
		}
	},
	methods: {
		// 删除行
		handleClick (index, row) {
			row.splice(index, 1)
			// console.log(this.tableData)
			let tableid = null
			for (let prop in this.tableData) {
				tableid = this.tableData[prop]
				// console.log(tableid.id)
			}
			// console.log(this.tableData.id)
			spliceGoodsRequest({
				data: {
					id: tableid.id
				},
				error: () => {
					this.$message({
						// message: '错了错了'
					})
				},
				success: (res) => {
					if (res.status === 200) {
						// 存入vuex中
						// this.$store.commit('changeAddGoods', res.data)
						this.$message({
							message: '删除成功！',
							showClose: true,
							duration: 1000,
							onClose: () => {
								// this.tableData.splice(index, 1)
								row.splice(index, 1)
								this.handleUserList()
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
		// 初始页currentPage、初始每页数据数pagesize和数据data
		handleSizeChange: function (size) {
			this.pagesize = size
			// console.log(this.pagesize)// 每页下拉显示数据
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
			let addCoffeeCapFormData = new FormData(addCoffeeCapForm)
			addCoffeeCapFormData.append('se', 1)
			addGoodsRequest({
				data: addCoffeeCapFormData,
				error: () => {
					this.$message({
						message: '错了错了'
					})
				},
				success: (res) => {
					if (res.status === 200) {
						// 存入vuex中
						// this.$store.commit('changeAddGoods', res.data)
						this.$message({
							message: '添加成功',
							showClose: true,
							duration: 1000,
							onClose: () => {
								this.handleUserList()
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
		// 请求商品渲染
		handleUserList () {
			// ajax封装的使用
			// 请求表的数据
			goodsRequest({
				data: {
					id: this.tableData.id,
					name: this.tableData.name
				},
				error: () => {
				},
				success: (res) => {
					console.log(res.data)
					if (res.status === 200) {
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
		},
		// 修改按钮
		updataceffdata (index, row) {
			this.dialogFormVisibledata = true
			// let id = row[index].id
			console.log(row[index])
			this.$store.commit('updataceff', row[index])
			aromaGoodsRequest({
				data: {
					id: this.tableData.id
				},
				error: () => {
					// this.loginLoading = false
					// console.log(1232)
				},
				success: (res) => {
					console.log(res.data)
					if (res.status === 200) {
						// 存入vuex中
						// this.$store.commit('changeGoods', res.data)
						this.$message({
							message: '数据返回成功',
							showClose: true,
							duration: 1000,
							onClose: () => {
								// console.log(res.data)
								this.aromadata = res.data
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
		// 修改商品
		updatecoffCap () {
			// this.dialogFormVisible = false
			// ajax封装的使用
			// 存入vuex中
			// this.updataform = this.tableData
			// console.log(this.updataform)
			let updataCoffeeForm = document.querySelector('.nps-dialogupdata')
			console.log(updataCoffeeForm)
			let updataCoffeeFormData = new FormData(updataCoffeeForm)
			console.log(updataCoffeeFormData)
			updataCoffeeFormData.set('se', 1)
			updatecoffGoodsRequest({
				data: updataCoffeeFormData,
				error: () => {
					this.$message({
						message: ''
					})
				},
				success: (res) => {
					if (res.status === 200) {
						// 存入vuex中
						// this.$store.commit('changeAddGoods', res.data)
						this.$message({
							message: '修改成功',
							showClose: true,
							duration: 1000,
							onClose: () => {
								this.handleUserList()
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
