<template>
  <div>
    <div class="list">
      <div class="title">
        <div class="icon">
          <img src="./../../../static/img/management/listIcon.png" alt="">合同编号{{data.contractNum}}</div>
        <div class="red">{{data.contractStatus}}</div>
      </div>
      <div class="title">
        <div class="t1">
          坐落
        </div>
        <div>
          {{data.address}}
        </div>
      </div>
      <div class="title">
        <div class="t1">
          不动房产号
        </div>
        <div>
          {{data.estateUnitNum}}
        </div>
      </div>
      <div class="title">
        <div class="t1">
          转让方
        </div>
        <div>
          {{data.transferor}}
        </div>
      </div>
      <div class="title">
        <div class="t1">
          受让方
        </div>
        <div>
          {{data.transferee}}
        </div>
      </div>
      <div class="title">
        <div class="t1">
          签约日期
        </div>
        <div>
          {{data.signDate}}
        </div>
      </div>
      <div class="title">
        <div class="t1">
          合同总价
        </div>
        <div>
          {{data.contractPrice}}万
        </div>
      </div>
      <div class="show" @click="pdf(data.bill)">
        查看票据
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"
    export default {
      name: "business",
      data(){
        return{
          data:{}
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
      methods:{
        pdf(url){
          window.location  = "http://58.221.196.5:11001/haian/pdf/pdf.html?url="+url;
        }
      },
      mounted(){
        axios.post("/myha-server/houseRegistration/showRegisInfo.do",{
          id:this.$route.params.id
        }).then(res=>{
          this.data = res.data.data;
        })
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
    align-items: center;
    padding: 16px 32px;
    border-bottom: 1px solid #eee;
    font-size: 32px;
    justify-content: space-between;
  }
  .icon{
    display: flex;
    align-items: center;
  }
  .icon img{
    width: 50px;
    height: 50px;
  }
  .red{
    color: #e4393c;
  }
  .t1{
    min-width: 200px;
    white-space: nowrap;
  }
  .show{
    width: 686px;
    height: 88px;
    border-radius: 6px;
    background: #ec971f;
    color: #fff;
    text-align: center;
    line-height: 88px;
    font-size: 32px;
    margin: 16px 0 0 32px;
  }
</style>
