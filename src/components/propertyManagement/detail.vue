<template>
  <div>
    <div class="tip">
      企业名称
    </div>
    <div class="detail">
      {{data.name}}
    </div>
    <div class="tip">
      资质证编号
    </div>
    <div class="detail">
      {{data.quaNo}}
    </div>
    <div class="tip">
      法人代表
    </div>
    <div class="detail">
      {{data.corporation}}
    </div>
    <div class="tip">
      联系电话
    </div>
    <div class="detail">
      {{data.phone}}
    </div>
    <div class="tip">
      公司地址
    </div>
    <div class="detail">
      {{data.address}}
    </div>
    <div class="tip">
      工商注册所在区
    </div>
    <div class="detail">
      {{data.serviceArea}}
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
        axios.post("/myha-server/property/infoDetail.do",{
          id:this.$route.params.id
        }).then(res=>{
          this.data = res.data.data;
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
