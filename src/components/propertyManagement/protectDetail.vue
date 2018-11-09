<template>
  <div>
    <div class="tip">
      开发企业
    </div>
    <div class="detail">
      {{data.company}}
    </div>
    <div class="tip">
      项目地址
    </div>
    <div class="detail">
      {{data.projectAddress}}
    </div>
    <div class="tip">
      总面积
    </div>
    <div class="detail">
      {{data.totalArea}}
    </div>
    <div class="tip">
      总户型
    </div>
    <div class="detail">
      {{data.totalHouses}}
    </div>
    <div class="tip">
      土地使用证
    </div>
    <div class="detail">
      {{data.landUseCard}}
    </div>
    <div class="tip">
      土地用途
    </div>
    <div class="detail">
      {{data.landUse}}
    </div>
    <div class="tip">
      区属
    </div>
    <div class="detail">
      {{data.areaName}}
    </div>
    <div class="tip">
      项目介绍
    </div>
    <div class="detail">
      {{data.projectDescription}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "detail",
      data(){
        return{
          data:{}
        }
      },
      mounted(){
        axios.post('/myha-server/houseRoomSecurity/showRoomInfo.do',{
          id:this.$route.params.id
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
