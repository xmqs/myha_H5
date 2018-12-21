<template>
  <div>
    <!--公交查询-->
    <div v-show="isOn==0">
      <!--头部搜索框-->
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post">
        <div class="topSearch">
          <input type="search" v-on:keyup.13="search()" autofocus="autofocus" v-model="searchKey" placeholder="请输入关键字"/>
          <div></div>
        </div>
        <!--<input type="search" id="input" class="search" placeholder="请输入搜索内容" v-model="searchKey">-->
      </form>
      <div class="busSearch paddingTop">
        <!--<div class="noSearch" v-show="lineList.length==0&&stationList.length==0">
          请输入关键字查询
        </div>-->
        <!--公交一个单元-->
        <div v-for="item in lineList" @click="toLine(item.lineId,item.dir)">
          <img class="busImg" src="../../../static/img/bus/组合logo@2x.png" alt=""/>
          <div class="busMiddle">
            <div class="busName">{{item.lineName}}</div>
            <div class="toLine"><span>{{item.beginStationName}}</span>
            	<img src="./../../../static/img/bus/toLine.png" alt="" class="toLineIcon"><span>{{item.endStationName}}</span>
            </div>
            <div class="fromLine">
              {{item.firstLastTime}}
            </div>
          </div>
        </div>
        <div v-for="item in stationList" @click="toPointLine(item.staName)">
          <img class="busImg2" src="../../../static/img/bus/组logo@2x.png" alt=""/>
          <div class="busPoint">{{item.staName}}</div>
        </div>
      </div>
    </div>
    <!--站台查询-->
    <div v-show="isOn==1">
      <!--查询头部-->
      <div class="topSearch2">
        <div>
          <div class="l1">  
            
            	<iframe id="frame" name="iframe" style="display:none;"></iframe>
				      <form action="javascript:return true;" method="post">
				        <div class="inpu">
				          <input type="search" @focus="showmarsk(0)" @blur="hidemarsk" @input="marskMsg(0)" v-on:keyup.13="searchLine()" v-model="beginStationName"/>
                  <input type="search" @focus="showmarsk(1)" @blur="hidemarsk" @input="marskMsg(1)" v-on:keyup.13="searchLine()" v-model="endStationName"/>
				        </div>
				      </form>
				      <!--<div class="inpu">
				      	<input type="text" @focus="showmarsk(0)" @blur="hidemarsk" @input="marskMsg(0)" v-on:keyup.13="searchLine()" v-model="beginStationName"/>
                <input type="text" @focus="showmarsk(1)" @blur="hidemarsk" @input="marskMsg(1)" v-on:keyup.13="searchLine()" v-model="endStationName"/>
				      </div>-->
              
            
            <img class="l1_img"  @click="exchange()" src="../../../static/img/bus/形状 23@2x.png" alt=""/>
            <div class="point1"></div>
            <div class="point2"></div>
          </div>
        </div>
      </div>

      <!--查询主体-->
      <div class="lineMain">
        <!--一个单元-->
        <div v-for="(datas,index) in lineDatas">
          <!--标题栏-->
          <div class="lineTitle">
            <div class="lineLeft">{{fangan(index)}}</div>
            <div class="lineRight">
              <div>
                <span>{{datas.beginLineName}}</span>
                <div class="icon" v-show="datas.isTranfser==1">转</div>
                <span v-show="datas.isTranfser==1">{{datas.endLineName}}</span>
              </div>
              <div>
                <div class="right_last">
                  <div class="color1">途径</div>
                  <div class="color2">{{datas.staNum}}站</div>
                </div>
                <!--0换成参数index-->
                <div v-show="isshow!=index" class="mui-icon mui-icon-arrowright" @click="showLine(index)"></div>
                <div v-show="isshow==index" class="mui-icon mui-icon-arrowdown" @click="closeLine()"></div>
              </div>
            </div>
          </div>
          <!--信息栏-->
          <div class="busData" v-show="isshow==index">
            <div class="endpoint">
              <img src="../../../static/img/bus/组 8@2x.png" alt=""/>
              <div>{{datas.proList[0].beginStaName}}</div>
            </div>
            <div class="first">
              <img src="../../../static/img/bus/形状 24@2x.png" alt=""/>
              <div class="t1">乘坐：{{datas.proList[0].lineName}}</div>
              <!--<div class="score">票价：2元</div>-->
            </div>
            <div class="second">
              <div>上车：{{datas.proList[0].beginStaName}}</div>
              <div>途径：{{datas.proList[0].staNum}}站</div>
            </div>
            <!--转车循环体，可有可无-->
            <div v-for="(item,i) in datas.proList" v-show="datas.isTranfser==1 && i!==0">
              <div class="add">
                <img src="../../../static/img/bus/形状 25@2x.png" alt=""/>
                <div>
                  <div class="t1">下车：{{item.beginStaName}}</div>
                  <div style="display:flex">
                    <div>转车：{{item.lineName}}</div>
                    <!--<div class="score">票价：2元</div>-->
                  </div>
                </div>
              </div>
              <div class="second">
                <div>上车：{{item.endStaName}}</div>
                <div>途径：{{item.staNum}}站</div>
              </div>
            </div>
            <!--转车循环体结束-->
            <div class="first">
              <img src="../../../static/img/bus/形状 24@2x.png" alt=""/>
              <div class="t1">下车：{{datas.proList[datas.proList.length-1].endStaName}}</div>
            </div>
            <div class="endpoint">
              <img src="../../../static/img/bus/组 8 拷贝@2x.png" alt=""/>
              
              <div>{{datas.proList[datas.proList.length-1].endStaName}}</div>
            </div>
          </div>
        </div>
        <!--一个单元结束-->
      </div>
    </div>
    <!--我的收藏-->
    <div v-show="isOn==2" class="busSearch" :class="{paddingTop:isOn!=2}">
      <!--公交一个单元-->
      <div  @click="toLine(item.lineId,item.dir)">
          <img class="busImg" src="../../../static/img/bus/组合logo@2x.png" alt=""/>
          <div class="busMiddle">
            <div class="busName">116路(汽车站-邓庄)</div>
            <div class="toLine"><span>邓庄</span>
            	<img src="./../../../static/img/bus/toLine.png" alt="" class="toLineIcon"><span>汽车站</span>
            </div>
            <div class="fromLine">
                              冬季 海安6:30-17:30  邓庄6:10-17:10 夏季 海安6:20-18:00  邓庄6:00-17:50
            </div>
          </div>
        </div>
      <!--公交一个单元结束-->
    </div>

    <!--底部tab-->
    <div class="footTab">
      <div @click="sel(0)">
        <img v-show="isOn!=0" src="../../../static/img/bus/形状 16@2x.png" alt=""/>
        <img v-show="isOn==0" src="../../../static/img/bus/tab1.png" alt=""/>
        <div :class="{active:isOn==0}">公交查询</div>
      </div>
      <div @click="sel(1)">
        <img v-show="isOn!=1" src="../../../static/img/bus/形状 19 拷贝@2x.png" alt=""/>
        <img v-show="isOn==1" src="../../../static/img/bus/tab2.png" alt=""/>
        <div :class="{active:isOn==1}">站点查询</div>
      </div>
      <div @click="sel(2)">
        <img v-show="isOn!=2" src="../../../static/img/bus/组 7@2x.png" alt=""/>
        <img v-show="isOn==2" src="../../../static/img/bus/tab3.png" alt=""/>
        <div :class="{active:isOn==2}">我的收藏</div>
      </div>
    </div>
    <!--搜索模态框-->
    <div class="marsk" v-show="ismarsk" :class="{top:istop}">
          <div v-for="item in staName" @click="changeName(isinput,item.staName)">{{item.staName}}</div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        isOn: 0,//tab页切换
        isshow: 1000,//公交路线的展示
        searchKey: "",
        stationList: [],
        lineList: [],
        beginStationName:"",
        endStationName:"",
        lineDatas:[],
        isinput:"",//判断哪个输入框获焦点
        staName:[],//遮罩层搜索结果
        ismarsk:false,//遮罩层显示隐藏
        istop:false,//遮罩层向下偏移
      }
    },
    methods: {
	      sel(i) {
	        this.isOn = i;
	      },
	      showLine(i) {
	        this.isshow = i;
	      },
	      closeLine() {
	        this.isshow = 1000;
	      },
	      //input输入框内容改变触发事件
	      marskMsg(i){
	      	 this.ismarsk=true;
	      	 let staName="";//根据i确定是哪个输入框
	      	 if(i==0){
	      	 	 staName=this.beginStationName
	      	 }else if(i==1){
	      	 	 staName=this.endStationName
	      	 }
	      	 axios.post("/third-server/busInfo/queryStationInfo.do", {
	          "staName":staName
	        }).then(res => {
	          //console.log(res.data.data.busStationList)
	          this.staName=res.data.data.busStationList
	        }) 	 
	      },
	      changeName(inp,name){
	      	//将遮罩层的值填入input，inp确认填入哪个input
	      	if(inp==0){
	      		this.beginStationName=name;
	      	}else if(inp==1){
	      		this.endStationName=name;
	      	}
	      
	      },
	      showmarsk(i){
	      	this.isinput=i;//指示哪个input获取焦点
	      	if(i==1){
	      		this.istop=true;
	      	}else if(i==0){
	      		this.istop=false;
	      	}
	      	this.ismarsk=true;
	      },
	      hidemarsk(){
	      	this.staName=[];//每次失去焦点清空遮罩层内容，防止，change事件没触发还有内容
	      	this.ismarsk=false;
	      	this.$nextTick(()=>{   //vue渲染后触发
						  if(this.beginStationName!="" && this.endStationName!=""){
	      		       this.searchLine();
	      	    }
					})
	      	
	      },
	      search() {
	        axios.post("/third-server/busInfo/queryBusInfoByLineOrStation.do", {
	          "keyWord": this.searchKey
	        }).then(res => {
	          this.stationList = res.data.data.queryInfo.staList;
	          this.lineList = res.data.data.queryInfo.lineList;
	        })
	      },
	      toLine(id, dir) {
	        this.$router.push("/busLine/lineDetails/" + id + "/" + dir);
	      },
	      toPointLine(id){
	        this.$router.push("/busLine/pointLine/" + id);
	      },
	      searchLine(){
	      	   this.ismarsk=false//点搜索时弹出框消失
	      	   if(this.beginStationName==""){
	      	   	   mui.alert("请输入出发地","提示")
	      	   	   return;
	      	   }
	      	   if(this.endStationName==""){
	      	   	   mui.alert("请输入目的地","提示")
	      	   	   return;
	      	   }
	      	   console.log(333)
	      	   axios.post("/third-server/busInfo/queryStationAndStation.do", {
										//"beginStationName":"开发大道",
										//"endStationName":"高新区管委会",
										//"beginStationName":"田庄",
										//"endStationName":"立发路口",
										"beginStationName":this.beginStationName,
										"endStationName":this.endStationName,
										   
			        }).then(res => {
			        	console.log(444)
			          this.lineDatas=res.data.data.proList
			          console.log(this.lineDatas)
			        })
	      },
	      exchange(){
	      	  this.isshow = 1000;
	      	  let tmp;
						tmp = this.beginStationName;
						this.beginStationName = this.endStationName;
						this.endStationName = tmp;
						this.searchLine();
	      }
    },
    computed:{
	    fangan(i){
	      return function(i){
	         if(i==0){
	         	  return "方案一"
	         }else if(i==1){
	         	  return "方案二"
	         }else if(i==2){
	         	  return "方案三"
	         }else if(i==3){
	         	  return "方案四"
	         }else if(i==4){
	         	  return "方案五"
	         }else if(i==5){
	         	  return "方案六"
	         }else if(i==6){
	         	  return "方案七"
	         }else if(i==7){
	         	  return "方案八"
	         }else if(i==8){
	         	  return "方案九"
	         }else if(i==9){
	         	  return "方案十"
	         }
	      }
	    },
	    
	  },


  }
