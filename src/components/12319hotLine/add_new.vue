<template>
  <div class="main">
    <ul class="list_ui">
      <li class="list_li right_icon" @click="chose()">
        <div class="word"> 诉求类别</div>
        <div class="add_inp2">{{data.appealType}}</div>
      </li>
      <li class="list_li right_icon" @click="choseTime()">
        <div class="word"> 事发时间</div>
        <div class="add_inp2">{{data.appealTime}}</div>
      </li>
      <li class="list_li right_icon">
        <div class="word"> 事发区域</div>
        <div class="add_inp2">{{data.appealArea}}</div>
      </li>
      <li class="list_li2">
        <div class="word"> 具体位置</div>
      </li>
      <li class="list_li">
        <input type="text" name="" value="" placeholder="请输入您的位置，具体到门牌号" class="add_inp" v-model="data.appealPosition">
      </li>
      <li class="list_li">
        <div class="word"> 诉讼目的</div>
        <input type="text" name="" value="" placeholder="请输入诉讼目的（20字以内）" class="add_inp" v-model="data.appealIdea">
      </li>
      <li class="list_li2">
        <div class="word"> 诉讼内容</div>
      </li>
      <li class="list_li3">
          <textarea name="" id="RqstContent" rows="6" cols="" placeholder="请输入诉求内容(500字以内)" v-model="data.appealContent">

          </textarea>
      </li>
      <li class="list_li4">
        <img src="./../../../static/img/hotline/upImg.png" class="upImg" @click="myImg(1)">
      </li>
      <li class="list_li5">
        <div class="word"> 是否回访</div>
        <div class="mui-switch mui-switch-mini" :class="{'mui-active':data.isVisit}" @click="data.isVisit=!data.isVisit">
          <div class="mui-switch-handle"></div>
        </div>
      </li>
      <li class="list_li">
        <div class="word"> 姓名</div>
        <div class="add_inp2">{{data.userName}}</div>
      </li>
      <li class="list_li">
        <div class="word"> 联系方式</div>
        <div class="add_inp2">{{data.phone}}</div>
      </li>
      <li class="list_li" style="border-bottom: 0">
        <div class="word"> 备用联系方式</div>
        <input type="number" name="" value="" placeholder="请填写备用联系方式"  class="add_inp" v-model="data.SparePhone">
      </li>
    </ul>
    <div class="submit" @click="add">
      提交
    </div>
  </div>
</template>

<script>
  import './../../../static/js/mui.picker.min'

  export default {
    name: "add_nerw",
    data() {
      return {
        data: {
          appealType:"请选择诉讼类别",
          appealTime:"请选择事发时间",
          appealArea:"请选择事发区域",
          isVisit:false,
          userName:"武则天",
          phone:"31415926535898",
          SparePhone:"",
          appealPosition:"",
          appealIdea:"",
          appealContent:"",
          appealPic:"我是图片",
          createBy:"管理员"
        }
      }
    },
    methods:{
      chose(n){
        let vue = this;
        var picker = new mui.PopPicker();
        picker.setData([{
          value: "first",
          text: "诉讼类别一"
        }, {
          value: "second",
          text: "诉讼类别二"
        }, {
          value: "third",
          text: "诉讼类别三"
        }, {
          value: "fourth",
          text: "诉讼类别四"
        }, {
          value: "fifth",
          text: "诉讼类别五"
        }])
        picker.show(function(SelectedItem) {
          console.log(SelectedItem);
          vue.data.appealType = SelectedItem[0].text;
        })
      },
      choseTime(){
        let vue = this;
        var dtPicker = new mui.DtPicker();
        dtPicker.show(function (selectItems) {
          vue.data.appealTime = selectItems.value;
        })
      },
      add(){
        if(this.data.appealType=="请选择诉讼类别"){
          mui.toast('请选择诉讼类别',{ duration:'short', type:'div' });
          return
        }
        if(this.data.appealTime=="请选择事发时间"){
          mui.toast('请选择事发时间',{ duration:'short', type:'div' });
          return
        }
        if(this.data.appealArea=="请选择事发区域"){
          mui.toast('请选择事发区域',{ duration:'short', type:'div' });
          return
        }
        if(this.data.appealPosition==""){
          mui.toast('请输入您的位置',{ duration:'short', type:'div' });
          return
        }
        if(this.data.appealIdea==""){
          mui.toast('请输入诉讼目的',{ duration:'short', type:'div' });
          return
        }
          /*appealAreaDetail:"",
          isVisit:false,
          appealPosition:"南京玄武区",
          appealIdea:"交通太拥堵",
          appealContent:"我都说了交通太拥堵",
          appealPic:"我是图片",
          createBy:"管理员"*/
      },
      myImg(id) {
        var oldUrl = window.location.href;
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          window.location.href += '#uploadImgByClient?imgNum=0&serverurl=https://m.mynj.cn:11162/web-editor-web/public/delivery/uploadByBase64.do&selectPhotoType=photoAll&isEdit=0';
        }

        if (isiOS) {
          window.location.href = '#uploadImgByClient?imgNum=0&serverurl=https://m.mynj.cn:11162/web-editor-web/public/delivery/uploadByBase64.do&selectPhotoType=photoAll&isEdit=0';
        }

        var that = this;

        window.uploadImgOver = function (str) {
          if (id == 0) {
            /*that.eattach1.base64 = JSON.parse(str).data;
            that.at1 = true;*/
          }
          if (id == 1) {
            /*that.eattach2.base64 = JSON.parse(str).data;
            that.at2 = true;*/
          }
        }

        if (isAndroid) {
          this.$router.go(-1);
        }

      },
    },
    beforeRouteEnter (to, from, next) {
      if(from.name=="hotLine19"){
        window.scrollTo(0,0);
      }
      next(vm => {

      });
    }
  }
</script>

<style scoped>
  .main {
    -webkit-overflow-scrolling: touch;
  }

  .list_ui {
    padding: 0 32px;
    background: #fff;
  }

  .list_li {
    border-bottom: 1px solid #c8c7cc;
    display: flex;
    align-items: center;
  }

  .list_li2 {
    display: flex;
  }

  .list_li3 {
    display: flex;
    border-bottom: 1px solid #c8c7cc;
  }

  .list_li4 {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid #c8c7cc;
  }
  .list_li5 {
    display: flex;
    border-bottom: 1px solid #c8c7cc;
    justify-content: space-between;
    align-items: center;
  }

  .right_icon {
    padding-right: 40px;
    background: url("./../../../static/img/normal/right.png") right no-repeat;
    background-size: 12px;
  }

  .word {
    color: #666;
    font-size: 32px;
    padding-left: 16px;
    width: 300px;
    line-height: 88px;
    white-space: nowrap;
  }

  .add_inp {
    height: 88px;
    margin-bottom: 0;
    padding: 20px 16px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 32px;
    box-sizing: border-box;
    width: 100%;
  }
  .add_inp2 {
    height: 88px;
    line-height: 48px;
    margin-bottom: 0;
    padding: 20px 16px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 32px;
    box-sizing: border-box;
    width: 100%;
  }

  #RqstContent {
    border: 0;
    margin: 16px;
    font-size: 32px;
  }

  .upImg {
    width: 160px;
    height: 160px;
  }
  .submit{
    width: 686px;
    height: 88px;
    margin:16px 0 0 32px;
    line-height: 88px;
    text-align: center;
    background: rgb(66, 120, 190);
    border-radius: 8px;
    color: #fff;
    font-size: 32px;
  }


</style>
