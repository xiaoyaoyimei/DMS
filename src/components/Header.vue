<template>
	<header class="main-header">
		<a href="" class="logo"><span>DXRacerDMS</span></a>
		<nav class="navbar">
			<div class="sidebar-toggle">
			<i class="fa fa-bars" aria-hidden="true"></i>
			</div>
		</nav>
 </header>
</template>

<script>
</script>

<style>
.main-header .logo{
	display: block;
	float: left;
	height: 50px;
	font-size: 20px;
	line-height: 50px;
	text-align: center;
	width: 230px;
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
	padding: 0 15px;
	font-weight: 300;
	overflow: hidden;
	background-color: #367fa9;
	color: #fff;
	border-bottom: 0 solid transparent;
}
.main-header .navbar{
	background-color: #3c8dbc;
	transition: margin-left .3s ease-in-out;
	margin-bottom: 0;
	margin-left: 230px;
	border: none;
	min-height: 50px;
}
.sidebar-toggle{
	float: left;
	padding: 15px;;
}
.fa-bars{
	color: #fff;
	cursor: pointer;
}
</style>