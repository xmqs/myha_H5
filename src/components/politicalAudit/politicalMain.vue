<template>
  <div id="body">
    <!--轮播图-->
    <div id="lunbo">
      <div class="mui-slider">
        <div class="mui-slider-group">
          <div class="mui-slider-item"><a href="#"><img src="../../../static/img/politicalAudit/demo.png"/></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../../static/img/politicalAudit/demo.png"/></a></div>
        </div>
      </div>
    </div>
    <!--线上可申办业务-->
    <div id="shenban">
      <div id="shenbanTop">
        <span>线上可申办业务({{zhanshiList.page.total}}项)</span>
        <router-link to="/politicalAudit/departmentDetalis/null/null/null/1">更多</router-link>
      </div>
      <div id="shenbanMain">
        <div v-for="val in zhanshiList.data" @click="jumpshenban(val.taskguid)">
          <div><img :src="val.imgUrl"/></div>
          <div class="c26" style="width:100%">{{val.taskname.length>8?val.taskname.slice(0,8)+"..." : val.taskname}}
          </div>
        </div>
      </div>
    </div>
    <!--事项分类-->
    <div id="fenlei">
      <div id="fenleiTop">
        <span>事项分类</span>
        <input type="text" v-model="searchKey" v-on:keyup.13="search()"/>
        <img src="../../../static/img/politicalAudit/search.png" @click="search()"/>
      </div>
      <div id="fenleiNav">
        <div :class="{'active':page==1}" @click="toPage(1)">部门分类</div>
        <div :class="{'active':page==2}" @click="toPage(2)">主题分类</div>
      </div>
      <div id="fenleiMain1" v-show="page==1">
        <div class="accordion" v-for="data in bumen" @click="jumpbumen(data.ouguid)">
          <div></div>
          <div>{{data.ouname}}</div>
          <div class="mui-icon mui-icon-forward"></div>
        </div>
      </div>
      <div id="fenleiMain2" v-show="page==2">
        <div v-for="vals in zhuti" @click="jumpzhuti(vals.dictid)">
          <div><img :src="vals.dictrul"/></div>
          <div>{{vals.dictname}}</div>
        </div>
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
        page: 1,
        bumen: {},
        zhuti: {},
        zhanshiList: {
          page: {
            total: 0,
          }
        },
        searchKey: "",//搜索关键词
        requestData: {
          "allowApp": "1",
          "currentPage": "0",
          "pageSize": "4",
          "ouGuid": "",
          "dictId": "",
          "userType": "",
          "onlineHandle": "0",
          "areaCode": "320621",
          "searchCondition": "",
          "isHome": true
        }
      }
    },
    computed: {
      ...mapGetters([
        "getUserId",
        "getUserName",
        "getCardId",
        "getUserPhone",
        "getIsLogin",
      ])
    },
    mounted() {

      if (this.getIsLogin == "0" || this.getIsLogin == 0) {
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
          interval: 2000//自动轮播周期，若为0则不自动播放，默认为0；
        });
        //加载部门分类
        axios.post("/third-server/govService/departments.do", {"areaCode": "320621"})
          .then(res => {
            this.bumen = res.data.data;
          })
        //加载主题分类
        axios.post("/third-server/govService/themes.do", {"userType": "10"})
          .then(res => {
            this.zhuti = res.data.data
            console.log(this.zhuti)
          })
        //事项展示
        axios.post("/third-server/govService/taskList.do", this.requestData)
          .then(res => {
            this.zhanshiList = res.data;
            console.log("事项展示数据")
            console.log(res.data)
          })
      } else {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          window.location.href += '&needLogin=true&toLocalLogin=true';
        }

        if (isiOS) {
          window.location.href = '&needLogin=true';
        }
      }
    },
    methods: {
      toPage(n) {
        this.page = n;
      },
      jumpbumen(ouguid) {
        this.$router.push("/politicalAudit/departmentDetalis/" + ouguid + "/" + null + "/" + null + "/" + null)
      },
      jumpzhuti(dictid) {
        this.$router.push("/politicalAudit/departmentDetalis/" + null + "/" + dictid + "/" + null + "/" + null)
      },
      search() {
        if (this.searchKey != "") {
          this.$router.push("/politicalAudit/departmentDetalis/" + null + "/" + null + "/" + this.searchKey + "/" + null)
        }
      },
      //展示的三个可申办业务的跳转
      jumpshenban(taskguid) {
        this.$router.push("/politicalAudit/shenbanMsg/" + taskguid + "/1")
      }
    },
  }
</script>

<style scoped>
  #body {
    background: #f2f2f2;
    color: #666 !important;
  }

  #lunbo {
  }

  .mui-slider-item img {
    width: 100%;
  }

  #shenban {
    background: #fff;
    margin-bottom: 30px;
  }

  #shenbanTop {
    width: 100%;
    height: 80px;
    padding: 0 32px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    vertical-align: middle;
  }

  #shenbanTop span, a {
    font-size: 32px;
  }

  #shenbanMain {
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
  }

  #shenbanMain > div {
    width: 25%;
    padding: 20px 10px 20px 10px;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
  }

  #shenbanMain > div div:first-child {
    padding-bottom: 20px;
    text-align: center;
  }

  #shenbanMain > div img {
    width: 80px;
  }

  #fenleiTop {
    width: 100%;
    height: 80px;
    padding: 0 32px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    position: relative;
  }

  #fenleiTop input {
    width: 320px;
    height: 60px;
    margin-bottom: 0;
    padding-right: 70px;
    font-size: 32px;
  }

  #fenleiTop span {
    font-size: 32px;
  }

  #fenleiTop img {
    position: absolute;
    width: 40px;
    right: 50px;
    top: 17px;
  }

  #fenleiNav {
    height: 84px;
    width: 100%;
    background-color: #f2f2f2;
    box-sizing: border-box;
    padding: 0 32px;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
    justify-content: space-around;
  }

  #fenleiNav div {
    width: 30%;
    text-align: center;
    font-size: 32px;
    height: 84px;
    line-height: 86px;
    border-bottom: 4px solid #f2f2f2;
  }

  #fenleiNav div.active {
    font-size: 32px;
    color: #419cf9;
    border-bottom: 4px solid #419cf9;
  }

  .accordion {
    width: 100%;
    height: 90px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
    align-items: center;
  }

  .accordion div:first-child {
    width: 100px;
    height: 100%;
    background: url("./../../../static/img/politicalAudit/Group10.png") no-repeat;
    background-size: 36px;
    background-position: center;
  }

  .accordion div:nth-child(2) {
    width: 580px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 30px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
  }

  .accordion div:last-child {
    color: #ddd;
    width: 60px;
    font-size: 40px;
  }

  .accordion div img {
    height: 40px;
  }

  #fenleiMain2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #fff;
    padding: 20px;
  }

  #fenleiMain2:after {
    content: "";
    flex: auto;
  }

  #fenleiMain2 > div {
    width: 25%;
    padding: 10px;
    font-size: 32px;
    text-align: center;
  }

  #fenleiMain2 > div img {
    width: 88px;
  }

  #fenleiMain2 > div div:first-child {
    text-align: center;
    padding-bottom: 20px;
  }

  #fenleiMain2 > div div:last-child {
    width: 100%;
    font-size: 30px;
  }

  /*加的溢出滑动div*/
  /*.overf{
      width:100%;
      height:800px;
      overflow:auto;
  }*/
  .c26 {
    font-size: 26px;
  }
</style>
