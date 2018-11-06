<template>
  <div>
    <div class="content">
      <div class="item" @click="toDetail(item.url)" v-for="item in data">
        <img src="./../../../static/img/management/listIcon.png" alt="">
        <span>
          {{item.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import axiso from "axios"
  export default {
    name: "topropertyList",
    data(){
      return{
        data:[]
      }
    },
    methods:{
      toDetail(url){
        window.location = url;
      },
    },
    mounted(){

      axiso.get('/myha-server/property/question.do').then(res=>{
        this.data = res.data.data;
      })
    }
  }
</script>

<style scoped>
  .content{
    background: #f1f1f1;
    padding: 8px 0;
  }
  .item{
    width: 718px;
    min-height: 88px;
    margin:8px 0 22px 16px;
    background: #fff url("./../../../static/img/normal/right.png") no-repeat ;
    background-position: 96% center;
    background-size: 12px;

    display: flex;
    padding-left: 16px;

    align-items: center;
    font-size: 32px;
    color: #666;
  }
  .item img{
    width: 50px;
    height: 50px;
  }

  .item span{
    padding:0 40px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 30px;
  }
</style>
