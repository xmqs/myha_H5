<template>
  <div>
    <div class="tip">
      行政区名称
    </div>
    <div class="detail">
      玄武区
    </div>
    <div class="tip">
      街道
    </div>
    <div class="detail">
      暂无记录
    </div>
    <div class="tip">
      小区名称
    </div>
    <div class="detail">
      公教一村
    </div>
    <div class="tip">
      座落
    </div>
    <div class="detail">
      北京东路51号28栋404
    </div>
    <div class="tip">
      门牌号
    </div>
    <div class="detail">
      暂无记录
    </div>
    <div class="tip">
      公安栋号
    </div>
    <div class="detail">
      28
    </div>
    <div class="tip">
      公安单元号
    </div>
    <div class="detail">
      暂无记录
    </div>
    <div class="tip">
      公安户室号
    </div>
    <div class="detail">
      404
    </div>
    <div class="tip">
      核准结果
    </div>
    <div class="detail">
      NJASDI-ASF-23-004215552156112
    </div>
    <div class="tip">
      核准日期
    </div>
    <div class="detail">
      2018-11-2
    </div>
    <div class="tip">
      核准项目
    </div>
    <div class="detail">
      1、拆除阳台与卧室之间的窗间墙，形成宽1660mmX高2400mm的门洞。
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
