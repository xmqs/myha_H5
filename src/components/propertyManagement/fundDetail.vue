<template>
  <div>
    <div class="tip">
      业主名称
    </div>
    <div class="detail">
      <span v-if="data">{{data.name}}</span>
      <span v-else>暂无</span>
    </div>
    <div class="tip">
      所在街道
    </div>
    <div class="detail">
      <span v-if="data">{{data.street}}</span>
      <span v-else>暂无</span>
    </div>
    <div class="tip">
      所在小区
    </div>
    <div class="detail">
      <span v-if="data">{{data.village}}</span>
      <span v-else>暂无</span>
    </div>
    <div class="tip">
      联系电话
    </div>
    <div class="detail">
      <span v-if="data">{{data.phone}}</span>
      <span v-else>暂无</span>
    </div>
    <div class="tip">
      物业基金余额
    </div>
    <div class="detail" style="color:#e4393c;">
      <span v-if="data">{{data.balance}}</span>
      <span v-else>暂无</span>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'
    export default {
      name: "detail",
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
      mounted(){
        axios.post('/myha-server/property/fundDetail.do',{
          userId:this.getUserId
        }).then(res=>{
          this.data = res.data.data
        })
      }
    }
</script>

<style scoped>
  .tip{
    background: #eee;
    padding:8px 32px;
    font-size: 28px;
    color: #666;
  }
  .detail{
    padding:16px 32px;
    font-size: 32px;
    color: #555;
  }
</style>
