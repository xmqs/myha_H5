<template>
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">slider1</div>
          <div class="swiper-slide">slider2</div>
          <div class="swiper-slide">slider3</div>
        </div>
      </div>
      <div class="tab_list">
        <div class="tab_item" @click="toList('zhly_lvyouluxian')">
          <img src="./../../../static/img/travel/icon1.png" alt="">
          <div>旅游路线</div>
        </div>
        <div class="tab_item" @click="toList('zhly_techan')">
          <img src="./../../../static/img/travel/icon2.png" alt="">
          <div>特产</div>
        </div>
      </div>
      <div class="tab_list">
        <div class="tab_item" @click="toList('zhly_chihe')">
          <img src="./../../../static/img/travel/icon3.png" alt="">
          <div>吃喝</div>
        </div>
        <div class="tab_item" @click="toList('zhly_jingdian')">
          <img src="./../../../static/img/travel/icon4.png" alt="">
          <div>景点</div>
        </div>
      </div>
      <div class="tab_list">
        <div class="tab_item" @click="toList('zhly_zhusu')">
          <img src="./../../../static/img/travel/icon5.png" alt="">
          <div>住宿</div>
        </div>
      </div>
    </div>
</template>


<script>
  import swiper from "swiper"
      export default {
      name: "index",
      data(){
          return{
            swiper:{}
          }
      },
      mounted(){
        this.swiper = new swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          loop:true,
          effect : 'coverflow',
          slidesPerView: 1,
          centeredSlides: true,
        })
      },
      methods:{
        toList(url){
          this.$router.push("/travel/list/"+url);
        }
      }
    }
</script>

<style scoped>
  .swiper-slide{
    width: 100%;
    height: 300px;
    background: #0d9bf2;
    color: #fff;
    font-size: 46px;
    text-align: center;
    line-height: 300px;
  }
  .tab_list{
    display: flex;
    border-bottom: 1px solid #eee;
    padding-left: 32px;
  }

  .tab_item{
    width: 343px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 32px 0 32px 32px;
    font-size: 32px;
    color: #333;
  }
  .tab_list .tab_item:first-child{
    border-right: 1px solid #eee;
  }
  .tab_item img{
    width: 88px;
    height: 88px;
    margin-right: 22px;
  }
</style>
