<template>
  <div>
    <!--公交查询-->
    <div v-show="isOn==0">
      <!--头部搜索框-->
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post">
        <div class="topSearch">
          <input type="search" v-on:keyup.13="search()" v-model="searchKey" placeholder="请输入关键字"/>
          <div @click="deleteAll"></div>
        </div>
        <!--<input type="search" id="input" class="search" placeholder="请输入搜索内容" v-model="searchKey">-->
      </form>
      <div class="noSearch" v-show="lineList.length==0&&stationList.length==0">
        {{tips}}
      </div>
      <div class="busSearch paddingTop">
        <!--公交一个单元-->
        <div v-for="item in lineList" @click="toLine(item.lineId,item.dir)">
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
            <div>
              <input type="text" @focus="marskMsg()"/>
              <input type="text"/>
            </div>
            <img class="l1_img" src="../../../static/img/bus/形状 23@2x.png" alt=""/>
            <div class="point1"></div>
            <div class="point2"></div>
          </div>
        </div>
      </div>

      <!--查询主体-->
      <div class="lineMain">
        <!--一个单元-->
        <div>
          <!--标题栏-->
          <div class="lineTitle">
            <div class="lineLeft">方案一</div>
            <div class="lineRight">
              <div>
                <span>116路</span>
                <div class="icon">转</div>
                <span>112路</span>
              </div>
              <div>
                <div class="right_last">
                  <div class="color1">途径</div>
                  <div class="color2">11站</div>
                </div>
                <!--0换成参数index-->
                <div v-show="isshow!=0" class="mui-icon mui-icon-arrowright" @click="showLine(0)"></div>
                <div v-show="isshow==0" class="mui-icon mui-icon-arrowdown" @click="closeLine()"></div>
              </div>
            </div>
          </div>
          <!--信息栏-->
          <div class="busData" v-show="isshow==0">
            <div class="endpoint">
              <img src="../../../static/img/bus/组 8@2x.png" alt=""/>
              <div>邓庄</div>
            </div>
            <div class="first">
              <img src="../../../static/img/bus/形状 24@2x.png" alt=""/>
              <div class="t1">乘坐：115路</div>
              <div class="score">票价：2元</div>
            </div>
            <div class="second">
              <div>上车：邓庄</div>
              <div>途径：5站</div>
            </div>
            <!--转车循环体，可有可无-->
            <div>
              <div class="add">
                <img src="../../../static/img/bus/形状 25@2x.png" alt=""/>
                <div>
                  <div>下车：</div>
                  <div style="display:flex">
                    <div>转车：112路</div>
                    <div class="score">票价：2元</div>
                  </div>
                </div>
              </div>
              <div class="second">
                <div>上车：邓庄</div>
                <div>途径：5站</div>
              </div>
            </div>
            <!--转车循环体结束-->
            <div class="first">
              <img src="../../../static/img/bus/形状 24@2x.png" alt=""/>
              <div>下车：海安大桥</div>
            </div>
            <div class="endpoint">
              <img src="../../../static/img/bus/组 8 拷贝@2x.png" alt=""/>
              <div>海安大桥</div>
            </div>
          </div>
        </div>
        <!--一个单元结束-->
      </div>
    </div>
    <!--我的收藏-->
    <div v-show="isOn==2" class="busSearch" :class="{paddingTop:isOn!=2}">
      <div class="noCollection" v-show="userCollection.length==0">
        暂无收藏
      </div>
      <div v-for="item in userCollection" @click="toLine(item.lineId,item.dir)">
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

    <!--底部tab-->
    <div class="footTab">
      <div @click="sel(0)">
        <img v-show="isOn!=0" src="../../../static/img/bus/形状 16@2x.png" alt=""/><img v-show="isOn==0"
                                                                                      src="../../../static/img/bus/tab1.png"
                                                                                      alt=""/>
        <div :class="{active:isOn==0}">公交查询</div>
      </div>
      <div @click="sel(1)">
        <img v-show="isOn!=1" src="../../../static/img/bus/形状 19 拷贝@2x.png" alt=""/>
        <img v-show="isOn==1" src="../../../static/img/bus/tab2.png" alt=""/>
        <div :class="{active:isOn==1}">站台查询</div>
      </div>
      <div @click="sel(2)">
        <img v-show="isOn!=2" src="../../../static/img/bus/组 7@2x.png" alt=""/>
        <img v-show="isOn==2" src="../../../static/img/bus/tab3.png" alt=""/>
        <div :class="{active:isOn==2}">我的收藏</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        isOn: 0,//tab页切换
        isshow: 1000,//公交路线的展示
        searchKey: "",
        stationList: [],
        lineList: [],
        tips: "请输入关键字查询",
        userCollection: []
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
      init() {
        this.searchKey = "";
        this.stationList = [];
        this.lineList = [];
        this.tips = "请输入关键字查询";
        this.userCollection = [];
      },
      deleteAll() {
        this.searchKey = "";
        this.stationList = [];
        this.lineList = [];
        this.tips = "请输入关键字查询";
      },
      sel(i) {
        this.isOn = i;
        if (i == 2) {
          this.queryMyCollection();
        }
      },
      queryMyCollection() {
        axios.post('/third-server/busInfo/queryMyCollection.do', {
          "userId": this.getUserId
        }).then(res => {
          this.userCollection = res.data.data.collectionList;
        })
      },
      showLine(i) {
        this.isshow = i;
      },
      closeLine() {
        this.isshow = 1000;
      },
      marskMsg() {
        console.log("获取焦点了")
      },
      search() {
        if (this.searchKey == "") {
          mui.toast("关键字不能为空", {duration: 'short', type: 'div'});
          return
        }

        axios.post("/third-server/busInfo/queryBusInfoByLineOrStation.do", {
          "keyWord": this.searchKey
        }).then(res => {
          this.stationList = res.data.data.queryInfo.staList;
          this.lineList = res.data.data.queryInfo.lineList;

          if (this.stationList.length == 0 && this.lineList == 0) {
            this.tips = "未查询到相关路线和站点信息"
          }
        })
      },
      toLine(id, dir) {
        this.$router.push("/busLine/lineDetails/" + id + "/" + dir);
      },
      toPointLine(id) {
        this.$router.push("/busLine/pointLine/" + id);
      }
    },
    beforeRouteLeave(to, form, next) {
      if (to.name == 'busLine') {
        this.init()
      }
      next();
    },
    mounted() {
      this.queryMyCollection();
    },
    activated() {
      this.queryMyCollection();
    }
  }
</script>

<style scoped>
  .topSearch {
    width: 100%;
    height: 106px;
    background: #0084EC;
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
    padding-right: 16px;
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
    border-top: 20px solid rgba(245, 245, 245, 1);;
    border-bottom: 1px solid rgba(245, 245, 245, 1);;
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

  .noSearch {
    padding-top: 120px;
    font-size: 28px;
    color: #999;
    text-align: center;
  }

  .busSearch > div.noCollection {
    border: 0;
    text-align: center;
    display: block;
    font-size: 28px;
    color: #999;
  }
</style>
