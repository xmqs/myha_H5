<template>
  <div>
    <div class="searchList">
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <a href="https://m.amap.com/navigation/index">
        <form action="javascript:return true;" method="post">
          <div type="search" id="input" class="search">
            请输入搜索内容
          </div>
        </form>
      </a>
    </div>
    <div class="wall">
      <div class="scroll">
        <div class="cell" v-for="item in busList">
          <div class="name-line">
            <div class="name-icon">
              <img src="./../../../static/img/bus/bus.png" alt="">
              <div class="name">{{item.name}}</div>
            </div>
            <div class="distance">
              {{item.distance}}米
            </div>
          </div>
          <div class="address"><span v-for="i in item.address.split(';')"  @click="toDetail(i)">{{i}}&nbsp;&nbsp;</span></div>
        </div>
        <div class="cell" v-for="item in subList" @click="toDetail('地铁'+item.address)">
          <div class="name-line">
            <div class="name-icon">
              <img src="./../../../static/img/bus/sub.png" alt="">
              <div class="name">{{item.name}}</div>
            </div>
            <div class="distance">
              {{item.distance}}米
            </div>
          </div>
          <div class="address">{{item.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
      name: "index",
      data(){
          return{
            position:[118.889242,32.08895],
            searchKey:'',
            subList:[],
            busList:[]
          }
      },
      mounted(){

        let url = 'https://webapi.amap.com/maps?v=1.4.7&key=ec3bd89bc62edfe8928454dcbab04de4&plugin=AMap.Transfer,AMap.Autocomplete,AMap.PlaceSearch,AMap.Driving,AMap.Geolocation&callback=onLoad';
        let jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);

        window.onLoad  = ()=>{
          axios.get('https://restapi.amap.com/v3/place/around?key=c34482d0838eb0252c7033f73b84e957&location=118.889242,32.08895&types=150700&radius=1000').then(res=>{
            this.busList = res.data.pois
          })
          axios.get('https://restapi.amap.com/v3/place/around?key=c34482d0838eb0252c7033f73b84e957&location=118.889242,32.08895&types=150500&radius=1000').then(res=>{
            this.subList = res.data.pois
          })
        }
      },
      methods:{
        toDetail(address){
          window.location = "https://uri.amap.com/line?name="+address+"&city=025&src=mypage&callnative=0";
        }
      }
    }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    height: 88px;
    width: 100%;
    background-color: #EFEFF4;
    padding-top: 14px;
    box-sizing: border-box;
    z-index: 999;
  }

  .search {
    width: 686px;
    height: 60px;
    border-radius: 10px;
    background: #fff url("./../../../static/img/hotline/searchicon.png") no-repeat;
    background-size: 30px;
    background-position: 20px center;
    margin: 0 auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    border: 0;
    outline: 0;
    box-sizing: border-box;
    padding-left: 60px;
  }

  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  .wall {
    width: 100%;
    padding-top:88px;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
    padding: 0 32px;
  }
  .cell{
    border-bottom: 1px solid #eee;
    padding: 8px 0;
  }
  .name-line{
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
  }
  .name-icon{
    display: flex;
    height: 80px;
    align-items: center;
  }
  .name-icon img{
    width: 60px;
    height: 60px;
    border-radius: 6px;
    margin-right: 16px;
  }
  .name{
    font-size: 30px;
    color: #333;
  }
  .distance{
    font-size: 28px;
    color: #999;
  }
  .address{
    font-size: 28px;
    color: #0d9bf2;
  }
</style>
