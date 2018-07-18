<template>
	<el-menu  background-color="#222d32"
      text-color="#b8c7ce"
      active-text-color="#fff"
      :unique-opened="true" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router v-show="!collapsed">
		<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
			<el-submenu :index="index+''" v-if="!item.leaf">
				<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
				<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
					<i :class="child.iconCls"></i>{{child.name}}</el-menu-item>
			</el-submenu>
			<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
		</template>
	</el-menu>
	<!--<Menu  theme="light" width="auto"  @on-select="routeTo" accordion> 
                        <Submenu :name="index" v-for="(product,index) in products" :key="product.id">
                            <template slot="title">
                                <Icon :type='product.icontype'></Icon>
                              {{ product.name}}
                            </template>
                            	<MenuItem v-for="item in product.list" :key="item.id" :name="item.name" >
                            <router-link  v-for="item in product.list" :to="{ path: item.path }" 
                            	tag="li" active-class="active" :default-active="$route.path" :key="item.id" >
          							 {{ item.leibie }}
          							</router-link> 
                            	</MenuItem>
                        </Submenu>
         </Menu>-->

</template>
<script>
	export default {
		data() {
			return {
				collapsed: false

			}
		},
		methods: {
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function(a, b) {},
			//	 routeTo(e) {
			//                  this.$router.push(e);
			//              }
		}

	}
</script>

<style lang="scss">
	.el-submenu__title:hover{
		color: #fff;
	}
	.el-menu-item, .el-submenu__title{
		height: 44px;
		line-height: 44px;
	}

	.el-submenu.is-active{
		background: #1e282c;	
	}
	
	.el-submenu__title {
		color: #fff;
	}
	
	.is-opened .el-menu {
		background: #2c3b41;
	}
	
	.el-menu-item {
		color: #b8c7ce;
	}
	/*选中样式*/
	
	.el-menu-item.is-active {
		color: #fff
	}
	.el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover{
		background: #2c3b41;
	}
	.el-menu-vertical-demo{
		height: calc(100vh - 50px);
	}
</style>