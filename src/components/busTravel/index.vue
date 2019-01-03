<template>
  <div>
    <!--头部-->
    <div class="busTop">
      <div>
        <iframe id="frame" name="iframe" style="display:none;"></iframe>
        <form action="javascript:return true;" method="post">
          <div class="topSearch">
            <input type="search" placeholder="请输入公交线路或站点名称" v-on:focus="showHistory()"/>
            <img class="cutImg" src="../../../static/img/busTravel/cutLine.png" alt=""
                 @click="jumplineSearch()"/>
            <img class="searchImg" src="../../../static/img/busTravel/Fill 1@3x.png" alt=""/>
          </div>
        </form>
      </div>
      <div class="tab">
        <div :class="{active:isOn==0}" @click="cut(0)">
          <img v-show="isOn==0" src="../../../static/img/busTravel/tab1.png" alt=""/>
          <img v-show="isOn!=0" src="../../../static/img/busTravel/形状25拷贝@2x.png" alt=""/>
          <span>附近车辆</span>
        </div>
        <div :class="{active:isOn==1}" @click="cut(1)">
          <img v-show="isOn==1" src="../../../static/img/busTravel/形状26拷贝@2x.png" alt=""/>
          <img v-show="isOn!=1" src="../../../static/img/busTravel/tab2.png" alt=""/>
          <span>历史记录</span>
        </div>
        <div :class="{active:isOn==2}" @click="cut(2)">
          <img v-show="isOn==2" src="../../../static/img/busTravel/形状27@2x.png" alt=""/>
          <img v-show="isOn!=2" src="../../../static/img/busTravel/tab3.png" alt=""/>
          <span>我的收藏</span>
        </div>
      </div>
    </div>
    <div class="map" v-show="isOn==0" id="container">
    </div>
    <div class="position" v-show="isOn==0">
      <img src="./../../../static/img/bus/icon4.png" alt="" @click="moveLocation">
    </div>
    <div class="busContent" v-show="isOn==0">
      <div class="busPoint">
        <img src="./../../../static/img/bus/busIcon.png" alt="" class="busIcon">{{nearMark.staName}}
      </div>
      <div class="busLine">
        <div v-for="(item,index) in list" class="busItem">
          <div class="busLineLeft" @click="toLineDetail(index)">
            <div class="T_333333">{{item.lineName}}</div>
            <div class="busLineLeftLine">
              <span class="T_999999">{{item.beginStationName}}</span>
              <img src="./../../../static/img/bus/toLine.png" alt="" class="toLineIcon">
              <span class="T_999999">{{item.endStationName}}</span>
            </div>
          </div>
          <div class="busLineMind" @click="changeLineDirection(index)">
            <img src="./../../../static/img/bus/changeIndex.png" alt="" class="chageIndex">
            <div class="C_6F86FC">
              始末切换
            </div>
          </div>
          <div class="busLineRight" @click="toLineDetail(index)">
            <div class="T_333333">最近车辆</div>
            <div class="C_999999">{{item.distanceStation?"距您"+item.distanceStation+"站":"暂无"}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--我的收藏-->
    <div v-show="isOn==2" class="collection">
      <div class="noCollection" v-show="userCollection.length==0">
        暂无收藏
      </div>
      <div v-for="item in userCollection"
           @click="toLine(item.lineId,item.dir)">
        <img class="busImg" src="../../../static/img/busTravel/组合logo.png" alt=""/>
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
    data() {
      return {
        isOn: 0,//tab切换
        userCollection: [],//我的收藏接口数据


        map: {},
        userMark: "",
        list: [],
        nearMark: {},

        busDialog: {},
        dialogName:{},
        dialogBus1:{},
        dialogBus2:{},
        ud1:{},
        ud2:{},

        const:0,
      }
    },
    computed: {
      ...mapGetters([
        "getUserId",
        "getUserName",
        "getCardId",
        "getUserPhone",
      ]),
    },
    mounted() {
    	this.queryMyCollection();


      let url = 'https://webapi.amap.com/maps?v=1.4.7&key=ec3bd89bc62edfe8928454dcbab04de4&plugin=AMap.Transfer,AMap.Autocomplete,AMap.PlaceSearch,AMap.Driving,AMap.Geolocation&callback=onLoad';
      let jsapi = document.createElement('script');
      jsapi.charset = 'utf-8';
      jsapi.src = url;
      document.head.appendChild(jsapi);

      window.onLoad = () => {
        let vue = this;
        if (sessionStorage.getItem("userPosition")) {
          vue.userPosition = sessionStorage.getItem("userPosition").split(",");
          this.map = new AMap.Map('container', {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom: 14, //初始化地图层级
            //center: [120.466456, 32.530996],
            center: vue.userPosition,
          });
          this.moveLocation();
          this.painNear();

        } else {
          this.map = new AMap.Map('container', {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom: 14, //初始化地图层级
            center: [120.466456, 32.530996],
          });

          let time = setInterval(() => {
            if (sessionStorage.getItem("userPosition")) {
              clearInterval(time);
              this.moveLocation();
              this.painNear();
            }
          }, 200);

          setTimeout(function () {
            clearInterval(time);
          }, 5000);
        }
      }
      //定时器加载我的收藏

//    var timer=setInterval(function(){
//    	if(this.userCollection.length!=0){
//    		 this.queryMyCollection();
//    	}
//			},200)

    },
    activated() {
    	this.queryMyCollection()

    },
    methods: {
      changeLineDirection(n){
        axios.post("/third-server/busInfo/switchUpDown.do",{
          "lineId":this.list[n].lineId,
          "dir":this.list[n].dir==0?'1':'0',
          "longitude": sessionStorage.getItem("userPosition").split(",")[0],
          "latitude": sessionStorage.getItem("userPosition").split(",")[1]
        }).then(res=>{
          this.list[n] = res.data.data;
          this.$forceUpdate();
          /*this.fixOneNear(n)*/
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
      /*计算站点*/
      fixOneNear(n){
        axios.post("/third-server/busInfo/getNearestSite.do", {
          "lineId": this.list[n].lineId,
          "dir": this.list[n].dir,
          "longitude": sessionStorage.getItem("userPosition").split(",")[0],
          "latitude": sessionStorage.getItem("userPosition").split(",")[1],
        }).then(res => {
          this.list[n].near = res.data.data;
          axios.post("/third-server/busInfo/queryBusLocation.do", {
            "lineId": this.list[n].lineId,
            "dir":this.list[n].dir
          }).then(res => {
            this.list[n].bus = res.data.data;

            let nearInfo = -1;
            for(let c = 0;c<this.list[n].bus.length;c++){
              if(this.list[n].near.staNo - this.list[n].bus[c].parentNo>0&&((this.list[n].near.staNo - this.list[n].bus[c].parentNo<nearInfo)||nearInfo==-1)){
                nearInfo = this.list[n].near.staNo - this.list[n].bus[c].parentNo;
              }
            }
            if(nearInfo==-1){
              this.list[n].nearInfo = "暂无"
            }else{
              this.list[n].nearInfo = "距您"+nearInfo+"站"
            }

            this.$forceUpdate();
          })
        })
      },
      fixNear(){
        let vue = this;
        for (let i = 0; i < vue.list.length; i++) {
          axios.post("/third-server/busInfo/getNearestSite.do", {
            "lineId": vue.list[i].lineId,
            "dir": vue.list[i].dir,
            "longitude": sessionStorage.getItem("userPosition").split(",")[0],
            "latitude": sessionStorage.getItem("userPosition").split(",")[1],
          }).then(res => {
            vue.list[i].near = res.data.data;
            vue.const++;
          })

          axios.post("/third-server/busInfo/queryBusLocation.do", {
            "lineId": vue.list[i].lineId,
            "dir":vue.list[i].dir
          }).then(res => {
            vue.list[i].bus = res.data.data;
            vue.const++;
          })
        }

        let tiem2 = setInterval(()=>{
          if(vue.const == vue.list.length*2){
            clearInterval(tiem2);

            for(let z = 0;z<vue.list.length;z++){
              let nearInfo = -1;
              for(let c = 0;c<vue.list[z].bus.length;c++){
                if(vue.list[z].near.staNo - vue.list[z].bus[c].parentNo>0&&((vue.list[z].near.staNo - vue.list[z].bus[c].parentNo<nearInfo)||nearInfo==-1)){
                  nearInfo = vue.list[z].near.staNo - vue.list[z].bus[c].parentNo;
                }
              }
              if(nearInfo==-1){
                vue.list[z].nearInfo = "暂无"
              }else{
                vue.list[z].nearInfo = "距您"+nearInfo+"站"
              }
            }

            vue.$forceUpdate();
          }
        },100)

      },


      toLine(lineId,dir){
        this.$router.push("/busTravel/busDetails/" + lineId + "/" + dir);
      },
      toLineDetail(n) {
        this.$router.push("/busTravel/busDetails/" + this.list[n].lineId + "/" + this.list[n].dir);
      },
      painNear() {
        let vue = this;
        axios.post('/third-server/busInfo/queryStationByPosition.do', {
          "longitude": sessionStorage.getItem("userPosition").split(",")[0],
          "latitude": sessionStorage.getItem("userPosition").split(",")[1]
        }).then(res => {
          this.nearStation = res.data.data.busStationList;
          this.nearMark = this.nearStation[0];

          /*默认绘制最近站点*/
          axios.post("/third-server/busInfo/queryLineInfoByStaName.do", {
            "staName": this.nearMark.staName,
            "dir": "2",
            "longitude": sessionStorage.getItem("userPosition").split(",")[0],
            "latitude": sessionStorage.getItem("userPosition").split(",")[1],
          }).then(res => {
            let busList = res.data.data.busStationList;
            let list = []
            for(let i = 0; i < busList.length; i++){
              let z = 0;
              for(let j = 0;j< list.length;j++){
                if(busList[i].lineId == list[j].lineId){
                  break;
                }else{
                  z++;
                }
              }
              if (z == list.length){
                list.push(busList[i])
              }
            }

            this.list = list;

           this.busDialog = new AMap.Marker({
              map: vue.map,
              icon: new AMap.Icon({
                image: "./static/img/busTravel/busDialog.png",
                size: new AMap.Size(164, 106),  //图标大小
                imageSize: new AMap.Size(164, 106)
              }),
              position: [vue.nearMark.staLng, vue.nearMark.staLat],
              offset: new AMap.Pixel(-92, -126),
            })

            /*this.dialogName = new AMap.Text({
             map: this.map,
             text: "<span style='color: #F39911'>"+vue.nearMark.staName+"</span>",
             position: [vue.nearMark.staLng, vue.nearMark.staLat],
             offset: new AMap.Pixel(-44, -108),
           })
           let array = [];
           for(let i = 0;i<this.list.length;i++){
             array.push(this.list[i].lineName)
           }
           this.dialogBus1 = new AMap.Text({
             map: this.map,
             text: "<div style='color: #7EAFE3;width: 80px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;'>"+array[0]+"</div>",
             position: [vue.nearMark.staLng, vue.nearMark.staLat],
             offset: new AMap.Pixel(-32, -86),
           })
           this.dialogBus2 = new AMap.Text({
             map: this.map,
             text: "<div style='color: #7EAFE3;width: 80px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;'>"+array[1]+"</div>",
             position: [vue.nearMark.staLng, vue.nearMark.staLat],
             offset: new AMap.Pixel(-32, -66),
           })



           if(this.list[0].dir==0){
             this.ud1 = new AMap.Text({
               map: this.map,
               text: "<span style='color: #999;'>上行线</span>",
               position: [vue.nearMark.staLng, vue.nearMark.staLat],
               offset: new AMap.Pixel(28, -86),
             })
           }else{
             this.ud1 = new AMap.Text({
               map: this.map,
               text: "<span style='color: #999;'>下行线</span>",
               position: [vue.nearMark.staLng, vue.nearMark.staLat],
               offset: new AMap.Pixel(28, -86),
             })
           }
           if(this.list[1].dir==0){
             this.ud2 = new AMap.Text({
               map: this.map,
               text: "<span style='color: #999;'>上行线</span>",
               position: [vue.nearMark.staLng, vue.nearMark.staLat],
               offset: new AMap.Pixel(28, -66),
             })
           }else{
             this.ud2 = new AMap.Text({
               map: this.map,
               text: "<span style='color: #999;'>下行线</span>",
               position: [vue.nearMark.staLng, vue.nearMark.staLat],
               offset: new AMap.Pixel(28, -66),
             })
           }*/

            /*this.fixNear();*/
          })

          /*开始绘制所有最近点*/
          for (let i = 0; i < this.nearStation.length; i++) {
            let startIcon = new AMap.Icon({
              // 图标尺寸
              size: new AMap.Size(23, 29),
              // 图标的取图地址
              image: './static/img/bus/station.png',
              // 图标所用图片大小
              imageSize: new AMap.Size(21, 27),
              // 图标取图偏移量
            });
            let marker = new AMap.Marker({
              map: vue.map,
              position: [vue.nearStation[i].staLng, vue.nearStation[i].staLat],
              icon: startIcon,
            });

            AMap.event.addListener(marker, 'click', function () {
              vue.const = 0;
              vue.station = vue.nearStation[i].staName;
              vue.nearMark = vue.nearStation[i];

              axios.post("/third-server/busInfo/queryLineInfoByStaName.do", {
                "staName": vue.station,
                "dir": "2",
                "longitude": sessionStorage.getItem("userPosition").split(",")[0],
                "latitude": sessionStorage.getItem("userPosition").split(",")[1]
              }).then(res => {
                let busList = res.data.data.busStationList;
                let list = []
                for(let i = 0; i < busList.length; i++){
                  let z = 0;
                  for(let j = 0;j< list.length;j++){
                    if(busList[i].lineId == list[j].lineId){
                      break;
                    }else{
                      z++;
                    }
                  }
                  if (z == list.length){
                    list.push(busList[i])
                  }
                }

                vue.list = list;

                //计算
                /*vue.fixNear();*/

              })
            });
          }
        })
      },
      cut(i) {
        if(i==1){
        	this.$router.push("/busTravel/busHistory");
        }else if(i==2){
        	this.isOn = i;
        	this.queryMyCollection();
        }else{
        	this.isOn = i;
        }
      },
      showHistory() {
        this.$router.push("/busTravel/busHistory");
      },
      jumplineSearch() {
        this.$router.push("/busTravel/lineSearch");
      },

      queryMyCollection() {
        axios.post('/third-server/busInfo/queryMyCollection.do', {
          "userId": this.getUserId
        }).then(res => {
          this.userCollection = res.data.data.collectionList;
        })
      },
    }
  }
</script>

<style scoped>
  .busTop {
    width: 100%;
    padding: 14px 20px 0 20px;
    position: fixed;
    top: 0;
    background: #fff;
  }

  .topSearch {
    width: 100%;
    height: 64px;
    position: relative;
  }

  .topSearch input {
    width: 600px;
    height: 64px;
    background: #fff;
    font-size: 28px;
    border: 1px solid #eee;
    float: left;
    text-align: left;
    margin-bottom: 0;
    padding-left: 90px;
  }

  .cutImg {
    height: 64px;
    margin-left: 20px;
    float: right;
  }

  .searchImg {
    position: absolute;
    top: 20px;
    left: 35px;
    width: 28px;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;
  }

  .tab img {
    width: 30px;
    vertical-align: middle;
  }

  .tab div {
    color: #9a9a9a;
    font-size: 28px;
    width: 207px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }

  .tab .active {
    background: #7586ff;
    border-radius: 40px;
    color: #fff;
  }

  .collection {
    padding-top: 164px;
  }

  .historySearch {
    padding: 116px 20px 0 20px;
    width: 100%;
  }

  .lineRes {
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
  }

  .lineRes > img {
    width: 60px;
  }

  .lineRes > div {
    padding-left: 48px;
  }

  .lineName {
    font-size: 32px;
    color: #666;
    line-height: 32px;
    padding-bottom: 20px;
  }

  .pointName {
    color: #999;
    font-size: 28px;
    line-height: 28px;
  }

  .pointName img {
    width: 23px;
    margin: 0 14px;
    vertical-align: middle;
  }

  .pointText {
    width: 100%;
    height: 110px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
  }

  .pointText img {
    width: 60px;
  }

  .pointText span {
    font-size: 32px;
    color: #666;
    line-height: 32px;
    padding-left: 48px;
  }

  .his_top {
    font-size: 28px;
  }

  .his_middle > div > img {
    width: 60px;
  }

  .his_middle > div {
    width: 100%;
    height: 110px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    position: relative;
  }

  .delImg {
    width: 26px !important;
    position: absolute;
    right: 0;
  }

  .lineName2 {
    font-size: 32px;
    color: #666;
    padding: 0 55px 0 20px;
    line-height: 32px;
  }

  .his_foot {
    font-size: 28px;
    line-height: 28px;
    padding-top: 42px;
    color: #999;
    width: 100%;
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
    position: relative;
    top:1px;
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

  .pointPosition {
    position: relative;
  }

  .pointPosition span {
    padding-left: 20px;
  }

  .map {
    position: fixed;
    top: 164px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .busContent {
    background: #fff;
    height: 434px;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;

    transition: bottom 0.25s ease-out;
    -moz-transition: bottom 0.25s ease-out; /* Firefox 4 */
    -webkit-transition: bottom 0.25s ease-out; /* Safari 和 Chrome */
    -o-transition: bottom 0.25s ease-out; /* Opera */
  }

  .close {
    bottom: -344px;
  }

  .busPoint {
    height: 89px;
    border-bottom: 1px solid #ebebeb;
    padding: 16px 23px 0 23px;
    font-size: 32px;
    color: #3184f0;
    display: flex;
    align-items: center;
    background: url("./../../../static/img/bus/radio.png") no-repeat;
    background-size: 80px;
    background-position: center 12px;
  }

  .busLine {
    height: 345px;
    overflow: scroll;
  }

  .line {
    padding: 16px 23px;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
  }

  .busIcon {
    width: 39px;
    margin-right: 34px;
  }

  .busItem {
    border-bottom: 1px solid #EBEBEB;
  }

  .toLineIcon {
    width: 24px;
    margin: 0 16px;
    position: relative;
    top: -6px;
  }

  .busItem {
    display: flex;
    padding: 36px 16px;
    justify-content: space-between;
  }

  .busLineLeft {
    width: 300px;
  }

  .busLineRight {
    width: 300px;
  }

  .busLineRight div {
    text-align: right;
  }

  .busLineMind {
    text-align: center;
  }

  .chageIndex {
    width: 40px;
    height: 40px;
  }

  .C_6F86FC {
    color: #6F86FC;
    font-size: 26px;
    margin-top: 30px;
    white-space: nowrap;
  }

  .C_999999 {
    color: #999999;
    font-size: 26px;
    margin-top: 40px;
  }

  .T_333333 {
    color: #333333;
    font-size: 26px;
  }

  .busLineLeftLine {
    font-size: 26px;
    margin-top: 40px;
  }

  .T_999999 {
    color: #999999;
    font-size: 26px;
  }

  .position{
    position:fixed;
    left: 10px;
    bottom: 443px;
    z-index: 80;

    transition: bottom 0.25s ease-out;
    -moz-transition: bottom 0.25s ease-out; /* Firefox 4 */
    -webkit-transition: bottom 0.25s ease-out; /* Safari 和 Chrome */
    -o-transition: bottom 0.25s ease-out; /* Opera */
  }
  .up200{
    bottom: 463px;
  }
  .position img{
    width: 100px;
    height: 100px;
  }
</style>

<style>
  .amap-overlay-text-container {
    border: 0;
    background-color: transparent;
  }
</style>
