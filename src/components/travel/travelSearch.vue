<template>
	<div>
		<div class="top">
			<input type="text" placeholder="搜索目的地 /关键字" v-model="searchKey"/>
			<div class="s1">取消</div>
			<div class="search"><img src="../../../static/img/travel/Group 22@3x.png" alt="" /></div>
		</div>
		<!--搜搜历史和热门搜索-->
		<div>
			<div class="history">
				<div class="h1">
					<div>历史搜索</div>
					<img src="../../../static/img/travel/Group 13@2x.png" alt="" />
				</div>
				<div class="h2">
					<div>广福禅寺</div>
					<div>东海大酒店</div>
					<div>都市花园酒店</div>
					<div>海州休闲农庄</div>
					<div>秀水庄园</div>
					<div>荣和怡心园</div>
				</div>
			</div>
			<div class="hot">
				<div>热门搜索</div>
				<div class="h2">
					<div>韩国钧故居</div>
					<div>江淮文化园</div>
					<div>角斜红旗民兵团史绩陈列馆</div>
					<div>秀水庄园</div>
					<div>万缘宝塔</div>
				</div>
			</div>
		</div>
		<!--历史记录弹出框-->
		<div class="popup">
			<div>东海大酒店</div>
			<div>东海大酒店</div>
			<div>东海大酒店</div>
			<div>东海大酒店</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				searchKey:"",
			}
		}
	}
</script>
<style scoped>
	.top{
		position:fixed;
		top:0;
		width:100%;
		height:88px;
		background:rgba(245,245,245,1);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:12px 29px 14px 26px;
	}
	.top input{
		width:610px;
		height:62px;
		margin-bottom: 0;
		border:none;
		font-size:26px;
		padding-left:70px;
	}
	.search{
		position:absolute;
		left:46px;
		top:24px;
	}
	.search img{
		width:34px;
		margin-right:6px;
	}
	.s1{
		font-size:28px;
		font-weight:400;
		color:rgba(26,130,226,1);
		line-height:40px;
	}
	.history{
		padding-top:88px;
	}
	.h1{
		display: flex;
		justify-content: space-between;
		padding:26px 40px 20px 28px;
	}
	.h1>div,.hot>div:first-child{
		font-size:26px;
		color:rgba(51,51,51,1);
		line-height:37px;
	}
	.hot>div:first-child{
		padding:20px 40px 20px 28px;
	}
	.h1 img{
		width:21px;
		height:22px;
	}
	.h2{
		padding:0 31px 0 31px;
		flex-wrap: wrap;
	}
	.h2>div{
    display: inline-block;
		padding:15px 21px;
		background:rgba(245,245,245,1);
		border-radius:4px;
		margin-bottom: 20px;
		font-size:22px;
		color:rgba(102,102,102,1);
		line-height:30px;
		margin-right:12px;
	}
	.h2:after{
		content:"";
		flex: auto;
	}
	.popup{
		padding:88px 30px 0 30px;
	}
	.popup>div{
		width:690px;
		height:88px;
		line-height: 88px;
		font-size:30px;
		color:rgba(51,51,51,1);
		border-bottom: 1px solid #eee;
	}
</style>
