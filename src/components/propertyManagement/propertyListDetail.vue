<template>
  <div>
    <div class="content">
      <div class="item" :class="{'active':active}" @click="active=!active">
        <div class="title">
          <div>南京市欣木防水工程有限公司</div>
          <img src="./../../../static/img/normal/down_icon.png" alt="">
        </div>
        <div :class="active?'txt2':'txt'">
          <div>公司名称：南京市欣木防水工程有限公司</div>
          <div>法人代表：黄轩</div>
          <div>联系人：陆进</div>
          <div>联系电话：12302666984</div>
        </div>
      </div>
      <div class="item" :class="{'active':active2}" @click="active2=!active2">
        <div class="title">
          <div>南京市欣木防水工程有限公司</div>
          <img src="./../../../static/img/normal/down_icon.png" alt="">
        </div>
        <div :class="active2?'txt2':'txt'">
          <div>公司名称：南京市欣木防水工程有限公司</div>
          <div>法人代表：黄轩</div>
          <div>联系人：陆进</div>
          <div>联系电话：12302666984</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "propertyListDetail",
      data(){
          return{
            active:false,
            active2:false
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
    margin-bottom: 16px;
  }
  .item .title{
    width: 718px;
    min-height: 88px;
    margin:8px 0 0 16px;
    background-size: 12px;

    display: flex;
    padding-left: 32px;
    padding-right: 32px;

    justify-content: space-between;

    align-items: center;
    font-size: 30px;
    color: #666;

    background: #fff;
  }

  .title img{
    transition: all 0.25s;
    width: 30px;
  }
  .txt{
    display: none;

    font-size: 28px;
    color: #fff;
    background:#ec971f;
    width: 718px;
    margin-left: 16px;
    padding: 16px 32px;
  }

  .active .title div{
    color: #ec971f!important;
  }
  .active .title img{
    transform:rotate(180deg);
  }
  .txt2{
    font-size: 28px;
    color: #fff;
    background:#ec971f;
    width: 718px;
    margin-left: 16px;
    padding: 16px 32px;
  }
</style>
