<template>
	<div id="main">
		<!--模块1-->
		<div class="flex">
			<div><img src="../../../static/img/parentChild/8.png" alt="" /></div>
			<div>
				<span>拓塘中心卫生院</span>
				<span>溧水区拖堂镇遂闲北街27号</span>
				<span>
					<button>最近</button>
					<button>有号</button>
				</span>
			</div>
			<div>
				<span>0.6km</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return{
				data:{
					phone:"",
					userName:"",
					userId:"",
				}
			}
		},
		computed: {
	      ...mapGetters([
	        "getUserId",
	        "getUserName",
	        "getCardId",
	        "getUserPhone",
	      ])
        },
        mounted(){
           this.data.phone = this.getUserPhone;
           this.data.userName = this.getUserName;
           this.data.userId = this.getUserId;
        },
	}
</script>

<style scoped>
	#main{
		width:100%;
		height:100%;
		overflow: hidden;
	}
	#main>div{
		padding:30px;
		display: flex;
		flex-wrap: wrap;
		min-height: 200px;
	}
	.flex div:first-child{
		width:20%;
	}
	.flex div:first-child img{
		width:100%;
	}
	.flex div:nth-child(2){
		width:65%;
		padding:0 20px;
		display: flex;
		flex-direction:column;
		justify-content:space-between;
	}
	.flex div:nth-child(2) span{
		display: block;
	}
	.flex div:nth-child(2) span:first-child{
		font-size: 36px;
		font-weight: 600;
	}
	.flex div:nth-child(2) span:nth-child(2){
		font-size: 30px;
		color:#999;
	}
	.flex div:nth-child(2) span:last-child>button{
		width:60px;
		height:30px;
		font-size: 12px;
		text-align: center;
		line-height: 30px;
		padding:0;
		border:1px solid deepskyblue;
		color:deepskyblue;
	}
	.flex div:last-child{
		width:15%;
		display: flex;
		align-items: center;
	}
	.flex div:last-child span{
		display: block;
		font-size: 30px ;
		color:#999;
	}
</style>