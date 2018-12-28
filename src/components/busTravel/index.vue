<template>
  <div>
  	<!--头部-->
  	<div class="busTop">
  		<div>
  			<iframe id="frame" name="iframe" style="display:none;"></iframe>
	        <form action="javascript:return true;" method="post">
		        <div class="topSearch">
		          <input type="search"  placeholder="请输入公交线路或站点名称" v-on:keyup.13="search()" v-model="searchKey" v-on:focus="showHistory()"/>
		          <img class="cutImg" src="../../../static/img/busTravel/cutLine.png" alt="" @click="jumplineSearch()"/>
		          <img class="searchImg" src="../../../static/img/busTravel/Fill 1@3x.png" alt="" />
		        </div>
	        </form>
  		</div>
  		<div class="tab" v-show="isOn!=1">
  			<div :class="{active:isOn==0}" @click="cut(0)">
  				<img v-show="isOn==0" src="../../../static/img/busTravel/tab1.png" alt="" />
  				<img v-show="isOn!=0" src="../../../static/img/busTravel/形状25拷贝@2x.png" alt="" />
  				<span>附近车辆</span>
  			</div>
  			<div :class="{active:isOn==1}" @click="cut(1)">
  				<img v-show="isOn==1" src="../../../static/img/busTravel/形状26拷贝@2x.png" alt="" />
  				<img v-show="isOn!=1" src="../../../static/img/busTravel/tab2.png" alt="" />
  				<span>历史记录</span>
  			</div>
  			<div :class="{active:isOn==2}" @click="cut(2)">
  				<img v-show="isOn==2" src="../../../static/img/busTravel/形状27@2x.png" alt="" />
  				<img v-show="isOn!=2" src="../../../static/img/busTravel/tab3.png" alt="" />
  				<span>我的收藏</span>
  			</div>
  		</div>
  	</div>
  	<div class="map" v-show="isOn==0">
  		地图显示
  	</div>
  	<!--历史记录-->
  	<div class="historySearch" v-show="isOn==1">
  		<!--搜索结果-->
  		<div v-show="!showhistory">
  			<!--线路结果-->
  			<div class="lineRes" v-for="item in lineList" @click="toLine(item.lineId,item.dir,item.lineName,item.beginStationName,item.endStationName)">
  				<img src="../../../static/img/busTravel/组合logo.png" alt="" />
  				<div class="lineText">
  					<div class="lineName">{{item.lineName}}</div>
  					<div class="pointName">
  						<span>{{item.beginStationName}}</span>
  						<img src="../../../static/img/busTravel/23@2x.png" alt="" />
  						<span>{{item.endStationName}}</span>
  					</div>
  				</div>
  			</div>
  			<!--站点结果-->
  			<div class="pointText" v-for="item in stationList" @click="toPointLine(item.staName)">
  				<img src="../../../static/img/busTravel/组logo@2x.png" alt="" />
  				<span>{{item.staName}}</span>
  			</div>
  		</div>
  		<!--历史记录弹出-->
  		<div v-show="showhistory">
	  		<div class="his_top">历史搜索</div>
	  		<!--线路-->
	  		<div class="his_middle">
	  		   <div v-for="(val,index) in linehistory">
	  		   	  <img src="../../../static/img/busTravel/组合logo.png" alt="" />
	  		   	  <div class="lineName2">{{val.lineName.length>4?val.lineName.slice(0,4)+"...":val.lineName}}</div>
	  		   	  <div class="pointName">
  						<span>{{val.beginStationName}}</span>
  						<img src="../../../static/img/busTravel/23@2x.png" alt="" />
  						<span>{{val.endStationName}}</span>
  				  </div>
  				  <img class="delImg" src="../../../static/img/busTravel/5@2x.png" alt="" @click="delLine(index)"/>
	  		   </div>
	  		</div>
	  		<!--站点-->
	  		<div class="pointText pointPosition" v-for="(value,index) in pointhistory">
  				<img src="../../../static/img/busTravel/组logo@2x.png" alt="" />
  				<span>{{value.staName}}</span>
  				<img class="delImg" src="../../../static/img/busTravel/5@2x.png" alt="" @click="delPoint(index)" />
  			</div>
	  		<div class="his_foot" @click="delHistory()" v-show="linehistory.length!=0 || pointhistory.length!=0">清空历史记录</div>
	  		<div class="his_foot" v-show="linehistory.length==0 && pointhistory.length==0">暂无历史搜索记录</div>
	  	</div>
  	</div>
  	<!--我的收藏-->
  	<div v-show="isOn==2" class="collection">
  		   <div class="noCollection" v-show="userCollection.length==0">
                     暂无收藏
	      </div>
	      <div v-for="item in userCollection" @click="toLine(item.lineId,item.dir,item.lineName,item.beginStationName,item.endStationName)">
	        <img class="busImg" src="../../../static/img/busTravel/组合logo@2x.png" alt=""/>
	        <div class="busMiddle">
	          <div class="busName">{{item.lineName}}</div>
	          <div class="toLine">
	          	<span>{{item.beginStationName}}</span>
	            <img src="./../../../static/img/busTravel/23@2x.png" alt="" class="toLineIcon"><span>{{item.endStationName}}</span>
	          </div>
	          <div class="fromLine">
	            {{item.firstLastTime}}
	          </div>
	        </div>
	      </div>
  	</div>
  </div>
