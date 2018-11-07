<template>
  <div>
    <div class="itme" v-for="item in list">
      <div class="title">{{item.pointName}}</div>
      <div class="line">{{item.pointAddress}}</div>
      <div class="line">{{item.pointOpenTime}}</div>
      <div class="line">{{item.pointBusiness}}</div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
      name: "bicycleList",
      data(){
          return{
            list:[]
          }
      },
      mounted(){
        axios.get('/myha-server/common/getBikeCardPoint.do').then(res=>{
          this.list = res.data.data;
        })
      }
    }
</script>

<style scoped>
  .itme{
    padding: 16px 32px;
    border-top: 1px solid #eee;
    border-bottom: 9px solid #eee;
  }
  .title{
    font-size: 30px;
    color: #4caf50;
  }
  .line{
    font-size: 28px;
    color: #333;
    margin-top: 10px;
  }
</style>
