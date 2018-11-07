<template>
  <div>
    <div class="no_data" v-show="list.length==0">
      <img src="./../../../static/img/normal/stop.png" alt="">
      <p>无扣分记录</p>
    </div>
    <div class="wall">
      <div class="scroll">
        <div class="cell" v-for="item in list">
          <div class="title">
            <div class="time">{{item.makeTime}}</div>
            <div class="number">扣<span class="red">{{item.plusScore}}</span>分</div>
          </div>
          <div class="txt">
            <div>
              <span class="balck">违法地点：</span>
              <span class="gray">{{item.violationAddress}}</span>
            </div>
            <div>
              <span class="balck">违法时间：</span>
              <span class="gray">{{item.violationTime}}</span>
            </div>
            <div>
              <span class="balck">违法行为：</span>
              <span class="gray">{{item.violationAction}}</span>
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
      name: "licenseList",
      computed: {
        ...mapGetters([
          "getUserId",
          "getUserName",
          "getCardId",
          "getUserPhone",
        ])
      },
      data(){
          return{
            list:[]
          }
      },
      mounted(){
        axios.post("/myha-server/driver/getLicenseScore.do",{
          drivingNo:this.$route.params.id
        }).then(res=>{
          this.list = res.data.data;
        })
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
    font-size: 32px;
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
