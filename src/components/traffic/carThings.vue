<template>
  <div>
    <div class="searchList">
      <div class="carId">苏A9MN98</div>
      <div class="tab">
        <div class="tab1" :class="{'active':page==1}" @click="page=1">未处理</div>
        <div class="tab1" :class="{'active':page==2}" @click="page=2">已处理</div>
      </div>
    </div>
    <div class="wall">
      <div class="scroll">
        <div class="page" v-show="page==1">
          <div class="item">
            <div class="title">处罚决定书编号：123456789789</div>
            <div class="txt">
              <p>违法地点：<span>长深高速</span></p>
              <p>违法时间：<span>2018年11月1日16:39:11</span></p>
              <p>违法行为：<span>违法行为违法行为违法行为违法行为违法行为违法行为违法行为违法行为违法行为</span></p>
              <p>计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分：<span>长深高速</span></p>
              <p>处罚时间：<span>2018年11月1日16:40:26</span></p>
              <p>缴费时间：<span>2018年11月1日16:40:29</span></p>
            </div>
            <div class="coast">
              <p>缴费时间：<span>50元</span></p>
            </div>
          </div>
          <div class="item">
            <div class="title">处罚决定书编号：123456789789</div>
            <div class="txt">
              <p>违法地点：<span>长深高速</span></p>
              <p>违法时间：<span>2018年11月1日16:39:11</span></p>
              <p>违法行为：<span>违法行为违法行为违法行为违法行为违法行为违法行为违法行为违法行为违法行为</span></p>
              <p>计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分：<span>长深高速</span></p>
              <p>处罚时间：<span>2018年11月1日16:40:26</span></p>
              <p>缴费时间：<span>2018年11月1日16:40:29</span></p>
            </div>
            <div class="coast">
              <p>缴费时间：<span>50元</span></p>
            </div>
          </div>
          <div class="item">
            <div class="title">处罚决定书编号：123456789789</div>
            <div class="txt">
              <p>违法地点：<span>长深高速</span></p>
              <p>违法时间：<span>2018年11月1日16:39:11</span></p>
              <p>违法行为：<span>违法行为违法行为违法行为违法行为违法行为违法行为违法行为违法行为违法行为</span></p>
              <p>计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分：<span>长深高速</span></p>
              <p>处罚时间：<span>2018年11月1日16:40:26</span></p>
              <p>缴费时间：<span>2018年11月1日16:40:29</span></p>
            </div>
            <div class="coast">
              <p>缴费时间：<span>50元</span></p>
            </div>
          </div>
        </div>
        <div class="page" v-show="page==2">
          <div class="item">
            <div class="title">处罚决定书编号：123456789789</div>
            <div class="txt">
              <p>违法地点：<span>长深高速</span></p>
              <p>违法时间：<span>2018年11月1日16:39:11</span></p>
              <p>违法行为：<span>违法行为违法行为违法行为违法行为违法行为违法行为违法行为违法行为违法行为</span></p>
              <p>计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分：<span>长深高速</span></p>
              <p>处罚时间：<span>2018年11月1日16:40:26</span></p>
              <p>缴费时间：<span>2018年11月1日16:40:29</span></p>
            </div>
            <div class="coast">
              <p>缴费时间：<span>50元</span></p>
            </div>
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
        page:1
      }
    }
  }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    height: 176px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 999;
    border-bottom: 1px solid #eee;
    line-height: 88px;
  }


  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  .wall {
    width: 100%;
    padding-top:177px;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
  }

  .carId{
    color: #0d9bf2;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    padding-left: 32px;
  }
  .tab{
    display: flex;
    padding: 0 32px;
    justify-content: space-between;
    line-height: 83px;
  }
  .tab1{
    flex-grow: 1;
    text-align: center;
    border-bottom: 4px solid #fff;
  }
  .active{
    color: #ec971f;
    border-bottom: 4px solid #ec971f;
  }

  .item{
    margin-top: 16px;
  }
  .title{
    color: #fff;
    background: #ec971f;
    padding: 16px 32px;
  }
  .txt{
    padding: 8px 32px;
  }
  .txt p{
    margin-bottom: 16px;
  }
  .txt p span{
    color: #333;
  }
  .coast{
    padding: 16px 32px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .coast span{
    color: #ec971f;
  }
</style>
