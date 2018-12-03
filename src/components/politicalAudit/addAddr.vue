<template>
  <div id="main">
    <!--新增地址-->
    <div id="add">
      <div class="addrList">
        <li class="list_li">
          <div class="word">收货人</div>
          <input type="text" name="" placeholder="请填写收货人" class="add_inp" v-model="receiveInfo.receivePerson">
        </li>
        <li class="list_li">
          <div class="word">联系电话</div>
          <input type="text" name="" placeholder="请填写联系电话" class="add_inp" v-model="receiveInfo.contactPhone">
        </li>
        <li class="list_li">
          <div class="word">备用电话</div>
          <input type="text" name="" placeholder="请填写备用电话" class="add_inp" v-model="receiveInfo.backupTelephone">
        </li>
        <li class="list_li" :class="{'choseArea':receiveInfo.receiveStreetCode==''}">
          <div class="word">所在区域</div>
          <div type="text" name="" class="add_inp" @click="choseArea">{{receiveInfo.receiveStreetCode}}</div>
        </li>
        <li class="list_li">
          <textarea rows="3" cols="20" placeholder="请输入详细地址" v-model="receiveInfo.receiveAddress"></textarea>
        </li>

        <li class="list_li">
          <div class="word">设为默认地址</div>
          <div type="text" name="" class="add_inp">
            <div class="mui-switch mui-switch-mini" style="float: right" :class="{'mui-active':receiveInfo.isDefault=='1'}" @click="cut()">
              <div class="mui-switch-handle"></div>
            </div>
          </div>
        </li>
      </div>
      <!--按钮-->
      <div id="btn" @click="saveReceiveInfo">
        提交
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import './../../../static/js/mui.picker.min'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        isOn: false,
        area:'',
        receiveInfo:{
          backupTelephone: "",
          contactPhone: "",
          id: "",
          isDefault: "0",
          isDel: 0,
          receiveAddress: "",
          receivePerson: "",
          receiveStreetCode: "",
          userId:"",
        },
        streetList:[]
      }
    },
    computed: {
      ...mapGetters([
        "getUserId",
        "getUserName",
        "getCardId",
        "getUserPhone",
        "getAuditAddress",
      ]),
    },
    mounted() {


      this.receiveInfo.userId = this.getUserId;
      axios.post('/myha-server/haAreaInfo/queryHaAreaInfoList.do').then(res=>{
        this.streetList = res.data.data.haAreaInfoList;
      })

      if(this.$route.params.id){
        /*修改*/
        axios.post("/myha-server/receiveInfo/getOneReceiveInfo.do",{
          id:this.$route.params.id
        }).then(res=>{
          this.receiveInfo = res.data.data.receiveInfo;
        })
      }
    },
    methods: {
      cut() {
        if(this.receiveInfo.isDefault == '0'){
          this.receiveInfo.isDefault = "1";
        }else{
          this.receiveInfo.isDefault = "0";
        }
      },
      choseArea(){
        let vue = this;
        var picker = new mui.PopPicker();
        picker.setData(this.streetList);
        picker.show(function(SelectedItem) {
          console.log(SelectedItem);
          vue.receiveInfo.receiveStreetCode = "江苏 南通 海安市" + SelectedItem[0].text;
        })
      },
      saveReceiveInfo(){
        axios.post("/myha-server/receiveInfo/saveReceiveInfo.do",this.receiveInfo).then(res=>{
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
  #main {
    color: #666;
  }

  .addrList > div input {
    width: 70%;
    border: none;
    font-size: 36px;
    border-bottom: 1px solid #eee;
    height: 100px;
    margin-bottom: 0;
  }

  .addrList > div span {
    width: 30%;
    font-size: 36px;

  }

  .addrList > div img {
    height: 100px;

  }

  .addrList textarea {
    width: 100%;
    border: none;
    font-size: 32px;
    padding: 16px 32px;
  }

  .t1 {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 16px 36px;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #eee;
  }

  .t1 span {
    font-size: 32px;
  }

  /*地区选择弹出框*/
  .marsk {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 9;
    /*display: none;*/
  }


  #btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: #0778fb;
    color: #fff;
    font-size: 36px;
    text-align: center;
    line-height: 100px;
  }

  .list_li {
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    align-items: center;
  }

  .word {
    color: #666;
    font-size: 30px;
    padding-left: 32px;
    width: 100%;
    line-height: 98px;
    white-space: nowrap;
  }

  .add_inp {
    margin-bottom: 0;
    padding: 20px 16px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    font-size: 30px;
    box-sizing: border-box;
    width: 100%;
    background: transparent;
    line-height: 58px;
  }
  .choseArea{
    background: url("./../../../static/img/politicalAudit/d1.png") no-repeat;
    background-position: 654px center;
    background-size: 60px;
  }
</style>
