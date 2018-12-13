<template>
	<div id="main">
		<!--一个单元-->
		<div class="List">
			<div class="List_left"><img src="" alt="" /></div>
			<div class="List_right">
				<div>海安休闲之旅一日游</div>
				<div class="l1">
					<span class="icon">海安旅游</span>
				</div>
				<div class="l2">上午：游览全国重点文物保护单位、民国两任 江苏省省长韩国钧先生的故居【韩国钧故居…</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	#main{
		padding:0 46px 0 26px;
	}
	.List{
		width:100%;
		padding:22px 0 22px 0;
		min-height:216px;
		float: left;
		border-bottom: 1px solid #eee;
	}
	.List_left{
		width:172px;
		height:172px;
		float: left;
		border:1px solid #eee;
		margin-right:26px;
	}
	.List_right{
		width:480px;
		min-height: 172px;
		float: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.List_right div:first-child{
		font-size:30px;
		color:rgba(51,51,51,1);
		line-height:30px;
		padding-bottom: 20px;
	}
	.List_right .l1{
		padding-bottom: 18px;
	}
	.List_right .icon{
		border-radius:4px;
		border:1px solid rgba(255,170,0,1);
		font-size:20px;
		color:rgba(255,170,0,1);
		padding:5px 10px;
	}
	.List_right .l2{
		font-size:24px;
		color:rgba(153,153,153,1);
		line-height:33px;
	}
</style>