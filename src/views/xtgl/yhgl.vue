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
			<form>
				<div class="box-body">
					<el-row :gutter="24">
						<el-col :span="6">

							<label for="userName" class="col-sm-3 control-label">用户名</label>
							<div class="col-sm-9">
								<input placeholder="请输入内容" class="form-control" name="userName"></input>
							</div>

						</el-col>
						<el-col :span="6"> <label for="userName" class="col-sm-3 control-label">真实姓名</label>
							<div class="col-sm-9">
								<input placeholder="请输入内容" class="form-control" name="userName"></input>
							</div>
						</el-col>
						<el-col :span="6"><label for="userName" class="col-sm-3 control-label">状态</label>
							<div class="col-sm-9">
								<el-select placeholder="请选择">
									<el-option value="zhangqiang">
									</el-option>
								</el-select>
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
					<h3 class="box-title">用户列表</h3>
				</div>
				<div class="box-body">
					<div class="fixed-table-toolbar">
						<div class="bs-bars pull-left">
							<button type="button" id="add_btn" class="btn btn-default toolbar" @click="addFormVisible = true"><i class="fa fa-plus"></i> 
								<span
									>新增</span></button><button type="button" id="delete_btn" class="btn btn-default toolbar"><i class="fa fa-trash"></i> <span class="">批量删除</span></button></div>
						<div class="fixed-table-container">
							<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" :border="true">
								<el-table-column type="selection" width="55">
								</el-table-column>
								<el-table-column prop="userName" label="用户名" sortable width="240">
								</el-table-column>
								<el-table-column prop="status" label="状态" sortable width="240">
								</el-table-column>
								<el-table-column prop="realName" label="真实姓名" sortable width="240">
								</el-table-column>
								<el-table-column prop="mobile" label="手机号" sortable width="240">
								</el-table-column>
								<el-table-column prop="createTime" label="创建时间" sortable width="240">
								</el-table-column>
								<el-table-column label="操作">
									<template slot-scope="scope">
										<i title="编辑" class="btn  fa fa-edit fa-fw update_btn_event" @click="handleEdit(scope.$index, scope.row)"></i>
										<i title="删除" class="btn fa fa-trash fa-fw delete_btn_event" @click="handleDel(scope.$index, scope.row)"></i>
										<!--<el-button size="mini" >编辑</el-button>
										<el-button size="mini" type="danger">删除</el-button>-->
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
			<el-form :model="addForm" :label-width="formLabelWidth" :rules="addFormRules" ref="addForm">
				<el-form-item label="用户名"  prop="userName">
					<el-input v-model="addForm.userName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="passWord">
					<el-input v-model="addForm.passWord" auto-complete="off"  type="password"></el-input>
				</el-form-item>
				<el-form-item label="真实姓名" prop="realName">
					<el-input v-model="addForm.realName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="mobile">
					<el-input v-model="addForm.mobile" auto-complete="off"></el-input>
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
			<el-form :model="editForm" :label-width="formLabelWidth" :rules="addFormRules" ref="editForm">
				<el-form-item label="用户名" prop="userName">
					<el-input v-model="editForm.userName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="真实姓名"  prop="realName">
					<el-input v-model="editForm.realName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="mobile">
					<el-input v-model="editForm.mobile" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="editFormVisible = false">关闭</el-button>
				<el-button type="primary" @click="editFormVisible = false">保存</el-button>
			</div>
		</el-dialog>
		<!--	编辑e-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				addLoading: false,
				addFormVisible: false,
				editFormVisible: false,
				addForm: {
					userName: '',
					passWord: '',
					realName: '',
					mobile: '',
				},
				addFormRules: {
					userName: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					passWord: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
					realName: [{
						required: true,
						message: '请输入真实姓名',
						trigger: 'blur'
					}],
					mobile: [{
						required: true,
						message: '请输入手机号',
						trigger: 'blur'
					}]
				},
				editForm: {
					userName: '',
					realName: '',
					mobile: '',
				},
				formLabelWidth: '120px',
				tableData: [{
					userName: 'zhangqiang',
					status: 'Y',
					realName: '张强',
					mobile: '18860608888',
					createTime: '2018-07-06 13:14:55',

				}, {
					userName: 'zhangqiang',
					status: 'Y',
					realName: '张强',
					mobile: '18860608888',
					createTime: '2018-07-06 13:14:55',
				}]
			}
		},
		methods: {
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
							//NProgress.start();
							let para = Object.assign({}, this.addForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							addUser(para).then((res) => {
								this.addLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
					//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
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
				//编辑
			editSubmit: function() {
				this.$refs.editForm.validate((valid) => {
					if(valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
		}
	}
</script>

<style scoped="scoped">

</style>