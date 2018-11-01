<template>
  <div>
    <div class="searchList">
      <div @click="showPage(1)">
        <span>时间</span>
      </div>
      <div @click="showPage(2)">
        <span>机构</span>
      </div>
      <div @click="showPage(3)">
        <span>类型</span>
      </div>
    </div>
    <div class="list2" v-show="page==1">
      <div @click="page=0">
        <span>全部</span>
      </div>
      <div @click="page=0">
        <span>近3个月</span>
      </div>
      <div @click="page=0">
        <span>近6个月</span>
      </div>
      <div @click="page=0">
        <span>近1年</span>
      </div>
    </div>
    <div class="list2" v-show="page==2">
      <div @click="page=0">
        <span>全部</span>
      </div>
      <div @click="page=0">
        <span>南京市江宁医院</span>
      </div>
      <div @click="page=0">
        <span>白家湖社区卫生服务中心</span>
      </div>
      <div @click="page=0">
        <span>南京市江宁医院</span>
      </div>
      <div @click="page=0">
        <span>白家湖社区卫生服务中心</span>
      </div>
      <div @click="page=0">
        <span>南京市江宁医院</span>
      </div>
      <div @click="page=0">
        <span>白家湖社区卫生服务中心</span>
      </div>
      <div @click="page=0">
        <span>南京市江宁医院</span>
      </div>
    </div>
    <div class="list2" v-show="page==3">
      <div @click="page=0">
        <span>全部</span>
      </div>
      <div @click="page=0">
        <span>门诊</span>
      </div>
      <div @click="page=0">
        <span>急诊</span>
      </div>
      <div @click="page=0">
        <span>住院</span>
      </div>
    </div>
    <div class="wall">
      <div class="scroll">
        <div class="cell">
          <img src="./../../../static/img/publicIcon/育苗通.png" alt="">
          <div class="txt">
            <div class="title">谷里社区卫生服务中心</div>
            <div class="line1">报告：<span class="blue">检查，检验，心电</span></div>
            <div class="line1">业务时间：<span class="blue">2018-10-30</span></div>
          </div>
        </div>
        <div class="cell">
          <img src="./../../../static/img/publicIcon/育苗通.png" alt="">
          <div class="txt">
            <div class="title">谷里社区卫生服务中心</div>
            <div class="line1">报告：<span class="blue">检查，检验，心电</span></div>
            <div class="line1">业务时间：<span class="blue">2018-10-30</span></div>
          </div>
        </div>
        <div class="cell">
          <img src="./../../../static/img/publicIcon/育苗通.png" alt="">
          <div class="txt">
            <div class="title">谷里社区卫生服务中心</div>
            <div class="line1">报告：<span class="blue">检查，检验，心电</span></div>
            <div class="line1">业务时间：<span class="blue">2018-10-30</span></div>
          </div>
        </div>
        <div class="cell">
          <img src="./../../../static/img/publicIcon/育苗通.png" alt="">
          <div class="txt">
            <div class="title">谷里社区卫生服务中心</div>
            <div class="line1">报告：<span class="blue">检查，检验，心电</span></div>
            <div class="line1">业务时间：<span class="blue">2018-10-30</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return{
          page:0
        }
      },
      methods:{
        showPage(n){
          this.page = n
        }
      }
    }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;

    display: flex;
    justify-content: space-between;
    font-size: 30px;

    border-bottom: 1px solid #eee;
    background: #fff;
  }
  .list2 {
    position: fixed;
    top: 80px;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
    font-size: 30px;
    background:#fff;
    border-bottom: 1px solid #eee;

    padding: 0 32px;

    max-height: 1150px;
    overflow-y: scroll;
  }
  .searchList div{
    flex-grow: 1;
    text-align: center;
    padding-right: 60px;
    line-height: 80px;
    background: url("./../../../static/img/normal/xia.png") no-repeat;
    background-position: 65% center;
    background-size: 40px;
  }

  .wall {
    width: 100%;
    padding-top:81px;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
  }

  .list2 div{
    height: 88px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .list2 div:last-child{
    border: 0;
  }


  .cell{
    display: flex;
    padding: 0 32px;
    align-items: center;
  }
  .cell img{
    width: 100px;
    margin: 36px;
  }
  .cell .txt{
    flex-grow: 1;
    border-bottom: 1px solid #eee;
    padding: 20px 0;
  }

  .title{
    font-size: 36px;
  }
  .line1{
    font-size: 24px;
    margin-top: 12px;
  }
  .blue{
    color: #18B4FE;
  }
</style>
