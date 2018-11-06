<template>
  <div>
    <div class="tip">
      开发企业
    </div>
    <div class="detail">
      南京市建伟物业管理有限公
    </div>
    <div class="tip">
      项目地址
    </div>
    <div class="detail">
      建邺区莲花村
    </div>
    <div class="tip">
      总面积
    </div>
    <div class="detail">
      暂无数据
    </div>
    <div class="tip">
      总户型
    </div>
    <div class="detail">
      4115
    </div>
    <div class="tip">
      土地使用证
    </div>
    <div class="detail">
      宁建国用（2009）第10073号
    </div>
    <div class="tip">
      土地用途
    </div>
    <div class="detail">
      住宅
    </div>
    <div class="tip">
      区属
    </div>
    <div class="detail">
      建邺区
    </div>
    <div class="tip">
      项目介绍
    </div>
    <div class="detail">
      百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。
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
