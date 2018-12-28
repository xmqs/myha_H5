<template>
  <div>
    <!--公交名称-->
   <div class="busName swiper-container">
     <div class="swiper-wrapper">
     	<div class="busItem swiper-slide">336路</div>
     	<div class="busItem swiper-slide">336路</div>
     	<div class="busItem swiper-slide">336路</div>
     	<div class="busItem swiper-slide">336路</div>
     	<div class="busItem swiper-slide">336路</div>
     	<div class="busItem swiper-slide">336路</div>
     	<div class="busItem swiper-slide">336路</div>
     	<div class="busItem swiper-slide">336路</div>
     </div>
   </div>
   <!--头部信息-->
   <div class="topMsg">
   	  <div class="lineName">336路</div>
   	  <div class="pointName">
   	  	<span>火车站</span>
   	  	<img class="toImg" src="../../../static/img/busTravel/组 2@2x.png" alt="" />
   	  	<span>曲塘医院</span>
   	  </div>
   	  <div class="foot1">06:00-22:00</div>
   	  <div class="foot2">距您2站</div>
   	  <img class="cutImg" src="../../../static/img/busTravel/组 10@2x.png" alt="" />
   </div>
    <div class="main">
      <!--路线一个单元-->
      <div v-for="(item,index) in line">
        <div class="point">
          <img src="../../../static/img/bus/point.png" alt=""  v-show="near !== item.staNo"/>
          <img src="../../../static/img/bus/point2.png" alt=""  v-show="near == item.staNo"/>
          <div>{{item.staName}}</div>
          <div class="p3" v-show="near == item.staNo">(上车站点)</div>
        </div>
        <div class="point2" v-for="item in nowPoint" v-show="(item.parentNo-1) == index">
          <img src="../../../static/img/bus/bus.png" alt=""/>
          <div>
            <div class="p2">{{item.busLicName}}</div>
          </div>
        </div>
      </div>
    </div>
    <div id="container" v-show="showMap"></div>
    <div class="position" v-show="showMap" >
      <img src="./../../../static/img/bus/icon4.png" alt="" @click="moveLocation">
    </div>
    <!--定位小图标-->
    <div class="foot">
      <div @click="collection" v-show="isCollection==0">
        <img src="../../../static/img/bus/xing.png" alt=""/>
        <div class="footText">收藏</div>
      </div>
      <div @click="cancelCollection" v-show="isCollection==1">
        <img src="../../../static/img/bus/unxing.png" alt=""/>
        <div class="footText">已收藏</div>
      </div>
      <div @click="showMap=!showMap">
        <img src="../../../static/img/bus/map.png" alt=""/>
        <div class="footText">地图</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"
  import Swiper from "swiper"
  export default {
    data() {
      return {
        line: [],
        nowPoint:[],
        lineDetail:{
          lineName:"",
        },
        collectionId:'',
        isCollection:0,
        near:"",
        showMap:false,
        map:{},
        swiper: {},
        userPosition:[],
        userMark:{}
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
    methods:{
      collection(){
        axios.post('/third-server/busInfo/collectionLineInfo.do',{
          "userId":this.getUserId,
          "lineId":this.$route.params.id,
          "dir":this.$route.params.dir
        }).then(res=>{
          if(res.data.result==1){
            mui.toast("收藏成功",{ duration:'short', type:'div' });
            this.collectionId = res.data.data.collectionInfo.collectionId;
            this.isCollection = 1
          }
        })
      },
      cancelCollection(){
        axios.post('/third-server/busInfo/cancelCollection.do',{
          "collectionId":this.collectionId
        }).then(res=>{
          if(res.data.result==1){
            mui.toast("已取消收藏",{ duration:'short', type:'div' });
            this.isCollection = 0;
            this.collectionId = "";
          }
        })
      },
      moveLocation() {
        if (sessionStorage.getItem("userPosition")) {
          let vue = this;
          vue.userPosition = sessionStorage.getItem("userPosition").split(",");
          vue.map.remove(vue.userMark);

          vue.userMark = new AMap.Marker({
            map: vue.map,
            position: vue.userPosition,
          });

          this.map.setCenter(vue.userPosition);
        }
      },
      painBus(){
        let vue = this;
        this.nowPoint.forEach((marker)=> {
          let Mark = new AMap.Marker({
            map: this.map,
            icon:new AMap.Icon({
              image: "./static/img/bus/bus.png",
              size: new AMap.Size(20, 20),  //图标大小
              imageSize: new AMap.Size(20,20)
            }),
            position: [marker.busLng,marker.busLog],
            offset: new AMap.Pixel(-10, -10)
          })
          Mark.on('click',()=>{
            let infoWindow = new AMap.InfoWindow({
              isCustom: true,  //使用自定义窗体
              content: createInfoWindow(marker.busLicName),
              offset: new AMap.Pixel(0, -32)
            });
            function closeInfoWindow() {
              vue.map.clearInfoWindow();
            }
            function createInfoWindow(title, content) {
              let info = document.createElement("div");
              info.className = "custom-info input-card content-window-card";
              //可以通过下面的方式修改自定义窗体的宽高
              //info.style.width = "150px";
              // 定义顶部标题
              let top = document.createElement("div");
              let titleD = document.createElement("div");
              let closeX = document.createElement("img");
              top.className = "info-top";
              titleD.innerHTML = title + "&nbsp;&nbsp;&nbsp;";
              top.style.backgroundColor = 'white';
              top.style.display = "flex";
              top.style.padding = "5px 10px";
              top.style.alignItems = "center";
              top.style.justifyContent = "space-between";
              closeX.src = "./static/img/bicycle/close.png";
              closeX.style.width = "15px"
              closeX.onclick = closeInfoWindow;
              top.appendChild(titleD);
              top.appendChild(closeX);
              info.appendChild(top);
              // 定义中部内容

              return info;
            }

            infoWindow.open(vue.map, Mark.getPosition());
          })
        });
      },
      painIcon(){
        let vue = this;
        this.line.forEach((marker)=> {
          let Mark = new AMap.Marker({
            map: this.map,
            icon: "./static/img/bus/stationPoint.png",
            position: [marker.staLng,marker.staLat],
            offset: new AMap.Pixel(-8, -8),
          })
          Mark.on('click',()=>{
            let infoWindow = new AMap.InfoWindow({
              isCustom: true,  //使用自定义窗体
              content: createInfoWindow(marker.staName),
              offset: new AMap.Pixel(0, -12)
            });
            function closeInfoWindow() {
              vue.map.clearInfoWindow();
            }
            function createInfoWindow(title, content) {
              let info = document.createElement("div");
              info.className = "custom-info input-card content-window-card";
              //可以通过下面的方式修改自定义窗体的宽高
              //info.style.width = "150px";
              // 定义顶部标题
              let top = document.createElement("div");
              let titleD = document.createElement("div");
              let closeX = document.createElement("img");
              top.className = "info-top";
              titleD.innerHTML = title + "&nbsp;&nbsp;&nbsp;";
              top.style.backgroundColor = 'white';
              top.style.display = "flex";
              top.style.padding = "5px 10px";
              top.style.alignItems = "center";
              top.style.justifyContent = "space-between";
              closeX.src = "./static/img/bicycle/close.png";
              closeX.style.width = "15px"
              closeX.onclick = closeInfoWindow;
              top.appendChild(titleD);
              top.appendChild(closeX);
              info.appendChild(top);
              // 定义中部内容

              return info;
            }

            infoWindow.open(vue.map, Mark.getPosition());
          })
        });

        let line = [];
        for (let i = 0;i<this.line.length;i++){
          line.push([this.line[i].staLng,this.line[i].staLat]);
        }
        let polyline = new AMap.Polyline({
          path: line,          //设置线覆盖物路径
          strokeColor: "#25C2F2", //线颜色
          strokeOpacity: 1,       //线透明度
          strokeWeight: 4,        //线宽
          strokeStyle: "solid",   //线样式
          strokeDasharray: [10, 5] //补充线样式
        });
        polyline.setMap(this.map);
      }
    },
    mounted() {
      this.swiper = new Swiper('.swiper-container', {
              direction: 'horizontal', // 垂直切换选项
              loop: false, // 循环模式选项
              autoHeight: true,
              observer: true,
              observeParents: true,
            }) 
      axios.post("/third-server/busInfo/queryStationInfoDetail.do",{
        "userId":this.getUserId,
        "lineId":this.$route.params.id,
        "dir":this.$route.params.dir,
        "longitude":sessionStorage.getItem("userPosition").split(",")[0],
        "latitude":sessionStorage.getItem("userPosition").split(",")[1]
      }).then(res=>{
        this.line = res.data.data.busStation.busStationInfoList;
        this.lineDetail = res.data.data.busStation.lineInfoDetail;
        this.isCollection = res.data.data.busStation.lineInfoDetail.isCollection;
        this.collectionId = res.data.data.busStation.lineInfoDetail.collectionId?res.data.data.busStation.lineInfoDetail.collectionId:"";

        this.near = res.data.data.busStation.busStationInfo.staNo;

        if (sessionStorage.getItem("userPosition")) {
          vue.userPosition = sessionStorage.getItem("userPosition").split(",");
          this.map = new AMap.Map('container', {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom: 12, //初始化地图层级
            //center: [120.466456, 32.530996],
            center: vue.userPosition,
          });
          this.moveLocation();
          this.painIcon();
        } else {
          this.map = new AMap.Map('container', {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom: 12, //初始化地图层级
            center: [120.466456, 32.530996],
          });

          let time = setInterval(() => {
            if (sessionStorage.getItem("userPosition")) {
              clearInterval(time);
              this.moveLocation();
              this.painIcon();
            }
          }, 200);

          setTimeout(function () {
            clearInterval(time);
          }, 5000);
        };
      });

      axios.post("/third-server/busInfo/queryBusLocation.do",{
        "lineId":this.$route.params.id,
        "dir":this.$route.params.dir
      }).then(res=>{
        this.nowPoint = res.data.data;
        this.painBus();
      })


      let vue = this;
    }

  }
</script>

<style scoped>
  .busName{
		width:100%;
		height:90px;
	}
	.busName>div{
		padding:16px 0 24px 20px;
	}
	.busItem{
		height:50px;
		width:134px !important;
		border:1px solid #6F86FC;
		float:left;        
		font-size:30px;
		color:rgba(111,134,252,1);
		line-height:48px;
		border-radius: 20px;
		padding:0 20px;
		margin-right:22px;
	}
	.topMsg{
		background: #6F86FC;
		color:#fff;
		position:relative;
		min-height:278px;
		width:100%;
		padding-left:60px;
	}
	.toImg{
		width:23px;
	}
	.cutImg{
		width:54px;
		position:absolute;
		top:28px;
		right:54px;
	}
	.lineName{
		font-size:40px;
		color:rgba(255,255,255,1);
		line-height:40px;
		padding-top:33px;
	}
	.pointName {
		padding-top:31px;
	}
	.pointName span{
		font-size:36px;
		color:rgba(255,255,255,1);
		line-height:36px;
		
	}
	.foot1{
		padding-top:39px;
		font-size:28px;
		color:rgba(255,255,255,1);
		line-height:28px;
	}
	.foot2{
		padding-top:20px;
		font-size:28px;
		color:rgba(255,255,255,1);
		line-height:28px;
	}
  #container {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .top {
    width: 100%;
    height: 60px;
    padding-left: 21px;
    font-size: 24px;
    color: rgba(153, 153, 153, 1);
    line-height: 60px;
    background: #f5f5f5;
  }
  .main{
    padding-top: 116px;
  }

  .main > div {
    width: 100%;
    min-height: 80px;
    border: none;
    position: relative;

    background: url(../../../static/img/bus/line.png) no-repeat;
    background-size: 10px;
    background-position: 202px -50px;
    margin-top: -10px;
  }

  .point {
    display: flex;
    align-items: center;
    padding-left: 194px;

  }

  .point img {
    width: 26px;
    height: 26px;
    margin-right: 31px;
  }

  .point > div {
    font-size: 28px;
    color: rgba(51, 51, 51, 1);
  }

  .point2 {
    align-items: center;
    display: flex;
    flex-direction:row-reverse;
    padding:16px;
    position: relative;
    width: 300px;
    justify-content: right;
    right:62px;
  }

  .point2 > img {
    margin-left: 10px;
    width: 30px;
    height: 30px;
  }

  .p1 {
    font-size: 20px;
    color: rgba(247, 144, 75, 1);
    line-height: 28px;
  }

  .p2 {
    font-size: 20px;
    color: #7EAFE3;
    line-height: 28px;
  }

  .p3 {
    font-size: 20px !important;
    color: rgba(247, 144, 75, 1) !important;
    margin-left: 31px;
  }

  .foot {
    position: fixed;
    bottom: 26px;
    right: 40px;
    display: flex;
    justify-content: space-between;
    z-index: 200;
  }

  .foot > div {
    text-align: center;
    width: 100px;
  }

  .foot img {
    width: 40px;
  }

  .footText {
    font-size: 26px;
    color: rgba(89, 181, 254, 1);
    margin-top: 13px;
    line-height: 26px;
  }
  .lienName{
    padding: 32px;
    font-size: 32px;
    color: #fff;
    background: #18B4FE;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
  }

  .position{
    position:fixed;
    left: 30px;
    bottom: 30px;
    z-index: 300;

    transition: bottom 0.25s ease-out;
    -moz-transition: bottom 0.25s ease-out; /* Firefox 4 */
    -webkit-transition: bottom 0.25s ease-out; /* Safari 和 Chrome */
    -o-transition: bottom 0.25s ease-out; /* Opera */
  }
  .position img{
    width: 100px;
    height: 100px;
  }
</style>
