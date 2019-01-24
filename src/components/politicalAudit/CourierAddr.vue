<template>
  <div id="main">
    <!--地址列表-->
    <div id="addrList">
      <div v-for="item in list">
        <div class="left" @click="choseWay(item)">
          <div>
            <div>{{item.receivePerson}}</div>
            <div>{{item.contactPhone}}</div>
            <div class="ico" v-show="item.isDefault==1">默认</div>
          </div>
          <div>{{item.receiveStreetCode}} {{item.receiveAddress}}</div>
        </div>
        <div class="right">
          <div>
            <img class="controlBtn" src="../../../static/img/politicalAudit/Group 21@2x.png" @click="updateAddr(item.id)"/>
          </div>
          <div>
            <img class="controlBtn" src="../../../static/img/politicalAudit/Group 13@2x.png" @click="delAddr(item.id)"/>
          </div>
        </div>
      </div>
    </div>
    <!--按钮-->
    <div id="btn" @click="addAddr()">
      添加新地址
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"
  export default {
    data() {
      return {
        address:{},
        list:[]
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
    methods: {
      //点击新增地址
      addAddr() {
        this.$router.push("/politicalAudit/addAddr")
      },
      updateAddr(id) {
        this.$router.push("/politicalAudit/addAddr/"+id)
      },
      delAddr(id) {
        let vue = this;
        mui.confirm('是否删除该条地址','提示',function (res) {
          if(res.index==1){
            axios.post("/myha-server/receiveInfo/deleteReceiveInfo.do",{
              id:id
            }).then(res=>{
              if(res.data.result==1){
                mui.toast('删除成功',{ duration:'short', type:'div' });
                axios.post("/myha-server/receiveInfo/queryReceiveInfoList.do",{
                  userId:vue.getUserId
                }).then(res=>{
                  vue.list = res.data.data.receiveInfoList;
                })
              }
            })

          }

        })
      },
      choseWay(address){

        console.log(address);
        let backAddress = {
          fromAddress:{
            rcvCity: "",//	收件人城市
            rcvCoutry: "",//		收件人区县
            rcvName: "",//		收件人姓名
            rcvPhone: "",//		收件人电话
            rcvProv: "",//		收件人省份
            rcvStreet:""//		收件人详细地址
          },
          /*接收地址*/
          backAddress:{
            sendCityM: "",//	发件区域城市
            sendCountryM: "",//	发件区域区县
            sendProvM: "",//	发件区域省份
            sendStrectM: ""//	发件详细地址
          },
        }

        backAddress.fromAddress.rcvName = this.getAuditAddress.fromAddress.rcvName;
        backAddress.fromAddress.rcvPhone = this.getAuditAddress.fromAddress.rcvPhone;
        backAddress.fromAddress.rcvStreet = this.getAuditAddress.fromAddress.rcvStreet;

        backAddress.backAddress.mobileM = this.getAuditAddress.backAddress.mobileM;
        backAddress.backAddress.sendNameM = this.getAuditAddress.backAddress.sendNameM;
        backAddress.backAddress.sendStrectM = this.getAuditAddress.backAddress.sendStrectM;

        if(this.$route.params.type=='page3'){

          backAddress.backAddress.sendNameM = address.receivePerson;
          backAddress.backAddress.mobileM = address.contactPhone;
          backAddress.backAddress.sendStrectM = address.receiveStreetCode + " " +address.receiveAddress;

          this.$store.commit("setAuditAddress",backAddress);
          /*选择上门地址*/
        }else if(this.$route.params.type=='page1'){
          /*选择首页地址*/
          this.$store.commit("setPageAddress",address.receiveStreetCode +" "+ address.receiveAddress);
        }else{
          /*选择寄送地址*/
          backAddress.fromAddress.rcvName = address.receivePerson;
          backAddress.fromAddress.rcvPhone = address.contactPhone;
          backAddress.fromAddress.rcvStreet = address.receiveStreetCode + " " +address.receiveAddress;

          this.$store.commit("setAuditAddress",backAddress);
        }
       this.$router.go(-1);
      }

    },
    mounted() {
      this.address = this.getAuditAddress;

      axios.post("/myha-server/receiveInfo/queryReceiveInfoList.do",{
        userId:this.getUserId
      }).then(res=>{
        this.list = res.data.data.receiveInfoList;
      })
      /*if (this.$route.params.type == "page3") {
        /!*选择上门取件地址*!/

      }else{
        /!*选择寄送地址*!/


      }*/
    },

  }
</script>

<style scoped>
  #addrList{
    padding-bottom: 100px;
  }
  /*地址列表*/
  #addrList > div {
    width: 100%;
    padding: 16px 36px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    min-height: 165px;
    align-items: center;
  }

  .right {
    display: flex;
    width: 25%;
    justify-content: flex-end;
  }

  .left > div, .left span {
    font-size: 30px;
  }

  .left {
    width: 75%;
  }

  .left > div:first-child {
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 12px;
  }

  .left > div:first-child > div {
    font-size: 32px;
    line-height: 44px;
    margin-right: 32px;
  }

  .ico {
    display: inline-block;
    background: #f47d07;
    font-size: 26px !important;
    width: 90px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    margin-left: 10px;
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

  .controlBtn {
    width: 50px;
    height: 50px;
    margin-left: 15px;
  }
</style>
