<template>
  <div class="main">
    <img src="./../../../static/img/hotline/addSuccess.png" alt="" class="successImg">
    <p class="t1">您的随拍已提交成功</p>
    <p class="t2">随拍诉求正在快马加鞭处理中，可点击“<span class="myList" @click="toMyList">我的随拍</span>”查看进度</p>
  </div>
</template>

<script>
    export default {
        name: "addSuccess",
      methods:{
        toMyList(){
          this.$router.replace("/hotLine19/list");
        }
      }
    }
</script>

<style scoped>
  .main{
    text-align: center;
    padding: 100px 32px 0 32px;
  }
  .successImg{
    width: 200px;
  }
  .t1{
    font-size: 36px;
    text-align: center;
    color: #666;
    margin-bottom: 12px;
  }
  .t2{
    font-size: 30px;
    text-align: center;
    color: #666;
  }
  .myList{
    font-size: 30px;
    color: #0d9bf2;
  }
</style>
