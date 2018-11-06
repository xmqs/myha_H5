<template>
  <div>
    <div class="content">
      <div class="item" @click="toDetial(item.id)" v-for="item in list">
        <div class="title">
          <div class="name">{{item.voteName}}</div>
          <div class="state">进行中</div>
        </div>
        <div class="detail">
          <div class="line">
            <div class="lab">投票主题：</div>
            <div class="txt">{{item.voteTitle}}</div>
          </div>
          <div class="line">
            <div class="lab">投票内容：</div>
            <div class="txt">{{item.voteContent}}</div>
          </div>
          <div class="line">
            <div class="lab">投票时间：</div>
            <div class="txt">{{item.startDate}}</div>
          </div>
        </div>
      </div>
      <!--<div class="item" @click="toDetial">
        <div class="title">
          <div class="name">海安国际新城</div>
          <div class="state2">进行中</div>
        </div>
        <div class="detail">
          <div class="line">
            <div class="lab">投票主题：</div>
            <div class="txt">关于9栋物业维修资金增修电梯</div>
          </div>
          <div class="line">
            <div class="lab">投票内容：</div>
            <div class="txt">关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯</div>
          </div>
          <div class="line">
            <div class="lab">投票时间：</div>
            <div class="txt">2018年10月30日09:57:40</div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import {mapGetters} from 'vuex'
    export default {
      name: "tingList",
      data(){
          return{
            list:[]
          }
      },
      computed: {
        ...mapGetters([
          "getUserId",
          "getUserName",
          "getCardId",
          "getUserPhone",
        ])
      },
      mounted(){
        axios.get('/myha-server/property/voteList.do').then(res=>{
          this.list = res.data.data
        })
      },
      methods:{
        toDetial(id){
          this.$router.push("/managementthingDetail/"+id)
        }
      }
    }
</script>

<style scoped>
  .content{
    border-top: 16px solid #eee;
  }
  .item{
    border-bottom: 16px solid #eee;
  }
  .title{
    height: 88px;
    background: url("./../../../static/img/hotline/icon3.png") no-repeat;
    background-size: 50px;
    background-position: 16px center;
    display: flex;
    align-items: center;
    padding:0 32px 0 88px;
    font-size: 32px;
    justify-content: space-between;
    border-bottom: 1px dashed #eee;
  }
  .state{
    color: #3ad558;
  }
  .state2{
    color: #ccc;
  }
  .detail{
    color: #888;
    font-size: 28px;
    padding:8px 32px;
  }

  .line{
    display: flex;
    margin-bottom: 8px;
  }
  .lab{
    min-width: 180px;
  }
</style>
