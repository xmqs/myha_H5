<template>
  <div>
    <div class="tips">
      车辆信息 <span class="red">（仅限绑定小型车辆与新能源汽车）</span>
    </div>
    <ul class="main">
      <li class="list_li">
        <div class="word">车牌号码</div>
        <input type="text" name="" value="" placeholder="请输入车牌号码"  class="add_inp" v-model="data.plateNumber">
      </li>
      <li class="list_li no_bottom_line">
        <div class="word">车主信息</div>
        <input type="text" name="" value="" placeholder="请输入车主信息"  class="add_inp" v-model="data.carOwner">
      </li>
    </ul>
    <div class="tips">
      提交行驶证信息
    </div>
    <div class="changeTab">
      <div :class="{'active': data.type==1}" @click="data.type=1">方式一</div>
      <div :class="{'active': data.type==2}" @click="data.type=2">方式二</div>
    </div>
    <div v-show="data.type==1" class="imgPage">
      <img :src="data.carImg" alt="" @click="myImg">
      <div>上传行驶证与车辆的合照</div>
      <div>车辆上的车牌号和行驶证上的车牌号一致</div>
      <div>行驶证上的信息要清晰</div>
    </div>
    <div v-show="data.type==2" class="txtPage">
      <ul class="main">
        <li class="list_li">
          <div class="word">车架号</div>
          <input type="text" name="" value="" placeholder="请输入车架号"  class="add_inp"  v-model="data.vinNo">
        </li>
        <li class="list_li">
          <div class="word">发动机号</div>
          <input type="text" name="" value="" placeholder="请输入发动机号"  class="add_inp"  v-model="data.motorNo">
        </li>
      </ul>
    </div>

    <div class="button_list">
      <div class="button" @click="binding">确定添加</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"
    export default {
      name: "addNewCar",
      data(){
        return{
          data:{
            type:1,
            plateNumber:"",
            carOwner:"",
            carImg  :'./../../../static/img/normal/i6.png',
            vinNo:"",
            motorNo:"",
            userId:''
          },
          addIng:false,
          oldImg:"./../../../static/img/normal/i6.png"
        }
      },
      computed: {
        ...mapGetters([
          "getUserId",
          "getUserName",
          "getCardId",
          "getUserPhone",
        ])
      },
      mounted(){
        this.data.userId = this.getUserId;
      },
      methods:{
        myImg() {
          let oldUrl = window.location.href;
          let u = navigator.userAgent;
          let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
          let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

          if (isAndroid) {
            window.location.href += '#uploadImgByClient?imgNum=0&serverurl=http://58.221.196.5:11001/user/myhaUpload&selectPhotoType=photoAll&isEdit=0';
          }

          if (isiOS) {
            window.location.href = '#uploadImgByClient?imgNum=0&serverurl=http://58.221.196.5:11001/user/myhaUpload&selectPhotoType=photoAll&isEdit=0';
          }

          let that = this;

          window.uploadImgOver = function (str) {
            that.data.carImg = JSON.parse(str).data;
            that.oldImg = JSON.parse(str).data;
          }

          if (isAndroid) {
            this.$router.go(-1);
          }

        },
        binding(){
          if(this.addIng){
            return
          }
          if(this.data.plateNumber==""){
            mui.toast('请输入车牌号码',{ duration:'short', type:'div' });
            return
          }
          if(this.data.carOwner==""){
            mui.toast('请输入车主信息',{ duration:'short', type:'div' });
            return
          }
          if(this.data.type==1&&this.data.carImg=="./../../../static/img/normal/i6.png"){
            mui.toast('请上传驾驶证与车辆和合照',{ duration:'short', type:'div' });
            return
          }

          if(this.data.type==2&&this.data.vinNo==""){
            mui.toast('请输入车架号',{ duration:'short', type:'div' });
            return
          }
          if(this.data.type==2&&this.data.motorNo==""){
            mui.toast('请输入发动机号',{ duration:'short', type:'div' });
            return
          }
          if(this.data.type==1){
            this.data.vinNo=""
            this.data.motorNo=""
          }else{
            this.data.carImg=""
          }
          this.addIng = true;
          axios.post("/myha-server/vehicle/binding.do",this.data).then(res=>{
            if(res.data.result==1){
              this.addIng = false;
              this.data.carImg = this.oldImg;
              mui.toast('绑定成功',{ duration:'short', type:'div' });
              this.$router.go(-1);
            }else{
              this.addIng = false;
              this.data.carImg = this.oldImg;
              mui.toast(res.data.errMsg,{ duration:'short', type:'div' });
            }


          }).catch(err=>{
            this.addIng = false;
            this.data.carImg = this.oldImg;
          })
        }
      }
    }
</script>

<style scoped>
  .tips{
    color: #666;
    padding: 16px 32px;
    background: #f1f1f1;
  }
  .red{
    color: #e4393c;
    font-size: 32px;
  }

  .main{
    padding:  0 32px;
  }

  .list_li {
    border-bottom: 1px solid #c8c7cc;
    display: flex;
    align-items: center;
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

  .no_bottom_line{
    border-bottom: 0;
  }

  .changeTab{
    background: #f1f1f1;
    display: flex;
    justify-content: space-between;
  }

  .changeTab div{
    flex-grow: 1;
    text-align: center;
    font-size: 32px;
    padding: 12px 0;
    border: 1px solid #f1f1f1;
    border-bottom: 0;
  }

  .active{
    border-radius: 4px;
    border: 1px solid #ddd!important;
    border-bottom: 0!important;
    background: #fff;
  }

  .imgPage{
    text-align: center;
    padding: 36px 0;
    color: #ec971f;
    font-size: 28px;
  }
  .imgPage img{
    border: 1px solid #eee;
    width: 380px;
    height: 380px;
  }
  .button{
    width: 686px;
    height: 88px;
    line-height: 88px;
    margin-left: 32px;
    border-radius: 6px;
    background: #ec971f;
    text-align: center;
    color: #fff;
    font-size: 32px;
  }
  .txtPage{
    padding: 36px 0;
  }
</style>
