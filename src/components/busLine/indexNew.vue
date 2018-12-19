<template>
  <div>
    <div class="headerSearch">
      <div class="input" @click="toSearch">
        <img src="./../../../static/img/hotline/Fill1.png" alt="" class="searchIcon"><div>输入公交线路或站点名称</div>
      </div>
    </div>
    <div id="container"></div>
    <div class="busContent" :class="{'close':bottomShow}" v-show="list.length>0">
      <div class="busPoint" @click="changeBottom">
        <img src="./../../../static/img/bus/busIcon.png" alt="" class="busIcon">{{station}}
      </div>
      <div class="busLine">
        <div class="line" v-for="item in list">
            <div class="nameLine">
              <span class="lineName">{{item.lineName}}</span>
            </div>
          <div class="toLine"><span>{{item.beginStationName}}</span><img src="./../../../static/img/bus/toLine.png"
                                                                         alt="" class="toLineIcon"><span>{{item.endStationName}}</span></div>
            <div class="fromLine">
              {{item.firstLastTime}}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"

  export default {
    name: "index",
    data() {
      return {
        map: {},
        list: [],
        userPosition: [],
        userMark: {},
        t1: {},
        isshow: false,
        bottomShow:true,
        nearStation:[],
        station:'公交出行'
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
    methods: {
      toSearch(){
        this.$router.push("/busLine/busSearch");
      },
      changeBottom(){
        this.bottomShow = !this.bottomShow;
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
      painNear(){
        axios.post('/third-server/busInfo/queryStationByPosition.do',{
          "longitude":sessionStorage.getItem("userPosition").split(",")[0],
          "latitude":sessionStorage.getItem("userPosition").split(",")[1]
        }).then(res=>{
          alert(JSON.stringify(res));
          this.nearStation = res.data.data.busStationList;

          let vue = this;
          for (let i = 0; i < this.nearStation.length; i++) {
            let startIcon = new AMap.Icon({
              // 图标尺寸
              size: new AMap.Size(23,29),
              // 图标的取图地址
              image: './static/img/bus/station.png',
              // 图标所用图片大小
              imageSize: new AMap.Size(21,27),
              // 图标取图偏移量
            });
            let marker = new AMap.Marker({
              map: vue.map,
              position: [vue.nearStation[i].staLat,vue.nearStation[i].staLng],
              icon: startIcon,
            });



            AMap.event.addListener(marker, 'click', function () {
              vue.station = vue.nearStation[i].staName;

              axios.post("/third-server/busInfo/queryLineInfoByStaName.do",{
                "staName":vue.station
              }).then(res=>{
                vue.list = res.data.data.busStationList
              })
            });
          }
        })
      }
    }
    ,
    mounted() {
      let vue = this;
      if (sessionStorage.getItem("userPosition")) {
        vue.userPosition = sessionStorage.getItem("userPosition").split(",");
        this.map = new AMap.Map('container', {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 16, //初始化地图层级
          //center: [120.466456, 32.530996],
          center: vue.userPosition,
        });
        this.moveLocation();
        this.painNear();
      } else {
        this.map = new AMap.Map('container', {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 16, //初始化地图层级
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
      };

    }
  }
</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .info-middle img {
    float: left;
    margin-right: 12px;
  }

  .position {
    position: fixed;
    z-index: 90;
    left: 32px;
    bottom: 68px;
    width: 72px;
    height: 72px;
  }

  .headerSearch{
    padding: 24px 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 50;
    background: #3184f0;
  }
  .input{
    background: #fff;
    height: 62px;
    width: 100%;
    border-radius: 6px;
    font-size: 26px;
    color: #3184f0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .searchIcon{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .busContent{
    background: #fff;
    height: 434px;
    position: fixed;
    width:100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;

    transition: bottom 0.25s ease-out;
    -moz-transition: bottom 0.25s ease-out; /* Firefox 4 */
    -webkit-transition: bottom 0.25s ease-out; /* Safari 和 Chrome */
    -o-transition: bottom 0.25s ease-out; /* Opera */
  }

  .close{
    bottom: -344px;
  }

  .busPoint{
    height: 89px;
    border-bottom: 1px solid #ebebeb;
    padding: 16px 23px 0 23px;
    font-size:32px;
    color: #3184f0;
    display: flex;
    align-items: center;
    background: url("./../../../static/img/bus/radio.png") no-repeat;
    background-size: 80px;
    background-position:center 12px;
  }
  .busLine{
    height: 340px;
    overflow: scroll;
  }
  .line{
    padding: 16px 23px;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
  }
  .busIcon{
    width: 39px;
    margin-right: 34px;
  }

  .line_left{
    padding-bottom: 6px;
  }
  .line_right{
    padding-left: 36px;
  }
  .toLine{
    display: flex;
    align-items: center;
    font-size:26px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    margin-bottom: 20px;
  }
  .toLineIcon{
    width: 24px;
    margin: 0 16px;
  }
  .nameLine{
    margin-bottom: 20px;
  }
  .lineName{
    font-size: 32px;
    color: #333;
  }
  .fromLine{
    font-size: 26px;
  }
</style>
