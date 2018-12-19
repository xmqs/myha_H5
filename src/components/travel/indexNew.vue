<template>
  <div class="bg">
    <div class="header_banner"></div>
    <div class="top_box">
      <div class="mui-input-row mui-search header_search" @click="toSearch">
        <input type="search" class="mui-input-clear rel_" placeholder="搜索景点／酒店／美食等">
        <span class="haian_input_speech"></span>
      </div>
      <div class="city_weather_box">
        <ul class="ui-col">
          <li class="ui-col ui-col-50">
            <p class="city_box" id="city_name">海安</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="navigation_box">
      <ul class="line">
        <li class="line-box" @click="toList('3','cyha_hams')">
          <img src="./../../../static/img/travel/1.png" class="box-img"/>
          <p class="nav_title">美食</p>
        </li>
        <li class="line-box" @click="toList('1','cyha_hajd')">
          <img src="./../../../static/img/travel/2.png" class="box-img"/>
          <p class="nav_title">景区景点</p>
        </li>
        <li class="line-box" @click="toList('1','cyha_hazs')">
          <img src="./../../../static/img/travel/3.png" class="box-img"/>
          <p class="nav_title">酒店</p>
        </li>
        <li class="line-box" @click="toList('1','cyha_xcyld')">
          <img src="./../../../static/img/travel/4.png" class="box-img"/>
          <p class="nav_title">乡村旅游点</p>
        </li>
      </ul>
      <ul class="line">
        <li class="line-box" @click="toList('2','cyha_hatc')">
          <img src="./../../../static/img/travel/5.png" class="box-img"/>
          <p class="nav_title">海安特产</p>
        </li>
        <li class="line-box" @click="toList('2','cyha_yllx')">
          <img src="./../../../static/img/travel/6.png" class="box-img"/>
          <p class="nav_title">旅游路线</p>
        </li>
        <li class="line-box" @click="toList('4')">
          <img src="./../../../static/img/travel/7.png" class="box-img"/>
          <p class="nav_title">节庆活动</p>
        </li>
        <li class="line-box" @click="toList('5','cyha_xcyld')">
          <img src="./../../../static/img/travel/8.png" class="box-img"/>
          <p class="nav_title">旅行社</p>
        </li>
      </ul>
      <div class="line2"></div>
    </div>
    <div class="city_interesting_box">
      <h3 class="city_title">城市好玩点</h3>
      <div class="city_tab_box">
        <ul class="city_tab_box_ul">
          <li class="city_tab_box_li" :class="{'tab_active':page==1}" @click="changePage(1)">
            景点
          </li>
          <li class="city_tab_box_li" :class="{'tab_active':page==3}" @click="changePage(3)">
            酒店
          </li>
          <li class="city_tab_box_li" :class="{'tab_active':page==2}" @click="changePage(2)">
            美食
          </li>
          <li class="city_tab_box_li" :class="{'tab_active':page==4}" @click="changePage(4)">
            特产
          </li>
        </ul>
      </div>
      <div class="city_interesting_content" v-show="page==1">
        <div class="interesting_content_card">
          <div v-for="(item,index) in list1" v-show="index<3">
            <div class="img_box">
              <img :src="item.properties.cover" alt="" @click="toDetail(item.properties.pageUrl)"/>
            </div>
            <div class="interesting_content_card_content">

              <div class="interesting_content_card_content_inner">
                <p class="card_title">{{item.sourceLabel}}</p>

                <div class="l3" @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">
                  <img src="../../../static/img/travel/Group 3@2x.png" alt="" />
                  <div>{{item.properties.address}}</div>
                </div>
                <div class="l3">
                  <img src="../../../static/img/travel/Group 14@2x.png" alt="" />
                  <div>
                    <a :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a></div>
                </div>
                <!--<p class="card_content">{{item.properties.remark}}</p>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="city_interesting_content" v-show="page==2">
        <div class="interesting_content_card">
          <div v-for="(item,index) in list2" v-show="index<3"  @click="toDetail(item.url)">
            <div class="img_box">
              <img :src="item.cover" alt=""/>
            </div>
            <div class="interesting_content_card_content">

              <div class="interesting_content_card_content_inner">
                <p class="card_title">{{item.sourceLabel}}</p>

                <!--<div class="l3" @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">
                  <img src="../../../static/img/travel/Group 3@2x.png" alt="" />
                  <div>{{item.properties.address}}</div>
                </div>-->
                <!--<div class="l3">
                  <img src="../../../static/img/travel/Group 14@2x.png" alt="" />
                  <div>
                    <a :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a></div>
                </div>-->
                <p class="card_content">{{item.remark}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="city_interesting_content" v-show="page==3">
        <div class="interesting_content_card">
          <div v-for="(item,index) in list3" v-show="index<3">
            <div class="img_box">
              <img :src="item.properties.cover" alt="" @click="toDetail(item.properties.pageUrl)"/>
            </div>
            <div class="interesting_content_card_content">
              <div class="interesting_content_card_content_inner">
                <p class="card_title">{{item.sourceLabel}}</p>
                <div class="l3" @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">
                  <img src="../../../static/img/travel/Group 3@2x.png" alt="" />
                  <div>{{item.properties.address}}</div>
                </div>
                <div class="l3">
                  <img src="../../../static/img/travel/Group 14@2x.png" alt="" />
                  <div>
                    <a :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a></div>
                </div>
                <!--<p class="card_content">{{item.properties.remark}}</p>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="city_interesting_content" v-show="page==4">
        <div class="interesting_content_card">
          <div v-for="(item,index) in list4" v-show="index<3"  @click="toDetail(item.properties.pageUrl)">
            <div class="img_box">
              <img :src="item.properties.cover" alt=""/>
            </div>
            <div class="interesting_content_card_content">

              <div class="interesting_content_card_content_inner">
                <p class="card_title">{{item.sourceLabel}}</p>

                <!--<div class="l3" @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">
                  <img src="../../../static/img/travel/Group 3@2x.png" alt="" />
                  <div>{{item.properties.address}}</div>
                </div>-->
                <!--<div class="l3">
                  <img src="../../../static/img/travel/Group 14@2x.png" alt="" />
                  <div>
                    <a :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a></div>
                </div>-->
                <p class="card_content">{{item.properties.remark}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "indexNew",
    data(){
      return{
        page:1,
        list1:[],
        list2:[],
        list3:[],
        list4:[]
      }
    },
    mounted(){
      axios.post("/myha-server/public/source/props/queryExt.do",{
        "catalogAlias" : "cyha_hajd"
      }).then(res=>{
        this.list1 = res.data.data;
      })
      axios.post("/myha-server/public/source/props/queryExt.do",{
        "catalogAlias" : "cyha_hazs"
      }).then(res=>{
        this.list3 = res.data.data;
      })
      axios.get("/myha-server/public/catalog/querySource.do?catalogAlias=cyha_hams&sourceType=03").then(res=>{
        this.list2 = res.data.data;
      })
      axios.post("/myha-server/public/source/props/queryExt.do",{
        "catalogAlias" : "cyha_hatc"
      }).then(res=>{
        this.list4 = res.data.data;
      })
    },
    methods:{
      toDetail(url){
        window.location = url;
      },
      toMap(name,lat,lon){
        if(lat=="暂无"||lat==""){
          return;
        }
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          if(sessionStorage.getItem("haveAmap") == "false"){
            window.location.href = 'http://daohang.amap.com/index.php';
          }else{
            window.location.href = 'androidamap://navi?sourceApplication=amap&poiname='+name+'&lat='+lat+'&lon='+lon+'&dev=1&style=2';
          }
        }
        if (isiOS) {
          window.location = 'iosamap://navi?sourceApplication=amap&poiname='+name+'&lat='+lat+'&lon='+lon+'&dev=1&style=2';
        }

      },
      changePage(n){
        this.page = n;
      },
      toList(type,key){
        if(type == 3){
          this.$router.push("/travel/foodDetails")
        }
        if(type == 1){
          this.$router.push("/travel/sceneryList/"+key);
        }
        if(type == 2){
          this.$router.push("/travel/foodList/"+key);
        }
        if(type == 4){
          window.location = "https://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA%3D%3D&hid=9&sn=2913af3b439369347287213332224ac4&scene=18";
        }
        if(type == 5){
          this.$router.push("/travel/travelList");
        }
      },
      toSearch(){
        this.$router.push("/travel/travelSearch");
      }
    }
  }
