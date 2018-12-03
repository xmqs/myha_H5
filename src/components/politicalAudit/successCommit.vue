<template>
  <div>
    <div class="searchList">
      <div class="step">
        <img src="./../../../static/img/politicalAudit/stepOver.png" alt="">
        <p>基本信息</p>
      </div>
      <div class="step">
        <img src="./../../../static/img/politicalAudit/stepOver.png" alt="">
        <p>电子材料</p>
      </div>
      <div class="step">
        <img src="./../../../static/img/politicalAudit/stepOver.png" alt="">
        <p>纸质材料</p>
      </div>
      <div class="step">
        <img src="./../../../static/img/politicalAudit/stepOver.png" alt="">
        <p>证件领取</p>
      </div>
      <div class="line line1 active"></div>
      <div class="line line2 active"></div>
      <div class="line line3 active"></div>
    </div>

    <div class="wall">
      <img src="./../../../static/img/politicalAudit/1212@3x.png" alt="">
      <p class="p1">您申办的事项已被受理</p>
      <p class="p2">你可以通过<span class="blue" @click="toMyEvent">“我的办事”</span>查看办理进度</p>

    </div>

    <div class="buttonList" @click="goBack">
      返 回
    </div>
  </div>
</template>

<script>
  export default {
    name: "successCommit",
    methods:{
      toMyEvent(){
        this.$router.push("/politicalAudit/myEvent");
      },
      goBack(){
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    border-bottom: 30px solid #f2f2f2;
    height: 180px;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
    display: flex;
    justify-content: center;
    background: #fff;
  }

  .buttonList {
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
    display: flex;
    justify-content: center;
    background: #419cf9;
    color: #fff;
    line-height: 100px;
    font-size: 34px;
  }

  .step {
    flex-grow: 1;
    text-align: center;
    padding-top: 16px;
  }

  .step img {
    width: 44px;
    height: 44px;
    margin-top: 20px;
    margin-bottom: 4px;
  }

  .step p {
    width: 185px;
    text-align: center;
    font-size: 30px;
    color: #0778FB;
  }

  .wall {
    width: 100%;
    text-align: center;
    padding: 360px 32px 100px 32px;
  }
  .wall img{
    width: 200px;
  }
  .p1{
    font-size: 40px;
    margin: 16px 0;
  }
  .p2{
    font-size: 30px;
  }
  .blue{
    font-size: 30px;
    color: #419cf9;
  }
  .line {
    position: absolute;
    width: 25%;
    height: 6px;
    background: #ececec;
    z-index: -1;
  }

  .line1 {
    left: 12.5%;
    top: 54px;
  }

  .line2 {
    left: 37.5%;
    top: 54px;
  }

  .line3 {
    left: 62.5%;
    top: 54px;
  }

  .active {
    background: #0778FB;
  }


</style>
