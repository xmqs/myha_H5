<template>
  <div class="bg">
    <div class="header_banner"></div>
    <div class="top_box">
      <div class="mui-input-row mui-search header_search">
        <input type="search" class="mui-input-clear rel_" placeholder="搜索景点／酒店／美食等">
        <span class="haian_input_speech"></span>
      </div>
      <div class="city_weather_box">
        <ul class="ui-col">
          <li class="ui-col ui-col-50">
            <p class="city_box" id="city_name">海安</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="navigation_box">
      <ul class="line">
        <li class="line-box">
          <img src="./../../../static/img/travel/1.png" class="box-img"/>
          <p class="nav_title">美食</p>
        </li>
        <li class="line-box">
          <img src="./../../../static/img/travel/2.png" class="box-img"/>
          <p class="nav_title">景区景点</p>
        </li>
        <li class="line-box">
          <img src="./../../../static/img/travel/3.png" class="box-img"/>
          <p class="nav_title">酒店</p>
        </li>
        <li class="line-box">
          <img src="./../../../static/img/travel/4.png" class="box-img"/>
          <p class="nav_title">乡村旅游点</p>
        </li>
      </ul>
      <ul class="line line2">
        <li class="line-box">
          <img src="./../../../static/img/travel/5.png" class="box-img"/>
          <p class="nav_title">海安特产</p>
        </li>
        <li class="line-box">
          <img src="./../../../static/img/travel/6.png" class="box-img"/>
          <p class="nav_title">旅游路线</p>
        </li>
        <li class="line-box">
          <img src="./../../../static/img/travel/7.png" class="box-img"/>
          <p class="nav_title">节庆活动</p>
        </li>
        <li class="line-box">
          <img src="./../../../static/img/travel/8.png" class="box-img"/>
          <p class="nav_title">旅行社</p>
        </li>
      </ul>
    </div>
    <div class="city_interesting_box">
      <h3 class="city_title">城市好玩点</h3>
      <div class="city_tab_box">
        <ul class="city_tab_box_ul">
          <li class="city_tab_box_li" :class="{'tab_active':page==1}" @click="changePage(1)">
            景点
          </li>
          <li class="city_tab_box_li" :class="{'tab_active':page==2}" @click="changePage(2)">
            美食
          </li>
          <li class="city_tab_box_li" :class="{'tab_active':page==3}" @click="changePage(3)">
            酒店
          </li>
          <li class="city_tab_box_li" :class="{'tab_active':page==4}" @click="changePage(4)">
            特产
          </li>
        </ul>
      </div>
      <div class="city_interesting_content">
        <div class="interesting_content_card">
          <div class="img_box">
            <img src="./../../../static/img/travel/banner4.png" alt=""/>
          </div>
          <div class="interesting_content_card_content">
            <div class="interesting_content_card_content_inner">
              <p class="card_title">国家AAA级旅游景区——广福禅寺</p>
              <p class="card_content">广福禅寺座落在海安市东北首，俗称东福禅寺座落在海安市东北首，俗称东寺。该寺寺。该寺古名广福教寺，始
                为唐代鄂国公尉迟恭之子尉迟宝林将军于唐贞观二十年（公元64...</p>
            </div>
          </div>
        </div>
        <div class="interesting_content_card">
          <div class="img_box">
            <img src="./../../../static/img/travel/banner4.png" alt=""/>
          </div>
          <div class="interesting_content_card_content">
            <div class="interesting_content_card_content_inner">
              <p class="card_title">国家AAA级旅游景区——广福禅寺</p>
              <p class="card_content">广福禅寺座落在海安市东北首，俗称东福禅寺座落在海安市东北首，俗称东寺。该寺寺。该寺古名广福教寺，始
                为唐代鄂国公尉迟恭之子尉迟宝林将军于唐贞观二十年（公元64...</p>
            </div>
          </div>
        </div>
        <div class="interesting_content_card">
          <div class="img_box">
            <img src="./../../../static/img/travel/banner4.png" alt=""/>
          </div>
          <div class="interesting_content_card_content">
            <div class="interesting_content_card_content_inner">
              <p class="card_title">国家AAA级旅游景区——广福禅寺</p>
              <p class="card_content">广福禅寺座落在海安市东北首，俗称东福禅寺座落在海安市东北首，俗称东寺。该寺寺。该寺古名广福教寺，始
                为唐代鄂国公尉迟恭之子尉迟宝林将军于唐贞观二十年（公元64...</p>
            </div>
          </div>
        </div>
        <div class="interesting_content_card">
          <div class="img_box">
            <img src="./../../../static/img/travel/banner4.png" alt=""/>
          </div>
          <div class="interesting_content_card_content">
            <div class="interesting_content_card_content_inner">
              <p class="card_title">国家AAA级旅游景区——广福禅寺</p>
              <p class="card_content">广福禅寺座落在海安市东北首，俗称东福禅寺座落在海安市东北首，俗称东寺。该寺寺。该寺古名广福教寺，始
                为唐代鄂国公尉迟恭之子尉迟宝林将军于唐贞观二十年（公元64...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "indexNew",
    data(){
      return{
        page:1
      }
    },
    methods:{
      changePage(n){
        this.page = n;
      }
    }
  }
