<template>
    <div>
      <div class="content">
        <div class="item" @click="toDetail('FS')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>防水维修</span>
        </div>
        <div class="item" @click="toDetail('FWJZ')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>房屋建筑维修</span>
        </div>
        <div class="item" @click="toDetail('XF')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>消防维修</span>
        </div>
        <div class="item" @click="toDetail('ZNH')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>智能化维修</span>
        </div>
        <div class="item" @click="toDetail('DT')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>电梯维修</span>
        </div>
        <div class="item" @click="toDetail('ZZZX')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>造价咨询服务</span>
        </div>
        <div class="item" @click="toDetail('JLFW')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>监理服务</span>
        </div>
        <div class="item" @click="toDetail('ZSDT')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>增设电梯设计服务</span>
        </div>
        <div class="item" @click="toDetail('DTJD')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>电梯井道加固</span>
        </div>
        <div class="item" @click="toDetail('DTSB')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
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
        toDetail(type){
          this.$router.push("/managementpropertyListDetail/"+type);
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
    width: 50px;
    height: 50px;
  }

  .item span{
    padding:0 40px 0 12px;
    font-size: 32px;
  }
</style>