</template>

<script>
  import axios from "axios"
  import {mapGetters} from 'vuex'
    export default {
      name: "index",
      data(){
          return{
             isOn:0,//tab切换
             showhistory:true,//历史记录的显示隐藏
             userCollection: [],//我的收藏接口数据
             searchKey:"",//线路站点信息关键字
             stationList:[],//站点结果列表
	           lineList:[],//线路结果列表
	           linehistory:[],//历史记录暂存线路
	           pointhistory:[],//历史记录暂存站点
             
          }
      },
      computed:{
	    	...mapGetters([
	        "getUserId",
	        "getUserName",
	        "getCardId",
	        "getUserPhone",
	      ]),
      },
      mounted(){
          //我的收藏
          this.queryMyCollection();
        
          // 提取线路历史
					let infoStr = window.localStorage.getItem('history');
					let info = JSON.parse(infoStr);
					if(info==null){
						this.linehistory=[]
					}else{
						this.linehistory=info;
					}
					
					//提取站点历史
					let infoStr2 = window.localStorage.getItem('history2');
					let info2 = JSON.parse(infoStr2);
					if(info2==null){
						this.pointhistory=[]
					}else{
						this.pointhistory=info2;
					}
      },
      methods:{
        cut(i){
        	this.isOn=i;
        },
        showHistory(){
        	this.isOn=1;
        	this.showhistory=true;
        },
        jumplineSearch(){
        	this.$router.push("/busTravel/lineSearch");
        },
        search(){
        	this.showhistory=false;
        	axios.post("/third-server/busInfo/queryBusInfoByLineOrStation.do", {
	          "keyWord": this.searchKey
	        }).then(res => {
	        	console.log(res)
	          this.stationList = res.data.data.queryInfo.staList;
	          this.lineList = res.data.data.queryInfo.lineList;
	        })
        },
        queryMyCollection() {
	        axios.post('/third-server/busInfo/queryMyCollection.do', {
	            //"userId": this.getUserId
	            "userId":"314r23e1r32e"
	        }).then(res => {
	          this.userCollection = res.data.data.collectionList;
	        })
	      },
	      toLine(id, dir,a,b,c) {
	        this.$router.push("/busTravel/lineBus/" + id + "/" + dir);
	        //点击跳转的时候保存搜索信息
	        let searchName={
			    	"lineName":a,
			    	"beginStationName":b,
			    	"endStationName":c
			    }
	        if(this.linehistory.length>0){
			    	    let isData=false;
						    for(let i=0;i<this.linehistory.length;i++){
						    	  if(this.linehistory[i].lineName==a){
						    	   	 return;
						    	  }else{
						    	   	  isData=true;
						    	  }
						    }
						    if(isData){this.linehistory.push(searchName)}
			    }else{
			    	  this.linehistory.push(searchName)
			    }
          let str=JSON.stringify(this.linehistory);
          window.localStorage.setItem('history', str);
	      },
	      toPointLine(id){
	        //this.$router.push("/busLine/pointLine/" + id);
	        //点击跳转的时候保存搜索信息
	        let searchName={
			    	"staName":id,
			    }
	        //去重操作
	        if(this.pointhistory.length>0){
			    	    let isData=false;
						    for(let i=0;i<this.pointhistory.length;i++){
						    	  if(this.pointhistory[i].staName==id){
						    	   	 return;
						    	  }else{
						    	   	  isData=true;
						    	  }
						    }
						    if(isData){this.pointhistory.push(searchName)}
			    }else{
			    	  this.pointhistory.push(searchName)
			    }
          let str=JSON.stringify(this.pointhistory);
          window.localStorage.setItem('history2', str);
	        
	      },
	      delHistory(){
	      	 window.localStorage.removeItem('history');
	      	 window.localStorage.removeItem('history2');
	      	 this.linehistory=[];
	         this.pointhistory=[];
	      },
	      delLine(i){
	      	 this.linehistory.splice(i,1);
	      	 window.localStorage.removeItem('history');
	      	 let str=JSON.stringify(this.linehistory);
           window.localStorage.setItem('history', str);
	      },
	      delPoint(i){
	      	 this.pointhistory.splice(i,1);
	      	 window.localStorage.removeItem('history2');
	      	 let str=JSON.stringify(this.pointhistory);
           window.localStorage.setItem('history2', str);
	      },
      }
    }