</script>

<style scoped>
  .header_banner {
    height: 14rem;
    width: 100%;
    overflow: hidden;
    background-size: 100% 100%;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
  }

  .bg {
    background: url("./../../../static/img/travel/banner4.png") no-repeat;
    background-size: 100%;
    background-position: top;
    background-attachment: fixed;
  }

  .top_box {
    height: 280px;
    width: 100%;
    overflow: hidden;
    z-index: 15;
    position: relative;
    top: 0;
    left: 0;
    background: transparent;
  }

  .city_weather_box {
    width: 100%;
    overflow: hidden;
    position: absolute;
    padding: 0 0 26px 26px;
    left: 0;
    bottom: 0;
  }

  .city_box {
    font-size: 44px;
    color: #FFFFFF;
    text-align: left;
  }


  .header_search {
    position: absolute;
    left: 26px;
    top: 26px;
    right: 26px;
    z-index: 30;
  }

  input[type=search] {
    height: 62px;
    line-height: 62px;
    text-align: left;
    font-size: 26px;
    background: #fff url("./../../../static/img/hotline/Fill1.png") no-repeat;
    background-size: 36px;
    background-position: 16px 13px;
    padding: 0 0 0 62px;
    margin-bottom: 0;
  }

  .mui-search .mui-placeholder {
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: left;
    padding-left: 1.5rem;
    font-size: 1.3rem;

  }

  .mui-search.mui-active:before {
    margin-top: -2.2rem;
  }

  .haian_input_speech {
    display: block;
    position: absolute;
    right: 1rem;
    top: 0.8rem;
    width: 1.2rem;
    height: 2rem;
    background-size: 100% 100%;
    z-index: 50;

  }

  /****图标导航**/
  .navigation_box {

    width: 100%;
    padding:40px 26px;
    border-radius: 16px 16px 0 0;
    background: #ffffff;
    position: relative;
    z-index: 15;
    overflow: hidden;
  }
  .line2{
    border-bottom: 1px solid #eee;
  }


  /*********城市好玩点**********/
  .city_interesting_box {
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
    position: relative;
    z-index: 15;
  }

  .city_interesting_title {
    padding: 0 1.3rem;
    color: #333333;
    font-size: 2.1rem;
    line-height: 3rem;
    font-weight: bold;
  }

  .city_tab_box {
    padding: 26px;
    overflow: hidden;

  }

  .tab_title_box {
    width: 6rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: 1.5rem;
    color: #333333;
    background: #F5F5F5;
  }



  .city_interesting_content {
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
  }

  .interesting_content_card {
    font-size: 1.4rem;
    position: relative;
    overflow: hidden;
    margin: 0;
    background-color: #fff;
  }

  .img_box {
    width: 100%;
    height: 318px;
    overflow: hidden;
  }
  .img_box img{
    width: 100%;
    height: 318px;
  }

  .interesting_content_card_content {
    font-size: 1.4rem;
    position: relative;
  }

  .interesting_content_card_content_inner {
    position: relative;
    padding: 26px;
  }

  .card_title {
    color: #333333;
    font-size:30px;
  }

  .card_content {
    color: #999999;
    font-size:24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .line{
    display: flex;
    justify-content: space-between;
  }

  .line-box{
    width: 100%;
    flex-grow: 1;
    text-align: center;
    height: 172px;
  }
  .nav_title {
    margin-top: 10px;
    font-size:24px;
  }

  .box-img{
    width: 88px;
    height: 88px;
  }

  .city_title{
    padding:0 0 6px 26px;
    font-size:42px;
    font-weight:500;
    display: inline-block;
    background: url("./../../../static/img/travel/line_yellow.png") no-repeat;
    background-position: bottom;
    background-size: 70px;
  }

  .city_tab_box_li{
    display: inline-block;
    margin-right: 26px;
    height: 62px;
    width: 120px;
    border-radius: 6px;
    background: #F5F5F5;
    text-align: center;
    font-size:30px;
    line-height: 62px;
  }

  .tab_active {
    background: url("./../../../static/img/travel/tab_active.png") no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }

</style>
