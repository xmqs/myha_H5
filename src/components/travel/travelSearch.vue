<template>
  <div>
    <div class="top">
      <input type="text" placeholder="搜索景点/酒店/美食等" v-model="searchKey" v-on:keyup.13="search()"/>
      <div class="s1" @click="removeKey">取消</div>
      <div class="search"><img src="../../../static/img/travel/Group 22@3x.png" alt=""/></div>
    </div>
    <!--搜搜历史和热门搜索-->
    <div v-show="!haveSearch">
      <div class="history">
        <div class="h1">
          <div>历史搜索</div>
          <img src="../../../static/img/travel/Group 13@2x.png" alt="" @click="delHistory"/>
        </div>
        <div class="h2">
          <div v-for="item in oldList" @click="clickSearch(item.searchKey)">{{item.searchKey}}</div>
        </div>
      </div>
      <div class="hot">
        <div>热门搜索</div>
        <div class="h2">
          <div v-for="item in hotList" @click="clickSearch(item.sourceName)">{{item.sourceName}}</div>
        </div>
      </div>
    </div>
    <div v-show="haveSearch" class="searchList">
      <div class="header">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :class="{'active':page==1}" @click="changePage(1)">
              美食
            </div>
            <div class="swiper-slide" :class="{'active':page==2}" @click="changePage(2)">
              景区景点
            </div>
            <div class="swiper-slide" :class="{'active':page==3}" @click="changePage(3)">
              酒店
            </div>
            <div class="swiper-slide" :class="{'active':page==4}" @click="changePage(4)">
              乡村旅游点
            </div>
            <div class="swiper-slide" :class="{'active':page==5}" @click="changePage(5)">
              海安特产
            </div>
            <div class="swiper-slide" :class="{'active':page==6}" @click="changePage(6)">
              旅游路线
            </div>
            <div class="swiper-slide" :class="{'active':page==7}" @click="changePage(7)">
              旅行社
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="haveSearch" class="ListMain">
      <div v-show="page==1" id="page1">
        <div class="showNo" v-show="list1.length==0">
          <img src="./../../../static/img/hotline/nodata.png" alt="" class="noData">
          <p>暂无搜索结果</p>
        </div>
        <div v-for="item in list1" @click="toDetail(item.properties.pageUrl)" class="page8">
          <div><img :src="item.properties.cover" alt=""/></div>
          <div class="f1">{{item.sourceLabel}}</div>
        </div>
      </div>
      <div v-show="page==2" class="page2">
        <div class="showNo" v-show="list2.length==0">
          <img src="./../../../static/img/hotline/nodata.png" alt="" class="noData">
          <p>暂无搜索结果</p>
        </div>
        <div class="List" v-for="item in list2">
          <div class="List_left" @click="toDetail(item.properties.pageUrl)"><img :src="item.properties.cover" alt=""
                                                                                 class="foodImg"/></div>
          <div class="List_right">
            <div @click="toDetail(item.properties.pageUrl)">{{item.sourceLabel}}</div>
            <div class="icon" @click="toDetail(item.properties.pageUrl)">{{item.properties.signpost}}</div>
            <div class="l2" @click="toDetail(item.properties.pageUrl)">{{item.properties.remark}}</div>
            <div class="l3">
              <img src="../../../static/img/travel/Group 3@2x.png" alt=""
                   @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)"/>
              <div @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">
                {{item.properties.address}}
              </div>
            </div>
            <div class="l3">
              <img src="../../../static/img/travel/Group 14@2x.png" alt=""/>
              <div>
                <a class="phone" :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a></div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="page==3" class="page2">
        <div class="showNo" v-show="list3.length==0">
          <img src="./../../../static/img/hotline/nodata.png" alt="" class="noData">
          <p>暂无搜索结果</p>
        </div>
        <div class="List" v-for="item in list3">
          <div class="List_left" @click="toDetail(item.properties.pageUrl)"><img :src="item.properties.cover" alt=""
                                                                                 class="foodImg"/></div>
          <div class="List_right">
            <div @click="toDetail(item.properties.pageUrl)">{{item.sourceLabel}}</div>
            <div class="icon" @click="toDetail(item.properties.pageUrl)">{{item.properties.signpost}}</div>
            <div class="l2" @click="toDetail(item.properties.pageUrl)">{{item.properties.remark}}</div>
            <div class="l3">
              <img src="../../../static/img/travel/Group 3@2x.png" alt=""
                   @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)"/>
              <div @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">
                {{item.properties.address}}
              </div>
            </div>
            <div class="l3">
              <img src="../../../static/img/travel/Group 14@2x.png" alt=""/>
              <div>
                <a class="phone" :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a></div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="page==4" class="page2">
        <div class="showNo" v-show="list4.length==0">
          <img src="./../../../static/img/hotline/nodata.png" alt="" class="noData">
          <p>暂无搜索结果</p>
        </div>
        <div class="List" v-for="item in list4">
          <div class="List_left" @click="toDetail(item.properties.pageUrl)"><img :src="item.properties.cover" alt=""
                                                                                 class="foodImg"/></div>
          <div class="List_right">
            <div @click="toDetail(item.properties.pageUrl)">{{item.sourceLabel}}</div>
            <div class="icon" @click="toDetail(item.properties.pageUrl)">{{item.properties.signpost}}</div>
            <div class="l2" @click="toDetail(item.properties.pageUrl)">{{item.properties.remark}}</div>
            <div class="l3">
              <img src="../../../static/img/travel/Group 3@2x.png" alt=""
                   @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)"/>
              <div @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">
                {{item.properties.address}}
              </div>
            </div>
            <div class="l3">
              <img src="../../../static/img/travel/Group 14@2x.png" alt=""/>
              <div>
                <a class="phone" :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a></div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="page==5" class="page4">
        <div class="showNo" v-show="list5.length==0">
          <img src="./../../../static/img/hotline/nodata.png" alt="" class="noData">
          <p>暂无搜索结果</p>
        </div>
        <div class="List" @click="toDetail(item.properties.pageUrl)" v-for="item in list5">
          <div class="List_left"><img :src="item.properties.cover" alt="" class="foodImg"/></div>
          <div class="List_right">
            <div>{{item.sourceLabel}}</div>
            <div class="l1">
              <span class="icon">海安特产</span>
            </div>
            <div class="l2">{{item.properties.remark}}</div>
          </div>
        </div>
      </div>
      <div v-show="page==6" class="page4">
        <div class="showNo" v-show="list6.length==0">
          <img src="./../../../static/img/hotline/nodata.png" alt="" class="noData">
          <p>暂无搜索结果</p>
        </div>
        <div class="List" @click="toDetail(item.properties.pageUrl)" v-for="item in list6">
          <div class="List_left"><img :src="item.properties.cover" alt="" class="foodImg"/></div>
          <div class="List_right">
            <div>{{item.sourceLabel}}</div>
            <div class="l1">
              <span class="icon">旅游路线</span>
            </div>
            <div class="l2">{{item.properties.remark}}</div>
          </div>
        </div>
      </div>
      <div v-show="page==7" class="page4">
        <div class="showNo" v-show="list7.length==0">
          <img src="./../../../static/img/hotline/nodata.png" alt="" class="noData">
          <p>暂无搜索结果</p>
        </div>
        <div class="page7" v-for="item in list7">
          <div><img src="../../../static/img/travel/Group2@2x.png" alt=""/></div>
          <div>
            <div class="t1">{{item.sourceLabel}}</div>
            <div class="t2" @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">
              地址：{{item.properties.dz}}
            </div>
            <div class="t2">联系电话：
              <span v-if="item.properties.lxdh=='-'">{{item.properties.lxdh}}</span>
              <a v-else :href="'tel:'+item.properties.lxdh">{{item.properties.lxdh}}</a>
            </div>
            <div class="t2">负责人：{{item.properties.fzr}}</div>
            <div class="t2">手机号：
              <a :href="'tel:'+item.properties.sjhm">{{item.properties.sjhm}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapGetters} from 'vuex'
  import axios from "axios"

  export default {
    data() {
      return {
        searchKey: "",
        oldList: [],
        hotList: [],
        list: [],
        haveSearch: false,
        swiper: {},
        page: "1",
        list1: [],
        list2: [],
        list3: [],
        list4: [],
        list5: [],
        list6: [],
        list7: []
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
    mounted() {
      axios.get("/myha-server/travel/popular.do").then(res => {
        this.hotList = res.data.data;
      })
      axios.post('/myha-server/travel/history.do', {
        "userId": this.getUserId
      }).then(res => {
        this.oldList = res.data.data;
      })

      this.swiper = new Swiper('.swiper-container', {
        loop: false,
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
      })

    },
    methods: {
      changePage(n) {
        this.page = n;
      },
      removeKey() {
        if(!this.haveSearch){
          this.$router.go(-1);
        }
        this.page = 1;
        this.searchKey = "";
        this.haveSearch = false;
      },
      search() {
        if (this.searchKey == '') {
          return
        }
        axios.post("/myha-server/travel/search.do", {
          "searchKey": this.searchKey,
          "userId": this.getUserId
        }).then(res => {
          this.haveSearch = true;
          this.list1 = res.data.data.array1;
          this.list2 = res.data.data.array2;
          this.list3 = res.data.data.array3;
          this.list4 = res.data.data.array4;
          this.list5 = res.data.data.array5;
          this.list6 = res.data.data.array6;
          this.list7 = res.data.data.array7;

          axios.post('/myha-server/travel/history.do', {
            "userId": this.getUserId
          }).then(res => {
            this.oldList = res.data.data;
          })
        })
      },
      toDetail(url) {
        let u = navigator.userAgent;
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          window.location.href = url;
        }

        if (isiOS) {
          window.location.href = url + "?hanNewH5";
        }
      },
      toMap(name, lat, lon) {
        if (lat == "暂无" || lat == "") {
          return;
        }
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          if (sessionStorage.getItem("haveAmap") == "false") {
            window.location.href = 'http://daohang.amap.com/index.php';
          } else {
            window.location.href = 'androidamap://navi?sourceApplication=amap&poiname=' + name + '&lat=' + lat + '&lon=' + lon + '&dev=1&style=2';
          }
        }
        if (isiOS) {
          window.location = 'iosamap://navi?sourceApplication=amap&poiname=' + name + '&lat=' + lat + '&lon=' + lon + '&dev=1&style=2';
        }

      },
      clickSearch(key) {
        this.searchKey = key;
        axios.post("/myha-server/travel/search.do", {
          "searchKey": this.searchKey,
          "userId": this.getUserId
        }).then(res => {
          this.haveSearch = true;
          this.list1 = res.data.data.array1;
          this.list2 = res.data.data.array2;
          this.list3 = res.data.data.array3;
          this.list4 = res.data.data.array4;
          this.list5 = res.data.data.array5;
          this.list6 = res.data.data.array6;
          this.list7 = res.data.data.array7;
        })
      },
      delHistory() {
        let vue = this;
        mui.confirm('是否删除历史记录', '提示', function (res) {
          if (res.index == 1) {
            axios.post("/myha-server/travel/delHistory.do", {
              "userId": vue.getUserId
            }).then(res => {
              if (res.data.result == 1) {
                axios.post('/myha-server/travel/history.do', {
                  "userId": vue.getUserId
                }).then(res => {
                  vue.oldList = res.data.data;
                })
              }
            })
          }
        })
      }
    }
  }
