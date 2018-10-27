<template>
  <div>
    <div class="searchList">
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post">
        <input type="search" id="input" class="search" placeholder="请输入搜索内容" v-model="searchKey">
      </form>
    </div>
    <div class="wall">
      <div class="scroll">
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
        <a href="tel:10086" class="cell">
          <div class="name">号码查询电话</div>
          <div class="phone">10086</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "scrollList",
    data(){
      return{
        searchKey:''
      }
    }
  }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    height: 88px;
    width: 100%;
    background-color: #EFEFF4;
    padding-top: 14px;
    box-sizing: border-box;
    z-index: 999;
  }

  .search {
    width: 686px;
    height: 60px;
    border-radius: 10px;
    background: #fff url("./../../../static/img/hotline/searchicon.png") no-repeat;
    background-size: 30px;
    background-position: 20px center;
    margin: 0 auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    border: 0;
    outline: 0;
    box-sizing: border-box;
    padding-left: 60px;
  }

  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  .wall {
    width: 100%;
    padding-top:88px;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
    padding: 0 32px;
  }
  .cell{
    border-bottom: 1px solid #eee;
    padding: 22px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;

    align-items: center;
    justify-content: space-between;
  }

  .name {
    font-size: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .phone {
    text-align: right;
    color: #008ef3;
    font-size: 32px;
  }
</style>
