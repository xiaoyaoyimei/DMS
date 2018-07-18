<template>
 <div>
	<!--<Layout>
		 <Header :style="{position: 'fixed', width: '100%'}"><app-header></app-header></Header>
		 <layout :style="{margin: '64px 0px 0', background: '#fff', minHeight: '500px'}">
          <Sider hide-trigger :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}"><app-slider></app-slider></Sider>
            <layout :style="{marginLeft: '200px',paddingLeft:'15px'}">
             <bread-crumbs></bread-crumbs>
             <Content :style="{background:'#fff',padding:'15px'}"><router-view></router-view></Content>
             <app-footer></app-footer>
            </layout>
            </layout>
    </Layout>-->
    	 <app-header></app-header>
		  <el-container  height="100vh">
		  		<el-aside  width="230px">
		  			<app-slider></app-slider>
		  		</el-aside>
		  		    <el-container style="background: #ecf0f5;">
		    <div class="main">
		    	 <bread-crumbs></bread-crumbs>
		        <div class="content">	
		        	<router-view></router-view></div>
		    </div>
		<el-footer height="51px"><app-footer></app-footer></el-footer>
		    </el-container>
		  </el-container>
</div>
</template>

<script> 
	import appFooter from '@/components/Footer'
	import appSlider from '@/components/SliderBar'
	import appHeader from '@/components/Header'
	import BreadCrumbs from '@/components/BreadCrumbs'
	export default {
        components:{
        	 appFooter,
        	 appSlider,
        	 appHeader,
        	 BreadCrumbs
        }
    }
</script>

<style>
	.main{
		flex: 1;
		padding: 15px;
		flex-direction: column;
	}
	.content{
		min-height: 250px;
padding: 15px 0;
margin-right: auto;
margin-left: auto;
	}
	.el-footer{
		padding: 0;
	}
</style>