</script>

<style scoped>
  .header_banner {
    height: 14rem;
    width: 100%;
    overflow: hidden;
    background-size: 100% 100%;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
  }

  .bg {
    background: url("./../../../static/img/travel/banner4.png") no-repeat;
    background-size: 100%;
    background-position: top;
    background-attachment: fixed;
  }

  .top_box {
    height: 280px;
    width: 100%;
    overflow: hidden;
    z-index: 15;
    position: relative;
    top: 0;
    left: 0;
    background: transparent;
  }

  .city_weather_box {
    width: 100%;
    overflow: hidden;
    position: absolute;
    padding: 0 0 26px 26px;
    left: 0;
    bottom: 0;
  }

  .city_box {
    font-size: 44px;
    color: #FFFFFF;
    text-align: left;
  }


  .header_search {
    position: absolute;
    left: 26px;
    top: 26px;
    right: 26px;
    z-index: 30;
  }

  input[type=search] {
    height: 62px;
    line-height: 62px;
    text-align: left;
    font-size: 26px;
    background: #fff url("./../../../static/img/hotline/Fill1.png") no-repeat;
    background-size: 36px;
    background-position: 16px 13px;
    padding: 0 0 0 62px;
    margin-bottom: 0;
  }

  .mui-search .mui-placeholder {
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: left;
    padding-left: 1.5rem;
    font-size: 1.3rem;

  }

  .mui-search.mui-active:before {
    margin-top: -2.2rem;
  }

  .haian_input_speech {
    display: block;
    position: absolute;
    right: 1rem;
    top: 0.8rem;
    width: 1.2rem;
    height: 2rem;
    background-size: 100% 100%;
    z-index: 50;

  }

  /****图标导航**/
  .navigation_box {

    width: 100%;
    padding:40px 0;
    border-radius: 16px 16px 0 0;
    background: #ffffff;
    position: relative;
    z-index: 15;
    overflow: hidden;
  }
  .line2{
    width: 686px;
    margin-left: 32px;
    border-bottom: 1px solid #eee;
  }


  /*********城市好玩点**********/
  .city_interesting_box {
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
    position: relative;
    z-index: 15;
  }

  .city_interesting_title {
    padding: 0 1.3rem;
    color: #333333;
    font-size: 2.1rem;
    line-height: 3rem;
    font-weight: bold;
  }

  .city_tab_box {
    padding: 26px;
    overflow: hidden;

  }

  .tab_title_box {
    width: 6rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: 1.5rem;
    color: #333333;
    background: #F5F5F5;
  }



  .city_interesting_content {
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
  }

  .interesting_content_card {
    font-size: 1.4rem;
    position: relative;
    overflow: hidden;
    margin: 0;
    background-color: #fff;
  }

  .img_box {
    width: 100%;
    height: 318px;
    overflow: hidden;
  }
  .img_box img{
    width: 100%;
    height: 318px;
  }

  .interesting_content_card_content {
    font-size: 1.4rem;
    position: relative;
  }

  .interesting_content_card_content_inner {
    position: relative;
    padding: 26px;
  }

  .card_title {
    color: #333333;
    font-size:30px;
  }

  .card_content {
    color: #999999;
    font-size:24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /*! autoprefixer: off */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }
  .line{
    display: flex;
    justify-content: space-between;
  }

  .line-box{
    width: 100%;
    flex-grow: 1;
    text-align: center;
    height: 172px;
  }
  .nav_title {
    margin-top: 10px;
    font-size:24px;
  }

  .box-img{
    width: 88px;
    height: 88px;
  }

  .city_title{
    padding:0 26px 6px 26px;
    font-size:42px;
    font-weight:500;
    display: inline-block;
    background: url("./../../../static/img/travel/line_yellow.png") no-repeat;
    background-position: bottom;
    background-size: 70px;
  }

  .city_tab_box_li{
    display: inline-block;
    margin-right: 26px;
    height: 62px;
    width: 120px;
    border-radius: 6px;
    background: #F5F5F5;
    text-align: center;
    font-size:30px;
    line-height: 62px;
  }

  .tab_active {
    background: url("./../../../static/img/travel/tab_active.png") no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }

  .l3{
    display: flex;
    margin-top: 8px;
  }
  .l3 div{
    display: inline-block;
    font-size:24px;
    font-weight:500;
    color:rgba(153,153,153,1);
    line-height:33px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
  }
  .l3 img{
    width:30px;
    height:30px;
    margin-right:10px;
  }
  .l3 a{
    font-size:24px;
    font-weight:500;
    color:rgba(153,153,153,1);
    line-height:33px;
  }
</style>
