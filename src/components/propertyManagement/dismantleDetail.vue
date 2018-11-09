<template>
  <div>
    <div class="tip">
      行政区名称
    </div>
    <div class="detail">
      {{data.areaName}}
    </div>
    <div class="tip">
      街道
    </div>
    <div class="detail">
      {{data.street }}
    </div>
    <div class="tip">
      小区名称
    </div>
    <div class="detail">
      {{data.communityName}}
    </div>
    <div class="tip">
      座落
    </div>
    <div class="detail">
      {{data.address}}
    </div>
    <div class="tip">
      门牌号
    </div>
    <div class="detail">
      {{data.houseNum}}
    </div>
    <div class="tip">
      公安栋号
    </div>
    <div class="detail">
      {{data.policeNum}}
    </div>
    <div class="tip">
      公安单元号
    </div>
    <div class="detail">
      {{data.policeUnitNum}}
    </div>
    <div class="tip">
      公安户室号
    </div>
    <div class="detail">
      {{data.policeRoomNum}}
    </div>
    <div class="tip">
      核准结果
    </div>
    <div class="detail">
      {{data.approvalNumber}}
    </div>
    <div class="tip">
      核准日期
    </div>
    <div class="detail">
      {{data.approvalDate}}
    </div>
    <div class="tip">
      核准项目
    </div>
    <div class="detail">
      {{data.approvalProjects}}
    </div>
    <div class="tip">
      核准结果
    </div>
    <div class="detail">
      {{data.approvalResults}}
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
        axios.post('/myha-server/houseRoomDemolition/showRoomInfo.do',{
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
