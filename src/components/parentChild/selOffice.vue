<template>
	<div id="main">
		<!--头-->
		<div class="fixed">
			<div><img src="../../../static/img/parentChild/8.png" alt="" /></div>
			<div>
				<span>拓塘中心卫生院</span>
				<span>
					<button>卫生院</button>
					<button>可预约</button>
				</span>
			</div>
		</div>
		<!--展开项-->
		<div class="fixed2" @click="on1">
			<span>查看医院主页</span>
			<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow1}"></span>
			<span class="mui-icon mui-icon-arrowup" :class="{active:isshow1}"></span>
		</div>
		<!--分页-->
		<div class="fixed3">
			<div>
			   <input type="" name="" id="" value="" />
			</div>
			<div>
				<!--left-->
				<ul>
				   <li>内科</li>
				   <li>外科</li>
				   <li>骨科</li>
				</ul>
				<!--right-->
				<ul>
				   <li>内科</li>
				   <li>外科</li>
				   <li>骨科</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return{
				isshow1:false,
				data:{
					phone:"",
					userName:"",
					userId:"",
				}
			}
		},
		methods:{
			on1(){
				this.isshow1=!this.isshow1;
			},
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
		background: #eee;
	}
	.fixed{
		padding:30px;
		display: flex;
		flex-wrap: wrap;
		height: 200px;
		border-bottom: 1px solid #eee;
		background: #fff;
		position:fixed;
		width:100%;
	}
	.fixed div:first-child{
		width:20%;
	}
	.fixed div:first-child img{
		width:100%;
	}
	.fixed div:last-child{
		width:80%;
		padding:0 20px;
		display: flex;
		flex-direction:column;
		justify-content:space-around;
	}
	.fixed div:last-child span{
		display: block;
	}
	.fixed div:last-child span:first-child{
		font-size: 36px;
		font-weight: 600;
	}
	.fixed div:nth-child(2) span:last-child>button{
		width:100px;
		height:40px;
		font-size: 12px;
		text-align: center;
		line-height: 40px;
		padding:0;
		border:1px solid deepskyblue;
		color:deepskyblue;
	}
	.fixed div:nth-child(2) span:last-child>button:last-child{
		
		border:1px solid red;
		color:red;
	}
	.fixed2{
		display:flex;
		position:fixed;
		margin-top:200px;
		width:100%;
		justify-content:space-between;
		padding:20px 40px;
		background: #fff;
		border-bottom: 1px solid #eee;
		position:relative;
		margin-bottom: 20px;
	}
	.active{
		display:none;
	}
	.fixed3{
		position:relative;
		width:100%;
		height:900px;
		display: flex;
		flex-wrap: wrap;
	}
	.fixed3 div:first-child{
		position:absolute;
		width:100%;	
		height:90px;
		border:1px solid red;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.fixed3 div:first-child input{
		width:90%;
		height:60px;
		border-radius: 30px;
		outline: none;
		border:1px solid #eee;
		background: #eee;
	}
</style>