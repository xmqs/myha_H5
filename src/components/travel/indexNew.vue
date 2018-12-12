<template>
  <section class="ui-container">
    <div class="mui-content">
      <!--
                  作者：heimangxing@163.com
                  时间：2018-12-07
                  描述：顶部背景图
              -->
      <div class="header_banner"></div>
      <!--
                  作者：heimangxing@163.com
                  时间：2018-12-07
                  描述：顶部盒子，包含搜索框和 城市  天气  背景色透明
              -->
      <div class="top_box">
        <div class="mui-input-row mui-search header_search">
          <input type="search" class="mui-input-clear rel_" placeholder="搜索景点／酒店／美食等">
          <span class="haian_input_speech"></span>
        </div>
        <!--
                      作者：heimangxing@163.com
                      时间：2018-12-07
                      描述：城市名和天气盒子
                  -->
        <div class="city_weather_box">
          <ul class="ui-col">
            <li class="ui-col ui-col-50">
              <p class="city_box" id="city_name">南通</p>
            </li>
            <li class="ui-col ui-col-50">
              <p class="weather_box rel_"><span class="weather_tb"><img src="images/tianqi/tq01.png" alt=""  class="img_responsive center_block"/></span> 13℃</p>
            </li>

          </ul>
        </div>
      </div>

      <!--
                  作者：heimangxing@163.com
                  时间：2018-12-07
                  描述：图标导航栏
              -->

      <div class="navigation_box">
        <ul class="ui-col">
          <li class="ui-col ui-col-100 nav_li">
            <ul class="ui-col">
              <li class="ui-col ui-col-20">
                <img src="images/daohang/hajs.png"  class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">海安介绍</p>
              </li>
              <li class="ui-col ui-col-20">
                <img src="images/daohang/hasp.png" class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">海安视频</p>
              </li>
              <li class="ui-col ui-col-20">
                <img src="images/daohang/mwha.png" class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">美文海安</p>
              </li>
              <li class="ui-col ui-col-20">
                <img src="images/daohang/lylx.png" class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">旅游路线</p>
              </li>
              <li class="ui-col ui-col-20">
                <img src="images/daohang/hatc.png"  class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">海安特产</p>
              </li>
            </ul>
          </li>
          <li class="ui-col ui-col-100 nav_li" style="border-bottom: 1px solid #DDDDDD;padding-bottom: 15px;">
            <ul class="ui-col">
              <li class="ui-col ui-col-20">
                <img src="images/daohang/hams.png"  class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">海安美食</p>
              </li>
              <li class="ui-col ui-col-20">
                <img src="images/daohang/zs.png" class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">住宿</p>
              </li>
              <li class="ui-col ui-col-20">
                <img src="images/daohang/xclyd.png" class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">乡村旅游点</p>
              </li>
              <li class="ui-col ui-col-20">
                <img src="images/daohang/jd.png" class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">景点</p>
              </li>
              <li class="ui-col ui-col-20">
                <img src="images/daohang/jqht.png"  class="img_responsive center_block" height="40" width="40"/>
                <p class="nav_title">节庆活动</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--
                  作者：heimangxing@163.com
                  时间：2018-12-07
                  描述：城市好玩点
              -->
      <div class="city_interesting_box">
        <h3 class="city_interesting_title rel_">城市好玩点</h3>
        <div class="city_tab_box">
          <ul class="ui-col align_items">
            <li class="ui-col ui-col-20">
              <div class="tab_title_box tab_active" id="">景点</div>
            </li>
            <li class="ui-col ui-col-20">
              <div class="tab_title_box" id="">美食</div>
            </li>
            <li class="ui-col ui-col-20">
              <div class="tab_title_box" id="">酒店</div>
            </li>
            <li class="ui-col ui-col-20">
              <div class="tab_title_box" id="">特产</div>
            </li>
            <li class="ui-col ui-col-20"></li>
          </ul>
        </div>
        <!--
                      作者：heimangxing@163.com
                      时间：2018-12-07
                      描述：内容盒子，根据tab进行切换
                  -->
        <div class="city_interesting_content" id="">
          <div class="interesting_content_card">
            <div class="img_box">
              <img src="images/banner4.png" alt="" class="img_responsive center_block"/>
            </div>
            <div class="interesting_content_card_content">
              <div class="interesting_content_card_content_inner">
                <p class="card_title">国家AAA级旅游景区——广福禅寺</p>
                <p class="card_content">广福禅寺座落在海安市东北首，俗称东福禅寺座落在海安市东北首，俗称东寺。该寺寺。该寺古名广福教寺，始 为唐代鄂国公尉迟恭之子尉迟宝林将军于唐贞观二十年（公元64...</p>
              </div>
            </div>
          </div>
          <div class="interesting_content_card">
            <div class="img_box">
              <img src="images/banner4.png" alt="" class="img_responsive center_block"/>
            </div>
            <div class="interesting_content_card_content">
              <div class="interesting_content_card_content_inner">
                <p class="card_title">国家AAA级旅游景区——广福禅寺</p>
                <p class="card_content">广福禅寺座落在海安市东北首，俗称东福禅寺座落在海安市东北首，俗称东寺。该寺寺。该寺古名广福教寺，始 为唐代鄂国公尉迟恭之子尉迟宝林将军于唐贞观二十年（公元64...</p>
              </div>
            </div>
          </div>
          <div class="interesting_content_card">
            <div class="img_box">
              <img src="images/banner4.png" alt="" class="img_responsive center_block"/>
            </div>
            <div class="interesting_content_card_content">
              <div class="interesting_content_card_content_inner">
                <p class="card_title">国家AAA级旅游景区——广福禅寺</p>
                <p class="card_content">广福禅寺座落在海安市东北首，俗称东福禅寺座落在海安市东北首，俗称东寺。该寺寺。该寺古名广福教寺，始 为唐代鄂国公尉迟恭之子尉迟宝林将军于唐贞观二十年（公元64...</p>
              </div>
            </div>
          </div>
          <div class="interesting_content_card">
            <div class="img_box">
              <img src="images/banner4.png" alt="" class="img_responsive center_block"/>
            </div>
            <div class="interesting_content_card_content">
              <div class="interesting_content_card_content_inner">
                <p class="card_title">国家AAA级旅游景区——广福禅寺</p>
                <p class="card_content">广福禅寺座落在海安市东北首，俗称东福禅寺座落在海安市东北首，俗称东寺。该寺寺。该寺古名广福教寺，始 为唐代鄂国公尉迟恭之子尉迟宝林将军于唐贞观二十年（公元64...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "indexNew"
    }
