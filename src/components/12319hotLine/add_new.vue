<template>
  <div class="main">
    <ul class="list_ui">
      <li class="list_li6">
        <div v-for="(item,index) in data.mediasList" class="imgList">
          <div class="remove" @click="removeImg(index)">+</div>
          <img :src="item" class="avatar">
        </div>
        <img src="./../../../static/img/hotline/upImg.png" class="upImg" @click="myImg(1)">
      </li>
      <li class="list_li">
        <div class="word"> 主题</div>
        <input type="text" placeholder="请输入主题" class="add_inp" v-model="data.theme">
      </li>
      <li class="list_li">
        <div class="word"> 服务电话</div>
        <div class="add_inp2">
          <img src="./../../../static/img/hotline/phone.png" alt="" class="phone">
          <a href="tel:12319" class="tel">12319</a>
        </div>
      </li>
      <li class="list_li right_icon" @click="choseType()">
        <div class="word"> 分类</div>
        <div class="add_inp2">{{data.recTypeName}}</div>
      </li>
      <li class="list_li right_icon" @click="choseAdd()">
        <div class="word"> 所在地区</div>
        <div class="add_inp2">{{data.districtName}}</div>
      </li>
      <li class="list_li2">
        <div class="word"> 具体位置</div>
      </li>
      <li class="list_li">
        <input type="text" name="" value="" placeholder="请输入您的位置，具体到门牌号" class="add_inp" v-model="data.address">
      </li>
      <li class="list_li2">
        <div class="word"> 描述</div>
      </li>
      <li class="list_li4">
          <textarea name="" id="RqstContent" rows="6" cols="" placeholder="请输入描述内容(500字以内)" v-model="data.eventDesc">

          </textarea>
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
        typeList:[],
        area:[],
        canadd:true,
        data:{
          theme:"",
          eventDesc: "",
          address: "",
          coordinateX: 1,
          coordinateY: 1,
          lontitude: 1,
          latitude: 1,

          districtName: "请选择所在区域",
          streetName: "",
          communityName: "",

          recTypeID: 1,
          recTypeName:"根据城管职能选择",

          humanName: "",
          cellphone: "",
          idCard:"",

          mediasList: []
        },
      }
    },
    mounted(){
      this.data.humanName = this.getUserName;
      this.data.cellphone = this.getUserPhone;
      this.data.idCard = this.getCardId;

      setInterval(()=>{
        if (sessionStorage.getItem("userPosition")){
          this.data.coordinateX = sessionStorage.getItem("userPosition").split(",")[0];
          this.data.coordinateY = sessionStorage.getItem("userPosition").split(",")[1];
        }
      },1000)

      let time = setInterval(()=>{
        if(sessionStorage.getItem("positionName")!==""&&this.data.address==""){
          clearInterval(time);
          this.data.address = sessionStorage.getItem("positionName");
        }
      }, 200);

      setTimeout(()=>{
        clearInterval(time);
      },5000)


      axios.get('/third-server/12319/caseType.do').then(res=>{
        this.typeList = res.data.data;
      })


      axios.get('/third-server/12319/area12319.do').then(res=>{
        this.area = res.data.data;
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
        picker.setData(this.area);
        picker.show(function(SelectedItem) {
          vue.data.districtName = SelectedItem[0].text;
        })
      },

      choseType(){
        let vue = this;
        var picker = new mui.PopPicker({
          layer: 1
        });
        picker.setData(this.typeList);
        picker.show(function(SelectedItem) {
          vue.data.recTypeID = SelectedItem[0].value;
          vue.data.recTypeName = SelectedItem[0].text;
        })
      },
      add(){
        if(!this.canadd){
          return
        }
         if(this.data.mediasList.length==0){
           mui.toast('请上传图片',{ duration:'short', type:'div' });
           return
         }
        if(this.data.theme==""){
          mui.toast('请填写标题',{ duration:'short', type:'div' });
          return
        }
        if(this.data.recTypeName=="根据城管职能选择"){
          mui.toast('请选择分类',{ duration:'short', type:'div' });
          return
        }
        if(this.data.districtName=="请选择所在区域"||this.data.districtName==""){
          mui.toast('请选择所在区域',{ duration:'short', type:'div' });
          return
        }

        if(this.data.address==""){
          mui.toast('请输入您的位置',{ duration:'short', type:'div' });
          return
        }
        if(this.data.eventDesc==""){
          mui.toast('请输入描述内容',{ duration:'short', type:'div' });
          return
        }

        this.canadd = false;
        axios.post("/third-server/12319/report.do",this.data).then(res=>{
          if(res.data.result==1){
            this.canadd = true;
            mui.toast('提交成功',{ duration:'short', type:'div' });
            this.$router.replace("/addSuccess19");
          }
        }).catch(err=> {
          this.canadd = true;
          mui.toast("出了点小差错，请稍后尝试",{ duration:'short', type:'div' });
        })
      },
      removeImg(n){
        this.data.mediasList.splice(n,1);
      },
      myImg(id) {

        var oldUrl = window.location.href;
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          window.location.href += '#uploadImgByClient?imgNum=0&serverurl=http://app.haian.gov.cn/file-server/upload/upload.do&selectPhotoType=photoAll&isEdit=0';
        }

        if (isiOS) {
          window.location.href = '#uploadImgByClient?imgNum=0&serverurl=http://app.haian.gov.cn/file-server/upload/upload.do&selectPhotoType=photoAll&isEdit=0';
        }

        var that = this;

        window.uploadImgOver = function (str) {
          that.data.mediasList.push(JSON.parse(str).data);
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
    padding: 16px 32px 88px 32px;
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
    position: fixed;
    bottom: 0;
    left: 0;
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
  .phone{
    width: 30px;
    position: relative;
    top: 4px;
  }
  .tel{
    color: #0d9bf2;
    font-size: 32px;
  }
</style>
