<template>
  <div class="main">
    <div class="tab">
      <div class="title">
        <span>物业管理</span>
      </div>
      <div class="tab_list">
        <div class="tab_item" @click="toThingList">
          <img src="./../../../static/img/management/icon11.png" alt="">
          <div>业主议事</div>
        </div>
        <div class="tab_item">
          <img src="./../../../static/img/management/icon12.png" alt="">
          <div>物业 <br>常见问题</div>
        </div>
      </div>
      <div class="tab_list">
        <div class="tab_item" @click="toList">
          <img src="./../../../static/img/management/icon13.png" alt="">
          <div>小区物业<br>基本信息</div>
        </div>
        <div class="tab_item" @click="toRank">
          <img src="./../../../static/img/management/icon14.png" alt="">
          <div>物业公司<br>排名</div>
        </div>
      </div>
      <div class="tab_list">
        <div class="tab_item" @click="topropertyList">
          <img src="./../../../static/img/management/icon15.png" alt="">
          <div>便民机构<br>查询</div>
        </div>
        <div class="tab_item">
          <img src="./../../../static/img/management/icon16.png" alt="">
          <div>维修基金<br>查询表决</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "index",
      methods:{
        toRank(){
          this.$router.push("/managementRank");
        },
        toList(){
          this.$router.push("/propertyManagement/list");
        },
        toThingList(){
          this.$router.push("/managementtingList");
        },
        topropertyList(){
          this.$router.push("/managementpropertyList");
        }
      }
    }
</script>

<style scoped>
  .main{
    padding: 16px;
  }
  .tab{
    width: 100%;
    box-shadow:  0 0 20px #aaa;
  }
  .title{
    padding: 16px 32px;
    border-bottom: 1px solid #eee;
  }
  .title span{
    font-size: 32px;
    border-left: 8px solid #0d9bf2;
    padding:2px 12px;
  }

  .tab_list{
    display: flex;
    border-bottom: 1px solid #eee;
  }

  .tab_item{
    width: 358px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 26px 0 26px 32px;
    font-size: 32px;
    color: #333;
  }
  .tab_list .tab_item:first-child{
    border-right: 1px solid #eee;
  }
  .tab_item img{
    width: 66px;
    height: 66px;
    margin-right: 22px;
  }
</style>
