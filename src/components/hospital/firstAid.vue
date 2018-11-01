<template>
  <div>
    <div id="container">

    </div>
    <div class="tab">
      <div class="phone">当前联系电话：<span class="blue">15905600684</span></div>
      <a href="tel:120">
        <div class="call">
          呼叫120急救
        </div>
      </a>
      <div class="icon">
        <div>
          <img src="./../../../static/img/publicIcon/育苗通.png" alt="">
          <p>紧急呼救</p>
        </div>
        <div>
          <img src="./../../../static/img/publicIcon/驾考模拟考试.png" alt="">
          <p>注意事项</p>
        </div>
        <div @click="toUserInfo">
          <img src="./../../../static/img/publicIcon/有线电视.png" alt="">
          <p>个人信息</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "firstAid",
      data(){
        return{
          map:{}
        }
      },
      methods:{
        toUserInfo(){
          this.$router.push("/hospital/firstAid");
        }
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
  }
  .blue{
    color: #18B4FE;
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