</script>

<style scoped>
  .header_banner{
    height:14rem;
    width:100%;
    overflow: hidden;
    background-size:100% 100%;
    z-index: 10;
    position:fixed;
    top:0;
    left:0;
  }
  .top_box{
    height:13rem;
    width:100%;
    overflow: hidden;
    z-index: 15;
    position:relative;
    top:0;
    left:0;
    background:transparent;
  }
  .city_weather_box{
    width:100%;
    height:4rem;
    padding:0 1.3rem;
    overflow: hidden;
    position:absolute;
    left:0;
    bottom: 0;
  }
  .city_box{
    font-size: 2.2rem;
    color:#FFFFFF;
    text-align: left;
    height:4rem;
    line-height: 4rem;
  }
  .weather_box{
    font-size: 1.6rem;
    color:#FFFFFF;
    text-align: right;
    height:4rem;
    line-height: 4rem;
  }
  .weather_tb{
    display:block;
    width:3rem;
    height:2rem;
    position:absolute;
    top:1rem;
    right:4rem;
    z-index: 16;

    margin-right:0.5rem;

  }
  .header_search{
    position:absolute;
    left:1.3rem;
    top:1rem;
    right:1.3rem;
    z-index: 30;
  }
  input[type=search]{
    background:#FFFFFF;
    height:3.5rem;
    line-height: 3.5rem;
    text-align: left;
  }
  .mui-search .mui-placeholder{
    height:3.5rem;
    line-height: 3.5rem;
    text-align: left;
    padding-left:1.5rem;
    font-size: 1.3rem;
  }

  .mui-search.mui-active:before {
    margin-top:-2.2rem;
  }
  .haian_input_speech{
    display: block;
    position:absolute;
    right:1rem;
    top:0.8rem;
    width:1.2rem;
    height:2rem;
    background-size: 100% 100%;
    z-index: 50;

  }
  /****图标导航**/
  .navigation_box{

    width:100%;
    padding:1.5rem;
    border-radius: 1rem 1rem 0 0;
    background:#ffffff;
    position:relative;
    z-index: 15;
    overflow:hidden ;
  }
  .nav_li{
    padding:0.5rem 0;
  }
  .nav_title{
    padding-top:1rem;
    text-align: center;
    color: #333333;
    font-size: 1.2rem;

  }
  /*********城市好玩点**********/
  .city_interesting_box{
    width:100%;
    overflow: hidden;
    background:#FFFFFF;
    position:relative;
    z-index:15 ;
  }
  .city_interesting_title{
    padding:0 1.3rem;
    color: #333333;
    font-size: 2.1rem;
    line-height: 3rem;
    font-weight: bold;
  }
  .city_tab_box{
    padding:1.3rem;
    overflow: hidden;

  }
  .tab_title_box{
    width:6rem;
    height:3rem;
    text-align: center;
    line-height: 3rem;
    font-size: 1.5rem;
    color: #333333;
    background:#F5F5F5;
  }
  .tab_active{
    background-size: 100% 100%;
    color:#FFFFFF;
  }
  .city_interesting_content{
    width:100%;
    overflow: hidden;
    background:#FFFFFF;
  }
  .interesting_content_card{
    font-size: 1.4rem;
    position: relative;
    overflow: hidden;
    margin:0;
    background-color: #fff;
    padding-bottom: 1.5rem;

  }
  .img_box{
    width:100%;
    height:15rem;
    overflow: hidden;
  }
  .interesting_content_card_content {
    font-size: 1.4rem;
    position: relative;
  }
  .interesting_content_card_content_inner {
    position: relative;
    padding: 1.3rem;
    padding-top:1rem;
  }
  .card_title{
    color: #333333;
    font-size: 1.5rem;
  }
  .card_content{
    color: #999999;
    font-size: 1.2rem;

    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

</style>
