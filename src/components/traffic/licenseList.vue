<template>
  <div>
    <div class="no_data" v-show="list.length!==0">
      <img src="./../../../static/img/normal/stop.png" alt="">
      <p>无扣分记录</p>
    </div>
    <div class="wall">
      <div class="scroll">
        <div class="cell">
          <div class="title">
            <div class="time">2018年10月31日09:51:04</div>
            <div class="number">扣<span class="red">3</span>分</div>
          </div>
          <div class="txt">
            <div>
              <span class="balck">违法地点：</span>
              <span class="gray">柳州东路（大桥北路至滨江大道段）</span>
            </div>
            <div>
              <span class="balck">违法时间：</span>
              <span class="gray">2018年10月31日09:56:50</span>
            </div>
            <div>
              <span class="balck">违法行为</span>
              <span class="gray">13441-违反禁令标志指示</span>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="title">
            <div class="time">2018年10月31日09:51:04</div>
            <div class="number">扣<span class="red">3</span>分</div>
          </div>
          <div class="txt">
            <div>
              <span class="balck">违法地点：</span>
              <span class="gray">柳州东路（大桥北路至滨江大道段）</span>
            </div>
            <div>
              <span class="balck">违法时间：</span>
              <span class="gray">2018年10月31日09:56:50</span>
            </div>
            <div>
              <span class="balck">违法行为</span>
              <span class="gray">13441-违反禁令标志指示</span>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="title">
            <div class="time">2018年10月31日09:51:04</div>
            <div class="number">扣<span class="red">3</span>分</div>
          </div>
          <div class="txt">
            <div>
              <span class="balck">违法地点：</span>
              <span class="gray">柳州东路（大桥北路至滨江大道段）</span>
            </div>
            <div>
              <span class="balck">违法时间：</span>
              <span class="gray">2018年10月31日09:56:50</span>
            </div>
            <div>
              <span class="balck">违法行为</span>
              <span class="gray">13441-违反禁令标志指示</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "licenseList",
      data(){
          return{
            list:[]
          }
      }
    }
</script>

<style scoped>
  .no_data{
    text-align: center;
    padding-top: 66px;
  }
  .no_data img{
    width: 200px;
    opacity: 0.3;
  }
  .no_data p{
    font-size: 36px;
  }

  .wall {
    width: 100%;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
  }

  .cell{
    padding: 0 32px;
    border-bottom: 1px solid #eee;
    border-top: 4px solid #eee;
  }
  .red{
    color: #e4393c;
  }
  .title{
    display: flex;
    justify-content: space-between;
    font-size: 28px;
    padding: 16px 0;
    border-bottom: 1px solid #eee;
  }
  .txt{
    font-size: 28px;
    padding: 16px 0;
  }
  .balck{
    color: #333;
  }
  .gray{
    color: #888;
  }
</style>
