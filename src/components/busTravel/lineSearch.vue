<template>
  <div>
    <!--头部搜索模块-->
    <div class="lineTop">
      <div class="lineText">
        <img src="../../../static/img/busTravel/组 5@2x.png" alt=""/>
        <iframe id="frame" name="iframe" style="display:none;"></iframe>
        <form action="javascript:return true;" method="post">
          <div>
            <input type="search" placeholder="请输入出发地" @focus="showmarsk(0)" v-on:keyup.13="searchLine()"
                   @blur="hidemarsk" v-model="beginStationName" @input="marskMsg(0)"/>
            <input type="search" placeholder="请输入目的地" @focus="showmarsk(1)" v-on:keyup.13="searchLine()"
                   @blur="hidemarsk" v-model="endStationName" @input="marskMsg(1)"/>
          </div>
        </form>
        <img @click="exchange()" src="../../../static/img/busTravel/cut.png" alt=""/>
      </div>
    </div>
    <!--搜索结果-->
    <div class="lineContent">
      <div v-for="(datas,index) in lineDatas">
        <div class="content" @click="show(index)">
          <div class="contentTop">
            <img src="../../../static/img/busTravel/形状 26@2x.png" alt=""/>
            <div>{{(datas.beginLineName&&datas.beginLineName.length)>4?datas.beginLineName.slice(0,4)+"...":datas.beginLineName}}</div>
          </div>
          <img v-show="datas.isTranfser==1" class="toImg" src="../../../static/img/busTravel/多边形 1@2x.png" alt=""/>
          <div class="contentTop" v-show="datas.isTranfser==1">
            <img src="../../../static/img/busTravel/形状 26@2x.png" alt=""/>
            <div>{{(datas.endLineName&&datas.endLineName.length>4)?datas.endLineName.slice(0,4)+"...":datas.endLineName}}</div>
          </div>
          <div class="contentMiddle">
            <div>途径</div>
            <div>{{datas.staNum}}站</div>
          </div>
          <div class="mui-icon mui-icon-arrowright" v-show="isIndex!=index"></div>
          <div class="mui-icon mui-icon-arrowdown" v-show="isIndex==index"></div>
        </div>
        <!--信息栏-->
        <div class="busData" v-show="isIndex==index">
          <div class="endpoint">
            <img src="../../../static/img/busTravel/组 8@2x.png" alt=""/>
            <div>{{datas.proList[0].beginStaName}}</div>
          </div>
          <div class="first">
            <img src="../../../static/img/busTravel/形状 24@2x.png" alt=""/>
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
              <img src="../../../static/img/busTravel/形状 25@2x.png" alt=""/>
              <div>
                <div class="t1">下车：{{item.beginStaName}}</div>
                <div style="display:flex">
                  <div>转车：{{item.lineName}}</div>
                  <!--<div class="score">票价：2元</div>-->
                </div>
              </div>
            </div>
            <div class="second">
              <div>上车：{{item.beginStaName}}</div>
              <div>途径：{{item.staNum}}站</div>
            </div>
          </div>
          <!--转车循环体结束-->
          <div class="first">
            <img src="../../../static/img/busTravel/形状 24@2x.png" alt=""/>
            <div class="t1">下车：{{datas.proList[datas.proList.length-1].endStaName}}</div>
          </div>
          <div class="endpoint">
            <img src="../../../static/img/busTravel/组 8 拷贝@2x.png" alt=""/>
            <div>{{datas.proList[datas.proList.length-1].endStaName}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--历史记录弹出-->
    <div class="history" v-show="showhistory">
      <div v-show="true">
        <div class="his_top">历史搜索</div>
        <div class="his_middle" v-for="(val,index) in arr" @click="addInput(val.beginStationName,val.endStationName)">
          <div>
            <img src="../../../static/img/busTravel/组合logo@2x.png" alt=""/>
            <!--<div class="lineName2">116路</div>-->
            <div class="pointName">
              <span>{{val.beginStationName}}</span>
              <img src="../../../static/img/busTravel/23@2x.png" alt=""/>
              <span>{{val.endStationName}}</span>
            </div>
            <img class="delImg" src="../../../static/img/busTravel/5@2x.png" alt="" @click.stop="del(index)"/>
          </div>
        </div>
        <div class="his_foot" @click="delHistory()" v-show="arr.length!=0">清空历史记录</div>
        <div class="his_foot" v-show="arr.length==0">暂无历史搜索记录</div>
      </div>
    </div>
    <!--关键词提示-->
    <div class="marsk" v-show="ismarsk">
      <div v-for="item in staName" @click="changeName(isinput,item.staName)">{{item.staName}}</div>
    </div>
    <!--暂无查询结果数据-->
    <div class="his_foot" v-show="isRes">
      <div>暂无查询结果数据</div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: "index",
    data() {
      return {
        isIndex: 1000,
        isRes: false,//
        lineDatas: [],
        beginStationName: "",
        endStationName: "",
        showhistory: true,//搜索历史
        showkey: false,//关键词提示弹出框
        staName: [],//关键提示结果集合
        ismarsk: false,//遮罩层显示隐藏
        isinput: 0,//记录是哪个输入框
        arr: []//搜索历史数组
      }
    },
    mounted() {
    	// 提取用户信息
      var infoStr = window.localStorage.getItem('userInfo');
      var info = JSON.parse(infoStr);
      if (info == null) {
        this.arr = []
      } else {
        this.arr = info;
      }
      console.log("存储的数据")
      console.log(this.arr)
      
      
      axios.post("/third-server/busInfo/queryStationByPosition.do",{
        "longitude": sessionStorage.getItem("userPosition").split(",")[0],
        "latitude": sessionStorage.getItem("userPosition").split(",")[1]
      }).then(res=>{
        this.beginStationName = res.data.data.busStationList[0].staName
      })

      
      
    },
    methods: {
      show(i) {
        this.isIndex == i ? this.isIndex = 1000 : this.isIndex = i;
      },
      searchLine() {
        this.isRes = false;
        //this.ismarsk=false//点搜索时弹出框消失
        if (this.beginStationName == "") {
          mui.alert("请输入出发地", "提示")
          return;
        }
        if (this.endStationName == "") {
          mui.alert("请输入目的地", "提示")
          return;
        }
        axios.post("/third-server/busInfo/queryStationAndStation.do", {
          //"beginStationName":"开发大道",
          //"endStationName":"高新区管委会",
          //"beginStationName":"田庄",
          //"endStationName":"立发路口",
          "beginStationName": this.beginStationName,
          "endStationName": this.endStationName,

        }).then(res => {
          console.log("查询结果数据")
          console.log(res)
          this.lineDatas = res.data.data.proList
          if (res.data.data.proList == undefined) {
            this.isRes = true
          }
        })
        this.showhistory = false;
        this.ismarsk = false;
        this.isIndex = 1000;

        //保存搜索

        let searchName = {
          "beginStationName": this.beginStationName,
          "endStationName": this.endStationName,
        }
        //去重操作
        if (this.arr.length > 0) {
        	
          let isData = false;
          for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].beginStationName == this.beginStationName) {
              return;
            } else {
              isData = true;
            }
          }
          if (isData) {
            this.arr.push(searchName)
          }
        } else {
          this.arr.push(searchName)
        }
        let str = JSON.stringify(this.arr);
        window.localStorage.setItem('userInfo', str);
      },
      //input输入框内容改变触发事件
      marskMsg(i) {
        this.isRes = false;
        this.ismarsk = true;
        this.showhistory = false;
        let staName = "";//根据i确定是哪个输入框
        if (i == 0) {
          staName = this.beginStationName
        } else if (i == 1) {
          staName = this.endStationName
        }
        axios.post("/third-server/busInfo/queryStationInfo.do", {
          "staName": staName
        }).then(res => {
          this.staName = res.data.data.busStationList
        })
      },
      hidemarsk() {
        this.staName = [];//每次失去焦点清空遮罩层内容，防止，change事件没触发还有内容
        this.ismarsk = false;
        this.$nextTick(() => {   //vue渲染后触发
          if (this.beginStationName != "" && this.endStationName != "") {
            this.searchLine();
          }
        })

      },
      showmarsk(i) {
        this.lineDatas = [];
        this.isinput = i;
        this.ismarsk = true;
        this.showhistory = false;
      },
      exchange() {
        this.isshow = 1000;
        let tmp;
        tmp = this.beginStationName;
        this.beginStationName = this.endStationName;
        this.endStationName = tmp;
        this.searchLine();
      },
      changeName(inp, name) {
        //将遮罩层的值填入input，inp确认填入哪个input
        if (inp == 0) {
          this.beginStationName = name;
        } else if (inp == 1) {
          this.endStationName = name;
        }

      },
      delHistory() {
        window.localStorage.removeItem('userInfo');
        this.arr = [];
      },
      //删除指定下标历史记录
      del(i) {
        this.arr.splice(i, 1);
        window.localStorage.removeItem('userInfo');
        let str = JSON.stringify(this.arr);
        window.localStorage.setItem('userInfo', str);
      },
      addInput(a, b) {
        this.beginStationName = a;
        this.endStationName = b;
        this.searchLine();
      }
    }
  }
