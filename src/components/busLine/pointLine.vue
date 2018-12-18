<template>
     <div>
     	<div class="top">
     		途径站点的线路
     	</div>
     	<!--公交搜索-->
     	<div class="busSearch">
     		<!--公交一个单元-->
	     		<div>
	     			<img class="busImg" src="../../../static/img/bus/组合logo@2x.png" alt="" />
	     			<div class="busMiddle">
	     				<div class="busName">116路</div>
	     				<div>
	     					<div class="t1">汽车站</div>
	     					<img src="../../../static/img/bus/23@2x.png" alt="" />
	     					<div class="t1">邓庄</div>
	     				</div>
	     			</div>
	     			<div class="busFoot">
	     				<div>
	     					<div class="t1">首班车</div>
	     					<div class="t2">06:00</div>
	     				</div>
	     				<div>
	     					<div class="t1">末班车</div>
	     					<div class="t2">6:00</div>
	     				</div>
	     			</div>
	     		</div>
	     		<!--公交一个单元结束-->
     		</div>
     		<!--一个单元结束-->
     	</div>
     	
     	
     </div>
</template>

<script>
    export default {
    	data(){
    		return{
    			isOn:0,
    		}
    	},
    	methods:{
    		sel(i){
    			console.log(i)
    			this.isOn=i;
    		}
    	}
    	
      
    }
</script>

<style scoped>
	.top{
		width:100%;
		height:60px;
		padding-left:23px;
		line-height:60px;
		border-bottom: 1px solid #eee;
		color: #6b6b6b;
		font-size:25px;
	}
    .busSearch{
    	padding-bottom: 100px;
    }
    .busSearch>div{
    	border-top:20px solid rgba(245,245,245,1);;
    	width:100%;
    	display: flex;
    	padding:0 20px;
    	align-items: center;
		height:139px;
		background:rgba(255,255,255,1);
    }
    .busPoint{
    	padding-left:33px;
		font-size:32px;
		color:rgba(51,51,51,1);
		line-height:70px;
    }
    .busImg{
    	width:90px;
    }
    .busImg2{
    	margin-left:45px;
    	width:60px;
    }
    .busMiddle{
    	width:450px;
    	height:80px;
    	display: flex;
    	flex-direction: column;
    	justify-content: space-between;
    	padding:0px 0 0px 43px;
    }
    .busMiddle>div:last-child{
    	display: flex;
    	align-items: center;
    }
    .busMiddle img{
    	height:9px;
    }
    .busFoot{
    	width:170px;
    	height:80px;
    	display: flex;
    	flex-direction: column;
    	justify-content: space-between;
    }
    .busFoot>div{
    	width:100%;
    	display: flex;
    	align-items: center;
    }
    .busName{
    	font-size: 32px;
    	line-height: 32px;
    	color:#666;
    }
    .flex{
    	display:flex;
    	align-items: center;
    }
    .t1{
		font-size:26px;
		color:rgba(153,153,153,1);
		line-height: 26px;
    }
    .t2{
    	font-size: 26px;
    	line-height: 26px;
    	color:#333;
    	margin-left:20px;
    }
    .icon{
    	width:52px;
		height:52px;
		background:rgba(16,99,164,1);
		border-radius:50%;
		font-size:34px;
		text-align: center;
		color:#fff;
		line-height:52px;
		margin:0 20px;
    }
    .footTab{
    	width:100%;
    	height:100px;
    	position:fixed;
    	bottom:0;
    	display: flex;
    	justify-content: space-around;
    	border-top:1px solid #f5f5f5;
    }
    .footTab>div{
    	width:33.333%;
    	text-align: center;
    }
    .footTab>div div{
    	font-size:22px;
    	color:#666;
    }
    .footTab img{
    	height:45px;
    }
    .footTab .active{
    	color:#3184f0;
    }
</style>
