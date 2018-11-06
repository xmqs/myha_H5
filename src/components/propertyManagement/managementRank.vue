<template>
  <div class="main">
    <div class="tab">
      <div class="title">
        <div>排名</div>
        <div>街道</div>
        <div>小区</div>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in list">
            <div>{{index+1}}</div>
            <div>{{item.address}}</div>
            <div>{{item.propertyCompany}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "managementRank",
    data(){
        return{
          list:[]
        }
    },
    mounted(){
      axios.get('/myha-server/property/rank.do').then(res=>{
        this.list = res.data.data;
      })
    }
  }
</script>

<style scoped>
  .main{
    padding: 16px;
  }
  .tab{
    width: 100%;
    box-shadow:  0 0 20px #aaa;
    border-radius: 4px;
  }
  .title{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #000;
    color: #fff;
    border-radius: 4px;
    font-size: 30px;
    padding: 16px 0;
  }
  .content li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 28px;
  }
  .content li div{
    text-align: center;
    display: inline-block;
    width: 238px;
    padding: 16px 6px;
  }
  .content li:nth-child(2n-1){
    background: rgb(227,227,227);
  }
</style>
