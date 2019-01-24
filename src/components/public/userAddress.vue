<template>
  <div id="main">
    <!--地址列表-->
    <div id="addrList">
      <div v-for="item in list">
        <div class="left">
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
      ]),
    },
    methods: {
      //点击新增地址
      addAddr() {
        if(this.getCardId==""){
          mui.toast('获取用户信息失败，请稍后尝试',{ duration:'short', type:'div' });
          return;
        }
        this.$router.push("/politicalAudit/addAddr");
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
    },
    mounted() {

      let time = setInterval(()=>{
        if(this.getCardId!==""){
          clearInterval(time);
          axios.post("/myha-server/receiveInfo/queryReceiveInfoList.do",{
            userId:this.getUserId
          }).then(res=>{
            this.list = res.data.data.receiveInfoList;
          })
        }
      }, 200);
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
