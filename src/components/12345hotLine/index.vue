<template>
  <div class="main">
    <div class="header">
    	<div class="bgimg">
    		<!--<div>12345海安政务热线</div>
    		<div>一心服务 专心聆听</div>-->
    	</div>
      <div class="consult">
        <div class="btncontent">
          <div class="btncell" @click="toNew">
            提交诉求
          </div>
          <div class="btncell" @click="toList">
            我的诉求
          </div>
        </div>
      </div>
    </div>
    <div class="tabtitle news" id="news">
      <span class="newsTitle">热点知识库</span>
      <span class="more" @click="toNewsList('12345_zuixinzixun')">更多</span></div>
    <li class="newslist" v-for="item in list1" @click="toDetail(item)">
      <div class="title">{{item.title}}</div>
    </li>
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
        this.$router.push("/hotLine45/listNew");
      },
      toDetail(item){
        this.$router.push({name:'newsDetail',params:{content:item}});
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
        "getIsLogin",
      ])
    },
    mounted(){
      axios.post("/myha-server/12345/count.do",{
        "userId":this.getUserId
      }).then(res=>{
        this.number = res.data.data.appealCount;
      })

      axios.post("/third-server/busiform/findHaRepository.do",{
        "pageNo":"1",
        "pageSize":"8",
        "params":{
          "title":""
        }
      }).then(res=>{
        this.list1 = res.data.data.haRepositoryList;
      })

      let time = setInterval(()=>{
        if(this.getIsLogin!==""){
          clearInterval(time);
          if(this.getIsLogin=="0"||this.getIsLogin==0){
            return
          }else{
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
        }
      }, 200);
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
    margin-top: -50px;
    padding: 40px 20px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;

  }

  .btncell {
    font-size: 32px;
    text-align: center;
    width: 300px;
    height: 154px;
    border-radius: 6px;
    line-height: 154px;
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
    background:#fff;
  }

  .tabtitle {
    padding: 0 30px 0 30px;
    margin-top: 20px;
    font-size: 32px;
    line-height: 80px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
  }

  .more {
    float: right;
    color: #666;
    font-size: 32px;
    padding-right: 36px;
    background: url("./../../../static/img/hotline/rightMore.png") right no-repeat;
    background-size: 20px;
  }

  .newslist {
    padding: 26px 30px;
    font-size: 32px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #fff;
    border-bottom: 1px solid #efeff4;
  }

  .title {
    width: 100%;
    font-size: 30px;
    color: #333;
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
  /*头部背景调整*/
 .bgimg{
  	width:100%;
  	height:313px;
  	background: url('./../../../static/img/hotline/hotline45bg.png') no-repeat;
  	background-size:100%;
  	padding:75px 0 0 60px;
  }
  .bgimg div:first-child{
  	color:#fff;
  	font-weight: bold;
  	font-size:32px;
  	line-height: 70px;
  }
  .bgimg div:last-child{
  	color:#fff;
  	width:276px;
  	height:53px;
  	text-align: center;
  	font-size:28px;
  	line-height: 53px;
  	background: #4871e5;
  }
  .btncontent div:first-child{
  	background: url('./../../../static/img/hotline/22@2x.png') no-repeat;
  	background-size:300px;
  	color:#fff;
  }
  .btncontent div:last-child{
  	background: url('./../../../static/img/hotline/21@2x.png') no-repeat;
  	background-size:300px;
  	color:#fff;
  }

  .newsTitle{
    font-size: 32px;
    padding: 5px 10px;
    border-left: 10px solid #E06F5C;
  }

</style>
