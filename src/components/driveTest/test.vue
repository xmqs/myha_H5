<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!--一个单元-->
      <div class="swiper-slide" v-for="(data,index) in datas" :class="'slide'+index">
        <div class="top">
          <div class="c1" @click="prev(index)">上一题</div>
          <div class="c2" @click="next(index)">下一题</div>
        </div>
        <div class="main">
          <div v-html="index+1+'、'+data.question"></div>
          <div v-show="data.imgUrl!=undefined">
            <img v-for="val in data.imgUrl"  :src="val" alt=""/>
          </div>
        </div>
        <ul class="foot">
          <li :class="'f'+index" v-for="(opt,i) in data.option" @click="sel(index,data.answer,i)">
            <div class="ico">
              <img v-show="data.userAnswer == '0' || (data.userChose!==''&&data.userChose!== i)"
                   :src="'./static/img/driveTest/a'+i+'.png'" alt=""/>
              <img v-show="data.userAnswer == '1' && data.userChose== i " src="../../../static/img/driveTest/dui.png"
                   alt=""/>
              <img v-show="data.userAnswer == '2' && data.userChose== i " src="../../../static/img/driveTest/cha.png"
                   alt=""/>
            </div>
            <div :class="{'green':(data.userAnswer=='1')&&(data.userChose==i),'red':(data.userAnswer == '2')&&(data.userChose==i)}">
            	 {{opt}}
            </div>
          </li>
        </ul>
        <div class="answer" v-show="data.userAnswer=='1'">
                                   正确答案：{{data.answer==0?"A":(data.answer==1?"B":(data.answer==2?"C":(data.answer==3?"D":(data.answer==4?"E":(data.answer==5?"F":"G")))))}}、{{data.option[data.answer]}}
        </div>
        <div class="answer" v-show="data.userAnswer=='2'">
                                   正确答案：{{data.answer==0?"A":(data.answer==1?"B":(data.answer==2?"C":(data.answer==3?"D":(data.answer==4?"E":(data.answer==5?"F":"G")))))}}、{{data.option[data.answer]}}
        </div>

      </div>
      <!--一个单元年结束-->

    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import Swiper from 'swiper'
  export default {
    data() {
      return {
        obj: {
          "params": {
            "type": "",
            "examId": ""
          },
          "pageNo": "1",
          "pageSize": "10000"
        },
        datas: {},
        swiper: {},
        total: "",

      }
    },
    computed: {
      isshow() {

      }
    },
    mounted() {
      this.$route.params.type == 'null' ? this.obj.params.type = "" : this.obj.params.type = this.$route.params.type;
      this.$route.params.examId == 'null' ? this.obj.params.examId = "" : this.obj.params.examId = this.$route.params.examId;
      this.getDate()
    },
    methods: {
      getDate() {
        axios.post("/myha-server/mockTest/questionListByPage.do", this.obj).then(res => {
          this.datas = res.data.data;
          this.total = res.data.page.total;
          console.log(res.data);
          for (let i = 0; i < this.datas.length; i++) {
            this.datas[i].userAnswer = "0";
            this.datas[i].userChose = "";
          }

          this.$nextTick(() => {
            this.swiper = new Swiper('.swiper-container', {
              direction: 'horizontal', // 垂直切换选项
              loop: false, // 循环模式选项
              autoHeight: true,
              observer: true,
              observeParents: true,
              navigation: {
                nextEl: '.c2',
                prevEl: '.c1',
              },
            })
          })

        })
      },
      sel(i, answer, j) {
        //i 题目序号 answer 答案 j用户选择
        if (this.datas[i].userChose !== '') {
          return
        }
        this.datas[i].userChose = j;
        if (this.datas[i].answer == j) {
          this.datas[i].userAnswer = "1";
          var t;
					clearTimeout(t)
					t = setTimeout(()=>{
					    this.swiper.slideTo(i + 1)
					}, 500);
        } else {
          this.datas[i].userAnswer = "2";
        }
        this.$forceUpdate();
        this.$nextTick(() => {
          this.swiper.update();
        })
      },
      next(i) {
      	console.log(i)
        if (i + 1 == this.datas.length) {
          mui.toast("已经是最后一道题了", {duration: 'short', type: 'div'});

        }
      },
      prev(i) {
        if (i == 0) {
          mui.toast("已经是第一道题了", {duration: 'short', type: 'div'});
        }

      },
    }
  }
</script>

<style scoped>
  li {
    list-style-type: none;
  }

  .clear::after {
    content: "";
    display: block;
    clear: both;
  }

  .top {
    padding: 30px;
  }

  .c1 {
    width: 144px;
    height: 58px;
    float: left;
    border: 1px solid #3184f0;
    color: #3184f0;
    font-size: 26px;
    line-height: 60px;
    text-align: center;
    border-radius: 26px;
  }

  .c2 {
    width: 144px;
    height: 58px;
    float: right;
    background: #3184f0;
    color: #fff;
    font-size: 26px;
    line-height: 60px;
    border: 1px solid #3184f0;
    text-align: center;
    border-radius: 26px;
  }

  .main div:first-child {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    font-size: 32px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
  }

  .main div:last-child {
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .main div:last-child img{
    max-width:686px;
  }

  .img {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    display: none;
  }

  .img img {
    margin-right: 20px;
    margin-bottom: 20px;
    height: 180px;
  }

  .foot li {
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  .ico {
    width: 50px;
    height: 50px;
    margin-left:20px;
  }

  .ico img {
    width: 100%;
  }

  .foot > li div:first-child img {
    width: 50px;
  }

  .foot > li div:last-child {
    width: 100%;
    padding:20px;
    font-size: 32px;
    box-sizing: border-box;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
  }

  .answer {
    width: 100%;
    box-sizing: border-box;
    min-height: 100px;
    font-size: 32px;
    padding: 30px 20px;
    border-top: 20px solid #f5f5f5;
    border-bottom: 20px solid #f5f5f5;
  }

  .swiper-container {
    width: 750px;
  }

  .swiper-slide {
    width: 750px !important;
  }
  .red {
    color: #f40000;
  }

  .green {
    color: #49c500;
  }
</style>
