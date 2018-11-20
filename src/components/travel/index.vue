<template>
  <div>
    <div class="title">
      旅游攻略
    </div>
    <div class="tab_list">
      <a href="https://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA%3D%3D&hid=12&sn=2c6483834cae29b1ba52c9088c5ff0ce&scene=18">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon6.png" alt="">
          <div>海安介绍</div>
        </div>
      </a>
      <a href="http://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA==&hid=1&sn=09d6a85f621d11dd6ab3badf9553992e&scene=18#wechat_redirect">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon9.png" alt="">
          <div>海安视频</div>
        </div>
      </a>
    </div>
    <div class="tab_list">
      <a href="http://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA==&hid=2&sn=9a42f501f08a449396bae3c387a6440f&scene=18#wechat_redirect">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon7.png" alt="">
          <div>美文海安</div>
        </div>
      </a>
      <a href="https://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA%3D%3D&hid=13&sn=7979b716f54250277c8562b3dc2d331e&scene=18">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon3.png" alt="">
          <div>旅游路线</div>
        </div>
      </a>
    </div>
    <div class="tab_list">
      <a href="https://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA%3D%3D&hid=8&sn=fd630feafc8d25508f7bc3f09acc4eb4&scene=18">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon10.png" alt="">
          <div>海安特产</div>
        </div>
      </a>
    </div>
    <div class="line"></div>
    <div class="title">
      吃喝玩乐
    </div>
    <div class="tab_list">
      <a href="https://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA%3D%3D&hid=4&sn=797754554feeb40f30e16f569f20b79d&scene=18">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon1.png" alt="">
          <div>美食</div>
        </div>
      </a>
      <a href="http://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA==&hid=5&sn=0d5d0d081e8a45c1aba15860054d5f04&scene=18#wechat_redirect">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon5.png" alt="">
          <div>住宿</div>
        </div>
      </a>
    </div>
    <div class="tab_list">
      <a href="https://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA%3D%3D&hid=6&sn=e8feeb2578af9051c4508f48c8131c8f&scene=18">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon2.png" alt="">
          <div>景点</div>
        </div>
      </a>
      <a href="https://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA%3D%3D&hid=7&sn=169f11462dbc46826462db7b35df23ad&scene=18">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon8.png" alt="">
          <div>乡村旅游点</div>
        </div>
      </a>
    </div>
    <div class="tab_list">
      <a href="https://mp.weixin.qq.com/mp/homepage?__biz=MzA4ODY3ODcxNA%3D%3D&hid=9&sn=2913af3b439369347287213332224ac4&scene=18">
        <div class="tab_item">
          <img src="./../../../static/img/travel/icon4.png" alt="">
          <div>节庆活动</div>
        </div>
      </a>
    </div>
  </div>
</template>


<script>
  import axios from "axios"

  export default {
    name: "index",
    data() {
      return {
        list: []
      }
    },
    mounted() {
      alert(sessionStorage.getItem("token"));
      alert(sessionStorage.getItem("type"));
      axios.get('/myha-server/token/getUserByToken.do?token='+sessionStorage.getItem("token")+"&type="+sessionStorage.getItem("type")).then(res=>{
        alert(res);
        alert(JSON.stringify(res))
      })
    },
    methods: {}
  }
</script>

<style scoped>
  .swiper-slide {
    width: 100%;
    color: #fff;
    font-size: 32px;
    text-align: center;
  }

  .swiper-slide img {
    width: 100%;
    height: 400px;
  }

  .tab_list {
    display: flex;
    padding-left: 32px;
  }

  .tab_item {
    width: 343px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 32px 0 32px 32px;
    color: #333;
  }

  .tab_item img {
    width: 88px;
    height: 88px;
    margin-right: 32px;
  }

  .tab_item div {
    font-size: 32px;
  }

  .title {
    margin-left: 32px;
    font-size: 30px;
    padding: 23px 32px;
    border-bottom: 1px solid #eee;
  }

  .line {
    height: 20px;
    background: #f5f5f5;
  }
</style>
