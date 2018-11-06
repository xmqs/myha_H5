<template>
  <div class="main">
    <ul class="list_ui">
      <li class="list_li right_icon" @click="chose()">
        <div class="word"> 建议类型</div>
        <div class="add_inp2">{{data.suggestType}}</div>
      </li>
      <li class="list_li">
        <div class="word"> 建议主题</div>
        <input type="text" name="" value="" placeholder="请填写建议主题"  class="add_inp" v-model="data.suggestTitle">
      </li>
      <li class="list_li2">
        <div class="word"> 建议内容</div>
      </li>
      <li class="list_li4">
          <textarea name="" id="RqstContent" rows="6" cols="" placeholder="请输入建议内容(500字以内)" v-model="data.suggestContent">

          </textarea>
      </li>
      <li class="list_li6">
        <img src="./../../../static/img/hotline/upImg.png" class="upImg" @click="myImg(1)">
        <div v-for="(item,index) in data.suggestPic" class="imgList">
          <div class="remove" @click="removeImg(index)">+</div>
          <img :src="item" class="avatar">
        </div>
      </li>
      <li class="list_li5">
        <div class="word"> 是否回访</div>
        <div class="mui-switch mui-switch-mini" :class="{'mui-active':data.visit}" @click="data.visit=!data.visit">
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
        <div class="word"> 联系地址</div>
        <input type="number" name="" value="" placeholder="请填写联系地址"  class="add_inp" v-model="data.alternateContact">
      </li>
    </ul>
    <div class="submit" @click="add">
      提交
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import './../../../static/js/mui.picker.min'
  import axios from "axios"
  export default {
    name: "add_nerw",
    data() {
      return {
        data: {
          suggestType:"请选择建议类型",
          suggestTitle:"",
          suggestContent:"",
          suggestPic:[],
          visit:false,
          userName:"",
          phone:"",
          alternateContact:"",
          userId:""
        },
        canadd:true,
      }
    },
    mounted(){
      this.data.phone = this.getUserPhone;
      this.data.userName = this.getUserName;
      this.data.userId = this.getUserId;
    },
    computed: {
      ...mapGetters([
        "getUserId",
        "getUserName",
        "getCardId",
        "getUserPhone",
      ])
    },
    methods:{
      chose(n){
        let vue = this;
        var picker = new mui.PopPicker();
        picker.setData([{
          value: "first",
          text: "建议类别一"
        }, {
          value: "second",
          text: "建议类别二"
        }, {
          value: "third",
          text: "建议类别三"
        }, {
          value: "fourth",
          text: "建议类别四"
        }, {
          value: "fifth",
          text: "建议类别五"
        }])
        picker.show(function(SelectedItem) {
          console.log(SelectedItem);
          vue.data.suggestType = SelectedItem[0].text;
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
        if(!this.canadd){
          return
        }
        if(this.data.suggestType=="请选择建议类型"){
          mui.toast('请选择建议类别',{ duration:'short', type:'div' });
          return
        }
        if(this.data.suggestTitle==""){
          mui.toast('请填写建议主题',{ duration:'short', type:'div' });
          return
        }
        if(this.data.suggestContent==""){
          mui.toast('请填写建议内容',{ duration:'short', type:'div' });
          return
        }

        this.canadd = false;
        axios.post("/myha-server/12319/add.do",this.data).then(res=>{
          if(res.data.result==1){
            this.canadd = true;
            mui.toast('建议成功',{ duration:'short', type:'div' });
            this.$router.go(-1);
          }
        }).catch(err=> {
          this.canadd = true;
          mui.toast("出了点小差错，请稍后尝试",{ duration:'short', type:'div' });
        })
      },
      removeImg(n){
        this.data.suggestPic.splice(n,1);
      },
      myImg(id) {
        if(this.data.suggestPic.length>5){
          mui.toast('最多上传六张照片',{ duration:'short', type:'div' });
          return
        }
        var oldUrl = window.location.href;
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          window.location.href += '#uploadImgByClient?imgNum=0&serverurl=http://192.168.0.214:7003/ljs-server/upload/upload.do&selectPhotoType=photoAll&isEdit=0';
        }

        if (isiOS) {
          window.location.href = '#uploadImgByClient?imgNum=0&serverurl=http://192.168.0.214:7003/ljs-server/upload/upload.do&selectPhotoType=photoAll&isEdit=0';
        }

        var that = this;

        window.uploadImgOver = function (str) {
          that.data.suggestPic.push(JSON.parse(str).data);
        }

        if (isAndroid) {
          this.$router.go(-1);
        }

      },
    },
    beforeRouteEnter (to, from, next) {
      if(from.name=="hotLineTip19"){
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
  .list_li6 {
    border-bottom: 1px solid #c8c7cc;
    padding: 16px 0;
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
    display: inline-block;
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

  .imgList{
    display: inline-block;
    width: 160px;
    height: 160px;
    margin-left: 10px;
    position: relative;
    overflow: hidden;
  }

  .imgList:nth-child(5){
    margin-left: 0;
  }

  .imgList img{
    width: 160px;
    height: 160px;
  }


  .remove{
    position: absolute;
    right: -50px;
    top: -50px;
    background: #e4393c;
    color: #fff;
    font-size: 68px;
    width: 100px;
    height: 100px;
    text-align: center;
    transform:rotate(225deg);
  }
</style>
