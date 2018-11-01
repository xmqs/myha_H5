<template>
  <div>
    <div class="tip">
      企业名称
    </div>
    <div class="detail">
      南京市建伟物业管理有限公
    </div>
    <div class="tip">
      资质证编号
    </div>
    <div class="detail">
      苏物业宁字2028号
    </div>
    <div class="tip">
      法人代表
    </div>
    <div class="detail">
      张国安
    </div>
    <div class="tip">
      联系电话
    </div>
    <div class="detail">
      12345667895
    </div>
    <div class="tip">
      公司地址
    </div>
    <div class="detail">
      江苏省南京市玄武区
    </div>
    <div class="tip">
      工商注册所在区
    </div>
    <div class="detail">
      玄武区
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
