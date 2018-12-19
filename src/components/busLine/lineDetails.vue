<template>
  <div>
    <div class="lienName">
      {{lineDetail.lineName}}
    </div>
    <div class="main">
      <!--路线一个单元-->
      <div v-for="(item,index) in line">
        <div class="point">
          <img src="../../../static/img/bus/point2.png" alt=""/>
          <div>{{item.staName}}</div>
          <!--<div class="p3">(上车站点)</div>-->
        </div>
        <div class="point2" v-for="item in nowPoint" v-show="(item.parentNo-1) == index">
          <img src="../../../static/img/bus/bus.png" alt=""/>
          <div>
            <div class="p2">{{item.busLicName}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--定位小图标-->
    <div class="foot">
      <div>
        <img src="../../../static/img/bus/xing.png" alt=""/>
        <div class="footText">收藏</div>
      </div>
      <div>
        <img src="../../../static/img/bus/map.png" alt=""/>
        <div class="footText">地图</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
        line: [],
        nowPoint:[],
        lineDetail:{
          lineName:""
        }
      }
    },
    mounted() {
      axios.post("/third-server/busInfo/queryStationInfoDetail.do",{
        "lineId":this.$route.params.id,
        "dir":this.$route.params.dir
      }).then(res=>{
        this.line = res.data.data.busStation.busStationInfoList;
        this.lineDetail = res.data.data.busStation.lineInfoDetail;
      });

      axios.post("/third-server/busInfo/queryBusLocation.do",{
        "lineId":this.$route.params.id,
        "dir":this.$route.params.dir
      }).then(res=>{
        this.nowPoint = res.data.data;
      })
    }

  }
</script>

<style scoped>
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
  }

  .foot > div {
    text-align: center;
  }

  .foot > div:first-child {
    margin-right: 31px;
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
</style>