</script>

<style scoped>
  .topSearch {
    width: 100%;
    height: 106px;
    border:0;
    background: #1A82E3;
    line-height: 106px;
    text-align: center;
    position: fixed;
  }

  .topSearch input {
    width: 710px;
    height: 64px;
    border-radius: 10px;
    font-size: 28px;
    padding-left: 16px;
    padding-right: 60px;
    margin-bottom: 0;
    color: #333;
    line-height: 49px;
    border: 0;
    background: #fff;
  }

  .topSearch div {
    position: absolute;
    top: 40px;
    right: 30px;
    border-left: 1px solid #eee;
    background: url(../../../static/img/bus/5@2x.png) no-repeat;
    background-size: 24px;
    background-position: center;
    width: 45px;
    height: 24px;
  }

  .busSearch {
    padding-bottom: 100px;
  }

  .paddingTop {
    padding-top: 106px;
  }

  .busSearch > div {
    border-top: 20px solid rgba(245, 245, 245, 1);
    width: 100%;
    display: flex;
    padding: 20px;
    align-items: center;
    background: rgba(255, 255, 255, 1);
  }

  .busPoint {
    padding-left: 33px;
    font-size: 32px;
    color: rgba(51, 51, 51, 1);
    line-height: 70px;
  }

  .busImg {
    width: 90px;
  }

  .busImg2 {
    margin-left: 45px;
    width: 60px;
  }

  .busMiddle {
    padding: 0px 0 0px 43px;
  }

  .busMiddle > div:last-child {
    display: flex;
    align-items: center;
  }

  .busMiddle img {
    height: 9px;
    content: normal !important;
  }

  .busFoot {
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .busFoot > div {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px 0;
  }

  .busName {
    font-size: 32px;
    line-height: 32px;
    color: #666;
    margin-bottom: 20px;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .t1 {
    font-size: 26px;
    color: #666;
    line-height: 26px;
    white-space: nowrap;
  }

  .t2 {
    font-size: 26px;
    line-height: 26px;
    color: #333;
    margin-left: 20px;
  }

  .icon {
    width: 52px;
    height: 52px;
    background: rgba(16, 99, 164, 1);
    border-radius: 50%;
    font-size: 34px;
    text-align: center;
    border: 1px solid transparent;
    box-sizing:border-box;
    color: #fff;
    line-height: 52px;
    margin: 0 20px;
  }

  /*站点搜索样式*/
  .topSearch2 {
    width: 100%;
    height: 202px;
    border:0;
    background: #1A82E3;
    position: fixed;
    padding-top: 18px;
  }

  .topSearch2 > div {
    width: 708px;
    height: 121px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    padding: 20px 0 20px 45px;
  }

  .topSearch2 .l1 {
    width: 632px;
    height: 84px;
    margin: auto;
    border-left: 1px dashed #eee;
    position: relative;
    padding-left: 41px;
    float:left;
  }
   .l1 .inpu{
   	  width:519px;
   	  float:left;
   }
  .l1 input {
    height: 42px;
    width: 519px;
    margin-bottom: 0;
    content: normal !important;
    padding: 0;
    font-size: 28px;
    color: rgba(51, 51, 51, 1);
    border-radius: 0;
    border: 0;
    background: #fff !important;
  }

  .l1 input:first-child {
    border-bottom: 1px dashed #999;
  }

  .l1_img {
    width: 44px;
    content: normal !important;
    margin-top:20px;
    float:right;
  }

  .point1 {
    position: absolute;
    top: 0px;
    left: -8px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #62d85f;
  }

  .point2 {
    position: absolute;
    top: 68px;
    left: -8px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f35519;
  }

  .lineMain {
    padding: 200px 0 101px 0;
  }

  .lineTitle {
    width: 100%;
    height: 160px;
    border-top: 20px solid #f5f5f5;
    display: flex;
  }

  .lineLeft {
    height: 100%;
    width: 90px;
    background: rgba(0, 132, 236, 1);
    text-align: center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
    line-height: 45px;
  }

  .lineRight {
    display: flex;
    width: 660px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 21px 0 61px;
  }

  .lineRight > div:first-child{
    display: flex;
    align-items: center;
  }
  .lineRight > div:first-child span{
    font-size: 34px;
    color: rgba(102, 102, 102, 1);
  }

  .lineRight > div:last-child {
    font-size: 32px;
    color: #666;
    display: flex;
    align-items: center;
  }

  .right_last {
    color: rgba(102, 102, 102, 1);
    line-height: 48px;
    height: 77px;
    padding-right: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .color1 {
    text-align: justify;
    font-size: 31px;
    color: #666;
    line-height: 31px;
  }

  .color2 {
    text-align: justify;
    font-size: 31px;
    color: #f2b71c;
    line-height: 31px;
  }

  .busData {
    width: 100%;
  }

  .endpoint {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 18px 18px 18px 109px;
  }

  .endpoint img {
    width: 54px;
    height: 54px;
    content: normal !important;
    margin-right: 44px;
  }

  .endpoint div {
    color: #333;
    font-size: 32px;
  }

  .first {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 8px 18px 8px 109px;
  }

  .first img {
    width: 34px;
    content: normal !important;
    margin: 0 54px 0 10px;
  }

  .score {
    font-size: 28px !important;
    color: rgba(248, 183, 57, 1) !important;
    margin-left: 80px !important;
  }

  .second {
    padding-left: 133px;
    padding-top: 12px;
  }

  .second div {
    height: 50px;
    border-left: 1px dashed #999;
    padding-left:72px;
    color: #666;
    font-size: 26px;
  }

  .add {
    height: 90px;
    display: flex;
    align-items: center;
  }

  .add > img {
    width: 25px;
    height: 25px;
    content: normal !important;
    margin-left: 120px;
    margin-right: 59px;
  }

  .add > div {
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .add > div div {
    color: #666;
    font-size: 26px;
  }

  /*tab页*/
  .footTab {
    width: 100%;
    height: 101px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #f5f5f5;
    background: #fff;
  }

  .footTab > div {
    padding-top: 18px;
    width: 33.333%;
    text-align: center;
  }

  .footTab > div div {
    font-size: 24px;
    color: #666;
    padding-top:8px;
    line-height:24px;
  }

  .footTab img {
    height: 43px;
    content: normal !important;
    display: block;
    margin: 0 auto;
  }

  .footTab .active {
    color: rgba(0, 132, 236, 1);
  }

  .toLine {
    display: flex;
    align-items: center;
    font-size: 26px;
    color: rgba(153, 153, 153, 1);
    margin-bottom: 20px;
  }

  .toLineIcon {
    width: 24px;
    margin: 0 16px;
  }

  .fromLine {
    font-size: 26px;
  }
  .marsk{
  	position:fixed;
  	background: #eee;
  	top:80px;
  	left:110px;
  	width: 519px;
  	max-height:500px;
  	overflow: auto;
  	-webkit-overflow-scrolling:touch;
  }
  .marsk div{
  	width:100%;
  	height:60px;
  	padding-left:20px;
  	font-size: 28px;
  	line-height: 60px;
  	border-bottom: 1px solid #999;
  }
  .top{
  	top:128px;
  }
</style>
