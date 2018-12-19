<template>
  <div>
    <div class="top">
      途径站点的线路
    </div>
    <!--公交搜索-->
    <div class="busSearch">
      <!--公交一个单元-->
      <div v-for="item in list" @click="toLine(item.lineId,item.dir)">
        <img class="busImg" src="../../../static/img/bus/组合logo@2x.png" alt=""/>
        <div class="busMiddle">
          <div class="busName">{{item.lineName}}</div>
          <div class="toLine"><span>{{item.beginStationName}}</span><img src="./../../../static/img/bus/toLine.png"
                                                                         alt="" class="toLineIcon"><span>{{item.endStationName}}</span>
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
  export default {
    data() {
      return {
        isOn: 0,
        list:[]
      }
    },
    methods: {
      sel(i) {
        this.isOn = i;
      }
    },
    mounted(){
      axios.post("/third-server/busInfo/queryLineInfoByStaName.do",{
        "staName":this.$route.params.id
      }).then(res=>{
        this.list = res.data.data.busStationList
      })
    }
  }
</script>

<style scoped>
  .top {
    width: 100%;
    height: 60px;
    padding-left: 23px;
    line-height: 60px;
    border-bottom: 1px solid #eee;
    color: #6b6b6b;
    font-size: 25px;
  }

  .busSearch > div {
    border-top: 20px solid rgba(245, 245, 245, 1);;
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
    color: rgba(153, 153, 153, 1);
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
    color: #fff;
    line-height: 52px;
    margin: 0 20px;
  }

  /*站点搜索样式*/
  .topSearch2 {
    width: 100%;
    height: 202px;
    background: #3184f0;
    position: fixed;
    padding-top: 18px;
  }

  .topSearch2 > div {
    width: 708px;
    height: 121px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    padding: 20px 0;
  }

  .topSearch2 .l1 {
    width: 632px;
    height: 84px;
    margin: auto;
    border-left: 1px dashed #eee;
    position: relative;
    padding-left: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .l1 input {
    height: 42px;
    width: 522px;
    margin-bottom: 0;
    border: none;
    padding-left: 10px;
    font-size: 28px;
    color: rgba(51, 51, 51, 1);
    line-height: 49px;
  }

  .l1 input:first-child {
    border-bottom: 1px dashed #eee;
  }

  .l1_img {
    width: 45px;
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
    padding-top: 200px;
  }

  .lineTitle {
    width: 100%;
    height: 140px;
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
    line-height: 40px;
  }

  .lineRight {
    display: flex;
    width: 660px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 21px 0 61px;
  }

  .lineRight > div:first-child {
    font-size: 34px;
    color: rgba(102, 102, 102, 1);
    line-height: 70px;
    display: flex;
    align-items: center;
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
    height: 68px;
    border-left: 1px dashed #999;
    padding-left: 72px;
    color: #666;
    font-size: 25px;
  }

  .add {
    height: 90px;
    display: flex;
    align-items: center;
  }

  .add > img {
    width: 25px;
    height: 25px;
    margin-left: 120px;
    margin-right: 59px;
  }

  .add > div {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .add > div div {
    color: #666;
    font-size: 25px;
  }

  /*tab页*/
  .footTab {
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #f5f5f5;
    background: #fff;
  }

  .footTab > div {
    padding: 18px 0 9px 0;
    width: 33.333%;
    text-align: center;
  }

  .footTab > div div {
    font-size: 24px;
    color: #666;
  }

  .footTab img {
    height: 44px;
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
    font-family: PingFangSC-Regular;
    font-weight: 400;
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
</style>
