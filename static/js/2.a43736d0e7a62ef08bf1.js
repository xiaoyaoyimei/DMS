webpackJsonp([2],{YyK2:function(t,e){},i9ue:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("woOf"),i=a.n(s),o={data:function(){return{filters:{},sels:[],addLoading:!1,editLoading:!1,addFormVisible:!1,editFormVisible:!1,addForm:{code:"",chineseName:"",englishName:""},formRules:{code:[{required:!0,message:"请输入分类编码",trigger:"blur"}],chineseName:[{required:!0,message:"请输入中文名称",trigger:"blur"}],englishName:[{required:!0,message:"请输入英文名称",trigger:"blur"}]},editForm:{code:"",chineseName:"",englishName:""},formLabelWidth:"120px",tableData:[]}},methods:{getList:function(){var t=this;this.$axios({method:"get",url:"/product-server/parts/type/list"}).then(function(e){t.tableData=e})},handleEdit:function(t,e){this.editFormVisible=!0,this.editForm=i()({},e)},addSubmit:function(){var t=this;this.$refs.addForm.validate(function(e){e&&t.$confirm("确认提交吗？","提示",{}).then(function(){t.addLoading=!0,t.$axios({method:"post",url:"/product-server/parts/type/add",data:t.addForm}).then(function(e){t.addLoading=!1,"200"==e.code?(t.tableData=e.object,t.$message({message:"提交成功",type:"success"}),t.$refs.addForm.resetFields(),t.addFormVisible=!1,t.getList()):t.$message({message:e.message,type:"error"})})})})},handleDel:function(t,e){var a=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){a.$axios({method:"post",url:"/product-server/parts/type/delete/"+e.id}).then(function(t){a.$message({message:"删除成功",type:"success"}),a.getList()})})},editSubmit:function(){var t=this;this.$refs.editForm.validate(function(e){e&&t.$confirm("确认提交吗？","提示",{}).then(function(){t.$axios({method:"put",url:"/product-server/parts/type/update/"+t.editForm.id,data:t.editForm}).then(function(e){t.tableData=e.object,t.editLoading=!1,t.$message({message:"修改成功",type:"success"}),t.$refs.editForm.resetFields(),t.editFormVisible=!1,t.getList()})})})},selsChange:function(t){this.sels=t},batchRemove:function(){var t=this,e=this.sels.map(function(t){return t.id}).toString();this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){t.listLoading=!0,batchRemoveUser({ids:e}).then(function(e){t.listLoading=!1,t.$message({message:"删除成功",type:"success"}),t.getUsers()})}).catch(function(){})}},mounted:function(){this.getList()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"box"},[t._m(0),t._v(" "),a("form",{attrs:{model:t.filters},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getList(e):null}}},[a("div",{staticClass:"box-body"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:6}},[a("label",{staticClass:"col-sm-3 control-label",attrs:{for:"userName"}},[t._v("中文名称")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.filters.chineseName,expression:"filters.chineseName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"请输入内容",name:"chineseName"},domProps:{value:t.filters.chineseName},on:{input:function(e){e.target.composing||t.$set(t.filters,"chineseName",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("label",{staticClass:"col-sm-3 control-label",attrs:{for:"userName"}},[t._v("英文名称")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.filters.englishName,expression:"filters.englishName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"请输入内容",name:"englishName"},domProps:{value:t.filters.englishName},on:{input:function(e){e.target.composing||t.$set(t.filters,"englishName",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])])],1)],1)])]),t._v(" "),a("div",[a("div",{staticClass:"box"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"fixed-table-toolbar"},[a("div",{staticClass:"bs-bars pull-left"},[a("button",{staticClass:"btn btn-default toolbar",attrs:{type:"button",id:"add_btn"},on:{click:function(e){t.addFormVisible=!0}}},[a("i",{staticClass:"fa fa-plus"}),t._v(" "),a("span",[t._v("新增")])]),t._v(" "),a("button",{staticClass:"btn btn-default toolbar",attrs:{type:"button",id:"delete_btn",disabled:0===this.sels.length},on:{click:t.batchRemove}},[a("i",{staticClass:"fa fa-trash"}),t._v(" "),a("span",{},[t._v("批量删除")])])]),t._v(" "),a("div",{staticClass:"fixed-table-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"default-sort":{prop:"date",order:"descending"},border:!0},on:{"selection-change":t.selsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"code",label:"分类编码",sortable:"",width:"240"}}),t._v(" "),a("el-table-column",{attrs:{prop:"chineseName",label:"中文名称",sortable:"",width:"240"}}),t._v(" "),a("el-table-column",{attrs:{prop:"englishName",label:"英文名称",sortable:"",width:"240"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"btn  fa fa-edit fa-fw update_btn_event",attrs:{title:"编辑"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}}),t._v(" "),a("i",{staticClass:"btn fa fa-trash fa-fw delete_btn_event",attrs:{title:"删除"},on:{click:function(a){t.handleDel(e.$index,e.row)}}})]}}])})],1)],1)])])])]),t._v(" "),a("el-dialog",{attrs:{title:"新增窗口",visible:t.addFormVisible,width:"30%"},on:{"update:visible":function(e){t.addFormVisible=e}}},[a("el-form",{ref:"addForm",attrs:{model:t.addForm,"label-width":t.formLabelWidth,rules:t.formRules}},[a("el-form-item",{attrs:{label:"分类编码",prop:"code"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.code,callback:function(e){t.$set(t.addForm,"code",e)},expression:"addForm.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"中文名称",prop:"chineseName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.chineseName,callback:function(e){t.$set(t.addForm,"chineseName",e)},expression:"addForm.chineseName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"英文名称",prop:"englishName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.englishName,callback:function(e){t.$set(t.addForm,"englishName",e)},expression:"addForm.englishName"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addFormVisible=!1}}},[t._v("关闭")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.addLoading},nativeOn:{click:function(e){return t.addSubmit(e)}}},[t._v(" 保存")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑窗口",visible:t.editFormVisible,width:"30%"},on:{"update:visible":function(e){t.editFormVisible=e}}},[a("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":t.formLabelWidth,rules:t.formRules}},[a("el-form-item",{attrs:{label:"分类编码",prop:"code"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.code,callback:function(e){t.$set(t.editForm,"code",e)},expression:"editForm.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"中文名称",prop:"chineseName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.chineseName,callback:function(e){t.$set(t.editForm,"chineseName",e)},expression:"editForm.chineseName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"英文名称",prop:"englishName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.englishName,callback:function(e){t.$set(t.editForm,"englishName",e)},expression:"editForm.englishName"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editFormVisible=!1}}},[t._v("关闭")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.addLoading},nativeOn:{click:function(e){return t.editSubmit(e)}}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header"},[e("div",{staticClass:"box-tools"},[e("button",{staticClass:"btn btn-box-tool searchFormBtn",attrs:{type:"button"}},[e("i",{staticClass:"fa fa-search"})]),this._v(" "),e("button",{staticClass:"btn btn-box-tool restFormBtn",attrs:{type:"button"}},[e("i",{staticClass:"fa fa-refresh"})]),this._v(" "),e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[e("i",{staticClass:"fa fa-minus"})])]),this._v(" "),e("h3",{staticClass:"box-title"},[this._v("搜索区域")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header"},[e("h3",{staticClass:"box-title"},[this._v("产品列表")])])}]};var r=a("VU/8")(o,l,!1,function(t){a("YyK2")},"data-v-dc3e238a",null);e.default=r.exports}});
//# sourceMappingURL=2.a43736d0e7a62ef08bf1.js.map