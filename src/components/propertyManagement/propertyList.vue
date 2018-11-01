<template>
    <div>
      <div class="content">
        <div class="item" @click="toDetail">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>防水维修</span>
        </div>
        <div class="item" @click="toDetail">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>房屋建筑维修</span>
        </div>
        <div class="item" @click="toDetail">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>消防维修</span>
        </div>
        <div class="item" @click="toDetail">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>智能化维修</span>
        </div>
        <div class="item" @click="toDetail">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>电梯维修</span>
        </div>
        <div class="item">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>造价咨询服务</span>
        </div>
        <div class="item">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>监理服务</span>
        </div>
        <div class="item">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>增设电梯设计服务</span>
        </div>
        <div class="item">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>电梯井道加固</span>
        </div>
        <div class="item">
          <img src="./../../../static/img/hotline/icon3.png" alt="">
          <span>电梯设备采集及安装服务</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "topropertyList",
      data(){
        return{
          data:[]
        }
      },
      methods:{
        toDetail(){
          this.$router.push("/managementpropertyListDetail/:type");
        }
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
    margin:8px 0 24px 16px;
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
    width: 56px;
    height: 56px;
  }

  .item span{
    padding:0 40px 0 12px;
  }
</style>
