<template>
  <div>
    <div class="tips">申请人</div>
    <ul class="list_ui">
      <li class="list_li">
        <div class="word"><span class="must">*</span>姓名</div>
        <input type="text" name="" value="" placeholder="请填写姓名"  class="add_inp" v-model="userName">
      </li>
      <li class="list_li right_icon" @click="toBirthIdCard">
        <div class="word"><span class="must">*</span>身份证</div>
        <div class="add_inp3">
          <div>{{innerChildInfo.idCard.number}}</div>
          <div style="color: #e48b38" v-if="innerChildInfo.idCard.front==''||innerChildInfo.idCard.back==''">请上传附件</div>
        </div>
      </li>
      <li class="list_li">
        <div class="word"><span class="must">*</span>手机号码</div>
        <input type="number" name="" value="" placeholder="请填写手机号码"  class="add_inp" v-model="phone">
      </li>
      <li class="list_li right_icon">
        <div class="word"><span class="must">*</span>居住地</div>
        <div class="add_inp2">{{innerChildInfo.address.address.join(" ")}} {{innerChildInfo.address.detail}}</div>
      </li>
      <li class="list_li right_icon">
        <div class="word"><span class="must">*</span>户籍地</div>
        <div class="add_inp2">南京市南京市南京市南京市南京市南京市南京市南京市南京市南京市南京市南京市南京市南京市南京市南京市</div>
      </li>
      <li class="list_li">
        <div class="word"><span class="must">*</span>工作单位</div>
        <input type="text" name="" value="" placeholder="请填写工作单位"  class="add_inp">
      </li>
      <li class="list_li right_icon">
        <div class="word"><span class="must">*</span>婚姻状况</div>
        <div class="add_inp2">123123</div>
      </li>
      <li class="list_li right_icon" style="border: 0">
        <div class="word">本人生育史</div>
      </li>
    </ul>
    <div class="tips">配偶</div>
    <ul class="list_ui bottom88">
      <li class="list_li">
        <div class="word"><span class="must">*</span>姓名</div>
        <input type="text" name="" value="" placeholder="请填写姓名"  class="add_inp">
      </li>
      <li class="list_li right_icon">
        <div class="word"><span class="must">*</span>身份证</div>
        <div>
          123
          a12312
        </div>
      </li>
      <li class="list_li">
        <div class="word"><span class="must">*</span>手机号码</div>
        <div class="add_inp2">123</div>
      </li>
      <li class="list_li right_icon">
        <div class="word"><span class="must">*</span>居住地</div>
        <div class="add_inp2">345</div>
      </li>
      <li class="list_li right_icon">
        <div class="word"><span class="must">*</span>户籍地</div>
        <div class="add_inp2">345</div>
      </li>
      <li class="list_li">
        <div class="word"><span class="must">*</span>工作单位</div>
        <input type="number" name="" value="" placeholder="请填写工作单位"  class="add_inp">
      </li>
      <li class="list_li right_icon">
        <div class="word"><span class="must">*</span>婚姻状况</div>
        <div class="add_inp2">123123</div>
      </li>
      <li class="list_li right_icon" style="border: 0">
        <div class="word">配偶生育史</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      name: "birthAdd",
      computed: {
        ...mapGetters([
          "getUserId",
          "getUserName",
          "getCardId",
          "getUserPhone",
          "getChildInfo"
        ])
      },
      data(){
        return{
          innerChildInfo:{
            idCard:{
              number:'',
              front:'',
              back:''
            },
            address:{
              address:['','',''],
              detail:""
            },
            origin:{
              address:['','','',''],
              detail:'',
              picture:''
            },
            marriage:{
              state:'',
              time:'',
              number:'',
              picture:''
            },
            history:[],
            spouseIdCard:{
              number:'',
              front:'',
              back:''
            },
            spouseAddress:{
              address:['','',''],
              detail:""
            },
            spouseOrigin:{
              address:['','','',''],
              detail:'',
              picture:''
            },
            spouseMarriage:{
              state:'',
              time:'',
              number:'',
              picture:''
            },
            spouseHistory:[],
          },
          userName:"",
          phone:''
        }
      },
      mounted(){
        /*let childInfo = this.getChildInfo;
        this.$store.commit("setChildInfo",childInfo);*/
        /**/
        this.userName = this.getUserName;
        this.phone = this.getUserPhone;

        this.innerChildInfo.idCard.number = this.getCardId;
        this.$store.commit("setChildInfo",this.innerChildInfo);


      },

      methods:{
        toBirthIdCard(){
          this.$router.push("/birthIdCard");
        }
      },
      activated(){
        this.innerChildInfo = this.getChildInfo;
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
  .tips{
    background: #f5f5f5;
    font-size: 28px;
    padding:16px 32px;
  }

  .right_icon {
    padding-right: 40px;
    background: url("./../../../static/img/normal/right.png") right no-repeat;
    background-size: 12px;
  }

  .word {
    color: #666;
    font-size: 32px;
    min-width: 180px;
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
    line-height: 48px;
    margin-bottom: 0;
    padding: 20px 16px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 32px;
    box-sizing: border-box;
    max-width: 490px;

    word-break:break-all;
    word-wrap:break-word;
    color: #666;
  }
  .add_inp3 {
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
    text-align: right;
  }

  .must{
    color: #e4393c;
    margin-right: 4px;
  }
  .bottom88{
    margin-bottom: 88px;
  }
</style>
