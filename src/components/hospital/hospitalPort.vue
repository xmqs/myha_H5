<template>
  <div>
    <div class="searchList">
      <div @click="showPage(1)">
        <span>时间</span>
      </div>
      <div @click="showPage(2)">
        <span>机构</span>
      </div>
      <div @click="showPage(3)">
        <span>类型</span>
      </div>
    </div>
    <div class="list2" v-show="page==1">
      <div @click="change(0,0)">
        <span :class="{'blue':time==0}">全部</span>
      </div>
      <div @click="change(0,1)">
        <span :class="{'blue':time==1}">近3个月</span>
      </div>
      <div @click="change(0,2)">
        <span :class="{'blue':time==2}">近6个月</span>
      </div>
      <div @click="change(0,3)">
        <span :class="{'blue':time==3}">近1年</span>
      </div>
    </div>
    <div class="list2" v-show="page==2">
      <div @click="change(1,'')" :class="{'blue':instName==''}">
        <span>全部</span>
      </div>
      <div @click="change(1,item)" v-for="item in hospital" :class="{'blue':instName==item}">
        <span>{{item}}</span>
      </div>
    </div>
    <div class="list2" v-show="page==3">
      <div @click="change(2,0)" :class="{'blue':type==0}">
        <span>全部</span>
      </div>
      <div @click="change(2,1)" :class="{'blue':type==1}">
        <span>门诊</span>
      </div>
      <div @click="change(2,2)" :class="{'blue':type==2}">
        <span>急诊</span>
      </div>
      <div @click="change(2,3)" :class="{'blue':type==3}">
        <span>住院</span>
      </div>
    </div>
    <div class="wall">
      <div class="scroll">
        <p v-if="!list" style="text-align: center;font-size: 20px;padding-top: 16px;height: 300px">
          暂无信息
        </p>
        <div v-if="list" class="cell" v-for="item in list" @click="toDetail(item.id)">
          <img src="./../../../static/img/hostipal/icon4.png" alt="">
          <div class="txt">
            <div class="title">{{item.instName}}</div>
            <div class="line1">报告：<span class="blue">{{item.report}}</span></div>
            <div class="line1">业务时间：<span class="blue">{{item.businessDate}}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"
    export default {
      name: "index",
      data(){
        return{
          page:0,
          hospital:[],
          instName:"",
          time:'',
          type:'',
          list:[],
        }
      },
      methods:{
        toDetail(id){
          this.$router.push("/hospital/portDetail/"+id);
        },
        showPage(n){
          this.page = n
        },
        change(type,n){
          this.page = 0;
          if (type == 0){
            this.time = n
          }
          if (type == 1){
            this.instName = n
          }
          if (type == 2){
            this.type = n
          }

          this.showReport();
        },
        showReport(){
          axios.post("/myha-server/medical/showReport.do",{
            instName:this.instName,
            pageNo:1,
            pageSize:20,
            time:this.time,
            type:this.type,
            userId:this.getUserId
          }).then(res=>{
            this.list = res.data.data;
          })
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
        axios.post('/myha-server/medical/showInstName.do',{
          userId:this.getUserId
        }).then(res=>{
          this.hospital = res.data.data;
          this.showReport();
        })
      }
    }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;

    display: flex;
    justify-content: space-between;
    font-size: 30px;

    border-bottom: 1px solid #eee;
    background: #fff;
  }
  .list2 {
    position: fixed;
    top: 80px;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
    font-size: 30px;
    background:#fff;
    border-bottom: 1px solid #eee;

    padding: 0 32px;

    max-height: 1150px;
    overflow-y: scroll;
  }
  .searchList div{
    flex-grow: 1;
    text-align: center;
    padding-right: 60px;
    line-height: 80px;
    background: url("./../../../static/img/normal/xia.png") no-repeat;
    background-position: 65% center;
    background-size: 40px;
  }

  .wall {
    width: 100%;
    padding-top:81px;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
  }

  .list2 div{
    height: 88px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .list2 div:last-child{
    border: 0;
  }


  .cell{
    display: flex;
    padding: 0 32px;
    align-items: center;
  }
  .cell img{
    width: 100px;
    margin: 36px 36px 36px 24px;
  }
  .cell .txt{
    flex-grow: 1;
    border-bottom: 1px solid #eee;
    padding: 20px 0;
  }

  .title{
    font-size: 36px;
  }
  .line1{
    font-size: 24px;
    margin-top: 12px;
  }
  .blue{
    color: #18B4FE;
  }
</style>
