<template>
	<div id="main">
		<!--一个单元-->
		<div class="List">
			<div class="List_left"><img src="" alt="" /></div>
			<div class="List_right">
				<div>广福禅寺</div>
				<div class="l1">
					<span class="icon">国家AAA级</span>
				</div>
				<div class="l2">广福禅寺座落在海安市东北首，俗称东寺…</div>
			    <div class="l3">
			    	<img src="../../../static/img/bicycle/location.png" alt="" />
			    	<div>海安市开发区黄海大道南侧</div>
			    </div>
			    <div class="l3">
			    	<img src="../../../static/img/bicycle/S3.png" alt="" />
			    	<div>0513-81863129</div>
			    </div>
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
		padding:24px 0 36px 0;
		min-height:257px;
		float: left;
		border-bottom: 1px solid #eee;
	}
	.List_left{
		width:198px;
		height:198px;
		float: left;
		border:1px solid #eee;
		margin-right:24px;
	}
	.List_right{
		width:456px;
		min-height: 198px;
		float: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.List_right div:first-child{
		font-size:30px;
		color:rgba(51,51,51,1);
		line-height:30px;
		padding-bottom: 16px;
	}
	.List_right .l1{
		padding-bottom: 16px;
	}
	.List_right .icon{
		border-radius:4px;
		border:1px solid rgba(255,170,0,1);
		font-size:20px;
		text-align: center;
		color:rgba(255,170,0,1);
		padding:5px 10px;
		
	}
	.List_right .l2{
		font-size:24px;
		color:rgba(153,153,153,1);
		line-height:28px;
		overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
		padding-bottom: 12px;
	}
	.List_right .l3{
		display: flex;
	}
	.l3 div{
		font-size:24px;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:33px;
		overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
	}
	.l3 img{
		width:30px;
		height:30px;
		margin-right:10px;
	}
</style>