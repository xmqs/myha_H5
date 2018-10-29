<template>
  <div class="wyx">
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
    <div class="wall">
      <div class="scroll">
        <ul class="page_list" id="page1">
          <div class="page_title">
            <div class="page_text">时事新闻</div>
          </div>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
        </ul>
        <ul class="page_list" id="page2">
          <div class="page_title">
            <div class="page_text">政务信息</div>
          </div>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
        </ul>
        <ul class="page_list" id="page3">
          <div class="page_title">
            <div class="page_text">公告信息</div>
          </div>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
        </ul>
        <ul class="page_list" id="page4">
          <div class="page_title">
            <div class="page_text">政策宣传</div>
          </div>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
        </ul>
        <ul class="page_list" id="page5">
          <div class="page_title">
            <div class="page_text">调查文件</div>
          </div>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
        </ul>
        <ul class="page_list" id="page6">
          <div class="page_title">
            <div class="page_text">个性推送</div>
          </div>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
          <li>海关总署第237号令（关于公布《中华人民共和 国海关企业信用管理办法》的令）</li>
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
    data() {
      return {
        swiper: {},
        page: 1,
      }
    },
    mounted() {
      this.swiper = new Swiper('.swiper-container', {
        loop: false,
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
      })
    },
    methods: {
      changePage(n) {
        this.page = n;
        let p = "#page"+n
        document.querySelector(p).scrollIntoView(true);
      }
    }
  }
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 999;
    border-bottom: 1px solid #eee;
  }

  .swiper-slide {
    width: 200px;
    height: 78px;
    border-bottom: 4px solid #fff;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: center;
    line-height: 78px;
  }

  .active {
    color: #285FB1;
    border-bottom: 4px solid #285FB1;
  }

  .wall {
    width: 100%;
    padding-top:75px;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
  }

  .page_list {
    padding: 0 32px;
    background: #fff;
  }

  .page_title {
    padding: 16px 32px 16px 0;
    border-bottom: 1px solid #eee;
  }

  .page_text {
    font-size: 32px;
    border-left: 4px solid #0d9bf2;
    padding: 2px 16px;
  }


  .page_list li {
    padding: 26px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    border-bottom: 1px solid #eee;
  }

</style>
