<template>


 <!--<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>-->

						<!--<strong class="title">{{$route.name}}</strong>-->
						<el-breadcrumb separator="" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					
</template>

<script>
</script>

<style>
	.el-breadcrumb .el-breadcrumb__item:first-child{
		font-size: 24px;
		color: #333;
	}
	.el-breadcrumb{
		line-height: 24px;
	}
</style>