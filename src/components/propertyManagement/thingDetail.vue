<template>
  <div>
    <div class="content">
      <div class="line">
        <div class="lab">详细地址：</div>
        <div class="txt">{{data.voteAddress}}</div>
      </div>
      <div class="line">
        <div class="lab">投票主题：</div>
        <div class="txt">{{data.voteTitle}}</div>
      </div>
      <div class="line">
        <div class="lab">投票内容：</div>
        <div class="txt">{{data.voteContent}}</div>
      </div>
      <div class="line">
        <div class="lab">通过条件：</div>
        <div class="txt">{{data.voteCondition}}</div>
      </div>
      <div class="line">
        <div class="lab">投票日期：</div>
        <div class="txt">{{data.startDate}}至{{data.endDate}}</div>
      </div>
      <div class="line">
        <div class="lab">投票附件：</div>
        <div class="txt">
          <img src="./../../../static/img/hotline/nodata.png" alt="" class="more">
        </div>
      </div>
      <div class="line">
        <div class="lab">投票状态：</div>
        <div class="txt"><span class="state1" v-show="data.voteStatus==0">进行中</span><span class="state3" v-show="data.voteStatus==1">已结束</span></div>
      </div>
      <div class="line">
        <div class="lab">投票结果：</div>
        <div class="txt">暂无</div>
      </div>
      <div class="line" @click="toManagementChars">
        <div class="lab">投票情况：</div>
        <div class="txt"><span class="state2">查看投票情况</span></div>
      </div>
      <div class="line_right" @click="chose">
        <div class="lab">投票意见：</div>
        <div class="txt"><span class="state2">{{voteSuggest==0?'不同意':'同意'}}</span></div>
      </div>
      <div class="submit" @click="vote">
        提交
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"
  import './../../../static/js/mui.picker.min'
  export default {
    name: "thingDetail",
    data(){
      return{
        data:{},
        voteSuggest:1
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
      axios.post("/myha-server/property/voteDetail.do",{
        id:this.$route.params.id
      }).then(res=>{
        this.data = res.data.data;
      })
    },
    methods:{
      toManagementChars(){
        this.$router.push("/managementChars/"+this.data.id);
      },
      chose(){

        if(this.data.voteStatus==1){
          mui.toast('投票已结束',{ duration:'short', type:'div' });
          return
        }
        let vue = this;
        var picker = new mui.PopPicker();
        picker.setData([{
          value: "1",
          text: "同意"
        }, {
          value: "0",
          text: "不同意"
        }])
        picker.show(function(SelectedItem) {
          vue.voteSuggest = SelectedItem[0].value;
        })
      },
      vote(){
        axios.post('/myha-server/property/vote.do',{
          voteId:this.data.id,
          userId:this.getUserId,
          voteSuggest:this.voteSuggest
        }).then(res=>{
          if(res.data.result==1){
            mui.toast('投票成功',{ duration:'short', type:'div' });
            this.$router.go(-1);
          }else{
            mui.toast(res.data.errMsg,{ duration:'short', type:'div' });
          }
        }).catch(err=> {
          this.canadd = true;
          mui.toast("出了点小差错，请稍后尝试",{ duration:'short', type:'div' });
        })
      }
    }
  }
</script>

<style scoped>
  .content{
    padding-bottom: 12px;
  }
  .line{
    display: flex;
    padding: 18px 32px;
    font-size: 32px;
    border-bottom: 1px solid #eee;
    color: #666;
  }
  .line_right{
    display: flex;
    padding: 18px 32px;
    font-size: 32px;
    border-bottom: 1px solid #eee;
    color: #666;
    background: url("./../../../static/img/normal/right.png") no-repeat ;
    background-position: 95% center;
    background-size: 12px;
  }
  .lab{
    min-width: 180px;
    white-space: nowrap;
  }
  .more{
    max-width: 260px;
    max-height: 400px;
  }
  .state1{
    color: #3ad558;
    font-size:28px;
  }

  .state2{
    color: #0d9bf2;
    font-size:28px;
  }
  .state3{
    color: #ccc;
    font-size:28px;
  }
  .submit{
    width: 686px;
    margin:16px 0 0 32px;
    height: 88px;
    background: #ec971f;
    text-align: center;
    line-height: 88px;
    font-size: 36px;
    color: #fff;
    border-radius: 4px;
  }
</style>
