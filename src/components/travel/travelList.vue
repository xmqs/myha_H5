<template>
	<div>
		<!--一个单元-->
		<div class="main">
			<div><img src="../../../static/img/travel/Group2@2x.png" alt="" /></div>
			<div>
				<div class="t1">南通交通国际旅行社有限公司</div>
				<div class="t2">地址：海安县城宁海南路183号</div>
				<div class="t2">联系电话：88917246</div>
				<div class="t2">负责人：徐绍根</div>
				<div class="t2">手机号：13962972858</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.main{
		float: left;
		width:100%;
		min-height: 240px;
		padding:29px 26px;
		border-bottom: 1px solid #eee;
	}
	.main>div{
		float: left;
	}
	.main img{
		width:72px;
	}
	.main>div:first-child{
		width:15%;
		text-align: center;
	}
	.main>div:last-child{
		width:85%;
		min-height: 240px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.t1{
		font-size:30px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:30px;
	}
	.t2{
		font-size:24px;
		font-weight:400;
		color:rgba(102,102,102,1);
		line-height:28px;
	}
</style>