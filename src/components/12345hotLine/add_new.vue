<template>
  <div class="main">
    <ul class="list_ui">
      <li class="list_li6">
        <div v-for="(item,index) in data.filePaths" class="imgList">
          <div class="remove" @click="removeImg(index)">+</div>
          <img :src="item" class="avatar">
        </div>
        <img src="./../../../static/img/hotline/upImg.png" class="upImg" @click="myImg(1)">
      </li>
      <li class="list_li">
        <div class="word"> 诉求标题</div>
        <input type="text" name="" value="" placeholder="请输入诉求标题" class="add_inp" v-model="data.title">
      </li>
      <li class="list_li right_icon" @click="choseTime()">
        <div class="word"> 事发时间</div>
        <div class="add_inp2">{{data.eventDate}}</div>
      </li>
      <li class="list_li right_icon" @click="choseAdd()">
        <div class="word"> 事发区域</div>
        <div class="add_inp2">{{areaName}}</div>
      </li>
      <li class="list_li2">
        <div class="word"> 具体位置</div>
      </li>
      <li class="list_li">
        <input type="text" name="" value="" placeholder="请输入您的位置，具体到门牌号" class="add_inp" v-model="data.busiAddress">
      </li>
      <li class="list_li">
        <div class="word"> 诉求目的</div>
        <input type="text" name="" value="" placeholder="请输入诉求目的（20字以内）" class="add_inp" v-model="data.caseGoal">
      </li>
      <li class="list_li2">
        <div class="word"> 诉求内容</div>
      </li>
      <li class="list_li4">
          <textarea name="" id="RqstContent" rows="6" cols="" placeholder="请输入诉求内容(500字以内)" v-model="data.contentText">

          </textarea>
      </li>
      <li class="list_li5">
        <div class="word"> 是否回访</div>
        <div class="add_inp7">
          <img src="./../../../static/img/hotline/click.png" alt="" class="clickIcon" v-show="data.caseIsvisit==1">
          <img src="./../../../static/img/hotline/unclick.png" alt="" class="clickIcon" v-show="data.caseIsvisit!==1" @click="data.caseIsvisit=1">
          <span class="clickTip"  @click="data.caseIsvisit=1">是</span>
          <img src="./../../../static/img/hotline/click.png" alt="" class="clickIcon" v-show="data.caseIsvisit!==1" >
          <img src="./../../../static/img/hotline/unclick.png" alt="" class="clickIcon" v-show="data.caseIsvisit==1"  @click="data.caseIsvisit=0">
          <span class="clickTip"  @click="data.caseIsvisit=0">否</span>
        </div>
      </li>
      <li class="list_li">
        <div class="word"> 回访电话</div>
        <div class="add_inp2" style="color: #838383">{{data.cusPhone.slice(0,3)}}****{{data.cusPhone.slice(7,11)}} <span class="showName">{{showName}}</span></div>
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
          title:"",
          eventDate:"请选择事发时间",
          areaCode:"请选择事发区域",
          caseIsvisit:1,
          phone:'',
          cusName:"",
          cusPhone:"",
          SparePhone:"",
          busiAddress:"",
          caseGoal:"",
          contentText:"",
          filePaths:[],
          userId:"",
          formOrigin:20,
        },
        canadd:true,
        addList:[],
        areaName:"请选择事发区域"
      }
    },
    mounted(){
      this.data.cusPhone = this.getUserPhone;
      this.data.cusName = this.getUserName;
      this.data.userId = this.getUserId;

      /*axios.get('/myha-server/common/getAreaList.do').then(res=>{
        this.addList = res.data.data;
      })*/

      axios.post('/third-server/busiform/getAreaInfo.do').then(res=>{
        this.addList = res.data.data;
      })
    },
    computed: {
      ...mapGetters([
        "getUserId",
        "getUserName",
        "getCardId",
        "getUserPhone",
      ]),
      showName(){
        if (parseInt(this.getCardId.substr(16, 1)) % 2 == 1) {
          return this.getUserName.substr(0, 1)+"先生";
        } else {
          return this.getUserName.substr(0, 1)+"女士";
        }
      }
    },
    methods:{
      chose(n){
        let vue = this;
        var picker = new mui.PopPicker();
        picker.setData([{
          value: "first",
          text: "诉求类别一"
        }, {
          value: "second",
          text: "诉求类别二"
        }, {
          value: "third",
          text: "诉求类别三"
        }, {
          value: "fourth",
          text: "诉求类别四"
        }, {
          value: "fifth",
          text: "诉求类别五"
        }])
        picker.show(function(SelectedItem) {
          console.log(SelectedItem);
          vue.data.appealType = SelectedItem[0].text;
        })
      },
      choseAdd(){
        let vue = this;
        var picker = new mui.PopPicker({
          layer: 1
        });
        picker.setData(this.addList);
        picker.show(function(SelectedItem) {
          vue.data.areaCode = SelectedItem[0].value;
          vue.areaName = SelectedItem[0].text;
        })
      },

      choseTime(){
        let vue = this;
        var dtPicker = new mui.DtPicker();
        dtPicker.show(function (selectItems) {
          vue.data.eventDate = selectItems.value;
        })
      },
      add(){
        if(!this.canadd){
          return
        }
       /* if(this.data.filePaths.length==0){
          mui.toast('请上传诉求图片',{ duration:'short', type:'div' });
          return
        }*/
        if(this.data.title==""){
          mui.toast('请填写诉求标题',{ duration:'short', type:'div' });
          return
        }
        if(this.data.eventDate=="请选择事发时间"){
          mui.toast('请选择事发时间',{ duration:'short', type:'div' });
          return
        }
        if(this.data.areaName=="请选择事发区域"||this.data.appealArea==""){
          mui.toast('请选择事发区域',{ duration:'short', type:'div' });
          return
        }
        if(this.data.busiAddress==""){
          mui.toast('请输入您的位置',{ duration:'short', type:'div' });
          return
        }
        if(this.data.caseGoal==""){
          mui.toast('请输入诉求目的',{ duration:'short', type:'div' });
          return
        }
        if(this.data.contentText==""){
          mui.toast('请输入诉求内容',{ duration:'short', type:'div' });
          return
        }

        this.canadd = false;
        axios.post("/third-server/busiform/busiformAdd.do",{
          reqData:{
            paras:this.data
          }
        }).then(res=>{
          if(res.data.result==1){
            this.canadd = true;
            mui.toast('诉求提交成功',{ duration:'short', type:'div' });
            this.$router.go(-1);
          }
        }).catch(err=> {
          this.canadd = true;
          mui.toast("出了点小差错，请稍后尝试",{ duration:'short', type:'div' });
        })
      },
      removeImg(n){
        this.data.filePaths.splice(n,1);
      },
      myImg(id) {

        var oldUrl = window.location.href;
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          window.location.href += '#uploadImgByClient?imgNum=0&serverurl=http://58.221.196.5:11001/file-server/upload/upload.do&selectPhotoType=photoAll&isEdit=0';
        }

        if (isiOS) {
          window.location.href = '#uploadImgByClient?imgNum=0&serverurl=http://58.221.196.5:11001/file-server/upload/upload.do&selectPhotoType=photoAll&isEdit=0';
        }

        var that = this;

        window.uploadImgOver = function (str) {
          that.data.filePaths.push(JSON.parse(str).data);
        }

        if (isAndroid) {
          this.$router.go(-1);
        }

      },
    },
    beforeRouteEnter (to, from, next) {
      if(from.name=="hotLineTip45"){
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
    background: #fff;
  }

  .list_li {
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    padding: 0 32px;
  }

  .list_li2 {
    display: flex;
    padding: 0 32px;
  }

  .list_li3 {
    display: flex;
    border-bottom: 1px solid #ddd;
  }

  .list_li4 {
    display: flex;
    padding: 16px 32px;
    border-bottom: 1px solid #ddd;
  }
  .list_li5 {
    display: flex;
    border-bottom: 1px solid #ddd;
    align-items: center;
    padding: 0 32px;
  }
  .list_li6 {
    border-bottom: 22px solid #ddd;
    padding: 32px 32px;
  }

  .right_icon {
    padding-right: 40px;
    background: url("./../../../static/img/normal/right.png") no-repeat;
    background-position:700px;
    background-size: 12px;
  }

  .word {
    color: #666;
    font-size: 32px;
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
    font-size: 32px;
    box-sizing: border-box;
    width: 100%;
  }
  .add_inp7 {
    height: 88px;
    margin-bottom: 0;
    border: 0;
    outline: 0;
    font-size: 32px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
  }

  #RqstContent {
    border: 0;
    margin: 16px;
    font-size: 32px;
  }

  .upImg {
    width: 172px;
    height: 172px;
    display: inline-block;
    border-radius: 12px;
  }
  .submit{
    width: 750px;
    height: 88px;
    line-height: 88px;
    text-align: center;
    background: rgb(0, 132,236);
    color: #fff;
    font-size: 32px;
  }

  .imgList{
    display: inline-block;
    width: 172px;
    height: 172px;
    border-radius: 12px;
    margin-right: 10px;
    position: relative;
    overflow: hidden;
  }

  .imgList:nth-child(3n){
    margin-right: 0;
  }

  .imgList img{
    width: 172px;
    height: 172px;
  }


  .remove {
    position: absolute;
    right: -50px;
    top: -50px;
    background: #e4393c;
    color: #fff;
    font-size: 68px;
    width: 100px;
    height: 100px;
    text-align: center;
    transform: rotate(225deg);
    line-height: 45px;
  }

  .clickIcon{
    width: 36px;
    height: 36px;
  }
  .clickTip{
    color: #666;
    margin: 0 85px 0 13px;
    font-size: 32px;
  }
  .showName{
    font-size: 32px;
    margin-left: 32px;
  }
</style>
