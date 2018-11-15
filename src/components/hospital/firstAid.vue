<template>
  <div>
    <div id="container">

    </div>
    <div class="tab">
      <div class="phone">当前联系电话：<span class="blue">{{getUserPhone}}</span></div>
      <a href="tel:120">
        <div class="call">
          呼叫120急救
        </div>
      </a>
      <div class="icon">
        <div>
          <img src="./../../../static/img/hostipal/icon1.png" alt="">
          <p style="color: #1e78f2">紧急呼救</p>
        </div>
        <div>
          <a href="http://58.221.196.5:11001/myha-server/s//h/20181109/F8533A4CCC784075ABDBB649168E2A7F.htm">
            <img src="./../../../static/img/hostipal/icon2.png" alt="">
            <p>注意事项</p>
          </a>
        </div>
        <div @click="toUserInfo">
          <img src="./../../../static/img/hostipal/icon3.png" alt="">
          <p>个人信息</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      name: "firstAid",
      data(){
        return{
          map:{},
        }
      },
      methods:{
        toUserInfo(){
          this.$router.push("/hospital/userInfo");
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
        this.map = new AMap.Map('container', {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom:14, //初始化地图层级
          center:[118.886324,32.085925],
        });
      }
    }
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .tab{
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;

    font-size: 30px;

    background: #fff;
  }
  .phone{
    text-align: center;
    line-height: 66px;
    height: 66px;
    border-bottom: 1px solid #eee;
    font-size: 32px;
  }
  .blue{
    color: #18B4FE;
    font-size: 32px;
  }
  .call{
    width: 686px;
    margin-left: 32px;
    border-radius: 10px;
    height: 88px;
    line-height: 88px;
    color: #fff;
    background: #ec793c;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .icon{
    display: flex;
    border-top: 1px solid #eee;
    justify-content: space-between;
    padding: 6px 0 0 0;
  }
  .icon>div{
    flex-grow: 1;
    text-align: center;
  }
  .icon>div img{
    width: 50px;
  }

</style>
