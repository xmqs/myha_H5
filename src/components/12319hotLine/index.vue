<template>
  <div class="main">
    <div class="myList"  @click="toMyList">
      我的随拍
    </div>
    <img src="./../../../static/img/hotline/chrame.png" alt="" class="chrame" @click="toAdd">
    <div class="text">
      市民通过拍照上传，将城市管理中的问题提交至海安市数字化城市管理监督指挥中心，中心将针对市民提出的问题派发给相关职能部门办理，并反馈办理结果。让更多的市民成为文明城市创建的“志愿巡查员”，形成市民广泛参与、相关职能部门齐抓共管的大城市治理格局。
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
    methods:{
      toAdd(){
        this.$router.push('/hotLine19/new')
      },
      toMyList(){
        this.$router.push("/hotLine19/list");
      }
    },
    mounted(){

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
  .main{
    background:#1395EF url("./../../../static/img/hotline/19bg.png") no-repeat;
    background-size: 100%;
    background-position: top;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .chrame{
    width: 376px;
    height: 383px;
    position: fixed;
    top: 371px;
    left: 195px;
  }
  .myList{
    position: fixed;
    right: 15px;
    top: 46px;
    font-size: 22px;
    padding: 8px 36px;
    border-radius: 28px;
    border: 1px solid #fff;
    color: #fff;
  }
  .text{
    color: #fff;
    text-indent:48px;
    font-size: 24px;
    padding: 0 32px;
    padding-top: 760px;
    line-height: 38px;
  }
</style>
