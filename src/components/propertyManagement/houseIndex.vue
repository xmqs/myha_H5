<template>
  <div class="main">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
      </div>
    </div>
    <div class="tab">
      <div class="title">
        交易管理
      </div>
      <div class="slider">
        <div class="item_line">
          <div class="item" @click="toBusiness">
            <img src="./../../../static/img/management/listIcon.png" alt="">房产交易
          </div>
          <div class="item" @click="houseDetail">
            <img src="./../../../static/img/management/listIcon.png" alt="">房屋信息
          </div>
        </div>
        <div class="item_line2">
          <div class="item2" @click="toGuideList">
            <img src="./../../../static/img/management/listIcon.png" alt="">交易指南
          </div>
        </div>
      </div>
    </div>
    <div class="tab">
      <div class="title">
        安居工程
      </div>
      <div class="slider">
        <div class="item_line">
          <div class="item2" @click="protectList">
            <img src="./../../../static/img/management/listIcon.png" alt="">市建保障房
          </div>
        </div>
      </div>
    </div>
    <div class="tab">
      <div class="title">
        房屋管理
      </div>
      <div class="slider">
        <div class="item_line">
          <div class="item2" @click="dismantleList">
            <img src="./../../../static/img/management/listIcon.png" alt="">房屋拆改<br>结构查询
          </div>
        </div>
      </div>
    </div>
    <div class="tab">
      <div class="title">
        物业管理
      </div>
      <div class="slider">
        <div class="item_line">
          <div class="item2"  @click="toPropertyList">
            <img src="./../../../static/img/management/listIcon.png" alt="">物业维修<br>企业名录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import swiper from "swiper"
    export default {
      name: "hoseIndex",
      data(){
        return{
          swiper:{}
        }
      },
      methods:{
        toGuideList(){
          this.$router.push("/guideList");
        },
        toBusiness(){
          this.$router.push("/business");
        },
        toThingList(){
          this.$router.push("/managementtingList");
        },
        toPropertyList(){
          this.$router.push("/managementpropertyList");
        },
        houseDetail(){
          this.$router.push("/houseList");
        },
        protectList(){
          this.$router.push("/propertyManagement/protectList");
        },
        dismantleList(){
          this.$router.push("/dismantleList");
        }
      },
      mounted(){
        this.swiper = new swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          loop:true,
          slidesPerView: 1,
          centeredSlides: true,
        })
      },
    }
</script>

<style scoped>
  .swiper-slide{
    width: 100%;
    height: 300px;
    background: #ec971f;
    color: #fff;
    font-size: 46px;
    text-align: center;
    line-height: 300px;
  }
  .tab{
    border-top: 16px solid #eee;
  }
  .title{
    padding: 16px;
    font-size: 30px;
    color: #666;
  }
  .slider{
    padding:0 16px;
  }
  .item_line{
    display: flex;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .item_line2{
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .item{
    display: flex;
    flex-grow: 1;
    height: 88px;
    align-items: center;
  }
  .item2{
    display: flex;
    width: 50%;
    height: 88px;
    align-items: center;
    border-right: 1px solid #eee;
  }
  .item_line .item:first-child{
    border-right: 1px solid #eee;
  }
  .item img{
    width: 50px;
    height: 50px;
    margin: 0 16px;
  }
  .item2 img{
    width: 50px;
    height: 50px;
    margin: 0 16px;
  }
</style>