</script>

<style scoped>
  .lineTop {
    padding: 20px;
    z-index: 10;
    position: fixed;
    background: #fff;
  }

  .lineText {
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 15px;
    padding: 0 20px 0 40px;
  }

  .lineText > img:first-child {
    width: 14px;
    margin-right: 35px;
  }

  .lineText > img:last-child {
    width: 55px;
    margin-left: 24px;
  }

  .lineText input {
    height: 68px;
    color: #333;
    text-align: left;
    margin-bottom: 0;
    padding: 0;
    font-size: 28px;
    line-height: 28px;
    color: rgba(51, 51, 51, 1);
    border-radius: 0;
    border: 0;
    background: #fff !important;
  }

  .lineText input:first-child {
    border-bottom: 1px dashed #999;
  }

  .lineContent {
    padding-top: 184px;
  }

  .lineContent > div {
    border-bottom: 10px solid #f9f9f9;
  }

  .content {
    width: 100%;
    min-height: 140px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    padding: 0 200px 0 20px;
  }

  .content img {
    width: 46px;
    vertical-align: middle;
  }

  .toImg {
    width: 29px !important;
    margin: 0 13px;
  }

  .contentTop {
    min-width: 220px;
    height: 80px;
    border: 4px solid #6F86FC;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }

  .contentTop > div {
    font-size: 34px;
    color: rgba(111, 134, 252, 1);
  }

  .contentTop > img {
    margin-right: 10px;
  }

  .mui-icon {
    position: absolute;
    right: 10px;
    padding: 0;
    color: #c6c6c6;
  }

  .contentMiddle {
    height: 77px;
    margin-right: 49px;
    position: absolute;
    right: 30px;
  }

  .contentMiddle div {
    font-size: 31px;
    line-height: 31px;

  }

  .contentMiddle div:first-child {
    padding-bottom: 20px;
    color: #666;
  }

  .contentMiddle div:last-child {
    color: #F8B739;
  }

  /*公交详细信息样式*/
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
    padding-left: 72px;
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

  .t1 {
    font-size: 26px;
    color: #666;
    line-height: 26px;
    white-space: nowrap;
  }

  /*搜索历史*/
  .history {
    padding: 0 20px;
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
    margin-left: 20px;
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

  /*关键词提示样式*/
  .marsk {
    padding: 0 20px;
  }

  .marsk div {
    width: 100%;
    height: 107px;
    font-size: 30px;
    line-height: 106px;
    color: #333;
    border-bottom: 1px solid #eee;
  }

  .collection {
    position: fixed;
    bottom: 46px;
    right: 37px;
    text-align: center;
  }

  .collection img {
    width: 40px;
  }

  .collection div {
    font-size: 26px;
    color: rgba(89, 181, 254, 1);
    line-height: 34px;
  }
</style>
