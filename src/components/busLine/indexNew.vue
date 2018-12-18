<template>
  <div>
    <div class="headerSearch">
      <div class="input">
        <img src="./../../../static/img/hotline/Fill1.png" alt="" class="searchIcon"><div>输入公交线路或站点名称</div>
      </div>
    </div>
    <div id="container"></div>
    <div class="busContent">
      <div class="busPoint">
        邓庄站
      </div>
      <div class="busLine">
        <div class="line">
          123123
        </div>
        <div class="line">
          123123
        </div>
        <div class="line">
          123123
        </div>
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
        map: {},
        list: [],
        userPosition: [],
        userMark: {},
        t1: {},
        isshow: false,
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

      moveLocation() {
        if (sessionStorage.getItem("userPosition")) {
          let vue = this;
          vue.userPosition = sessionStorage.getItem("userPosition").split(",");
          vue.map.remove(vue.userMark);

          vue.userMark = new AMap.Marker({
            map: vue.map,
            position: vue.userPosition,
          });

          this.map.setCenter(vue.userPosition);
        }
      },

    }
    ,
    mounted() {
      let vue = this;
      if (sessionStorage.getItem("userPosition")) {
        vue.userPosition = sessionStorage.getItem("userPosition").split(",");
        this.map = new AMap.Map('container', {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 16, //初始化地图层级
          //center: [120.466456, 32.530996],
          center: vue.userPosition,
        });
        this.moveLocation();
      } else {
        this.map = new AMap.Map('container', {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 16, //初始化地图层级
          center: [120.466456, 32.530996],
        });

        let time = setInterval(() => {
          if (sessionStorage.getItem("userPosition")) {
            clearInterval(time);
            this.moveLocation();
          }
        }, 200);

        setTimeout(function () {
          clearInterval(time);
        }, 5000);
      }
    }
  }
</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .info-middle img {
    float: left;
    margin-right: 12px;
  }

  .position {
    position: fixed;
    z-index: 90;
    left: 32px;
    bottom: 68px;
    width: 72px;
    height: 72px;
  }

  .headerSearch{
    padding: 24px 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 50;
    background: #3184f0;
  }
  .input{
    background: #fff;
    height: 62px;
    width: 100%;
    border-radius: 6px;
    font-size: 26px;
    color: #3184f0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .searchIcon{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .busContent{
    background: #fff;
    height: 430px;
    position: fixed;
    width:100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;
  }

  .busPoint{
    height: 89px;
    border-bottom: 1px solid #ebebeb;
    padding-left: 100px;
    padding-top: 16px;
    font-size: 30px;
    color: #3184f0;
    display: flex;
    align-items: center;
  }
  .busLine{
    height: 340px;
    overflow: scroll;
  }
  .line{
    height: 174px;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
  }
</style>
