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
          <div class="cell" @click="toDetail">
            <div class="title">江东新村公寓（嘉和园）1</div>
            <div class="content">
              <span>鼓楼区</span>
            </div>
          </div>
          <div class="cell" @click="toDetail">
            <div class="title">江东新村公寓（嘉和园）2</div>
            <div class="content">
              <span>鼓楼区</span>
            </div>
          </div>
          <div class="cell" @click="toDetail">
            <div class="title">江东新村公寓（嘉和园）3</div>
            <div class="content">
              <span>鼓楼区</span>
            </div>
          </div>
          <div class="cell" @click="toDetail" >
            <div class="title">江东新村公寓（嘉和园）4</div>
            <div class="content">
              <span>鼓楼区</span>
            </div>
          </div>
          <div class="cell">
            <div class="title">江东新村公寓（嘉和园）5</div>
            <div class="content">
              <span>鼓楼区</span>
            </div>
          </div>
          <div class="cell">
            <div class="title">江东新村公寓（嘉和园）6</div>
            <div class="content">
              <span>鼓楼区</span>
            </div>
          </div>
          <div class="cell">
            <div class="title">江东新村公寓（嘉和园）7</div>
            <div class="content">
              <span>鼓楼区</span>
            </div>
          </div>
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
    },
    methods:{
      toDetail(){
        this.$router.push("/protectDetail/:id");
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
    padding: 16px 0;
    padding-right: 40px;
    background: url("./../../../static/img/normal/right.png")  right no-repeat ;
    background-size: 12px;
    font-size: 32px;
  }
  .title{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 32px;
    color: #666;
  }
  .content{
    font-size: 28px;
    color: #999;
    padding-top: 8px;
  }
  .number{
    float: right;
  }
  .content::after{
    display: table;
    content: "";
    clear: both;
  }
</style>
