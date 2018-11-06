<template>
  <div class="main">
    <ul class="list_ui">
      <li class="list_li">
        <div class="word">姓名</div>
        <div class="add_inp2">{{data.name}}</div>
      </li>
      <li class="list_li">
        <div class="word">移动电话</div>
        <input type="text" name="" value="" placeholder="请输入移动电话" class="add_inp" v-model="data.mobile">
      </li>
      <li class="list_li">
        <div class="word">固定电话</div>
        <input type="text" name="" value="" placeholder="请输入固定电话" class="add_inp" v-model="data.phone">
      </li>
      <li class="list_li">
        <div class="word">常用地址</div>
        <input type="text" name="" value="" placeholder="请输入常用地址" class="add_inp" v-model="data.address">
      </li>
      <li class="list_li">
        <div class="word">车牌号码1</div>
        <input type="text" name="" value="" placeholder="请输入相关信息" class="add_inp" v-model="data.carCode1">
      </li>
      <li class="list_li">
        <div class="word">车牌号码2</div>
        <input type="text" name="" value="" placeholder="请输入相关信息" class="add_inp" v-model="data.carCode2">
      </li>
      <li class="list_li right_icon" @click="changeMan">
        <div class="word">性别</div>
        <div class="add_inp2">{{data.sex}}</div>
      </li>
      <li class="list_li">
        <div class="word">年龄</div>
        <input type="text" name="" value="" placeholder="请输入年龄" class="add_inp" v-model="data.age">
      </li>
      <li class="list_li">
        <div class="word">血型</div>
        <input type="text" name="" value="" placeholder="请输入血型" class="add_inp" v-model="data.bloodType">
      </li>
      <li class="list_li">
        <div class="word">体重</div>
        <input type="text" name="" value="" placeholder="(Kg)" class="add_inp" v-model="data.weight">
      </li>
      <li class="list_li2">
        <div class="word">病史</div>
      </li>
      <li class="list_li4">
          <textarea name="" class="RqstContent" rows="6" cols="" placeholder="请输入病史" v-model="data.medicalHistory">

          </textarea>
      </li>
      <li class="list_li2">
        <div class="word">其他病史</div>
      </li>
      <li class="list_li4">
          <textarea name="" class="RqstContent" rows="6" cols="" placeholder="请输入其他病史" v-model="data.otherHistory">

          </textarea>
      </li>
      <li class="list_li2">
        <div class="word">过敏史</div>
      </li>
      <li class="list_li4">
          <textarea name="" class="RqstContent" rows="6" cols="" placeholder="请输入过敏史" v-model="data.allergicHistory">

          </textarea>
      </li>
      <li class="list_li">
        <div class="word">联系人1</div>
        <input type="text" name="" value="" placeholder="请输入相关信息" class="add_inp" v-model="data.contacts1">
      </li>
      <li class="list_li">
        <div class="word">联系人2</div>
        <input type="text" name="" value="" placeholder="请输入相关信息" class="add_inp" v-model="data.contacts2">
      </li>
      <li class="list_li">
        <div class="word">联系人3</div>
        <input type="text" name="" value="" placeholder="请输入相关信息" class="add_inp" v-model="data.contacts3">
      </li>
    </ul>
    <div class="submit" @click="add">
      提交
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"
  import './../../../static/js/mui.picker.min'
    export default {
      name: "userInfo",
      data(){
        return{
          data:{
            name:"",
            sex:"",
            age:"",
            phone:"",
            mobile:"",
            weight:"",
            bloodType:"",
            address:"",
            carCode1:"",
            carCode2:"",
            medicalHistory:"",
            otherHistory:"",
            allergicHistory:"",
            contacts1:"",
            contacts2:"",
            contacts3:"",
            userId:""
          }
        }
      },
      mounted(){




        axios.post('/myha-server/firstAid/firstAidDetail.do',{
          userId:this.getUserId
        }).then(res=>{
          this.data = res.data.data;

          this.data.name = this.getUserName;
          this.data.mobile = this.getUserPhone;
          this.data.userId = this.getUserId;
        })

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
        changeMan(){
          let vue = this;
          let picker = new mui.PopPicker();
          picker.setData([{
            value: "first",
            text: "男士"
          }, {
            value: "second",
            text: "女士"
          }]),
          picker.show(function(SelectedItem) {
            vue.data.sex = SelectedItem[0].text;
          })
        },
        add(){
          axios.post("/myha-server/firstAid/saveInformation.do",this.data).then(res=>{
            if(res.data.result==1){
              mui.toast('提交成功',{ duration:'short', type:'div' });
              this.$router.go(-1);
            }
          })
        }
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

  .RqstContent {
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
