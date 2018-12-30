<template>
  <div>
    <div class="page">
      <div class="lienName">
        <div class="busName">{{lineDetail.lineName}}<img src="./../../../static/img/bus/changeUpDown.png" alt="" class="changeUpDown" @click="changeUpDown"></div>
        <div class="busWay">{{lineDetail.beginStationName}}>>{{lineDetail.endStationName}}</div>
        <div class="busDetail">{{lineDetail.firstLastTime}}</div>
        <div class="busDetail">{{userNearPoint}}</div>
      </div>
      <div class="main">
        <!--路线一个单元-->
        <div v-for="(item,index) in line">
          <div class="point">
            <img src="../../../static/img/bus/point.png" alt="" v-show="near !== item.staNo"/>
            <img src="../../../static/img/bus/point2.png" alt="" v-show="near == item.staNo"/>
            <div>{{item.staName}}</div>
            <div class="p3" v-show="near == item.staNo">(上车站点)</div>
          </div>
          <div class="point2" v-for="item in nowPoint" v-show="item.parentNo == index">
            <img src="../../../static/img/bus/bus.png" alt=""/>
            <div>
              <div class="p2">{{item.busLicName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page2" v-show="showMap">
      <div class="lienName">
        <div class="busName">{{lineDetail.lineName}}<img src="./../../../static/img/bus/changeUpDown.png" alt="" class="changeUpDown" @click="changeUpDown"></div>
        <div class="busWay">{{lineDetail.beginStationName}}>>{{lineDetail.endStationName}}</div>
        <div class="busDetail">{{lineDetail.firstLastTime}}</div>
        <div class="busDetail">{{userNearPoint}}</div>
      </div>
      <div id="container"></div>
    </div>
    <div class="position" v-show="showMap">
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

  export default {
    data() {
      return {
        line: [],
        nowPoint: [],
        lineDetail: {
          lineName: "",
        },
        collectionId: '',
        isCollection: 0,
        near: "",
        showMap: false,
        map: {},
        userPosition: [],
        userMark: {},
        nearPoint: {}, /*最近站点*/

        lineId: "",
        dir: ""

      }
    },
    computed: {
      ...mapGetters([
        "getUserId",
        "getUserName",
        "getCardId",
        "getUserPhone",
      ]),
      userNearPoint() {
        let dis = -1;
        this.nowPoint.forEach((marker) => {
          if (this.near - marker.parentNo >= 0 && ((dis > this.near - marker.parentNo) || dis == -1)) {
            dis = this.near - marker.parentNo;
          }
        })
        if (dis == -1) {
          return "暂无最近车辆信息"
        } else {
          return "距您" + dis + "站"
        }
      }
    },
    methods: {
      changeUpDown(){
        if(this.dir == 0){
          this.dir = 1
        }else{
          this.dir = 0
        }
        this.init()
      },
      collection() {
        axios.post('/third-server/busInfo/collectionLineInfo.do', {
          "userId": this.getUserId,
          "lineId": this.lineId,
          "dir": this.dir
        }).then(res => {
          if (res.data.result == 1) {
            mui.toast("收藏成功", {duration: 'short', type: 'div'});
            this.collectionId = res.data.data.collectionInfo.collectionId;
            this.isCollection = 1
          }
        })
      },
      cancelCollection() {
        axios.post('/third-server/busInfo/cancelCollection.do', {
          "collectionId": this.collectionId
        }).then(res => {
          if (res.data.result == 1) {
            mui.toast("已取消收藏", {duration: 'short', type: 'div'});
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
      painIcon() {
        let vue = this;

        /*绘制公交站点*/
        this.line.forEach((marker) => {
          let Mark = new AMap.Marker({
            map: this.map,
            icon: new AMap.Icon({
              image: "./static/img/bus/stationPointNew.png",
              size: new AMap.Size(14, 14),  //图标大小
              imageSize: new AMap.Size(14, 14)
            }),
            position: [marker.staLng, marker.staLat],
            offset: new AMap.Pixel(-7, -7),
          })
          Mark.on('click', () => {
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


        /*最近站点*/
        let nearMark = new AMap.Marker({
          map: this.map,
          icon: new AMap.Icon({
            image: "./static/img/bus/nearPoint.png",
            size: new AMap.Size(14, 14),  //图标大小
            imageSize: new AMap.Size(14, 14)
          }),
          position: [this.nearPoint.staLng, this.nearPoint.staLat],
          offset: new AMap.Pixel(-7, -7),
        })
        nearMark.setLabel({
          //修改label相对于maker的位置
          offset: new AMap.Pixel(-24, 16),
          content: "<span style='color: #F39911;'>上车站点</span>"
        });

        /*绘制开始结束站点*/
        let startMark = new AMap.Marker({
          map: this.map,
          icon: new AMap.Icon({
            image: "./static/img/bus/startPoint.png",
            size: new AMap.Size(30, 40),  //图标大小
            imageSize: new AMap.Size(30, 40)
          }),
          position: [this.line[0].staLng, this.line[0].staLat],
          offset: new AMap.Pixel(-15, -36),
        })

        /*结束站点*/
        let endtMark = new AMap.Marker({
          map: this.map,
          icon: new AMap.Icon({
            image: "./static/img/bus/endPoint.png",
            size: new AMap.Size(30, 40),  //图标大小
            imageSize: new AMap.Size(30, 40)
          }),
          position: [this.line[this.line.length - 1].staLng, this.line[this.line.length - 1].staLat],
          offset: new AMap.Pixel(-15, -36),
        })

        /*绘制实时公交车点*/
        axios.post("/third-server/busInfo/queryBusLocation.do", {
          "lineId": this.lineId,
          "dir": this.dir
        }).then(res => {
          this.nowPoint = res.data.data;

          this.$forceUpdate();

          this.nowPoint.forEach((marker, n) => {
            let Mark = new AMap.Marker({
              map: this.map,
              icon: new AMap.Icon({
                image: "./static/img/bus/bus.png",
                size: new AMap.Size(20, 20),  //图标大小
                imageSize: new AMap.Size(20, 20)
              }),
              position: [marker.busLng, marker.busLog],
              offset: new AMap.Pixel(-10, -10),
            })

            let Mark2 = new AMap.Marker({
              map: this.map,
              icon: new AMap.Icon({
                image: "./static/img/bus/dialog.png",
                size: new AMap.Size(120, 75),  //图标大小
                imageSize: new AMap.Size(120, 75)
              }),
              position: [marker.busLng, marker.busLog],
              offset: new AMap.Pixel(-69, -76),
            })


            let carN = new AMap.Text({
              map: this.map,
              text: "<span style='color: #F39911'>第" + (n + 1) + "辆车</span>",
              position: [marker.busLng, marker.busLog],
              offset: new AMap.Pixel(-20, -64),
            })
            let BusName = new AMap.Text({
              map: this.map,
              text: "<span style='color: #7EAFE3'>(" + marker.busLicName + ")</span>",
              position: [marker.busLng, marker.busLog],
              offset: new AMap.Pixel(-10, -48),
            })
            let busDistence = vue.near - marker.parentNo;
            let innerText = ""
            if (busDistence >= 0) {
              innerText = "距离您" + busDistence + "站";
            } else {
              innerText = "已错过该车"
            }
            let nearStation = new AMap.Text({
              map: this.map,
              text: "<span style='color: #ABABAB'>" + innerText + "</span>",
              position: [marker.busLng, marker.busLog],
              offset: new AMap.Pixel(-10, -31),
            })

          });

        })


        /*绘制路线*/
        let line = [];
        for (let i = 0; i < this.line.length; i++) {
          line.push([this.line[i].staLng, this.line[i].staLat]);
        }
        let polyline = new AMap.Polyline({
          path: line,          //设置线覆盖物路径
          strokeColor: "#7486FF", //线颜色
          strokeOpacity: 1,       //线透明度
          strokeWeight: 6,        //线宽
          strokeStyle: "solid",   //线样式
          strokeDasharray: [10, 5], //补充线样式

          showDir: true,
          dirColor: '#fff',
        });
        polyline.setMap(this.map);
      },

      init() {
        /*清除覆盖物*/
        if(this.map.clearMap){
          this.map.clearMap();
        }
        let time = setInterval(() => {
          if (sessionStorage.getItem("userPosition")) {
            clearInterval(time);

            let vue = this;

            axios.post("/third-server/busInfo/queryStationInfoDetail.do", {
              "userId": this.getUserId,
              "lineId": this.lineId,
              "dir": this.dir,
              "longitude": sessionStorage.getItem("userPosition").split(",")[0],
              "latitude": sessionStorage.getItem("userPosition").split(",")[1]
            }).then(res => {
              this.line = res.data.data.busStation.busStationInfoList;
              this.lineDetail = res.data.data.busStation.lineInfoDetail;
              this.isCollection = res.data.data.busStation.lineInfoDetail.isCollection;
              this.collectionId = res.data.data.busStation.lineInfoDetail.collectionId ? res.data.data.busStation.lineInfoDetail.collectionId : "";

              this.near = res.data.data.busStation.busStationInfo.staNo;

              this.nearPoint = res.data.data.busStation.busStationInfo;

              if (sessionStorage.getItem("userPosition")) {
                vue.userPosition = sessionStorage.getItem("userPosition").split(",");
                this.map = new AMap.Map('container', {
                  resizeEnable: true, //是否监控地图容器尺寸变化
                  zooms: [12, 20], //初始化地图层级
                  //center: [120.466456, 32.530996],
                  center: vue.userPosition,
                });
                this.moveLocation();
                this.painIcon();
              } else {
                this.map = new AMap.Map('container', {
                  resizeEnable: true, //是否监控地图容器尺寸变化
                  zooms: [12, 20],//初始化地图层级
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
                }, 20000);
              }
            });

          }
        }, 200);
      }
    },
    mounted() {

      /*let url = 'https://webapi.amap.com/maps?v=1.4.7&key=ec3bd89bc62edfe8928454dcbab04de4&plugin=AMap.Transfer,AMap.Autocomplete,AMap.PlaceSearch,AMap.Driving,AMap.Geolocation&callback=onLoad';
      let jsapi = document.createElement('script');
      jsapi.charset = 'utf-8';
      jsapi.src = url;
      document.head.appendChild(jsapi);

      window.onLoad  = ()=>{*/
      this.lineId = this.$route.params.id;
      this.dir = this.$route.params.dir;
      this.init();
    }

  }
</script>

<style scoped>
  #container {
    display: flex;
    height: 100%;
    width: 100%;
    flex-grow: 1;
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

  .point {
    display: flex;
    align-items: center;
    padding-left: 250px;

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
    flex-direction: row-reverse;
    padding: 16px;
    position: relative;
    width: 300px;
    justify-content: right;
    right: 5px;
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

  .position {
    position: fixed;
    left: 30px;
    bottom: 30px;
    z-index: 300;

    transition: bottom 0.25s ease-out;
    -moz-transition: bottom 0.25s ease-out; /* Firefox 4 */
    -webkit-transition: bottom 0.25s ease-out; /* Safari 和 Chrome */
    -o-transition: bottom 0.25s ease-out; /* Opera */
  }

  .position img {
    width: 100px;
    height: 100px;
  }

  .busName {
    font-size: 36px;
    padding: 8px 0;
  }

  .busWay {
    font-size: 32px;
    padding: 8px 0;
  }

  .busDetail {
    font-size: 28px;
    padding: 8px 0;
  }

  .page {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .page2 {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
  }

  .lienName {
    padding: 12px 32px;
    color: #fff;
    background: #7586FF;
  }

  .main {
    padding-top: 16px;
    padding-bottom: 32px;
    flex-grow: 1;
    overflow-y: scroll;
  }

  .main > div {
    width: 100%;
    min-height: 80px;
    border: none;
    position: relative;

    background: url(../../../static/img/bus/line.png) no-repeat;
    background-size: 10px;
    background-position: 257px -50px;
    margin-top: -10px;
  }

  .changeUpDown{
    width: 54px;
    height: 54px;
    float: right;
  }
</style>
<style>
  .amap-icon img {
    width: 25px;
    height: 34px;
  }

  .amap-marker-label {
    border: 0;
    background-color: transparent;
  }

  .info {
    position: relative;
    top: 0;
    right: 0;
    min-width: 0;
  }

  .amap-overlay-text-container {
    border: 0;
    background-color: transparent;
  }
</style>