</script>
<style scoped>
  .top {
    position: fixed;
    top: 0;
    width: 100%;
    height: 88px;
    background: rgba(245, 245, 245, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 29px 14px 26px;
  }

  .top input {
    width: 610px;
    height: 62px;
    margin-bottom: 0;
    border: none;
    font-size: 26px;
    padding-left: 70px;

  }

  .search {
    position: absolute;
    left: 46px;
    top: 30px;
  }

  .search img {
    width: 26px;
    margin-right: 6px;
  }

  .s1 {
    font-size: 28px;
    font-weight: 400;
    color: rgba(26, 130, 226, 1);
    line-height: 40px;
  }

  .history {
    padding-top: 88px;
  }

  .searchList {
    padding-top: 88px;
  }

  .h1 {
    display: flex;
    justify-content: space-between;
    padding: 26px 40px 20px 28px;
  }

  .h1 > div, .hot > div:first-child {
    font-size: 26px;
    color: rgba(51, 51, 51, 1);
    line-height: 37px;
  }

  .hot > div:first-child {
    padding: 20px 40px 20px 28px;
  }

  .h1 img {
    width: 21px;
    height: 22px;
  }

  .h2 {
    padding: 0 31px 0 31px;
    flex-wrap: wrap;
  }

  .h2 > div {
    display: inline-block;
    padding: 15px 21px;
    background: rgba(245, 245, 245, 1);
    border-radius: 4px;
    margin-bottom: 20px;
    font-size: 22px;
    color: rgba(102, 102, 102, 1);
    line-height: 30px;
    margin-right: 12px;
  }

  .h2:after {
    content: "";
    flex: auto;
  }

  .popup {
    padding: 88px 30px 0 30px;
  }

  .popup > div {
    width: 690px;
    height: 88px;
    line-height: 88px;
    font-size: 30px;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1px solid #eee;
  }

  .swiper-slide {
    width: 200px;
    height: 78px;
    border-bottom: 4px solid #fff;
    font-size: 26px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: center;
    line-height: 78px;
  }

  .header {
    position: fixed;
    top: 88px;
    height: 80px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 999;
    border-bottom: 1px solid #eee;
  }

  .active {
    color: #1a82e2;
    border-bottom: 4px solid #1a82e2;
  }

  .ListMain {
    padding-top: 80px;
  }

  #page1 {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }


  .page8 {
    width: 345px;
    height: 426px;
    border-radius: 8px;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 1);
  }

  .page8 img {
    width: 345px;
    height: 348px;
  }

  .page8 .f1 {
    width: 100%;
    height: 78px;
    font-size: 30px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 78px;
    padding-left: 25px;

  }

  .page7 {
    float: left;
    width: 100%;
    min-height: 240px;
    padding: 29px 26px;
    border-bottom: 1px solid #eee;
  }

  .page7 > div {
    float: left;
  }

  .page7 img {
    width: 72px;
  }

  .page7 > div:first-child {
    width: 15%;
    text-align: center;
  }

  .page7 > div:last-child {
    width: 85%;
    min-height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .page7 .t1 {
    font-size: 30px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 30px;
  }

  .page7 .t2 {
    font-size: 24px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 28px;
  }

  .page7 .t2 a {
    font-size: 24px;
  }



  .page2{
    padding:0 46px 0 26px;
  }
  .page2 .List{
    width:100%;
    padding:24px 0 10px 0;
    min-height:257px;
    border-bottom: 1px solid #eee;
    display: flex;
  }
  .page2 .List_left{
    float: left;
    width:198px;
    height:198px;
    border:1px solid #eee;
    margin-right:24px;
  }
  .page2 .List_right{
    width:456px;
    min-height: 198px;
    float: right;
  }
  .page2 .List_right>div{
    margin-bottom: 16px;
  }
  .page2 .List_right div:first-child{
    font-size:30px;
    color:rgba(51,51,51,1);
    line-height:30px;
    /*padding-bottom: 16px;*/
  }
  /*.List_right .l1{
        padding-bottom: 16px;
    }*/
  .page2 .List_right .icon{
    display: inline-block;
    border-radius:4px;
    border:1px solid rgba(255,170,0,1);
    font-size:20px;
    color:rgba(255,170,0,1);
    padding:5px 10px;

  }
  .page2 .List_right .l2{
    font-size:24px;
    color:rgba(153,153,153,1);
    line-height:28px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    white-space: nowrap;
    text-align: justify;
    /*padding-bottom: 12px;*/
    text-overflow: ellipsis;
  }
  .page2 .List_right .l3{
    display: flex;
  }
  .page2 .l3 div{
    font-size:24px;
    font-weight:500;
    color:rgba(153,153,153,1);
    line-height:33px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
  }
  .page2 .phone{
    font-size:24px;
  }
  .page2 .l3 img{
    width:30px;
    height:30px;
    margin-right:10px;
  }
  .page2 .foodImg{
    width: 198px;
    height: 198px;
  }


  .page4 {
    padding:0 46px 0 26px;
  }
  .page4 .List{
    width:100%;
    padding:22px 0 22px 0;
    min-height:216px;
    float: left;
    border-bottom: 1px solid #eee;
  }
  .page4 .List_left{
    width:172px;
    height:172px;
    float: left;
    border:1px solid #eee;
    margin-right:26px;
  }
  .page4 .List_right{
    width:480px;
    min-height: 172px;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .page4 .List_right div:first-child{
    font-size:30px;
    color:rgba(51,51,51,1);
    line-height:30px;
    padding-bottom: 20px;
  }
  .page4 .List_right .l1{
    padding-bottom: 18px;
  }
  .page4 .List_right .icon{
    border-radius:4px;
    border:1px solid rgba(255,170,0,1);
    font-size:20px;
    color:rgba(255,170,0,1);
    padding:5px 10px;
  }
  .page4 .List_right .l2{
    font-size:24px;
    color:rgba(153,153,153,1);
    line-height:33px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /*! autoprefixer: off */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }
  .page4 .foodImg{
    width: 172px;
    height: 172px;
  }

  .noData{
    width: 260px;
  }
  .showNo{
    text-align: center;
    padding-top: 260px;
  }
  .showNo p{
    margin-top: 36px;
    font-size: 28px;
    color: #666;
  }
  #page1 .showNo{
    width: 100%;
    text-align: center;
    padding-top: 240px;
    margin-left: -10px;
  }
</style>
