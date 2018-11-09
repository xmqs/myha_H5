<template>
  <div>
    <div class="searchList">
      <div>操作指南</div>
      <div @click="toAdd">生育登记</div>
    </div>
    <div class="wall">
      <div class="scroll">
        <div class="noData">
          暂无申请记录
        </div>
        <div class="item">
          <div class="title">
            <img src="./../../../static/img/hostipal/icon2.png" alt="" class="icon">
            <div>生育服务证编号</div>
          </div>
          <div class="innerItem">
            <div class="t1">
              <div>申请人：张斯旻</div>
              <div>申请时间：2018年11月8日</div>
              <div>开具时间：2018年11月8日</div>
            </div>
            <div class="state">
              已保存
            </div>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <img src="./../../../static/img/hostipal/icon2.png" alt="" class="icon">
            <div>生育服务证编号</div>
          </div>
          <div class="innerItem">
            <div class="t1">
              <div>申请人：张斯旻</div>
              <div>申请时间：2018年11月8日</div>
              <div>开具时间：2018年11月8日</div>
            </div>
            <div class="state">
              已保存
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import {mapGetters} from 'vuex'
    export default {
      name: "index",
      data(){
          return{
            list:[]
          }
      },
      computed: {
        ...mapGetters([
          "getUserId"
        ])
      },
      methods:{
        toAdd(){
          let btnArray = ['取消', '确定'];
          let vue = this;
          mui.confirm(
            "智慧海安只能登记一孩和二孩，超过二孩请到线下办理<br><span class='color_red'>请确保夫妻双方始终用同一账号申请</span>",
            "提示",
            btnArray,
            function (e) {
              if(e.index==1){
                vue.$router.push('/birthAdd');
              }
            }
          )
        }
      }
    }
</script>

<style scoped>
  .searchList {
    position: fixed;
    bottom: 0;
    height: 88px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 100;

    display: flex;

  }

  .wall {
    width: 100%;
    padding-bottom:88px;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
    padding: 0 32px;
  }
  .cell_right_side{
    border-bottom: 1px solid #eee;
    padding: 22px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 40px;
    background: url("./../../../static/img/normal/right.png")  right no-repeat ;
    background-size: 12px;
    font-size: 32px;
  }

  .searchList div{
    background: #ec971f;
    color: #fff;
    line-height: 88px;
    height: 88px;
    text-align: center;
    flex-grow: 1;
    font-size: 32px;
  }
  .searchList div:first-child{
    border-right: 4px solid #e97836;
  }

  .noData{
    text-align: center;
    padding-top: 36px;
    font-size: 36px;
    color: #999;
  }
  .item{
    max-width: 686px;
    border: 2px solid #eee;
    border-top: 4px solid #ec971f;
    border-radius: 6px;
    margin-bottom: 16px;
    margin-top: 8px;
    box-shadow: #999 2px 2px 6px;
    color: #666;
  }
  .title{
    display: flex;
    align-items: center;
    padding: 16px;
    font-size: 28px;
  }
  .icon{
    width: 36px;
    height: 36px;
    margin-right: 12px;
  }
  .innerItem{
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .t1{
    flex-grow: 1;
    border-right: 1px solid #eee;
  }
  .t1 div{
    padding: 8px 0;
  }
  .state{
    margin: 32px;
    border-radius: 8px;
    color: #0d9bf2;
    padding: 2px 14px;
    border: 2px solid #0d9bf2;
  }
</style>
<style>
  .color_red{
    color: #e4393c;
  }
</style>
