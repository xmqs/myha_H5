<template>
  <div>
    <div class="searchList">
      <div :class="{'active':page==1}" @click="page=1">待处理</div>
      <div :class="{'active':page==2}" @click="page=2">已完成</div>
    </div>
    <div class="wall">
      <div class="scroll">
        <div v-show="nodata" class="nodata">
          <img src="./../../../static/img/hotline/nodata.png" alt="">
          <p>暂无数据</p>
        </div>
        <div class="cell" v-for="item in list1" @click="toDetail(item.id)" v-show="page==1">
          <div class="time_line">
            {{item.createTime}}
          </div>
          <div class="title">
            {{item.appealIdea}}
          </div>
          <div class="text">
            {{item.appealContent}}
          </div>
          <div class="state">
            当前状态：<span class="blue">处理中</span>
            <div class="sTip">处理中</div>
          </div>
        </div>

        <div class="cell" v-for="item in list2" @click="toDetail(item.id)" v-show="page==2">
          <div class="time_line">
            {{item.createTime}}
          </div>
          <div class="title">
            {{item.appealIdea}}
          </div>
          <div class="text">
            {{item.appealContent}}
          </div>
          <div class="state">
            当前状态：<span class="blue">已完成</span>
            <div class="sTip2">已完成</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "list",
    data(){
      return{
        page:1,
        list1:[],
        list2:[]
      }
    },
    computed:{
      nodata(){
        return ((this.page==1&&this.list1.length==0)||(this.page==2&&this.list2.length==0))
      }
    },
    methods:{
      toDetail(id){
        this.$router.push("/hotLine45/detail/"+id);
      }
    },
    mounted(){
      axios.post("/myha-server/12345/showProcess.do",{
        userId:"340403199401030017"
      }).then(res=>{
        this.list1 = res.data.data.processing;
        this.list2 = res.data.data.processingDone;
      })
    }
  }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    height: 92px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #eee;
  }

  .searchList div{
    width: 40%;
    font-size: 34px;
    text-align: center;
    line-height: 88px;
  }
  .searchList div.active{
    color: #0d9bf2;
    border-bottom: 4px solid #0d9bf2;
  }

  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  .wall {
    width: 100%;
    padding-top:92px;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
  }


  .time_line{
    background: #f2f2f2;
    padding: 16px 32px;
    font-size: 28px;
  }


  .cell{
    overflow: hidden;
    border-bottom: 1px solid #eee;
  }

  .blue{
    color: #0d9bf2;
  }
  .title{
    white-space:nowrap; text-overflow:ellipsis;
    /* for internet explorer */
    overflow:hidden;
    width:700px;
    display:block;
    line-height: 48px;
    padding: 16px 0 16px 32px;
    font-size: 30px;
  }
  .text{
    display:block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 0px 32px 16px 32px;
    font-size: 30px;
    color: #ccc;
    line-height: 60px;
  }

  .state{
    height: 90px;
    display: flex;
    align-items: center;
    padding: 0 32px;
    position: relative;
    font-size: 30px;
  }
  .sTip{
    position: absolute;
    right: -110px;
    bottom: -110px;
    background: #ef8355;
    color: #fff;
    height: 200px;
    width: 200px;
    text-align: center;
    font-size: 28px;

    transform:rotate(-45deg);
  }
  .sTip2{
    position: absolute;
    right: -110px;
    bottom: -110px;
    background: #28da33;
    color: #fff;
    height: 200px;
    width: 200px;
    text-align: center;
    font-size: 28px;

    transform:rotate(-45deg);
  }

  .nodata{
    text-align: center;
    padding-top: 66px;
  }
  .nodata img{
    width: 240px;
  }
  .nodata p{
    font-size: 28px;
    margin-top: 16px;
  }

</style>
