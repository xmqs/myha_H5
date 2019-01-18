<template>
  <div id="eventDetails">
    <!--部门信息-->
    <div id="bumenMsg">
      <div class="t1">
        <span>事项名称</span>
        <span>{{data.projectname}}</span>
      </div>
      <div class="t1">
        <span>主管部门</span>
        <span>{{data.ouname}}</span>
      </div>
      <div class="t1">
        <span>事项编码</span>
        <span>{{data.itemid}}</span>
      </div>
    </div>
    <!--切换栏-->
    <div id="cut">
      <div class="searchList2">
        <div :class="{'actived':page==1}" @click="toPage(1)">办件进度</div>
        <div :class="{'actived':page==2}" @click="toPage(2)">填报详情</div>
      </div>
      <!--办件进度-->
      <div id="steps" class="detail" v-show="page==1">
        <div class="projectProcesslist" v-show="data.projectProcesslist.nodeList.length==0">
          暂未开始受理
        </div>
        <ul id="ico">
          <li v-for="(val,index) in data.projectProcesslist.nodeList" :style="lastIco(index)">
            <div>
              <span>{{val.nodename}}</span>
            </div>
            <div class="mini">{{val.begintime}}</div>
          </li>
        </ul>
      </div>
      <!--填报详情-->
      <div id="msg" v-show="page==2">
        <div class="wall">
          <div class="page">
            <li class="list_li">
              <div class="word">申请人类别</div>
              <div class="add_inp">{{thirdGovernmentProject.applyerType==20?"自然人":"法人"}}</div>
            </li>
            <!--申请人为自然人-->
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='20'">
              <div class="word">申请人</div>
              <div class="add_inp">{{thirdGovernmentProject.applyerName}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='20'">
              <div class="word">身份证号码</div>
              <div class="add_inp">{{thirdGovernmentProject.idCard}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='20'">
              <div class="word">联系地址</div>
              <div class="add_inp">{{thirdGovernmentProject.address}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='20'">
              <div class="word">邮编</div>
              <div class="add_inp">{{thirdGovernmentProject.postCode}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='20'">
              <div class="word">电话</div>
              <div class="add_inp">{{thirdGovernmentProject.contactMobile}}</div>
            </li>
            <!--申请人为法人-->
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='10'">
              <div class="word">申请单位</div>
              <div class="add_inp">{{thirdGovernmentProject.applyerName}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='10'">
              <div class="word">统一社会信用代码</div>
              <div class="add_inp">{{thirdGovernmentProject.idCard}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='10'">
              <div class="word">法人姓名</div>
              <div class="add_inp">{{thirdGovernmentProject.contactName}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='10'">
              <div class="word">法人身份证号码</div>
              <div class="add_inp">{{thirdGovernmentProject.contactIdNum}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='10'">
              <div class="word">联系地址</div>
              <div class="add_inp">{{thirdGovernmentProject.address}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='10'">
              <div class="word">邮编</div>
              <div class="add_inp">{{thirdGovernmentProject.postCode}}</div>
            </li>
            <li class="list_li" v-if="thirdGovernmentProject.applyerType=='10'">
              <div class="word">电话</div>
              <div class="add_inp">{{thirdGovernmentProject.contactMobile}}</div>
            </li>
            <li class="list_li" v-show="!noPaper">
              <div class="word">材料送达方式</div>
              <div class="add_inp" v-show="way=='1'">自行邮寄</div>
              <div class="add_inp" v-show="way=='2'">快递上门</div>
              <div class="add_inp" v-show="way=='3'">窗口递交</div>
            </li>
            <li class="list_li" v-show="way=='1'">
              <div class="word">EMS单号</div>
              <div class="add_inp">{{thirdGovernmentProject.mailNum}}</div>
            </li>
            <li class="list_li" v-show="way=='2'">
              <div class="word">快递上门联系人</div>
              <div class="add_inp">{{thirdGovernmentProject.sendNameM}}</div>
            </li>
            <li class="list_li" v-show="way=='2'">
              <div class="word">快递上门联系电话</div>
              <div class="add_inp">{{thirdGovernmentProject.mobileM}}</div>
            </li>
            <li class="list_li" v-show="way=='2'">
              <div class="word">快递上门地址</div>
              <div class="add_inp">{{thirdGovernmentProject.sendStrectM}}</div>
            </li>
            <li class="list_li">
              <div class="word">证件领取方式</div>
              <div class="add_inp" v-show="way2=='1'">邮寄到家</div>
              <div class="add_inp" v-show="way2=='2'">自行领取</div>
            </li>
            <li class="list_li" v-show="way2=='1'">
              <div class="word">邮寄到家联系人</div>
              <div class="add_inp">{{thirdGovernmentProject.rcvName}}</div>
            </li>
            <li class="list_li" v-show="way2=='1'">
              <div class="word">邮寄到家联系电话</div>
              <div class="add_inp">{{thirdGovernmentProject.rcvPhone}}</div>
            </li>
            <li class="list_li" v-show="way2=='1'">
              <div class="word">邮寄到家地址</div>
              <div class="add_inp">{{thirdGovernmentProject.rcvStreet}}</div>
            </li>
          </div>
        </div>
        <div class="fireList">
          <li class="photoList" v-for="(item,i) in data.materialList">
            <div class="coll">
              <div class="photoTitle">{{item.projectmaterialname}}<span class="red" v-show="item.necessary==1">*</span>
              </div>
            </div>
            <div class="c33">
              <div class="mustChose" v-show="item.necessary==1">必选</div>
              <div class="submittype">{{item.submittype}}</div>
            </div>
            <div class="coll3">
              <div v-for="(item2,e) in item.imgList" class="imgList" @click="toImg(item2.imgUrl)">
                <img :src="item2.imgUrl" class="avatar">
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
    <!--返回按钮-->
    <div id="btn" @click="back()">
      返回
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        page: 1,
        steps: 4,//办理进度
        data: {
          projectProcesslist: {
            nodeList: []
          }
        },
        thirdGovernmentProject: {},
        way: "",
        way2: "",
        materiallist: []
      }
    },
    methods: {
      toPage(i) {
        this.page = i;
      },
      back() {
        history.go(-1)
      },
      toImg(res) {
        window.location = res;
      }
    },
    mounted() {
      //获取办件详情
      axios.post("/third-server/govService/projectDetail.do", {
        //"projectGuid": "c3fcd17b-ffcb-4410-aad1-8427218e8109",
        "projectGuid": this.$route.params.projectguid,
        "areaCode": "320621"
      }).then(res => {
        this.data = res.data.data;
        this.steps = res.data.data.projectProcesslist.nodeList.length;

        this.materiallist = res.data.data.materialList;


        this.thirdGovernmentProject = res.data.data.thirdGovernmentProject;

        this.way2 = res.data.data.thirdGovernmentProject.ifExpress;


        if (this.thirdGovernmentProject.ifExpressMa == '1' && this.thirdGovernmentProject.is_send == '2') {
          this.way = '1';
        }

        if (this.thirdGovernmentProject.ifExpressMa == '1' && this.thirdGovernmentProject.is_send == '1') {
          this.way = '2';
        }

        if (this.thirdGovernmentProject.ifExpressMa == '2') {
          this.way = '3';
        }


      })
    },
    computed: {
      lastIco(i) {
        return function (i) {
          if (i == this.steps - 1) {
            return {
              "background": "url('./static/img/politicalAudit/5.png') no-repeat",
            }
          } else {
            return {
              "background": "url('./static/img/politicalAudit/1.png') no-repeat",
            }
          }
        }
      },
      noTxT() {
        for (let i = 0; i < this.materiallist.length; i++) {
          if (this.materiallist[i].submittypecode == 10 || this.materiallist[i].submittypecode == 35 || this.materiallist[i].submittypecode == 40) {
            return false;
          }
        }
        return true;
      },
      noPaper() {
        for (let i = 0; i < this.materiallist.length; i++) {
          if (this.materiallist[i].submittypecode == 20 || this.materiallist[i].submittypecode == 35 || this.materiallist[i].submittypecode == 40) {
            return false;
          }
        }
        return true;
      }
    }
  }
</script>

<style scoped>
  #eventDetails {
    color: #666;
  }

  #bumenMsg {
    border-bottom: 20px solid #f2f2f2;
  }

  #bumenMsg > div {
    width: 100%;
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 20px 32px;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  #bumenMsg > div span {
    font-size: 32px;
  }

  .t1 span:first-child {
    display: block;
    width: 40%;
  }

  #bumenMsg > div span:last-child {
    display: block;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
  }

  .searchList2 {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    border-bottom: 3px solid #fff;
    justify-content: center;
    border: 1px solid #eee;
  }

  .searchList2 div {
    width: 40%;
    text-align: center;
    font-size: 32px;
    height: 80px;
    text-align: center;
    line-height: 86px;
    border-bottom: 3px solid #fff;
  }

  .searchList2 div.actived {
    font-size: 32px;
    color: #419cf9;
    border-bottom: 3px solid #419cf9;
  }

  /*申请进度*/
  .detail {
    background: #fff;
    padding: 40px 0;
  }

  .detail li {
    width: 100%;
    height: 120px;
    padding: 0 10px;
    background-size: 44px !important;
    background-position: 80px 0px !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  /*状态图标*/
  /*.ico1{
        background: url("../../../static/img/politicalAudit/1.png") no-repeat;
    }*/
  .detail li div {
    margin-left: 180px;
  }

  .detail li div:first-child {
    margin-bottom: 10px;
  }

  .mini {
    font-size: 30px;
    color: #666;
  }

  .detail span {
    font-size: 30px;
  }

  #btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: #419cf9;
    color: #fff;
    font-size: 36px;
    text-align: center;
    line-height: 100px;
  }

  #cut {
    padding-bottom: 100px;
  }

  /**/

  .wall {
    width: 100%;
    background: #fff;
  }

  .line {
    position: absolute;
    width: 25%;
    height: 6px;
    background: #ececec;
    z-index: -1;
  }

  .line1 {
    left: 12.5%;
    top: 54px;
  }

  .line2 {
    left: 37.5%;
    top: 54px;
  }

  .line3 {
    left: 62.5%;
    top: 54px;
  }

  .active {
    background: #0778FB;
  }

  .list_li {
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    align-items: center;
  }

  .photoList {
    border-bottom: 1px solid #f4f4f4;
    padding: 0 32px;
  }

  .word {
    color: #666;
    font-size: 30px;
    padding-left: 32px;
    width: 100%;
    line-height: 98px;
    white-space: nowrap;
  }

  .word2 {
    color: #666;
    font-size: 32px;
    padding-left: 36px;
    width: 100%;
    line-height: 98px;
    white-space: nowrap;
  }

  .add_inp {
    min-height: 98px;
    margin-bottom: 0;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
    padding: 20px 32px;
    -webkit-user-select: text;
    font-size: 30px;
    box-sizing: border-box;
    width: 100%;
    line-height: 58px;
  }

  .add_inp2 {
    height: 98px;
    margin-bottom: 0;
    padding: 20px 32px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 30px;
    box-sizing: border-box;
    width: 100%;
  }

  .add_choseLine {
    height: 98px;
    margin-bottom: 0;
    -webkit-user-select: text;
    font-size: 30px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .checkbox {
    width: 45px;
    height: 45px;
  }

  .checkLabel {
    font-size: 28px;
    color: #333;
    padding: 0 8px;
  }

  .buttonList div {
    flex-grow: 1;
    text-align: center;
    line-height: 100px;
    width: 100%;
  }

  .buttonList div span {
    font-size: 34px;
  }

  .back, .commit {
    background: #419cf9;
    color: #fff;
  }

  .red {
    color: #e4393c;
  }

  .coll {
    display: flex;
    padding: 16px 0;
    justify-content: space-between;
    align-items: center;
  }

  .coll2 {
    display: flex;
    align-items: center;
  }

  .coll3 {
    padding: 16px 0px;
  }

  .photoTitle {
    font-size: 32px;
  }

  .showExample {
    background: #d8d8d8;
    font-size: 26px;
    color: #fff;
    padding: 8px 16px;
    border-radius: 6px;
    white-space: nowrap;
    margin-left: 16px;
  }

  .mustFull {
    background: #419cf9;
    color: #fff;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 24px;
    margin-left: 32px;
  }

  .upImg {
    width: 160px;
    height: 160px;
    display: inline-block;
  }

  .imgList {
    display: inline-block;
    width: 160px;
    height: 160px;
    margin-left: 6px;
    position: relative;
    overflow: hidden;
    margin-top: 12px;
  }

  .imgList:nth-child(5n) {
    margin-left: 0;
  }

  .imgList img {
    width: 160px;
    height: 160px;
  }

  .remove {
    position: absolute;
    right: -50px;
    top: -50px;
    background: #e4393c;
    color: #fff;
    font-size: 68px;
    width: 100px;
    height: 100px;
    text-align: center;
    transform: rotate(225deg);
    line-height: 45px;
  }

  .list_li > .checkbox {
    margin-right: 32px;
  }

  /*--------------*/
  .photoList {
    border-bottom: 1px solid #f4f4f4;
    padding: 0 32px;
  }

  .coll {
    display: flex;
    padding: 16px 0;
    justify-content: space-between;
    align-items: center;
  }

  .coll2 {
    display: flex;
    align-items: center;
  }

  .coll3 {
    padding: 16px 0px;
  }

  .photoTitle {
    font-size: 32px;
  }

  .c3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .c33 {
    display: flex;
  }

  .mustChose {
    background: #0778fb;
    height: 50px;
    padding: 0 12px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    font-size: 25px;
    margin-right: 10px;
  }

  .submittype {
    background: #f47d07;
    height: 50px;
    padding: 0 12px;
    line-height: 50px;
    text-align: center;
    font-size: 25px;
    color: #fff;
    border-radius: 10px;
  }

  .projectProcesslist {
    text-align: center;
    padding: 16px 32px;
    color: #888;
    font-size: 32px;
  }
</style>
