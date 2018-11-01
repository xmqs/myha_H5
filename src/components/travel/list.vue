<template>
  <div>
    <ul class="list">
      <li v-for="item in list" @click="toDetail(item.url)">
        <div class="img">
          <img src="./../../../static/img/travel/demo.jpg" alt="">
        </div>
        <div class="detail">
          <div class="title">{{item.sourceLabel}}</div>
          <div class="content1">{{item.sourceIndex}}暂时缺少描述文字（填充显示效果）</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "list",
      data(){
          return{
            list:[]
          }
      },
      mounted(){
        axios.get("/myha-server/public/catalog/querySource.do?catalogAlias="+this.$route.params.key+"&sourceType=03").then(res=>{
          this.list = res.data.data;
        })
      },
      methods:{
        toDetail(url){
          window.location = url;
        },
      }
    }
</script>

<style scoped>
  .list{
    padding: 0 32px;
  }
  .list li{
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 16px 0;
    align-items: center;
  }
  .img img{
    width: 160px;
    height: 120px;
  }
  .img{
    display: flex;
    align-items: center;
  }
  .detail{
    font-size: 28px;
    padding-left: 16px;
  }
  .title{
    width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content1{
    width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    color: #aaa;
  }
</style>
