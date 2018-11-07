<template>
  <div>
    <div class="list" v-for="item in list">
      <div class="title">
        <div class="icon">
          <img src="./../../../static/img/management/listIcon.png" alt="">合同编号{{item.contractNum}}</div>
        <div class="red">{{item.contractStatus}}</div>
      </div>
      <div class="title">
        <div class="t1">
          坐落
        </div>
        <div>
          {{item.address}}
        </div>
      </div>
      <div class="title">
        <div class="t1">
          不动房产号
        </div>
        <div>
          123456789
        </div>
      </div>
      <div class="title">
        <div class="t1">
          转让方
        </div>
        <div>
          王克庆
        </div>
      </div>
      <div class="title">
        <div class="t1">
          受让方
        </div>
        <div>
          李温州
        </div>
      </div>
      <div class="title">
        <div class="t1">
          签约日期
        </div>
        <div>
          2018年11月2日
        </div>
      </div>
      <div class="title">
        <div class="t1">
          合同总价
        </div>
        <div>
          123万
        </div>
      </div>
      <div class="show">
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
          list:[]
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
        axios.post("/myha-server/houseRegistration/showRegis.do",{
          pageNo:"1",
          pageSize:"100",
          userId:this.getUserId
        }).then(res=>{
          this.list = res.data.data;
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
  .list{
    border-top: 16px solid #eee;
    padding-bottom: 16px;
  }
</style>
