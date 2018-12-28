<template>
  <div>
  	<!--头部-->
  	<div class="busTop">
  		<div>
  			<iframe id="frame" name="iframe" style="display:none;"></iframe>
	        <form action="javascript:return true;" method="post">
		        <div class="topSearch">
		          <input type="search"  placeholder="请输入公交线路或站点名称" v-on:keyup.13="search()" v-on:focus="showHistory()"/>
		          <img class="cutImg" src="../../../static/img/busTravel/cutLine.png" alt="" @click="jumplineSearch()"/>
		          <img class="searchImg" src="../../../static/img/busTravel/Fill 1@3x.png" alt="" />
		        </div>
	        </form>
  		</div>
  		<div class="tab" v-show="isOn!=1">
  			<div :class="{active:isOn==0}" @click="cut(0)">
  				<img src="../../../static/img/busTravel/tab1.png" alt="" />
  				<span>附近车辆</span>
  			</div>
  			<div :class="{active:isOn==1}" @click="cut(1)">
  				<img src="../../../static/img/busTravel/tab2.png" alt="" />
  				<span>历史记录</span>
  			</div>
  			<div :class="{active:isOn==2}" @click="cut(2)">
  				<img src="../../../static/img/busTravel/tab3.png" alt="" />
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
  			<div class="lineRes">
  				<img src="../../../static/img/busTravel/组合logo.png" alt="" />
  				<div class="lineText">
  					<div class="lineName">116路</div>
  					<div class="pointName">
  						<span>汽车站</span>
  						<img src="../../../static/img/busTravel/23@2x.png" alt="" />
  						<span>邓庄</span>
  					</div>
  				</div>
  			</div>
  			<!--站点结果-->
  			<div class="pointText">
  				<img src="../../../static/img/busTravel/组logo@2x.png" alt="" />
  				<span>邓庄</span>
  			</div>
  		</div>
  		<!--历史记录弹出-->
  		<div v-show="showhistory">
	  		<div class="his_top">历史搜索</div>
	  		<div class="his_middle">
	  		   <div>
	  		   	  <img src="../../../static/img/busTravel/组合logo.png" alt="" />
	  		   	  <div class="lineName2">116路</div>
	  		   	  <div class="pointName">
  						<span>汽车站</span>
  						<img src="../../../static/img/busTravel/23@2x.png" alt="" />
  						<span>邓庄</span>
  				  </div>
  				  <img class="delImg" src="../../../static/img/busTravel/5@2x.png" alt="" />
	  		   </div>
	  		</div>
	  		<div class="his_foot">清空历史记录</div>
	  	</div>
  	</div>
  	<!--我的收藏-->
  	<div v-show="isOn==2" class="collection">
  		   <div class="noCollection" v-show="userCollection.length==0">
                     暂无收藏
	      </div>
	      <div v-for="item in userCollection" @click="toLine(item.lineId,item.dir)">
	        <img class="busImg" src="../../../static/img/bus/组合logo@2x.png" alt=""/>
	        <div class="busMiddle">
	          <div class="busName">{{item.lineName}}</div>
	          <div class="toLine">
	          	<span>{{item.beginStationName}}</span>
	            <img src="./../../../static/img/bus/toLine.png" alt="" class="toLineIcon"><span>{{item.endStationName}}</span>
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
             isOn:0,
             showhistory:false,
             userCollection: [],//我的收藏接口数据
             
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

        this.queryMyCollection();
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
        	console.log("调用接口显示搜索结果");
        },
        queryMyCollection() {
	        axios.post('/third-server/busInfo/queryMyCollection.do', {
	            //"userId": this.getUserId
	            "userId":"314r23e1r32e"
	        }).then(res => {
	          this.userCollection = res.data.data.collectionList;
	        })
	      },
	      toLine(id, dir) {
	        this.$router.push("/busTravel/lineBus/" + id + "/" + dir);
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
</style>