</script>

<style scoped>
   .busTop{
   	width: 100%;
   	 padding:14px 20px 0 20px;
   	 position:fixed;
   	 top:0;
   }
   .topSearch{
   	width:100%;
   	height:64px;
   	position:relative;
   }
   .topSearch input{
   	  width:600px;
   	  height:64px;
   	  background: #fff;
   	  border:1px solid #eee;
   	  float: left;
   	  margin-bottom: 0;
   	  padding-left:90px;
   }
   .cutImg{
   	height:64px;
   	margin-left:20px;
   	float: right;
   }
   .searchImg{
   	position:absolute;
   	top:20px;
   	left:35px;
   	width:28px;
   }
   .tab{
   	display: flex;
   	align-items: center;
   	justify-content: space-between;
   	padding:18px 0;
   }
   .tab img{
   	width:30px;
   	vertical-align:middle ;
   }
   .tab div{
   	color:#9a9a9a;
   	font-size:28px;
   	width:207px;
   	height:50px;
   	text-align: center;
   	line-height: 50px;
   }
   .tab .active{
   	   background: #7586ff;
   	   border-radius: 40px;
   	   color:#fff;
   }
   .map,.collection{
   	 padding-top:164px;
   }
   .historySearch{
   	padding:116px 20px 0 20px;
   	width:100%;
   }
   .lineRes{
   	width:100%;
   	height:130px;
   	border-bottom: 1px solid #eee;
   	display: flex;
   	align-items: center;
   }
   .lineRes>img{
   	  width:60px;
   }
   .lineRes>div{
   	padding-left:48px;
   }
   .lineName{
   	 font-size: 32px;
   	 color:#666;
   	 line-height: 32px;
   	 padding-bottom: 20px;
   }
   .pointName{
   	  color:#999;
   	  font-size: 28px;
   	  line-height: 28px;
   }
   .pointName img{
   	  width:23px;
   	  margin:0 14px;
   	  vertical-align: middle;
   }
   .pointText{
   	 width:100%;
   	 height:110px;
   	 border-bottom: 1px solid #eee;
   	 display: flex;
   	 align-items: center;
   }
   .pointText img{
   	 width:60px;
   }
   .pointText span{
   	 font-size: 32px;
   	 color:#666;
   	 line-height: 32px;
   	 padding-left:48px;
   }
   .his_top{
   	font-size:28px;
   }
   .his_middle>div>img{
   	 width:60px;
   }
   .his_middle>div{
   	width:100%;
   	height:110px;
   	border-bottom: 1px solid #eee;
   	display: flex;
   	align-items: center;
   	position:relative;
   }
   .delImg{
   	 width:26px !important;
   	 position:absolute;
   	 right:0;
   }
   .lineName2{
   	 font-size:32px;
   	 color:#666;
   	 padding:0 55px 0 20px;
   	 line-height: 32px;
   }
   .his_foot{
   	 font-size: 28px;
   	 line-height: 28px;
   	 padding-top:42px;
   	 color:#999;
   	 width:100%;
   	 text-align: center;
   }
   /*我的收藏*/
  .collection > div {
    border-top: 20px solid rgba(245, 245, 245, 1);
    width: 100%;
    display: flex;
    padding: 20px;
    align-items: center;
    background: rgba(255, 255, 255, 1);
  }
  .toLine {
    display: flex;
    align-items: center;
    font-size: 26px;
    color: rgba(153, 153, 153, 1);
    margin-bottom: 20px;
  }
  .busImg {
    width: 90px;
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
  div.noCollection {
    border: 0;
    text-align: center;
    display: block;
    font-size: 28px;
    color: #999;
  }
  .pointPosition{
  	position:relative;
  }
  .pointPosition span{
  	padding-left:20px;
  }
</style>
