<template>
     <div>
     	<div class="top">
     		最近一班：距离3站
     	</div>
     	<div class="main">
     		<!--路线一个单元-->
     		<div>
     			<div class="point">
		     		<img src="../../../static/img/bus/point2.png" alt="" />
		     		<div>汽车站</div>
		     		<div class="p3">(上车站点)</div>
		     		<div class="point2">
		     			<div>
		     				<div class="p1">还有9分钟到达</div>
		     				<div class="p2">(苏FAZ642)</div>
		     			</div>
		     			<img  src="../../../static/img/bus/bus.png" alt="" />
		     		</div>
		     	</div>
	     	</div>
	     	
	     	<!--路线一个单元-->
     		<div>
     			<div class="point">
		     		<img src="../../../static/img/bus/point.png" alt="" />
		     		<div>汽车站</div>
		     		
		     	</div>
	     	</div>
	     	
	     	<!--路线一个单元-->
     		<div>
     			<div class="point">
		     		<img src="../../../static/img/bus/point.png" alt="" />
		     		<div>汽车站</div>
		     		
		     	</div>
	     	</div>
	     	
     		
     		
     	</div>
     	<!--定位小图标-->
     	<div class="foot">
     		<div>
     			<img src="../../../static/img/bus/xing.png" alt="" />
     			<div class="footText">收藏</div>
     		</div>
     		<div>
     			<img src="../../../static/img/bus/map.png" alt="" />
     			<div class="footText">地图</div>
     		</div>
     	</div>
     </div>
</template>

<script>
    export default {
    	
    	
      
    }
</script>

<style scoped>
    .top{
    	width:100%;
    	height:60px;
    	padding-left:21px;
		font-size:24px;
		color:rgba(153,153,153,1);
		line-height:60px;
		background:#f5f5f5;
    }
    .main{
    	padding-top:23px;
    	background: url(../../../static/img/bus/line.png) no-repeat;
    	background-size:10px;
    	background-position:202px 23px;
    }
    .main>div{
    	width:100%;
    	padding-top:13px;
    	height:80px;
    	border:none;
    	position:relative;
    }
    .point{
    	display: flex;
    	align-items: center;
    	padding-left:194px;
    	
    }
    .point img{
    	width:26px;
    	height:26px;
    	margin-right:31px;
    }
    .point>div{
		font-size:28px;
		color:rgba(51,51,51,1);
    }
    .point2{
    	height:26px;
    	display: flex;
    	align-items: center;
    	position:absolute;
    	top:60px;
    	right:500px;
    }
    .point2>img{
    	margin-left:10px;
    }
    .p1{
		font-size:20px;
		color:rgba(247,144,75,1);
		line-height:28px;
    }
    .p2{
    	font-size:20px;
		color:#7EAFE3;
		line-height:28px;
    }
    .p3{
		font-size:20px !important;
		color:rgba(247,144,75,1) !important;
		margin-left:31px;
    }
    .foot{
    	position:fixed;
    	bottom:26px;
    	right:40px;
    	display: flex;
    	justify-content: space-between;
    }
    .foot>div{
    	text-align: center;
    }
    .foot>div:first-child{
    	margin-right:31px;
    }
    .foot img{
    	width:40px;
    }
    .footText{
		font-size:26px;
		color:rgba(89,181,254,1);
		margin-top:13px;
		line-height: 26px;
    }
</style>
