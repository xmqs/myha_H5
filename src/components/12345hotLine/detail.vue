<template>
  <div>
    <div class="header">
      <span @click="state=0" :class="{'active':state==0}">诉求详情</span>
      <img src="../../../static/img/hotline/矩形31@2x.png" alt="" />
      <span @click="state=1" :class="{'active':state==1}">处理流程</span>
    </div>
    <div class="main_1" v-show="state==0">
      <div class="tip">
        诉求信息
      </div>
      <div class="ele">
        <div class="tit">
          <div class="cntit">标题</div>
        </div>
        <div class="elecontent">
          <div class="inps2">{{data.busiForm.title}}</div>
        </div>
      </div>
      <div class="ele eleright" @click="chose(0)">
        <div class="tit">
          <div class="cntit">事发时间</div>
        </div>
        <div class="elecontent">
          <div class="inps2">{{data.busiForm.eventDate}}</div>
        </div>
      </div>
      <div class="ele">
        <div class="tit">
          <div class="cntit">事发区域</div>
        </div>
        <div class="elecontent">
          <div class="inps2">{{data.busiForm.areaName}}</div>
        </div>
      </div>
      <div class="ele5">
        <div class="tit">
          <div class="cntit">具体位置</div>
        </div>
        <div class="elecontent">
          <div class="inps2"></div>
        </div>
      </div>
      <div class="ele4">
        {{data.busiForm.busiAddress}}
      </div>
      <div class="ele5">
        <div class="tit">
          <div class="cntit">诉求目的</div>
        </div>
        <div class="elecontent">
          <div class="inps2"></div>
        </div>
      </div>
      <div class="ele4">
        {{data.busiForm.caseGoal}}
      </div>
      <div class="ele5">
        <div class="tit">
          <div class="cntit">诉求内容</div>
        </div>
        <div class="elecontent">
          <div class="inps2"></div>
        </div>
      </div>
      <div class="ele4">
        {{data.busiForm.contentText==""?"暂无":data.busiForm.contentText}}
      </div>
      <div class="ele6">
      	
        <img  v-for="val in data.busiForm.filePaths" :src="val" alt="" class="img">
      </div>
      <div class="ele">
        <div class="tit">
          <div class="cntit">姓名</div>
        </div>
        <div class="elecontent">
          <div class="inps2">{{data.busiForm.cusName}}</div>
        </div>
      </div>
      <div class="ele">
        <div class="tit">
          <div class="cntit">联系方式</div>
        </div>
        <div class="elecontent">
          <div class="inps2">{{data.busiForm.cusPhone}}</div>
        </div>
      </div>
      <!--<div class="ele">
        <div class="tit">
          <div class="cntit">备用联系方式</div>
        </div>
        <div class="elecontent">
          <div class="inps2"></div>
        </div>
      </div>-->
    </div>
    <div class="main_2" v-show="state==1">
    	  <div>
    	  	 <div class="topText">
    	  	 	 <span>{{data.busiForm.title}}</span>
    	  	 	 <img src="./../../../static/img/hotline/组4@2x.png" alt="" />
    	  	 </div>
    	  	 <div class="middleText">
    	  	 	{{data.busiForm.contentText}}
    	  	 </div>
    	  	 <div class="footText">{{data.busiForm.eventDate}}</div>
    	  </div>
    	  <div class="detail">
    	  	<div  class="nodata" v-show="data.hisAdvList==undefined">
	          <img src="./../../../static/img/hotline/nodata.png" alt="">
	          <p>暂无数据</p>
	        </div>
    	  	 <ul v-show="data.hisAdvList!=undefined">
	          <li  v-for="item,index in data.hisAdvList" :style="icoImg(index)">
	          		  	 <div>[{{item.adviceDeptName}}] &nbsp;&nbsp;&nbsp;{{item.adviceDoAction}}</div>
							       <div>{{item.adviceAdvContent}}</div>
							       <div>{{item.adviceUpdateTime}}</div>
	          </li>
	          
	        </ul>
    	  </div>
      </div>
    </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "detail",
    data() {
      return {
        data: {
        	"busiForm":{"jjcdName":""}
        },
        value:{},//暂时填写的未转工单数据
        state: 0,
        steps:"0",
      }
    },
    mounted() {
      axios.post("/third-server/busiform/busiformDetail.do", {
      	"reqData":{
      		"paras":{
      			  "formId":this.$route.params.id,
        	    "formStatus":this.$route.params.s
      		}
      	}
      }).then(res => {
      	 console.log(res.data.data.resData)
      	 if(this.$route.params.s==0){
      	 	 this.data=res.data.data;
      	 	 console.log(this.data)
      	 }else{
      	 	 this.data=res.data.data.resData;
      	 }
      	 this.steps=res.data.data.resData.hisAdvList.length;
      })
   },
   computed: {
      icoImg(i) {
        return function (i) {
        	 if(this.steps==1){
        	 	   return {
        	 	   	    "background": "url('./static/img/hotline/step.png') no-repeat",
        	 	   	    "backgroundSize":"3vw",
                    "backgroundPosition": "4vw 0",
        	 	   }
        	 }else{
        	 	  if(i==0){
        	 	  	  return {
        	 	   	    "background": "url('./static/img/hotline/step1.png') no-repeat",
        	 	   	    "backgroundSize":"4vw",
                    "backgroundPosition": "5vw 0",
        	 	      }
        	 	  }else if(i==this.steps-1){
        	 	  	  return {
        	 	   	    "background": "url('./static/img/hotline/step3.png') no-repeat",
        	 	   	    "backgroundSize":"4vw",
                    "backgroundPosition": "5vw 0",
        	 	      }
        	 	  }else{
        	 	  	  return {
        	 	   	    "background": "url('./static/img/hotline/step2.png') no-repeat",
        	 	   	    "backgroundSize":"4vw",
                    "backgroundPosition": "5vw 0",
        	 	      }
        	 	  }
        	 }
        	
        }
      },
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 999;
    border-bottom: 1px solid #EEEEEE;
  }
  .header img{
  	width:3px;
  	padding: 26px 0 40px 0;
  }
  .header span {
    text-align: center;
    font-size: 32px;
    line-height: 35px;
    width: 373px;
    padding: 26px 0 40px 0;
    color: #666;
    border-bottom: 4px solid #fff;
  }
  .header span.active {
    color: #0084EC;
    border-bottom: 4px solid #0084EC;
  }


  .main_1 {
    padding-top: 104px;
    background: #fff;
  }

  .main_2 {
    padding-top: 104px;
  }

  .ele {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 32px;
    border-bottom: 1px solid #efefef;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
  }

  .ele4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    border-bottom: 1px solid #efefef;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    line-height: 48px;
    color: rgb(102, 102, 102);
  }
  .ele5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    line-height: 48px;
    color: rgba(51, 51, 51, 1);
  }
  .ele6 {
    padding: 16px 32px;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    border-bottom: 1px solid #efefef;
    line-height: 48px;
    color: rgba(51, 51, 51, 1);
  }

  .tit {
    color: #333;
    max-width: 35%;
    overflow: hidden;
  }

  .cntit {
    font-size: 32px;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
  }

  .elecontent {
    width: 60%;
  }

  .inps {
    width: 100%;
    border: 0;
    outline: none;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    color: #333;
    text-align: right;
    margin: 0;
    min-height: 86px;
    padding: 0 16px 0 0;
  }

  .inps2 {
    width: 100%;
    padding: 0 32px 0 0;
    min-height: 88px;
    text-align: right;
    line-height: 88px;
    word-wrap: break-word;
  }

  .title {
    height: 70px;
    background: rgba(255, 247, 234, 1);
    line-height: 70px;
    font-size: 26px;
    color: rgba(255, 181, 64, 1);
    padding: 0 32px;
  }

  .tip {
    height: 70px;
    background: #F5F5F5;
    line-height: 70px;
    font-size: 26px;
    color: rgba(170, 170, 170, 1);
    padding: 0 32px;
  }

  .item {
    width: 750px;
    background: #fff;
    display: flex;

    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 35px 0 35px 32px;
  }

  .item_main {
    width: 450px;
    border-right: 1px solid #EEEEEE;
  }

  .item_main p {
    font-size: 30px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 52px;
  }

  .item_state {
    flex-grow: 1;
    text-align: center;

    font-size: 30px;
    font-weight: 400;
  }
  .img{
    width: 200px;
    height: 200px;
    display: inline-block;
    margin-right: 10px;
  }
  /*办理进度样式*/
  .topText{
  	width:100%;
  	height:133px;
  	position: relative;
  	padding:67px 0 37px 0;
  	text-align: center;
  }
  .topText span{
		font-size:31px;
		padding-left:90px;
		font-weight:bold;
		color:rgba(102,102,102,1);
		line-height:31px;
		text-align: center;
  }
  .topText img{
  	 width:90px;
  	 z-index: 10;
  }
  .middleText{
		font-size:25px;
		color:rgba(102,102,102,1);
		line-height:36px;
		padding:0 38px 0 38px;
		overflow: hidden;
	  word-break: break-all;
	  word-wrap: break-word;
	  text-align: justify;
  }
  .footText{
  padding:26px 38px 0 38px;
  text-align: right;
	font-size:25px;
	color:rgba(153,153,153,1);
	line-height:25px;
  }
  
  
  .detail {
    background: #fff;
    padding: 90px 0 0 0;
  }
  .detail li{
    padding:0 0 34px 97px;
  }
  .detail li div{
		font-size:25px;
		color:rgba(153,153,153,1);
		line-height:28px;
		padding-bottom: 22px;
  }
  .detail li:first-child div{
		color:rgba(0,132,236,1);
  }
  
  .divRight{
  	padding-left:21px;
  }
  .detail img{
    width:30px;
  }
  
  
  
  
  
  
  .nodata{
    text-align: center;
    padding-top: 66px;
  }
  .nodata img{
    width: 240px;
  }
  .nodata p{
    font-size: 28px;
    margin-top: 16px;
  }
</style>
