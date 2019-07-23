(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cc3b820"],{"0944":function(e,t,a){var s={"./SysBasic.vue":"b839","./SysCamp.vue":"2f80","./SysPeriod.vue":"2117","./SysSubject.vue":"7217","./SysUser.vue":"dfbc","./basic/MenuMana.vue":"e070","./basic/MenuRole.vue":"6b20"};function i(e){var t=n(e);return a(t)}function n(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(s)},i.resolve=n,e.exports=i,i.id="0944"},2117:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("时间段数目（"+e._s(e.total)+"条）")]),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.showAddView()}}},[e._v("添加")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.periods,fit:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"name",align:"center",label:"时间段"}}),a("el-table-column",{attrs:{prop:"createTime",align:"center",label:"创建时间"}}),a("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"2px"},attrs:{size:"mini"},on:{click:function(a){return e.showEditView(t.row)}}},[e._v("编辑")]),a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"2px"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.deletePeriod(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"periodForm",attrs:{model:e.period,rules:e.rules}},[a("el-form-item",{attrs:{prop:"name",label:"时间段名称"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入时间段名称，例如：14:30-16:30"},model:{value:e.period.name,callback:function(t){e.$set(e.period,"name",t)},expression:"period.name"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.cancelPeriod("periodForm")}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addPeriod("periodForm")}}},[e._v("确定")])],1)],1)],1)},i=[],n=(a("7364"),{name:"SysPeriod",data:function(){return{tableLoading:!1,total:0,periods:[],dialogTitle:"",dialogVisible:!1,period:{name:""},formLoading:!1,rules:{name:[{required:!0,message:"必填：时间段名称！",trigger:"blur"}]}}},methods:{loadDatas:function(){var e=this,t=this;this.tableLoading=!0,this.getRequest("/system/period").then(function(a){t.tableLoading=!1,a&&200==a.status&&(t.periods=a.data.obj,t.total=e.periods.length)})},showAddView:function(){this.dialogVisible=!0,this.dialogTitle="添加时间段"},cancelPeriod:function(e){this.dialogVisible=!1,void 0!==this.$refs[e]&&this.$refs[e].clearValidate()},addPeriod:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return!1;var s=t;t.formLoading=!0,t.period.id?t.putRequest("/system/period",t.period).then(function(t){s.handleResponse(s,t,e)}):t.postRequest("/system/period",t.period).then(function(t){s.handleResponse(s,t,e)})})},handleResponse:function(e,t,a){e.formLoading=!1,t&&200==t.status&&200==t.data.status&&(e.dialogVisible=!1,e.loadDatas(),void 0!==e.$refs[a]&&e.$refs[a].resetFields(),e.emptyPeriod())},showEditView:function(e){this.dialogVisible=!0,this.dialogTitle="修改时间段",this.period=e},deletePeriod:function(e){var t=this,a=this;this.$confirm("删除["+e.name+"]时间段，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.tableLoading=!0,t.deleteRequest("/system/period/"+e.id).then(function(e){a.tableLoading=!1,e&&200==e.status&&200==e.data.status&&a.loadDatas()})}).catch(function(e){t.$message("已取消删除")})},emptyPeriod:function(){this.period={name:""}}},mounted:function(){this.loadDatas()}}),r=n,o=(a("283a"),a("6691")),l=Object(o["a"])(r,s,i,!1,null,"a3aab838",null);t["default"]=l.exports},"283a":function(e,t,a){"use strict";var s=a("aa35"),i=a.n(s);i.a},"2d43":function(e,t,a){var s=a("01f5"),i=a("6462"),n=a("db4b"),r=a("b146"),o=a("5824");e.exports=function(e,t){var a=1==e,l=2==e,c=3==e,u=4==e,d=6==e,m=5==e||d,p=t||o;return function(t,o,f){for(var h,g,b=n(t),v=i(b),y=s(o,f,3),x=r(v.length),w=0,k=a?p(t,x):l?p(t,0):void 0;x>w;w++)if((m||w in v)&&(h=v[w],g=y(h,w,b),e))if(a)k[w]=g;else if(g)switch(e){case 3:return!0;case 5:return h;case 6:return w;case 2:k.push(h)}else if(u)return!1;return d?-1:c||u?u:k}}},"2f80":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("校区数目（"+e._s(e.total)+"条）")]),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.showAddCampView()}}},[e._v("添加")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.campuses,fit:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"name",align:"center",label:"校区"}}),a("el-table-column",{attrs:{prop:"address",align:"center",label:"地址"}}),a("el-table-column",{attrs:{prop:"phone",align:"center",label:"校区电话"}}),a("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"2px"},attrs:{size:"mini"},on:{click:function(a){return e.showEditCampView(t.row)}}},[e._v("编辑")]),a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"2px"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.deleteCamp(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"campusForm",attrs:{model:e.campus,rules:e.rules}},[a("el-form-item",{attrs:{prop:"name",label:"校区名称"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入校区名称"},model:{value:e.campus.name,callback:function(t){e.$set(e.campus,"name",t)},expression:"campus.name"}})],1),a("el-form-item",{attrs:{prop:"address",label:"校区地址"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入校区地址"},model:{value:e.campus.address,callback:function(t){e.$set(e.campus,"address",t)},expression:"campus.address"}})],1),a("el-form-item",{attrs:{prop:"phone",label:"校区电话"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入校区电话"},model:{value:e.campus.phone,callback:function(t){e.$set(e.campus,"phone",t)},expression:"campus.phone"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.cancelCampus("campusForm")}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addCampus("campusForm")}}},[e._v("确定")])],1)],1)],1)},i=[],n=(a("7364"),{name:"SysCamp",data:function(){return{tableLoading:!1,total:0,campuses:[],dialogTitle:"",dialogVisible:!1,campus:{name:"",address:"",phone:""},formLoading:!1,rules:{name:[{required:!0,message:"必填：校区名称！",trigger:"blur"}],address:[{required:!0,message:"必填：校区地址！",trigger:"blur"}],phone:[{required:!0,message:"必填：校区电话！",trigger:"blur"}]}}},methods:{loadDatas:function(){var e=this,t=this;this.tableLoading=!0,this.getRequest("/system/campus").then(function(a){t.tableLoading=!1,a&&200==a.status&&(t.campuses=a.data.obj,t.total=e.campuses.length)})},showAddCampView:function(){this.dialogVisible=!0,this.dialogTitle="添加校区"},cancelCampus:function(e){this.dialogVisible=!1,void 0!==this.$refs[e]&&this.$refs[e].clearValidate()},addCampus:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return!1;var s=t;t.formLoading=!0,t.campus.id?t.putRequest("/system/campus",t.campus).then(function(t){s.handleResponse(s,t,e)}):t.postRequest("/system/campus",t.campus).then(function(t){s.handleResponse(s,t,e)})})},handleResponse:function(e,t,a){e.formLoading=!1,t&&200==t.status&&200==t.data.status&&(e.dialogVisible=!1,e.loadDatas(),void 0!==e.$refs[a]&&e.$refs[a].resetFields(),e.emptyCampus())},showEditCampView:function(e){this.dialogVisible=!0,this.dialogTitle="修改校区",this.campus=e},deleteCamp:function(e){var t=this,a=this;this.$confirm("删除["+e.name+"]校区，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.tableLoading=!0,t.deleteRequest("/system/campus/"+e.id).then(function(e){a.tableLoading=!1,e&&200==e.status&&200==e.data.status&&a.loadDatas()})}).catch(function(e){t.$message("已取消删除")})},emptyCampus:function(){this.campus={name:"",address:"",phone:""}}},mounted:function(){this.loadDatas()}}),r=n,o=(a("5758"),a("6691")),l=Object(o["a"])(r,s,i,!1,null,"d025806e",null);t["default"]=l.exports},"3a58":function(e,t,a){"use strict";var s=a("bad3"),i=a.n(s);i.a},4726:function(e,t,a){"use strict";var s=a("bf82"),i=a.n(s);i.a},4739:function(e,t,a){"use strict";var s=a("c8ce"),i=a.n(s);i.a},"4b0a":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"4c2c":function(e,t,a){},"51fb":function(e,t,a){},"55a0":function(e,t,a){"use strict";var s=a("a013"),i=a("4b0a"),n=a("35dd");a("629c")("search",1,function(e,t,a,r){return[function(a){var s=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,s):new RegExp(a)[t](String(s))},function(e){var t=r(a,e,this);if(t.done)return t.value;var o=s(e),l=String(this),c=o.lastIndex;i(c,0)||(o.lastIndex=0);var u=n(o,l);return i(o.lastIndex,c)||(o.lastIndex=c),null===u?-1:u.index}]})},5758:function(e,t,a){"use strict";var s=a("6ec4"),i=a.n(s);i.a},5824:function(e,t,a){var s=a("f691");e.exports=function(e,t){return new(s(e))(t)}},"6b20":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"menurole-header"},[a("el-input",{staticClass:"input-left",attrs:{placeholder:"请输入角色英文名称...",size:"mini"},model:{value:e.newRole,callback:function(t){e.newRole=t},expression:"newRole"}},[a("template",{slot:"prepend"},[e._v("ROLE_")])],2),a("el-input",{staticClass:"input-right",attrs:{placeholder:"请输入角色中文名字...",size:"mini"},model:{value:e.newRoleZh,callback:function(t){e.newRoleZh=t},expression:"newRoleZh"}}),a("el-button",{staticClass:"add-button",attrs:{type:"primary",size:"mini"},on:{click:e.addNewRole}},[e._v("添加角色")])],1),a("div",{staticClass:"menurole-body"},[a("el-collapse",{staticClass:"body-collapse",attrs:{accordion:""},on:{change:function(t){return e.collapseChange(e.activeColItem)}},model:{value:e.activeColItem,callback:function(t){e.activeColItem=t},expression:"activeColItem"}},e._l(e.roles,function(t,s){return a("el-collapse-item",{key:t.name,attrs:{title:t.nameZh,name:t.id}},[a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("可访问的资源")]),a("el-button",{staticClass:"delete-button",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.deleteRole(t.id,t.nameZh)}}})],1),a("div",[a("el-tree",{ref:"tree",refInFor:!0,attrs:{props:e.props,data:e.treeData,"default-checked-keys":e.checkedKeys,"node-key":"id","show-checkbox":"","highlight-current":""},on:{"check-change":e.handleCheckChange}})],1),a("div",{staticClass:"card-footer"},[a("el-button",{attrs:{size:"mini"},on:{click:e.cancelUpdateRoleMenu}},[e._v("取消修改")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.updateRoleMenu(s)}}},[e._v("确认修改")])],1)])],1)}),1)],1)])},i=[],n=a("fa7d"),r={name:"MenuRole",data:function(){return{loading:!1,newRole:"",newRoleZh:"",roles:[],activeColItem:-1,treeData:[],checkedKeys:[],props:{children:"children",label:"name"}}},mounted:function(){this.loading=!0,this.initRoles()},methods:{initRoles:function(){var e=this;this.getRequest("/system/basic/roles").then(function(t){e.loading=!1,t&&200==t.status&&(e.roles=t.data.obj,e.activeColItem=-1)})},addNewRole:function(){if(Object(n["e"])(this.newRole,this.newRoleZh)){this.loading=!0;var e=this;this.postRequest("/system/basic/addRole",{name:this.newRole,nameZh:this.newRoleZh}).then(function(t){e.loading=!1,t&&200==t.status&&(e.initRoles(),e.newRole="",e.newRoleZh="")})}},collapseChange:function(e){var t=e;if(""!=e){var a=this;this.getRequest("/system/basic/menuTree/"+t).then(function(e){if(e&&200==e.status){var t=e.data.obj;a.treeData=t.menus,a.checkedKeys=t.menuIds}})}},deleteRole:function(e,t){var a=this;this.$confirm("删除角色["+t+"]，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.loading=!0,a.deleteRequest("/system/basic/role/"+e).then(function(e){a.loading=!1,e&&200==e.status&&a.initRoles()})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleCheckChange:function(e,t,a){},cancelUpdateRoleMenu:function(){this.activeColItem=-1},updateRoleMenu:function(e){var t=this.$refs.tree[e].getCheckedKeys(!0),a=this;this.putRequest("/system/basic/updateMenuRole",{roleId:this.activeColItem,menuIds:t}).then(function(e){e&&200==e.status&&(a.activeColItem=-1)})}}},o=r,l=(a("4726"),a("6691")),c=Object(l["a"])(o,s,i,!1,null,"e559fb02",null);t["default"]=c.exports},"6ec4":function(e,t,a){},7217:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("科目数目（"+e._s(e.total)+"条）")]),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.showAddView()}}},[e._v("添加")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.subjects,fit:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"name",align:"center",label:"科目"}}),a("el-table-column",{attrs:{prop:"createTime",align:"center",label:"创建时间"}}),a("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"2px"},attrs:{size:"mini"},on:{click:function(a){return e.showEditView(t.row)}}},[e._v("编辑")]),a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"2px"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.deleteSubject(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"subjectForm",attrs:{model:e.subject,rules:e.rules}},[a("el-form-item",{attrs:{prop:"name",label:"科目名称"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入科目名称"},model:{value:e.subject.name,callback:function(t){e.$set(e.subject,"name",t)},expression:"subject.name"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.cancelSubject("subjectForm")}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addSubject("subjectForm")}}},[e._v("确定")])],1)],1)],1)},i=[],n=(a("7364"),{name:"SysSubject",data:function(){return{tableLoading:!1,total:0,subjects:[],dialogTitle:"",dialogVisible:!1,subject:{name:""},formLoading:!1,rules:{name:[{required:!0,message:"必填：科目名称！",trigger:"blur"}]}}},methods:{loadDatas:function(){var e=this,t=this;this.tableLoading=!0,this.getRequest("/system/subject").then(function(a){t.tableLoading=!1,a&&200==a.status&&(t.subjects=a.data.obj,t.total=e.subjects.length)})},showAddView:function(){this.dialogVisible=!0,this.dialogTitle="添加科目"},cancelSubject:function(e){this.dialogVisible=!1,void 0!==this.$refs[e]&&this.$refs[e].clearValidate()},addSubject:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return!1;var s=t;t.formLoading=!0,t.subject.id?t.putRequest("/system/subject",t.subject).then(function(t){s.handleResponse(s,t,e)}):t.postRequest("/system/subject",t.subject).then(function(t){s.handleResponse(s,t,e)})})},handleResponse:function(e,t,a){e.formLoading=!1,t&&200==t.status&&200==t.data.status&&(e.dialogVisible=!1,e.loadDatas(),void 0!==e.$refs[a]&&e.$refs[a].resetFields(),e.emptySubject())},showEditView:function(e){this.dialogVisible=!0,this.dialogTitle="修改科目",this.subject=e},deleteSubject:function(e){var t=this,a=this;this.$confirm("删除["+e.name+"]科目，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.tableLoading=!0,t.deleteRequest("/system/subject/"+e.id).then(function(e){a.tableLoading=!1,e&&200==e.status&&200==e.data.status&&a.loadDatas()})}).catch(function(e){t.$message("已取消删除")})},emptySubject:function(){this.subject={name:""}}},mounted:function(){this.loadDatas()}}),r=n,o=(a("d47e"),a("6691")),l=Object(o["a"])(r,s,i,!1,null,"9acc91f6",null);t["default"]=l.exports},"77c2":function(e,t,a){"use strict";var s=a("4c2c"),i=a.n(s);i.a},aa35:function(e,t,a){},b5b8:function(e,t,a){var s=a("94ac");e.exports=Array.isArray||function(e){return"Array"==s(e)}},b839:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sysbasic-container"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.defaultTab,callback:function(t){e.defaultTab=t},expression:"defaultTab"}},[a("el-tab-pane",{attrs:{label:"菜单管理",name:"menuMana"}},[a("menu-mana")],1),a("el-tab-pane",{attrs:{label:"权限组",name:"menuRole"}},[a("menu-role")],1)],1)],1)},i=[],n=a("e070"),r=a("6b20"),o={name:"SysBasic",data:function(){return{defaultTab:"menuMana"}},components:{"menu-mana":n["default"],"menu-role":r["default"]}},l=o,c=(a("77c2"),a("6691")),u=Object(c["a"])(l,s,i,!1,null,"775db9c2",null);t["default"]=u.exports},bad3:function(e,t,a){},bf82:function(e,t,a){},c8ce:function(e,t,a){},cde0:function(e,t,a){"use strict";var s=a("b2f5"),i=a("2d43")(6),n="findIndex",r=!0;n in[]&&Array(1)[n](function(){r=!1}),s(s.P+s.F*r,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("644a")(n)},d47e:function(e,t,a){"use strict";var s=a("51fb"),i=a.n(s);i.a},dfbc:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"sysuser-container"},[a("div",{staticClass:"header-container"},[a("el-input",{staticClass:"search-content",attrs:{placeholder:"默认展示部分用户，可以通过用户名搜索更多用户...","prefix-icon":"el-icon-search",size:"small"},model:{value:e.keyWords,callback:function(t){e.keyWords=t},expression:"keyWords"}}),a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.searchClick}},[e._v("搜索")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.addUserDialogShow}},[e._v("添加用户")])],1),a("div",{staticClass:"body-container"},e._l(e.users,function(t,s){return a("div",{key:t.id,staticClass:"card-container"},[a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.cardLoadings[s],expression:"cardLoadings[index]"}],staticClass:"user-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(t.name))]),a("el-button",{staticClass:"button",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.deleteUser(t.id)}}}),a("el-button",{staticClass:"button",staticStyle:{"margin-right":"10px"},attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.showUpdateUserView(t)}}})],1),a("div",[a("div",{staticClass:"img-container"},[a("img",{staticClass:"user-img",attrs:{src:t.userface,alt:t.name}})]),a("div",{staticClass:"info-container"},[a("span",{staticClass:"user-info"},[e._v("用户名："+e._s(t.name))]),a("span",{staticClass:"user-info"},[e._v("手机号码："+e._s(t.phone))]),a("span",{staticClass:"user-info"},[e._v("电话号码："+e._s(t.telephone))]),a("span",{staticClass:"user-info"},[e._v("地址："+e._s(t.address))]),a("div",{staticClass:"user-info user-state"},[e._v("\n                            用户状态：\n                            "),a("el-switch",{key:t.id,staticClass:"switch",attrs:{"active-color":"#13ce66","inactive-color":"#aaaaaa","active-text":"启用","inactive-text":"禁用"},on:{change:function(a){return e.switchChange(t.enabled,t.id,s)}},model:{value:t.enabled,callback:function(a){e.$set(t,"enabled",a)},expression:"user.enabled"}})],1),a("div",{staticClass:"user-info"},[e._v("\n                            用户角色：\n                            "),e._l(t.roles,function(t){return a("el-tag",{key:t.id,staticClass:"role-tag",attrs:{type:"success",size:"mini","disable-transitions":!1}},[e._v("\n                                "+e._s(t.nameZh)+"\n                            ")])}),a("el-popover",{directives:[{name:"loading",rawName:"v-loading",value:e.epLoadings[s],expression:"epLoadings[index]"}],attrs:{placement:"right",title:"角色列表",width:"200",trigger:"click"},on:{hide:function(a){return e.updateUserRoles(t.id,s)}}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择角色"},model:{value:e.selectedRoles,callback:function(t){e.selectedRoles=t},expression:"selectedRoles"}},e._l(e.allRoles,function(e){return a("el-option",{key:e.id,attrs:{label:e.nameZh,value:e.id}})}),1),a("el-button",{staticClass:"more-button",attrs:{slot:"reference",type:"text",icon:"el-icon-more",disabled:e.moreBtnState},on:{click:function(a){return e.loadSelectedRoles(t.roles,s)}},slot:"reference"})],1)],2),a("span",{staticClass:"user-info"},[e._v("描述："+e._s(t.remark))])])])])],1)}),0),e.total>e.pageSize?a("div",{staticClass:"foot-container"},[a("el-pagination",{attrs:{background:"","page-size":e.pageSize,"current-page":e.pageNum,layout:"total, prev, pager, next, jumper","page-count":7,total:e.total},on:{"current-change":e.handleCurrentChange}})],1):e._e(),a("div",{staticClass:"dialog-container"},[a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"userForm",attrs:{model:e.userForm,rules:e.rules,"status-icon":"","label-width":"100px","label-position":"right"}},[a("el-row",[a("el-col",{attrs:{span:7}},[a("div",[a("el-form-item",{attrs:{prop:"name",label:"姓名："}},[a("el-input",{attrs:{"prefix-icon":"el-icon-edit",size:"mini",placeholder:"请输入姓名..."},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1)],1)]),a("el-col",{attrs:{span:8,offset:1}},[a("div",[a("el-form-item",{attrs:{prop:"phone",label:"手机号码："}},[a("el-input",{attrs:{"prefix-icon":"el-icon-mobile-phone",size:"mini",placeholder:"请输入手机号码..."},model:{value:e.userForm.phone,callback:function(t){e.$set(e.userForm,"phone",t)},expression:"userForm.phone"}})],1)],1)]),a("el-col",{attrs:{span:7,offset:1}},[a("div",[a("el-form-item",{attrs:{prop:"telephone",label:"电话："}},[a("el-input",{attrs:{"prefix-icon":"el-icon-phone",size:"mini",placeholder:"请输入电话号码..."},model:{value:e.userForm.telephone,callback:function(t){e.$set(e.userForm,"telephone",t)},expression:"userForm.telephone"}})],1)],1)])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",[a("el-form-item",{attrs:{prop:"address",label:"地址："}},[a("el-input",{attrs:{"prefix-icon":"el-icon-edit",size:"mini",placeholder:"请输入地址..."},model:{value:e.userForm.address,callback:function(t){e.$set(e.userForm,"address",t)},expression:"userForm.address"}})],1)],1)])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",[a("el-form-item",{attrs:{prop:"username",label:"用户名："}},[a("el-input",{attrs:{"prefix-icon":"el-icon-edit",size:"mini",placeholder:"请输入用户名..."},model:{value:e.userForm.username,callback:function(t){e.$set(e.userForm,"username",t)},expression:"userForm.username"}})],1)],1)])],1),a("el-row",[a("el-col",{attrs:{span:11}},[a("div",[a("el-form-item",{attrs:{prop:"password",label:"密码："}},[a("el-input",{attrs:{"prefix-icon":"el-icon-edit","show-password":"",size:"mini",placeholder:"请输入密码..."},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}})],1)],1)]),a("el-col",{attrs:{span:11,offset:2}},[a("div",[a("el-form-item",{attrs:{prop:"checkPass",label:"确认密码："}},[a("el-input",{attrs:{"prefix-icon":"el-icon-edit","show-password":"",size:"mini",placeholder:"请再次输入密码..."},model:{value:e.userForm.checkPass,callback:function(t){e.$set(e.userForm,"checkPass",t)},expression:"userForm.checkPass"}})],1)],1)])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",[a("el-form-item",{attrs:{label:"描述："}},[a("el-input",{attrs:{"prefix-icon":"el-icon-edit",size:"mini",placeholder:"请输入描述..."},model:{value:e.userForm.remark,callback:function(t){e.$set(e.userForm,"remark",t)},expression:"userForm.remark"}})],1)],1)])],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"samll"},on:{click:function(t){return e.cancel("userForm")}}},[e._v("取消")]),a("el-button",{attrs:{size:"samll",type:"primary"},on:{click:function(t){return e.editUser("userForm")}}},[e._v("确定")])],1)],1)],1)])},i=[];a("f763"),a("55a0");function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var r={name:"SysUser",data:function(){var e=this,t=function(t,a,s){""===a?s(new Error("请再次输入密码")):a!==e.userForm.password?s(new Error("请两次输入密码不一致！")):s()};return n({loading:!1,keyWords:"",pageNum:1,pageSize:6,total:0,users:[],allRoles:[],cardLoadings:[],epLoadings:[],selectedRoles:[],oldRoles:[],moreBtnState:!1,currentPage:1,dialogVisible:!1,dialogTitle:"",rules:[],formLoading:!1,userForm:{name:"",phone:"",telephone:"",address:"",username:"",password:"",userface:"",remark:"",checkPass:""}},"rules",{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{min:11,max:11,message:"必须为11位手机号码",trigger:"blur"}],telephone:[{required:!1,message:"请输入电话号码",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!1,message:"请输入密码",trigger:"blur"}],checkPass:[{validator:t,trigger:"blur"}]})},methods:{search:function(e,t){this.loading=!0;var a,s=this;a=""===this.keyWords?"all":this.keyWords,this.getRequestWithParams("/system/user/"+a,{pageNum:t,pageSize:this.pageSize}).then(function(e){if(s.loading=!1,e&&200==e.status){s.users=e.data.obj.users,s.total=e.data.obj.total;var t=e.data.obj.users.length;s.cardLoadings=Array(null,Array(t)).map(function(e,t){return!1}),s.epLoadings=Array(null,Array(t)).map(function(e,t){return!1})}})},searchClick:function(){this.search(this.keyWords,1)},addUserDialogShow:function(){this.dialogVisible=!0,this.dialogTitle="新增用户"},initUserCards:function(){this.search(this.keyWords,1)},loadAllRoles:function(){var e=this;this.getRequest("/system/basic/roles").then(function(t){t&&200==t.status&&(e.allRoles=t.data.obj)})},showUpdateUserView:function(e){this.userForm=e,this.dialogVisible=!0,this.dialogTitle="更新用户"},deleteUser:function(e){var t=this;this.loading=!0,this.deleteRequest("/system/user/"+e).then(function(e){t.loading=!1,e&&200==e.status&&200==e.data.status&&t.initUserCards()})},switchChange:function(e,t,a){this.cardLoadings.splice(a,1,!0);var s=this;this.putRequest("/system/user/",{id:t,enabled:e}).then(function(e){s.cardLoadings.splice(a,1,!1),e&&200==e.status?500==e.data.status&&s.refreshUser(t,a):s.refreshUser(t,a)})},refreshUser:function(e,t){var a=this;this.cardLoadings.splice(t,1,!0);var s=this;this.getRequest("/system/user/id/"+e).then(function(e){if(a.cardLoadings.splice(t,1,!1),e&&200==e.status){var i=e.data.obj;s.users.splice(t,1,i)}})},updateUserRoles:function(e,t){if(this.moreBtnState=!1,this.selectedRoles.length==this.oldRoles.length)for(var a=0;a<this.selectedRoles.length;a++){for(var s=0;s<this.oldRoles.length;s++)if(this.selectedRoles[a]==this.oldRoles[s]){this.oldRoles.splice(s,1);break}if(this.selectedRoles.length==this.oldRoles.length)break}if(0!=this.oldRoles.length){this.epLoadings.splice(t,1,!0);var i=this;this.putRequest("/system/user/roles",{userId:e,roleIds:this.selectedRoles}).then(function(a){i.epLoadings.splice(t,1,!1),a&&200==a.status&&200==a.data.status&&i.refreshUser(e,t)})}},loadSelectedRoles:function(e,t){var a=this;this.moreBtnState=!0,this.selectedRoles=[],this.oldRoles=[],e.forEach(function(e){a.selectedRoles.push(e.id),a.oldRoles.push(e.id)})},handleCurrentChange:function(e){this.search(this.keyWords,e)},cancel:function(e){this.dialogVisible=!1},editUser:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return!1;t.formLoading=!0;var s=t;t.userForm.id?t.putRequest("/system/user/",t.userForm).then(function(t){s.handleResponse(s,t,e)}):t.postRequest("/system/user/",t.userForm).then(function(t){s.handleResponse(s,t,e)})})},handleResponse:function(e,t,a){e.formLoading=!1,t&&200==t.status&&200==t.data.status&&(e.initUserCards(),e.dialogVisible=!1,void 0!==e.$refs[a]&&e.$refs[a].resetFields(),e.emptyUser())},emptyUser:function(){this.userForm={name:"",phone:"",telephone:"",address:"",username:"",password:"",userface:"",remark:"",checkPass:""}}},mounted:function(){this.initUserCards(),this.loadAllRoles()}},o=r,l=(a("3a58"),a("6691")),c=Object(l["a"])(o,s,i,!1,null,"4e3a36e5",null);t["default"]=c.exports},e070:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"search-container"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入菜单名称搜索菜单...",size:"mini","prefix-icon":"el-icon-search"},model:{value:e.keyWords,callback:function(t){e.keyWords=t},expression:"keyWords"}})],1),a("div",[a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"tree",staticClass:"tree-style",attrs:{props:e.props,data:e.treeData,"node-key":"id","filter-node-method":e.filterNode,"highlight-current":"","render-content":e.renderContent}}),a("div",{staticClass:"dialog-container"},[a("el-dialog",{attrs:{title:"添加菜单",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"menuForm",attrs:{model:e.menuForm,rules:e.rules,"label-position":"top","label-width":"120px"}},[a("el-form-item",{attrs:{prop:"url",label:"url拦截规则"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入url拦截规则..."},model:{value:e.menuForm.url,callback:function(t){e.$set(e.menuForm,"url",t)},expression:"menuForm.url"}})],1),a("el-form-item",{attrs:{prop:"name",label:"菜单名称"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入菜单名称..."},model:{value:e.menuForm.name,callback:function(t){e.$set(e.menuForm,"name",t)},expression:"menuForm.name"}})],1),a("el-form-item",{attrs:{prop:"component",label:"组件名称"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入组件名称..."},model:{value:e.menuForm.component,callback:function(t){e.$set(e.menuForm,"component",t)},expression:"menuForm.component"}})],1),a("el-form-item",{attrs:{prop:"path",label:"组件路由path"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入组件路由路径..."},model:{value:e.menuForm.path,callback:function(t){e.$set(e.menuForm,"path",t)},expression:"menuForm.path"}})],1),a("el-form-item",{attrs:{label:"菜单图标"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入font-awesome中对应的图表类..."},model:{value:e.menuForm.iconCls,callback:function(t){e.$set(e.menuForm,"iconCls",t)},expression:"menuForm.iconCls"}})],1),a("div",{staticClass:"check-container"},[a("el-checkbox",{model:{value:e.menuForm.keepAlive,callback:function(t){e.$set(e.menuForm,"keepAlive",t)},expression:"menuForm.keepAlive"}},[e._v("长连接")]),a("el-checkbox",{model:{value:e.menuForm.requireAuth,callback:function(t){e.$set(e.menuForm,"requireAuth",t)},expression:"menuForm.requireAuth"}},[e._v("需要权限")])],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"samll"},on:{click:function(t){return e.cancelAddMenu("menuForm")}}},[e._v("取消")]),a("el-button",{attrs:{size:"samll",type:"primary"},on:{click:function(t){return e.addMenu("menuForm")}}},[e._v("确定")])],1)],1)],1)],1)])},i=[],n=(a("cde0"),a("7364"),{name:"MenuMana",data:function(){return{keyWords:"",treeLoading:!1,treeData:[],props:{children:"children",label:"name"},dialogVisible:!1,currentNode:{},currentNodeData:{},formLoading:!1,menuForm:{url:"",path:"",component:"",name:"",iconCls:"",keepAlive:!1,requireAuth:!1},rules:{url:[{required:!0,message:"请输入url拦截规则",trigger:"blur"}],path:[{required:!0,message:"请输入组件路由路径",trigger:"blur"}],component:[{required:!0,message:"请输入组件名称",trigger:"blur"}],name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}]}}},watch:{keyWords:function(e){this.$refs.tree.filter(e)}},mounted:function(){this.loadAllMenus()},methods:{loadAllMenus:function(){this.treeLoading=!0;var e=this;this.getRequest("/system/basic/allMenusTree").then(function(t){e.treeLoading=!1,t&&200==t.status&&(e.treeData=t.data.obj)})},renderContent:function(e,t){var a=this,s=t.node,i=t.data;t.store;return e("span",{style:"flex:1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"},[e("span",[s.label]),e("span",[e("el-button",{style:"font-size: 12px; padding: 3px",attrs:{type:"primary",size:"mini"},on:{click:function(){return a.showAddMenuView(i,event)}}},["添加菜单"]),e("el-button",{style:"font-size: 12px; padding: 3px",attrs:{type:"danger",size:"mini"},on:{click:function(){return a.deleteMenu(s,i,event)}}},["删除菜单"])])])},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},showAddMenuView:function(e,t){this.dialogVisible=!0,this.currentNodeData=e,t.stopPropagation()},deleteMenu:function(e,t,a){var s=this,i=this;this.$confirm("删除["+t.name+"]菜单，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=t.id;i.formLoading=!0,s.deleteRequest("/system/basic/menu/"+a).then(function(t){if(t&&200==t.status){var s=e.parent,i=s.data.children||s.data,n=i.findIndex(function(e){return e.id===a});i.splice(n,1)}})}).catch(function(){i.$message({type:"info",message:"已取消删除"})}),a.stopPropagation()},addMenu:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return!1;var s=t.currentNodeData.id,i=t;t.formLoading=!0,t.postRequest("/system/basic/menu",{url:t.menuForm.url,path:t.menuForm.path,component:t.menuForm.component,name:t.menuForm.name,iconCls:t.menuForm.iconCls,meta:{keepAlive:t.menuForm.keepAlive,requireAuth:t.menuForm.requireAuth},parentId:s}).then(function(a){if(i.formLoading=!1,a&&200==a.status){i.dialogVisible=!1;var s=a.data.obj;t.currentNodeData.children||t.$set(t.currentNodeData,"children",[]),t.currentNodeData.children.push(s),void 0!==i.$refs[e]&&i.$refs[e].resetFields()}})})},cancelAddMenu:function(e){this.dialogVisible=!1,this.$refs[e].clearValidate()}}}),r=n,o=(a("4739"),a("6691")),l=Object(o["a"])(r,s,i,!1,null,"830eedac",null);t["default"]=l.exports},f691:function(e,t,a){var s=a("88dd"),i=a("b5b8"),n=a("8b37")("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),s(t)&&(t=t[n],null===t&&(t=void 0))),void 0===t?Array:t}}}]);
//# sourceMappingURL=chunk-3cc3b820.60734983.js.map