<template>
  <div class="bg">
    <div class="share_main">

      <div class="share">
        <div class="share_header">
          <div class="radius_in_lb"></div>
          <div class="radius_in_rb"></div>
          <div class="logo">
            <img src="../../../static/img/shareHaian/logo.png" alt=""/>
          </div>
          <div class="title">
            <div>我的海安</div>
            <div>海安市民一站式服务平台</div>
          </div>
        </div>
        <div class="share_body">
          <div class="ma"><img src="../../../static/img/shareHaian/ma.jpg" alt=""/></div>
          <div>扫一扫二维码即可下载“我的海安”</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "planeDetail",
    data() {
      return {}
    },
    methods: {},
    mounted() {

    },
  }
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #203682 url(./../../../static/img/shareHaian/bg.png) no-repeat bottom;
    background-size: 750px;
    /*background-position: 0 0;*/
    padding: 44px;
  }

  .share_main {
    position: absolute;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    padding-bottom: 10px;
  }

  .logo img {
    width: 100px;
  }

  .logo {
    margin-left: 130px;
    margin-right: 24px;
  }

  .title div:first-child {
    font-size: 36px;
    color: rgb(51, 51, 51);
  }

  .title div:last-child {
    font-size: 26px;
    color: rgb(153, 153, 153);
  }

  .ma img {
    width: 500px;
    margin: 75px 80px 0 80px;
  }

  .share_header {
    background: #fff;
    width: 100%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    height: 183px;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    position: relative;
    border-bottom: 1px dashed #ddd;
  }

  .radius_in_lb {
    display: block;
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: #283e8a;
    left: -30px;
    bottom: -30px;
  }

  .radius_in_rb {
    display: block;
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: #283e8a;
    right: -30px;
    bottom: -30px;
  }

  .share_body {
    background: #fff;
    height: 740px;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }

  .share_body div:last-child {
    font-size: 30px;
    color: rgba(102, 102, 102, 1);
    margin-top: 40px;
    width: 100%;
    text-align: center;
  }

</style>
