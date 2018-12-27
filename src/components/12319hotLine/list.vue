<template>
  <div>
    <div>
      <div class="showNo" v-show="list.length==0&&finish">
        <img src="./../../../static/img/hotline/nodata.png" alt="" class="noData">
        <p>暂无随拍</p>
      </div>
      <!--列表一个单元-->
      <div class="list" v-for="item in list" @click="toDetail(item.taskNum)">
        <div class="list_left">
          <div>主题：{{item.theme}}</div>
          <div>推送单位及分类：{{item.recTypeName}}</div>
          <div>随拍时间：{{item.time}}</div>
        </div>
        <div class="list_right" :style="iscolor(item.state)">
          {{item.state=='1'?"已作废":item.state=='2'?"待受理":item.state=='3'?"已受理":item.state=='4'?"处理中":item.state=='5'?"已处理":item.state=='6'?"已结案":"暂无"}}
        </div>
      </div>
      <!--列表一个单元结束-->
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
        list:[],
        finish:false
      }
    },
    methods:{
      toDetail(id){
        this.$router.push("/hotLine19/detail/"+id);
      },
    },
    computed: {
      ...mapGetters([
        "getUserId",
        "getUserName",
        "getCardId",
        "getUserPhone",
      ]),
      iscolor(i) {
        return function (i) {
          if(i=="1"||i=="6"){
            return {"background": "url('./static/img/hotline/static2.png') no-repeat",}
          }else if(i=="2"){
            return {"background": "url('./static/img/hotline/static1.png') no-repeat",}
          }else{
            return {"background": "url('./static/img/hotline/static3.png') no-repeat",}
          }
        }
      }
    },
    mounted(){
      axios.post('/third-server/12319/queryByid.do',{
        cardId:this.getCardId
      }).then(res=>{
        this.finish = true;
        this.list=res.data.data;
      })
    }
  }
</script>

<style scoped>
  .list{
    width:100%;
    min-height:176px;
    padding:30px 0 30px 25px;
    border-bottom: 1px solid #eee;
  }
  .list_left{
    width:601px;
    float: left;
  }
  .list_right{
    margin-top:10px;
    width:104px;
    height:47px;
    float: right;
    background-position: 0 0 !important;
    background-size: 138px !important;
    font-size:24px;
    color:rgba(255,255,255,1);
    line-height:49px;
    text-align: center;
  }
  .list_left div{
    font-size:28px;
    color:rgba(102,102,102,1);
    line-height:28px;
    padding-bottom: 19px;
  }

  .noData{
    width: 260px;
  }
  .showNo{
    text-align: center;
    padding-top: 260px;
  }
  .showNo p{
    margin-top: 36px;
    font-size: 36px;
    color: #666;
  }
</style>
