<template>
	<div id="">
		<div class="img">
			<img src="../../../static/img/parentChild/demo.png" alt="" />
		</div>
		<div class="Msg">
			<div class="title t1" @click="jumpText(1)"> 
				<div>儿童保健服务</div>
				<div>儿童保健手册</div>
			</div>
			<div class="title t2" @click="jumpText(2)"> 
				<div>告知书</div>
				<div>健康管理分级服务</div>
			</div>
			<div class="title t3" @click="jumpText(3)"> 
				<div>重大公共卫生</div>
				<div>孕前优生检查</div>
			</div>
			<div class="title t4" @click="jumpText(4)"> 
				<div>计划生育</div>
				<div>落实避孕措施</div>
			</div>
			<div class="title t5" @click="jumpText(5)"> 
				<div>孕产妇应知应会</div>
				<div>孕前优生检查</div>
			</div>
			<div class="title t6"> 
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			jumpText(i){
				this.$router.push("/parentChild/pcText/"+i)
			}
		}
		
	}
</script>

<style scoped>
	.img{
		width:100%;
		padding-bottom: 10px;
	}
	.img img{
		width:100%;
	}
	.Msg{
		display: flex;
		flex-wrap: wrap;
		border-top:1px solid #eee;
	}
	.title{
		width:50%;
		height:200px;
		border-bottom:1px solid #eee;
		border-right:1px solid #eee;
		padding:60px 16px 60px 130px;
		background-size: 80px !important;
		background-position: 16px 60px !important;
	}
	.t1{
		background: url("../../../static/img/parentChild/q1.png") no-repeat;
		
	}
	.t2{
		background: url("../../../static/img/parentChild/q2.png") no-repeat;
	}
	.t3{
		background: url("../../../static/img/parentChild/q3.png") no-repeat;
	}
	.t4{
		background: url("../../../static/img/parentChild/q4.png") no-repeat;
	}
	.t5{
		background: url("../../../static/img/parentChild/q5.png") no-repeat;
	}
	.title div:first-child{
		margin-bottom: 15px;
		font-size: 30px;
	}
	.title div:last-child{
		font-size: 25px;
		color:#aeaeae;
	}
	
</style>