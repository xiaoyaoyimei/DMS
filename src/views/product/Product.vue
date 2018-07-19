<template>
	<div>
		<div class="box">
			<div class="box-header">
				<div class="box-tools">
					<button type="button" class="btn btn-box-tool searchFormBtn"><i class="fa fa-search"></i></button>
					<button type="button" class="btn btn-box-tool restFormBtn"><i class="fa fa-refresh"></i></button>
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
				</div>
				<h3 class="box-title">搜索区域</h3>
			</div>
			<form :model="filters" @keyup.enter.native="getList">
				<div class="box-body">
					<el-row :gutter="24">
						<el-col :span="6">
							<label for="userName" class="col-sm-3 control-label">中文名称</label>
							<div class="col-sm-9">
								<input placeholder="请输入内容" class="form-control" name="chineseName" v-model.trim="filters.chineseName"></input>
							</div>
						</el-col>
						<el-col :span="6"> <label for="userName" class="col-sm-3 control-label">英文名称</label>
							<div class="col-sm-9">
								<input placeholder="请输入内容" class="form-control" name="englishName" v-model.trim="filters.englishName"></input>
							</div>
						</el-col>
					</el-row>
				</div>
			</form>
		</div>
		<!--	表格-->
		<div>
			<div class="box">
				<div class="box-header">
					<h3 class="box-title">产品列表</h3>
				</div>
				<div class="box-body">
					<div class="fixed-table-toolbar">
						<div class="bs-bars pull-left">
							<button type="button" id="add_btn" class="btn btn-default toolbar" @click="addFormVisible = true"><i class="fa fa-plus"></i> 
								<span
									>新增</span></button>
							<button type="button" id="delete_btn" class="btn btn-default toolbar" @click="batchRemove" :disabled="this.sels.length===0"><i class="fa fa-trash"></i> <span class="">批量删除</span></button></div>
						<div class="fixed-table-container">
							<el-table :data="tableData" @selection-change="selsChange" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" :border="true">
								<el-table-column type="selection" width="55">
								</el-table-column>
								<el-table-column prop="code" label="分类编码" sortable width="240">
								</el-table-column>
								<el-table-column prop="chineseName" label="中文名称" sortable width="240">
								</el-table-column>
								<el-table-column prop="englishName" label="英文名称" sortable width="240">
								</el-table-column>
								<el-table-column label="操作">
									<template slot-scope="scope">
										<i title="编辑" class="btn  fa fa-edit fa-fw update_btn_event" @click="handleEdit(scope.$index, scope.row)"></i>
										<i title="删除" class="btn fa fa-trash fa-fw delete_btn_event" @click="handleDel(scope.$index, scope.row)"></i>
									</template>
								</el-table-column>
							</el-table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--	新增s-->
		<el-dialog title="新增窗口" :visible.sync="addFormVisible" width="30%">
			<el-form :model="addForm" :label-width="formLabelWidth" :rules="formRules" ref="addForm">
				<el-form-item label="分类编码" prop="code">
					<el-input v-model="addForm.code" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="中文名称" prop="chineseName">
					<el-input v-model="addForm.chineseName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="英文名称" prop="englishName">
					<el-input v-model="addForm.englishName" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addFormVisible = false">关闭</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading"> 保存</el-button>
			</div>
		</el-dialog>
		<!--	新增e-->
		<!--编辑s-->
		<el-dialog title="编辑窗口" :visible.sync="editFormVisible" width="30%">
			<el-form :model="editForm" :label-width="formLabelWidth" :rules="formRules" ref="editForm">
				<el-form-item label="分类编码" prop="code">
					<el-input v-model="editForm.code" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="中文名称" prop="chineseName">
					<el-input v-model="editForm.chineseName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="英文名称" prop="englishName">
					<el-input v-model="editForm.englishName" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="editFormVisible = false">关闭</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="addLoading">保存</el-button>
			</div>
		</el-dialog>
		<!--	编辑e-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				filters: {},
				sels:[],
				addLoading: false,
				editLoading: false,
				addFormVisible: false,
				editFormVisible: false,
				addForm: {
					code: '',
					chineseName: '',
					englishName: '',
				},
				formRules: {
					code: [{
						required: true,
						message: '请输入分类编码',
						trigger: 'blur'
					}],
					chineseName: [{
						required: true,
						message: '请输入中文名称',
						trigger: 'blur'
					}],
					englishName: [{
						required: true,
						message: '请输入英文名称',
						trigger: 'blur'
					}],

				},
				editForm: {
					code: '',
					chineseName: '',
					englishName: '',
				},
				formLabelWidth: '120px',
				tableData: []
			}
		},
		methods: {
			//获取列表
			getList() {
//			this.$axios.get('/product-server/parts/type/list').then(function(res){
//				this.tableData = res
//			});
				this.$axios({
					method: 'get',
					url: '/product-server/parts/type/list'
				}).then((res) => {
					this.tableData = res
				});
			},
			//显示编辑界面
			handleEdit: function(index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//新增
			addSubmit: function() {
				this.$refs.addForm.validate((valid) => {
					if(valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							this.$axios({
								method: 'post',
								url: '/product-server/parts/type/add',
								data: this.addForm,
							}).then((res) => {
								this.addLoading = false;
								if(res.code == "200") {
									this.tableData = res.object;
									this.$message({
										message: '提交成功',
										type: 'success'
									});
									this.$refs['addForm'].resetFields();
									this.addFormVisible = false;
									this.getList();
								} else {
									this.$message({
										message: res.message,
										type: 'error'
									});
								}
							});
						});
					}
				});
			},
			//删除
			handleDel: function(index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.$axios({
						method: 'post',
						url: '/product-server/parts/type/delete/' + row.id,
					}).then((res) => {
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getList();
					})
				});
			},
			//编辑
			editSubmit: function() {
				this.$refs.editForm.validate((valid) => {
					if(valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.$axios({
								method: 'put',
								url: '/product-server/parts/type/update/' + this.editForm.id,
								data: this.editForm,
							}).then((res) => {
								this.tableData = res.object;
								this.editLoading = false;
								this.$message({
									message: '修改成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getList();
							});
						});
					}
				});
			},
			selsChange: function(sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function() {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = {
						ids: ids
					};
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
		},
		mounted() {
			this.getList();
		}
	}
</script>

<style scoped="scoped">

</style>