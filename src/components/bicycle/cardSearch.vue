<template>
	<div id="bicycle">
	   <div class="top">
	      <img src="../../../static/img/bicycle/demo.jpg" alt="" />
	   </div>
	   <!--余额，押金数据-->
	   <div class="main1" v-show="isshow">
	   	    <div>
	   	    	<div>押金</div>
	   	    	<div>{{data.DEPOSIT_MONEY}}分</div>
	   	    </div>
	   	    <div>
	   	    	<div>余额</div>
	   	    	<div>{{data.REMAIN_MONEY}}分</div>
	   	    </div>
	   	    <div>
	   	    	<div>联系电话</div>
	   	    	<a  href="tel:0513-88897056">0513-88897056</a>
	   	    </div>
	   </div>
	   <!--未办电子卡-->
	   <div class="main2" v-show="!isshow">
	   	    <div>您尚未开通公共自行车电子卡</div>
	   	    <div>
	   	    	<img src="../../../static/img/bicycle/S3.png" alt="" />
	   	    	<div>联系电话</div>
	   	    	<a  href="tel:0513-88897056">0513-88897056</a>
	   	    </div>
	   </div>
	</div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"

  export default {
	    name: "cardSearch",
	    data() {
	      return {
	         isshow:true,
	         data:{},
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
	    	if (this.getCardId !== "") {
		          axios.post("/myha-server/publicBike/getUserInfo.do", {
		            "certNum": this.getCardId
                    //"certNum": "320521197210249134" 
		          })
		            .then(res => {
		              if (res.data.result == 1) {
		                console.log(res.data.data.isOk)
		                if (res.data.data.isOk == 1) {
		                  this.isshow=true;
		                  this.data=res.data.data
		                }
		              } else {
		                mui.toast('网络出了点小差错，请稍后尝试或联系管理人员', {duration: 'short', type: 'div'});
		              }
		            })
		    }else{
		    	this.isshow=false;
		    }  
//**********************测试测试测试测试测试测试测试测试**************************
//          axios.post("/myha-server/publicBike/getUserInfo.do", {
//		            "certNum": "320521197210249134"
//		    }).then(res => {
//		        if (res.data.result == 1) {
//		            this.data=res.data.data
//		            this.isshow=true;
//		            console.log(this.data)
//		          
//		        } else {
//		            mui.toast('网络出了点小差错，请稍后尝试或联系管理人员', {duration: 'short', type: 'div'});
//		        }
//		    })
	    }
   }
</script>

<style scoped>
	.top{
		width:100%;
	}
	.top img{
		width:100%;
		margin-right:10px;
		border-radius: 20px;
	}
	.main1 div,.main1 a{
		font-size: 32px;
		color:#666;
	}
	.main1 a{
		color:#3499de;
	}
	.main1>div{
		width:100%;
		height:120px;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		padding:0 40px 0 110px;
		justify-content: space-between;
	}
	.main1>div:first-child{
		background: url("../../../static/img/bicycle/S1.png") no-repeat;
		background-size: 55px;
		background-position: 5% 50%;
	}
	.main1>div:nth-child(2){
		background: url("../../../static/img/bicycle/S2.png") no-repeat;
		background-size: 55px;
		background-position: 5% 50%;
	}
	.main1>div:last-child{
		background: url("../../../static/img/bicycle/S3.png") no-repeat;
		background-size: 55px;
		background-position: 5% 50%;
	}
	.main2>div:first-child{
		width:100%;
		height:220px;
		line-height: 220px;
		text-align: center;
		font-size: 35px;
		color:#666;
		background: #fff;
		border-bottom: 1px solid #eee;
	}
	.main2>div:last-child{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width:400px;
		padding:20px 0;
		margin:0 auto;
	}
	.main2>div:last-child img{
		width:40px;
	}
	.main2>div:last-child div{
		font-size: 26px;
		padding-right:40px;
	}
	.main2>div:last-child a{
		font-size: 26px;
	}
	.main2 a{
		color:#3499de;
	}
</style>