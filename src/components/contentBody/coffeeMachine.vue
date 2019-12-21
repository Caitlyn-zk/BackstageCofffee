<template>
	<div class="nps-back-user">
		<div class="nps-body-title">
			咖啡机
		</div>
		<div>
			<div class="nps-table-title-add">
				<el-button type="" @click="dialogFormVisible = true">添加商品<i class="el-icon-upload el-icon--right"></i></el-button>
			</div>
			<el-table
				:data="tableDataroducts.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				border
				style="width: 100%">
				<el-table-column
					prop="cmachineproductsId"
					label="id"
					width="60">
				</el-table-column>
				<el-table-column
					prop="name"
					label="名字"
					width="100">
				</el-table-column>
				<el-table-column
					prop="npsCommodity"
					label="咖啡机商品"
					width="100">
				</el-table-column>
				<el-table-column
					prop="color"
					label="咖啡机颜色"
					width="100">
				</el-table-column>
				<el-table-column
					prop="img"
					label="图片"
					width="">
					<template scope="scope">
						<img :src=" api + scope.row.cMachineImg[0]" width="60" height="60" class="head_pic"/>
					</template>
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
					prop="specifications"
					label="规格"
					width="100">
				</el-table-column>
				<el-table-column
					prop="manual"
					label="说明书链接"
					width="80">
				</el-table-column>
				<el-table-column
					prop="cmachineclass"
					label="咖啡机类"
					width="80">
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
						<el-button @click="handleClick(scope.$index, tableDataroducts)" type="text" size="small">删除</el-button>
						<el-button type="text" size="small" @click="updataceffdata(scope.$index, tableDataroducts)">编辑</el-button>
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
				:total="tableDataroducts.length">    <!--//这是显示总共有多少数据，-->
			</el-pagination>
		</div>
			<!-- 添加商品弹框 -->
		<el-dialog title="添加咖啡机商品" append-to-body :visible.sync="dialogFormVisible">
			<el-form name="nps-dialogAdd" :model="form" class="nps-dialogAdd">
				<el-form-item label="商品名字" :label-width="formLabelWidth">
					<el-input name="name" v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="咖啡机商品" :label-width="formLabelWidth">
					<el-input name="npsCommodity" v-model="form.npsCommodity" autocomplete="off"></el-input>
				</el-form-item>
				<!-- <el-form-item label="商品详情描述" :label-width="formLabelWidth">
					<el-input name="description" v-model="form.description" autocomplete="off"></el-input>
				</el-form-item> -->
				<el-form-item label="咖啡机颜色" :label-width="formLabelWidth">
					<el-input name="color" v-model="form.color" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品图片" :label-width="formLabelWidth">
					<el-input name="coffeeMachineimg" v-model="form.coffeeMachineimg" type="file" accept="image/*" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="价格" :label-width="formLabelWidth">
					<el-input name="price" v-model="form.price" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="优惠" :label-width="formLabelWidth">
					<el-input name="discountPrice" v-model="form.discountPrice" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="规格" :label-width="formLabelWidth">
					<el-input name="specifications" v-model="form.specifications" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="咖啡机类" :label-width="formLabelWidth">
					<el-input name="cmachineclass" v-model="form.cmachineclass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="说明书" :label-width="formLabelWidth">
					<el-input name="manual" v-model="form.manual" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="addMachineVisble">确 定</el-button>
			</div>
		</el-dialog>
		<!-- 修改商品弹框 -->
		<el-dialog title="编辑商品信息" append-to-body :visible.sync="dialogFormVisibledata">
			<el-form name="nps-dialogAdd" :model="updataform" class="nps-dialogupdata">
				<el-form-item label="ID" :label-width="formLabelWidth">
					<el-input name="cmachineproductsId" v-model="updataform.cmachineproductsId" readonly="readonly" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品名字" :label-width="formLabelWidth">
					<el-input name="name" v-model="updataform.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="咖啡机商品" :label-width="formLabelWidth">
					<el-input name="npsCommodity" v-model="updataform.npsCommodity" autocomplete="off"></el-input>
				</el-form-item>
				<!-- <el-form-item label="商品详情描述" :label-width="formLabelWidth">
					<el-input name="description" v-model="form.description" autocomplete="off"></el-input>
				</el-form-item> -->
				<el-form-item label="咖啡机颜色" :label-width="formLabelWidth">
					<el-input name="color" v-model="updataform.color" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品图片" :label-width="formLabelWidth">
					<input name="coffeeMachineimg" accept="image/*"  type="file"  autocomplete="off"/>
				</el-form-item>
				<el-form-item label="价格" :label-width="formLabelWidth">
					<el-input name="price" v-model="updataform.price" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="优惠" :label-width="formLabelWidth">
					<el-input name="discountPrice" v-model="updataform.discountPrice" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="规格" :label-width="formLabelWidth">
					<el-input name="specifications" v-model="updataform.specifications" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="咖啡机类" :label-width="formLabelWidth">
					<el-input name="cmachineclass" v-model="updataform.cmachineclass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="说明书" :label-width="formLabelWidth">
					<el-input name="manual" v-model="updataform.manual" autocomplete="off"></el-input>
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
import {Coffeemachine, addMachineRequest, deleteCoffeemachine, updatecoffMachineRequest} from 'commonjs/Requestaxios'
var api = 'http://192.168.97.240:3000/'
// import qs from 'qs'
export default {
	data () {
		return {
			tableDataroducts: [],
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
				name: '咖啡机名',
				npsCommodity: '1',
				color: '1-8',
				price: '102.2',
				coffeeMachineimg: '',
				discountPrice: '132',
				specifications: '1',
				manual: '书明书链接',
				cmachineclass: '1'
			},
			aromadata: [],
			updataform: {}, // 存放修改商品的
			formLabelWidth: '120px'
		}
	},
	created () {
		this.Coffeemachinegoods()
		console.log(this.tableDataroducts)
		// console.log(this.form.options)
		// console.log(item.placefOrigin)
	},
	watch: {
		'$store.state.coffeeMachine.tableDataroducts' () {
			this.tableDataroducts = this.$store.state.coffeeMachine.tableDataroducts
			console.log(this.tableDataroducts)
		},
		'$store.state.coffeeMachine.updataform' () {
			this.updataform = this.$store.state.coffeeMachine.updataform
			// console.log(this.tableDataroducts)
			// this.updataform.img
		}
	},
	methods: {
		// 删除行
		handleClick (index, row) {
			let tableid = row[index].cmachineproductsId
			console.log(row[index].cmachineproductsId)
			deleteCoffeemachine({
				data: {
					id: tableid
				},
				error: () => {
					this.$message({
						// message: '错了错了'
					})
				},
				success: (res) => {
					if (res.status === 200) {
						this.$message({
							message: '删除成功！',
							showClose: true,
							duration: 2000,
							onClose: () => {
								// this.tableData.splice(index, 1)
								row.splice(index, 1)
								this.Coffeemachinegoods()
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
		// 添加咖啡机
		addMachineVisble () {
			this.dialogFormVisible = false
			// ajax封装的使用
			// 存入vuex中
			console.log(this.form)
			let addCoffeeCapForm = document.querySelector('.nps-dialogAdd')
			console.log(addCoffeeCapForm)
			let addCoffeeCapFormData = new FormData(addCoffeeCapForm)
			addCoffeeCapFormData.append('se', 1)
			addMachineRequest({
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
								this.Coffeemachinegoods()
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
		Coffeemachinegoods () {
			// ajax封装的使用
			// 请求表的数据
			Coffeemachine({
				data: {
					id: this.tableDataroducts.id,
					name: this.tableDataroducts.name
				},
				error: () => {
				},
				success: (res) => {
					console.log(1213414)
					console.log(res)
					console.log(res.data)
					
					if (res.status === 200) {
						// 存入vuex中
						this.$store.commit('coffeeMachine', res.data)
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
			console.log(row[index])
			this.$store.commit('updataceff', row[index])
		},
		// 修改商品
		updatecoffCap () {
			// this.dialogFormVisible = false
			// ajax封装的使用
			// 存入vuex中
			// this.updataform = this.tableDataroducts
			// console.log(this.updataform)
			let updataCoffeeForm = document.querySelector('.nps-dialogupdata')
			console.log(updataCoffeeForm)
			let updataCoffeeFormData = new FormData(updataCoffeeForm)
			console.log(updataCoffeeFormData)
			updataCoffeeFormData.set('se', 1)
			updatecoffMachineRequest({
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
								this.dialogFormVisibledata = false
								this.Coffeemachinegoods()
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
