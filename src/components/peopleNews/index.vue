<template>
    <div class="hd" style="height: 100%">
      <div class="header">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :class="{'active':page==1}" @click="changePage(1)">
              时事新闻
            </div>
            <div class="swiper-slide" :class="{'active':page==2}" @click="changePage(2)">
              政务信息
            </div>
            <div class="swiper-slide" :class="{'active':page==3}" @click="changePage(3)">
              公告通知
            </div>
            <div class="swiper-slide" :class="{'active':page==4}" @click="changePage(4)">
              政策宣传
            </div>
            <div class="swiper-slide" :class="{'active':page==5}" @click="changePage(5)">
              视频直播
            </div>
            <div class="swiper-slide" :class="{'active':page==6}" @click="changePage(6)">
              调查问卷
            </div>
            <div class="swiper-slide" :class="{'active':page==7}" @click="changePage(7)">
              个性推送
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div v-show="page==1">
          <ul class="page_list">
            <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import Swiper from 'swiper';


  export default {
    name: "index",
    data(){
      return{
        swiper:{},
        page:1,
      }
    },
    mounted(){
      this.swiper = new Swiper ('.swiper-container', {
        loop: false,
        observer:true,
        observeParents:true,
        slidesPerView :'auto',
      })
    },
    methods:{
      changePage(n){
        this.page = n;
      }
    }
  }
</script>

<style scoped>
  .header{
    background: #f5f5f5;
    display: flex;
    position: absolute;
    z-index: 500;
    top: 0;
    width: 100%;
  }
  .swiper-slide{
    width: 200px;
    height: 72px;
    border-bottom: 4px solid #f5f5f5;
    font-size:32px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    text-align: center;
    line-height: 72px;
  }
  .active{
    color: #285FB1;
    border-bottom: 4px solid #285FB1;
  }

  .content{
    box-sizing: border-box;
    height: 100%;
    padding-top: 76px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .page_list{
    padding: 0 32px;
  }
  .page_list li{
    padding: 26px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:32px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    border-bottom: 1px solid #eee;
  }
</style>
