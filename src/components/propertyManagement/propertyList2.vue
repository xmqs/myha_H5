<template>
    <div>
      <div class="content">
        <div class="item" @click="toDetail('A')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>水果</span>
        </div>
        <div class="item" @click="toDetail('B')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>修车</span>
        </div>
        <div class="item" @click="toDetail('C')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>修鞋</span>
        </div>
        <div class="item" @click="toDetail('D')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>修锁</span>
        </div>
        <div class="item" @click="toDetail('E')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>刻章</span>
        </div>
        <div class="item" @click="toDetail('F')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>蔬菜</span>
        </div>
        <div class="item" @click="toDetail('G')">
          <img src="./../../../static/img/management/listIcon.png" alt="">
          <span>修理</span>
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
          this.$router.push("/managementpropertyListDetail2/"+type);
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
