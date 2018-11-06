<template>
  <div>
    <div class="main">
      <div class="main_1">
        <div class="ele">
          <div class="tit">
            <div class="cntit">档案编号</div>
          </div>
          <div class="elecontent">
            <div class="inps2">姓名</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">事发区域</div>
          </div>
          <div class="elecontent">
            <div class="inps2">123123</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">驾照编号</div>
          </div>
          <div class="elecontent">
            <div class="inps2">62222222233312215555</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">剩余分值</div>
          </div>
          <div class="elecontent">
            <div class="inps2">12分</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">初次领证时间</div>
          </div>
          <div class="elecontent">
            <div class="inps2">2018-10-30</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">下次换证时间</div>
          </div>
          <div class="elecontent">
            <div class="inps2">2018-10-30</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">驾照状态</div>
          </div>
          <div class="elecontent">
            <div class="inps2">正常</div>
          </div>
        </div>
        <div class="ele right_icon" @click="toDetail">
          <div class="tit">
            <div class="cntit">扣分记录</div>
          </div>
          <div class="elecontent">
            <div class="inps2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      name: "license",
      computed: {
        ...mapGetters([
          "getUserId",
          "getUserName",
          "getCardId",
          "getUserPhone",
        ])
      },
      methods:{
        toDetail(){
          this.$router.push("/trafficlicenseList")
        }
      }
    }
</script>

<style scoped>
  .main {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: #f5f5f5;
  }

  .main_1 {
    background: #fff;
  }

  .main_2 {
    padding: 16px 0 0 0;
    background: #f5f5f5;
  }

  .ele {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 32px;
    border-bottom: 1px solid #efefef;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
  }

  .ele4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    border-bottom: 1px solid #efefef;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    line-height: 48px;
    color: rgb(102, 102, 102);
  }
  .ele5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    line-height: 48px;
    color: rgba(51, 51, 51, 1);
  }
  .ele6 {
    padding: 16px 32px;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    border-bottom: 1px solid #efefef;
    line-height: 48px;
    color: rgba(51, 51, 51, 1);
  }

  .tit {
    color: #333;
    max-width: 35%;
  }

  .cntit {
    font-size: 32px;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
  }

  .elecontent {
    width: 60%;
  }

  .inps {
    width: 100%;
    border: 0;
    outline: none;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    color: #333;
    text-align: right;
    margin: 0;
    min-height: 86px;
    padding: 0 16px 0 0;
  }

  .inps2 {
    width: 100%;
    min-height: 88px;
    text-align: right;
    line-height: 88px;
    word-wrap: break-word;
  }

  .title {
    height: 70px;
    background: rgba(255, 247, 234, 1);
    line-height: 70px;
    font-size: 26px;
    color: rgba(255, 181, 64, 1);
    padding: 0 32px;
  }

  .tip {
    height: 70px;
    background: #F5F5F5;
    line-height: 70px;
    font-size: 26px;
    color: rgba(170, 170, 170, 1);
    padding: 0 32px;
  }

  .item {
    width: 750px;
    background: #fff;
    display: flex;

    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 35px 0 35px 32px;
  }

  .item_main {
    width: 450px;
    border-right: 1px solid #EEEEEE;
  }

  .item_main p {
    font-size: 30px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 52px;
  }

  .item_state {
    flex-grow: 1;
    text-align: center;

    font-size: 30px;
    font-weight: 400;
  }

  .right_icon {
    padding-right: 40px;
    background: url("./../../../static/img/normal/right.png") right no-repeat;
    background-size: 12px;
  }
</style>
