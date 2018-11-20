<template>
	<div>
		<!--头部信息-->
	   <div id="top">
	   	  <div  style="margin-right: 16px"><img src="../../../static/img/parentChild/Fill 112@2x.png" alt=""/></div>
	   	  <table>
	   	  	 <tbody>
	   	  	 	<tr>
	   	  	 		<td style="width:50%"><span>用户姓名</span>：{{datas.userName}}</td>
	   	  	 		<td rowspan="2"><img :src="datas.qrCode" alt="" /></td>
	   	  	 	</tr>
	   	  	 	<tr>
	   	  	 		<td><span>年龄</span>：{{datas.age}}</td>
	   	  	 	</tr>
	   	  	 	<tr>
	   	  	 		<td colspan="2"><span>建册号</span>：{{datas.buildNumber}}</td>
	   	  	 	</tr>
	   	  	 	<tr>
	   	  	 		<td colspan="2"><span>家庭住址</span>：{{datas.address}}</td>
	   	  	 	</tr>
	   	  	 </tbody>
	   	  </table>
	   </div>
	   <!--模块-->
	   <div id="model">
	   	  <!--模块一体检与关爱提醒-->
	      <div>
	   	     <div>体检与关爱提醒</div>
	   	     <div @click="jumpHealth(datas.id)"><img src="../../../static/img/parentChild/Fill 116@2x.png" alt="" />体检报告</div>
	   	     <div @click="jumpTime"><img src="../../../static/img/parentChild/Fill 113@2x.png" alt="" />重要事件提醒</div>
	      </div>
	      <!--模块二在线健康咨询-->
	      <div>
	   	     <div>在线健康咨询</div>
	   	     <div @click="jumpHospital"><img src="../../../static/img/parentChild/Fill 117@2x.png" alt="" />医院、医生介绍</div>
	   	     <div @click="jumpPopularization"><img src="../../../static/img/parentChild/Fill 114@2x.png" alt="" />科普宣传</div>
	      </div>
	   </div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import axios from "axios"
	export default{
		data(){
			return {
				datas:{},
				data:{
					phone:"",
					userName:"",
					userId:"",
				}
			}
		},
		methods:{
		  //跳转到体检报告
		  jumpHealth(id){
		  	 this.$router.push("/parentChild/healthExamination/"+id)
		  },
		  //跳转到重要时间提醒
		  jumpTime(){
		  	 this.$router.push("/parentChild/importantTime")
		  },
		  //跳转到选择医院
		  jumpHospital(){
        window.location = "znmh://module/ha_city_yygh"
		  },
		  //跳转到科普宣传
		  jumpPopularization(){
		  	 this.$router.push("/parentChild/popularization")
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
           //妇幼健康用户查询
           axios.post("/myha-server/mch/getHaMchUser.do",
              {userId:this.getUserId}
           )
           .then(res=>{
           	console.log(res);
		       this.datas=res.data.data;
		   })
        },

	}
</script>

<style scoped>
	/*头部基础信息样式*/
	#top{
		width:750px;
		height:300px;
		padding:40px 10px;
		background: #F1F1F1 100%;
		display: flex;
	}
	#top div{
		width:10%;
		height:100%;
		text-align: center;
	}
	#top div img{
		width:60px;
	}
	#top table{
		width:90%;
		height:100%;
		color:deepskyblue;
		border-collapse:collapse;
	}
	tbody td{
		height:25%;
		font-size: 32px;
		font-family: PingFangSC-Regular;
	}
	tbody td>span{
		display: inline-block;
		width:140px;
		font-size: 32px;
		font-family: PingFangSC-Regular;
		text-align:justify;
        text-justify:distribute-all-lines;/*ie6-8*/
        text-align-last:justify;/* ie9*/
        -moz-text-align-last:justify;/*ff*/
        -webkit-text-align-last:justify;/*chrome 20+*/
	}
	tbody tr:first-child td:first-child{
		width:80%;
	}
	tbody tr:first-child td:last-child{
		width:20%;
		height:100px;
		text-align: right;
	}
	tbody tr:first-child td:last-child img{
		height:100px;
	}
	/*模块样式*/
	#model{
		width:100%;
		height:100%;
		overflow: hidden;
		font-size: 30px;
		font-weight:bold;
	}
	#model div{
		width:100%;
		height:200px;
		display: flex;
		flex-wrap: wrap;

	}
	#model div div:first-child{
		width:100%;
		height:40%;
		background: #F8A3C0 100%;
		color:#fff;
		line-height: 80px;
		padding-left: 20px;
	}
	#model div div:not(first-child){
		width:50%;
		height:60%;
		line-height: 120px;
		font-size: 30px;
		display: flex;
		align-items:center;
	}
	#model>div>div:not(first-child)>img{
		height:60px;
    margin:0 8px;
	}



</style>
