<template>
  <div class="main">
    <div class="header">
      <img src="./../../../static/img/hotline/hotLint1bg.png" alt="" width="100%">
      <div class="consult">
        <div class="btncontent">
          <div class="btncell" @click="toNew"><img
            src="./../../../static/img/hotline/index1.png"><br> 提交诉求
          </div>
          <div class="btncell" @click="toList"><img
            src="./../../../static/img/hotline/index2.png"><br> 我的诉求
            <div class="myappealnum" style="display: block;">{{number}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabtitle news" id="news"> 最新资讯 <span class="more" @click="toNewsList('12345_zuixinzixun')">更多</span></div>
    <li class="newslist" v-for="item in list1" @click="toDetail(item.url)">
      <div class="title">{{item.sourceLabel}}</div>
      <div class="date">{{ item.updateTime | formatDate }}</div>
    </li>

    <div class="tabtitle news2"> 热点解答 <span class="more" @click="toNewsList('12345_redianjieda')">更多</span></div>
    <li class="newslist" v-for="item in list2" @click="toDetail(item.url)">
      <div class="title">{{item.sourceLabel}}</div>
      <div class="date">{{ item.updateTime | formatDate }}</div>
    </li>
    <div class="tabtitle news3"> 便民服务 </div>
    <div class="tab">
      <div class="tab_line1">
        <div class="tab_item" @click="toPhoneNumber">
          <img src="./../../../static/img/hotline/icon5.png" alt="">常用电话
        </div>
        <!--<div class="tab_item" @click="toNewsList('12345_bianminfuwu')">
          <img src="./../../../static/img/hotline/icon4.png" alt="">便民导航
        </div>-->
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
        list1:[],
        list2:[],
        number:0,
      }
    },
    methods:{
      toPhoneNumber(){
        this.$router.push("/unlockLine");
      },
      toNavigation(){
        this.$router.push("/hotLine45/navigation");
      },
      toNew(){
        this.$router.push("/hotLine45/tip");
      },
      toList(){
        this.$router.push("/hotLine45/list");
      },
      toDetail(url){
        window.location = url;
      },
      toNewsList(key){
        this.$router.push("/newsList/"+key);
      }
    },
    filters:{
      formatDate(val) {
        let date=new Date(val);
        let month = date.getMonth()+1;
        let day = date.getDate();

        return month+"-"+day;
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
    mounted(){
      axios.post("/myha-server/12345/count.do",{
        "userId":this.getUserId
      }).then(res=>{
        this.number = res.data.data.appealCount;
      })

      axios.get("/myha-server/public/catalog/querySource.do?catalogAlias=12345_zuixinzixun&sourceType=03").then(res=>{
        this.list1 = res.data.data;
      })
      axios.get("/myha-server/public/catalog/querySource.do?catalogAlias=12345_redianjieda&sourceType=03").then(res=>{
        this.list2 = res.data.data;
      })
    }
  }
</script>

<style scoped>
  .main {
    background-color: #efeff4;
  }

  .consult {
    width: 100%;
    position: relative;
    z-index: 9;
  }

  .header {
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .btncontent {
    width: calc(100% - 60px);
    background: #fff;
    margin-left: 30px;
    margin-top: -100px;
    padding: 40px 0;
    border-radius: 5px;
    overflow: hidden;
  }

  .btncell {
    width: 50%;
    float: left;
    font-size: 32px;
    text-align: center;
    position: relative;

  }

  .btncell img {
    width: 80px;
    height: 80px;
  }

  .myappealnum {
    display: none;
    position: absolute;
    width: 40px;
    line-height: 40px;
    font-size: 28px;
    text-align: center;
    border-radius: 20px;
    background: #fc5266;
    color: #fff;
    right: 36%;
    top: -3px;
  }

  .news {
    background: url('./../../../static/img/hotline/icon1.png') no-repeat 30px 22px #fff;
    background-size: 40px 40px;
  }

  .news2 {
    background: url('./../../../static/img/hotline/icon2.png') no-repeat 30px 22px #fff;
    background-size: 40px 40px;
  }

  .news3 {
    background: url('./../../../static/img/hotline/icon3.png') no-repeat 30px 22px #fff;
    background-size: 40px 40px;
  }

  .tabtitle {
    padding: 0 30px 0 90px;
    margin-top: 20px;
    font-size: 32px;
    line-height: 80px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
  }

  .more {
    float: right;
    color: #666;
    font-size: 28px;
  }

  .newslist {
    padding: 22px 30px;
    font-size: 32px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #fff;
    border-bottom: 1px solid #efeff4;
  }

  .title {
    width: calc(100% - 120px);
    font-size: 32px;
    color: #666;
    float: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .date {
    width: 100px;
    float: right;
    font-size: 28px;
    text-align: right;
    line-height: 46px;
    color: #999;
  }
  .tab{
    padding: 30px;
    background: #fff;
  }
  .tab_line1{
    display: flex;
    margin-bottom: 40px;
  }
  .tab_line2{
    display: flex;
  }
  .tab_item img{
    width: 60px;
    height: 60px;
    margin:0 20px;
  }
  .tab_item{
    display: flex;
    width: 50%;
    align-items: center;
    font-size: 32px;
  }
</style>
