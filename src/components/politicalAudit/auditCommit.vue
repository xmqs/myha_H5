<template>
  <div>
    <div class="searchList">
      <div class="step">
        <img src="./../../../static/img/politicalAudit/stepNow.png" alt="" v-show="step==1">
        <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" v-show="step>1">
        <p :class="{'blue':step>1}">基本信息</p>
      </div>
      <div class="step">
        <img src="./../../../static/img/politicalAudit/stepNext.png" alt="" v-show="step<2">
        <img src="./../../../static/img/politicalAudit/stepNow.png" alt="" v-show="step==2">
        <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" v-show="step>2">
        <p :class="{'blue':step>2}">电子材料</p>
      </div>
      <div class="step">
        <img src="./../../../static/img/politicalAudit/stepNext.png" alt="" v-show="step<3">
        <img src="./../../../static/img/politicalAudit/stepNow.png" alt="" v-show="step==3">
        <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" v-show="step>3">
        <p :class="{'blue':step>3}">纸质材料</p>
      </div>
      <div class="step">
        <img src="./../../../static/img/politicalAudit/stepNext.png" alt="" v-show="step<4">
        <img src="./../../../static/img/politicalAudit/stepNow.png" alt="" v-show="step==4">
        <p>证件领取</p>
      </div>
      <div class="line line1" :class="{'active':step>1}"></div>
      <div class="line line2" :class="{'active':step>2}"></div>
      <div class="line line3" :class="{'active':step>3}"></div>
    </div>

    <div class="wall">
      <div class="page" v-show="step==1">
        <li class="list_li">
          <div class="word">申请人类别</div>
          <div class="add_choseLine">
            <img src="./../../../static/img/politicalAudit/check.png" alt="" class="checkbox"
                 v-show="data.applyerType==10" @click="changeType(20)">
            <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" class="checkbox"
                 v-show="data.applyerType==20" @click="changeType(10)">
            <span class="checkLabel" @click="changeType(20)">自然人</span>
            <img src="./../../../static/img/politicalAudit/check.png" alt="" class="checkbox"
                 v-show="data.applyerType==20" @click="changeType(10)">
            <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" class="checkbox"
                 v-show="data.applyerType==10" @click="changeType(20)">
            <span class="checkLabel" @click="changeType(10)">法人</span>
          </div>
        </li>
        <!--自然人-->
        <li class="list_li" v-show="data.applyerType==20">
          <div class="word">申请人</div>
          <div class="add_inp">
            {{data.applyerName}}
          </div>
        </li>
        <li class="list_li" v-show="data.applyerType==20">
          <div class="word">身份证号码</div>
          <div class="add_inp">
            {{data.idCard}}
          </div>
        </li>
        <li class="list_li" v-show="data.applyerType==20" @click="toAddressList('page1')" style="border-bottom: 0">
          <div class="word">联系地址</div>
        </li>
        <li class="list_li" v-show="data.applyerType==20" @click="toAddressList('page1')">
          <div class="add_inp3" v-show="getPageAddress==''">
            请选联系地址
          </div>
          <div class="add_inp3" v-show="getPageAddress!==''">
            {{getPageAddress}}
          </div>
        </li>
        <li class="list_li" v-show="data.applyerType==20">
          <div class="word">邮编</div>
          <input type="number" name="" value="" placeholder="请填写邮编" class="add_inp" v-model="data.postCode">
        </li>
        <li class="list_li" v-show="data.applyerType==20">
          <div class="word">电话</div>
          <input type="number" name="" value="" placeholder="请填写电话" class="add_inp" v-model="data.contactMobile">
        </li>
        <!--法人-->
        <li class="list_li" v-show="data.applyerType==10">
          <div class="word">申请单位</div>
          <input type="text" name="" value="" placeholder="请填写申请单位" class="add_inp" v-model="data.applyerName">
        </li>
        <li class="list_li" v-show="data.applyerType==10">
          <div class="word">统一社会信用代码</div>
          <input type="text" name="" value="" placeholder="请填写社会信用代码" class="add_inp" v-model="data.idCard">
        </li>
        <li class="list_li" v-show="data.applyerType==10">
          <div class="word">法人姓名</div>
          <div class="add_inp">
            {{data.contactName}}
          </div>
          <!--<input type="text" name="" value="" placeholder="请填写法人姓名" class="add_inp" v-model="data.contactName">-->
        </li>
        <li class="list_li" v-show="data.applyerType==10">
          <div class="word">法人身份证号码</div>
          <div class="add_inp">
            {{data.contactIdNum}}
          </div>
          <!--<input type="text" name="" value="" placeholder="请填写法人身份证号码" class="add_inp" v-model="data.contactIdNum">-->
        </li>
        <li class="list_li" v-show="data.applyerType==10" @click="toAddressList('page1')" style="border-bottom: 0">
          <div class="word">联系地址</div>
        </li>
        <li class="list_li" v-show="data.applyerType==10" @click="toAddressList('page1')">
          <div class="add_inp3" v-show="getPageAddress==''">
            请选联系地址
          </div>
          <div class="add_inp3" v-show="getPageAddress!==''">
            {{getPageAddress}}
          </div>
        </li>
        <li class="list_li" v-show="data.applyerType==10">
          <div class="word">邮编</div>
          <input type="number" name="" value="" placeholder="请填写邮编" class="add_inp" v-model="data.postCode">
        </li>
        <li class="list_li" v-show="data.applyerType==10">
          <div class="word">电话</div>
          <input type="number" name="" value="" placeholder="请填写电话" class="add_inp" v-model="data.contactMobile">
        </li>
      </div>
      <div class="page" v-show="step==2">
        <li class="photoList" v-for="(item,i) in materiallist"
            v-show="item.submittypecode==10||item.submittypecode==35||item.submittypecode==40">
          <div class="coll">
            <div class="photoTitle">{{item.projectmaterialname}}<span class="red" v-show="item.necessary==1">*</span>
            </div>
            <a @click="toImg(item.exampleattachguid)">
              <div class="showExample">查看样例</div>
            </a>
          </div>
          <div class="c33">
            <div class="mustChose" v-show="item.necessary==1">必选</div>
            <div class="submittype">{{item.submittype}}</div>
          </div>
          <div class="coll3">
            <div class="imgList">
              <img src="./../../../static/img/hotline/upImg.png" class="upImg" @click="myImg(i)">
            </div>
            <div v-for="(item2,e) in item.imgList" class="imgList">
              <div class="remove" @click="removeImg(i,e)">+</div>
              <img :src="item2.imgUrl" class="avatar">
            </div>
          </div>
        </li>
        <div v-show="noTxT" class="noTxT">
          本事项无需提供电子材料
        </div>
      </div>
      <div class="page" v-show="step==3">
        <div v-show="noPaper" class="noTxT">
          本事项无需提供纸质材料
        </div>
        <div v-show="!noPaper">
          <li class="list_li">
            <div class="word2">材料送达方式</div>
          </li>
          <li class="list_li" @click="way='1'"
              v-show="data.projectInfo.initIfExpress==1&&(data.projectInfo.expressType=='1'||data.projectInfo.expressType=='1,2'||data.projectInfo.expressType=='2,1')">
            <div class="word">自行邮寄</div>
            <img src="./../../../static/img/politicalAudit/check.png" alt="" class="checkbox" v-show="way!=='1'">
            <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" class="checkbox" v-show="way=='1'">
          </li>
          <li class="list_li" v-show="way=='1'" @click="way='1'">
            <input type="text" name="" value="" placeholder="请填EMS单号" class="add_inp2" v-model="data.mailNum">
          </li>
          <li class="list_li" @click="way='2'"
              v-show="data.projectInfo.initIfExpress==1&&(data.projectInfo.expressType=='1'||data.projectInfo.expressType=='1,2'||data.projectInfo.expressType=='2,1')">
            <div class="word">快递上门</div>
            <img src="./../../../static/img/politicalAudit/check.png" alt="" class="checkbox" v-show="way!=='2'">
            <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" class="checkbox" v-show="way=='2'">
          </li>
          <li class="list_li2" v-show="way=='2'" @click="toAddressList('page3')">
            <div class="flexLR" v-show="getAuditAddress.backAddress.sendNameM!==''">
              <div>收件人：{{getAuditAddress.backAddress.sendNameM}}</div>
              <div>{{getAuditAddress.backAddress.mobileM}}</div>
            </div>
            <div class="addressDetail" v-show="getAuditAddress.backAddress.sendNameM!==''">
              <div>{{getAuditAddress.backAddress.sendStrectM}}</div>
              <img src="./../../../static/img/politicalAudit/Group 21@3x.png" alt="" class="editAddress">
            </div>
            <div class="noAddress" v-show="getAuditAddress.backAddress.sendNameM==''">点击添加地址</div>
          </li>
          <li class="list_li line30" @click="way='3'">
            <div class="word">窗口递交</div>
            <img src="./../../../static/img/politicalAudit/check.png" alt="" class="checkbox" v-show="way!=='3'">
            <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" class="checkbox" v-show="way=='3'">
          </li>
          <li class="list_li">
            <div class="word2">纸质材料清单</div>
          </li>
          <div class="cailiaoMsg" v-for="(item,i) in materiallist"
               v-show="item.submittypecode==20||item.submittypecode==35||item.submittypecode==40">
            <div class="c4">
              <span>{{item.projectmaterialname}}</span>
              <span style="color:red" v-show="item.necessary==1">*</span>
            </div>
            <div class="c3">
              <div class="c33">
                <div class="mustChose" v-show="item.necessary==1">必选</div>
                <div class="submittype">{{item.submittype}}</div>
              </div>
              <div>
                <a @click="toImg(item.exampleattachguid)"><img src="../../../static/img/politicalAudit/Group 5@2x.png"/>&nbsp;&nbsp;预览</a>
                <a @click="load(item.templateattachguid)"><img src="../../../static/img/politicalAudit/Fill 1@2x.png"/>&nbsp;&nbsp;下载</a>
                <!--<a><img src="../../../static/img/politicalAudit/Group 5@2x.png"/>&nbsp;&nbsp;预览</a>
                <a><img src="../../../static/img/politicalAudit/Fill 1@2x.png"/>&nbsp;&nbsp;下载</a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page" v-show="step==4">
        <li class="list_li">
          <div class="word2">证件领取方式</div>
        </li>
        <li class="list_li" @click="way2='1'"
            v-show="data.projectInfo.initIfExpress==1&&(data.projectInfo.expressType=='2'||data.projectInfo.expressType=='1,2'||data.projectInfo.expressType=='2,1')">
          <div class="word">邮寄到家</div>
          <img src="./../../../static/img/politicalAudit/check.png" alt="" class="checkbox" v-show="way2!=='1'">
          <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" class="checkbox" v-show="way2=='1'">
        </li>
        <li class="list_li2" v-show="way2=='1'" @click="toAddressList('page4')">
          <div class="flexLR" v-show="getAuditAddress.fromAddress.rcvName!==''">
            <div>收件人：{{getAuditAddress.fromAddress.rcvName}}</div>
            <div>{{getAuditAddress.fromAddress.rcvPhone}}</div>
          </div>
          <div class="addressDetail" v-show="getAuditAddress.fromAddress.rcvName!==''">
            <div>{{getAuditAddress.fromAddress.rcvStreet}}</div>
            <img src="./../../../static/img/politicalAudit/Group 21@3x.png" alt="" class="editAddress">
          </div>
          <div class="noAddress" v-show="getAuditAddress.fromAddress.rcvName==''" @click="toAddressList('page4')">
            点击添加地址
          </div>
        </li>
        <li class="list_li" @click="way2='2'">
          <div class="word">自行领取</div>
          <img src="./../../../static/img/politicalAudit/check.png" alt="" class="checkbox" v-show="way2!=='2'">
          <img src="./../../../static/img/politicalAudit/stepOver.png" alt="" class="checkbox" v-show="way2=='2'">
        </li>
      </div>
    </div>

    <div class="buttonList">
      <div class="back" @click="changeStep(0)">
        <span v-show="step==1">返回</span>
        <span v-show="step!==1">上一步</span>
      </div>
      <div class="save" @click="saveProjectInfo">
        <span>暂存</span>
      </div>
      <div class="commit" @click="changeStep(1)">
        <span v-show="step==4">提交</span>
        <span v-show="step!==4">下一步</span>
      </div>
    </div>
    <input style='opacity: 0;bottom:0; position:fixed;z-index: -1' id="input" type="text"/>
    <div class="mask" v-show="loading"></div>
    <img class="loading" src="./../../../static/img/politicalAudit/loading.png" alt="" v-show="loading">
  </div>
</template>

<script>
  import axios from "axios"
  import {mapGetters} from 'vuex'

  export default {
    name: "auditCommit",
    computed: {
      ...mapGetters([
        "getUserId",
        "getUserName",
        "getCardId",
        "getUserPhone",
        "getAuditAddress",
        "getPageAddress"
      ]),
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
    },
    data() {
      return {
        step: 1,
        data: {
          areaCode: "",// 区域代码
          companyRowGuid: "",// 获取当前企业的主键标companyguid
          isMobile: "",// 是否手机端申报参数
          orgaleGalIdMumber: "",// 法人代表身份证

          accountGuid: "",// 身份唯一标识
          address: "",//地址
          applyerName: "",// 申请人姓名
          applyerType: "20",// 申请人类型 10企业 20个人
          certType: "",// 证照类型  	证照类型身份22 ；组织机构代码证 14；统一社会信用代码 16；港澳台证件 23
          chkCode: '',//取件验证码(使用物流寄送审批结果时需要传递)
          contactName: "",// 联系人姓名
          contactMobile: "",// 联系人手机
          contactPhone: "",// 联系人电话
          contactIdNum: "",// 联系人身份证
          email: "",// 邮箱
          idCard: "",// 申请人证照编号
          ifExpress: "",// 是否使用物流 1是 2否 要填写物流信息
          ifExpressMa: '',//是否使用物流寄送申报材料1是2否，填写是时需要填写寄送信息
          is_send: '',//是否已寄送1否2是
          legal: "",// 法人代表
          mailNum: '',//快递单号
          orgNameM: '',//办理部门
          postCode: "",// 邮编
          projectGuid: "", // 办件的唯一标识

          rcvCity: "",//	收件人城市
          rcvCoutry: "",//		收件人区县
          rcvName: "",//		收件人姓名
          rcvPhone: "",//		收件人电话
          rcvProv: "",//		收件人省份
          rcvStreet: "",//		收件人详细地址

          remark: "",//备注

          mobileM:"",//发件人手机号码
          sendNameM:"",//发件人姓名
          sendCityM: "",//	发件区域城市
          sendCountryM: "",//	发件区域区县
          sendProvM: "",//	发件区域省份
          sendStrectM: "",//	发件详细地址
          taskGuid: "",//事项业务唯一标识

          projectInfo: {
            initIfExpress: "",//是否支持物流快递1是2否
            expressType: ""//物流类型 1申报材料快递2证照批文快递 3两者都不支持
          },

          materiallist: []
        },
        imgList: [],
        materiallist: [],//申报材料列表
        way: '',//是否支持物流快递1是2否
        way2: '',//物流类型 1申报材料快递2证照批文快递 3两者都不支持
        if_express: '',//是否支持物流快递1是2否
        express_type: '',//物流类型 1申报材料快递2证照批文快递 3两者都不支持
        loading: false,
      }
    },
    mounted() {

    },
    beforeRouteLeave(to, from, next) {
      if (to.name == "shenbanMsg" || to.name == "successCommit" || to.name == "myEvent") {
        this.init();
      }
      next();
    },
    activated() {
      if (this.step == 2) {
        /*非入口进入初始化所有值*/
        this.init();
        /**判断是否是草稿修改*/
        if (this.$route.params.projectguid) {
          /*修改申请*/
          axios.post("/myha-server/govService/projectDetail.do", {
            areaCode: '320621',
            projectGuid: this.$route.params.projectguid
          }).then(res => {

            this.data = res.data.data.thirdGovernmentProject;
            this.data.projectInfo = res.data.data.projectInfo;

            this.way2 = res.data.data.thirdGovernmentProject.ifExpress;


            if (this.data.ifExpressMa == '1'&&this.data.is_send == '2') {
              this.way = '1';
            }
            if (this.data.ifExpressMa == '2') {
              this.way = '3';
            }
            if (this.data.ifExpressMa == '3'&&this.data.is_send == '1') {
              this.way = '1';
            }

            /*TODO 获取已经选择地址接口*/

            this.$store.commit("setPageAddress", res.data.data.thirdGovernmentProject.address);

            let backAddress = {
              fromAddress: {
                rcvCity: "",//	收件人城市
                rcvCoutry: "",//		收件人区县
                rcvName: "",//		收件人姓名
                rcvPhone: "",//		收件人电话
                rcvProv: "",//		收件人省份
                rcvStreet: ""//		收件人详细地址
              },
              /*接收地址*/
              backAddress: {
                sendCityM: "",//	发件区域城市
                sendCountryM: "",//	发件区域区县
                sendProvM: "",//	发件区域省份
                sendStrectM: ""//	发件详细地址
              },
            }

            backAddress.fromAddress.rcvName = res.data.data.thirdGovernmentProject.rcvName;
            backAddress.fromAddress.rcvPhone = res.data.data.thirdGovernmentProject.rcvPhone;
            backAddress.fromAddress.rcvStreet = res.data.data.thirdGovernmentProject.rcvStreet;

            backAddress.backAddress.sendNameM = res.data.data.thirdGovernmentProject.sendStrectM;
            backAddress.backAddress.mobileM = res.data.data.thirdGovernmentProject.mobileM;
            backAddress.backAddress.sendStrectM = res.data.data.thirdGovernmentProject.sendStrectM;

            this.$store.commit("setAuditAddress", backAddress);

            this.materiallist = res.data.data.materialList;
          })
        } else {
          /*新增申请*/
          axios.post('/myha-server/govService/getAccountGuid.do', {
            idNum: this.getCardId,
            mobile: this.getUserPhone,
            username: this.getUserName
          }).then(res => {
            this.data.accountGuid = res.data.data.IdList[0].accountguid;
            this.data.taskGuid = this.$route.params.taskGuid;
            axios.post('/myha-server/govService/initProjectReturnMaterials.do', {
              //初始化信息接口
              accountGuid: res.data.data.IdList[0].accountguid,
              taskGuid: this.$route.params.taskGuid,
            }).then(res2 => {
              this.data.applyerName = this.getUserName;
              this.data.idCard = this.getCardId;
              this.data.contactMobile = this.getUserPhone;

              /**材料列表接口*/
              this.materiallist = res2.data.data.materiallist;
              for (let i = 0; i < this.materiallist.length; i++) {
                this.materiallist[i].imgList = []
              }
              this.data.projectInfo.initIfExpress = res2.data.data.if_express;
              /*TODO 暂时获取接口提交时候修改*/
              this.data.projectInfo.expressType = res2.data.data.express_type;
              /*TODO 暂时获取接口提交时候修改*/
              this.data.projectGuid = res2.data.data.projectguid;
            })
          })

          axios.post('/myha-server/receiveInfo/queryDefaultInfo.do', {
            userId: this.getUserId,
          }).then(res => {
            if (res.data.message !== '该用户下暂无默认地址') {
              this.$store.commit("setPageAddress", res.data.data.receiveInfo.receiveStreetCode + " " + res.data.data.receiveInfo.receiveAddress);

              let backAddress = {
                fromAddress: {
                  rcvCity: "",//	收件人城市
                  rcvCoutry: "",//		收件人区县
                  rcvName: "",//		收件人姓名
                  rcvPhone: "",//		收件人电话
                  rcvProv: "",//		收件人省份
                  rcvStreet: ""//		收件人详细地址
                },
                /*接收地址*/
                backAddress: {
                  sendCityM: "",//	发件区域城市
                  sendCountryM: "",//	发件区域区县
                  sendProvM: "",//	发件区域省份
                  sendStrectM: ""//	发件详细地址
                },
              }

              backAddress.fromAddress.rcvName = res.data.data.receiveInfo.receivePerson;
              backAddress.fromAddress.rcvPhone = res.data.data.receiveInfo.contactPhone;
              backAddress.fromAddress.rcvStreet = res.data.data.receiveInfo.receiveStreetCode+" "+res.data.data.receiveInfo.receiveAddress;

              backAddress.backAddress.sendNameM = res.data.data.receiveInfo.receivePerson;
              backAddress.backAddress.mobileM = res.data.data.receiveInfo.contactPhone;
              backAddress.backAddress.sendStrectM = res.data.data.receiveInfo.receiveStreetCode+" "+res.data.data.receiveInfo.receiveAddress;

              this.$store.commit("setAuditAddress", backAddress);

            }
          })
        }
      } else if (this.step == 1 && this.data.projectGuid == "") {
        this.init();
        /**判断是否是草稿修改*/
        if (this.$route.params.projectguid) {
          /*修改申请*/
          axios.post("/myha-server/govService/projectDetail.do", {
            areaCode: '320621',
            projectGuid: this.$route.params.projectguid
          }).then(res => {


            this.data = res.data.data.thirdGovernmentProject;
            this.data.projectInfo = res.data.data.projectInfo;

            this.way2 = res.data.data.thirdGovernmentProject.ifExpress;


            if (this.data.ifExpressMa == '1'&&this.data.is_send == '2') {
              this.way = '1';
            }
            if (this.data.ifExpressMa == '2') {
              this.way = '3';
            }
            if (this.data.ifExpressMa == '1'&&this.data.is_send == '1') {
              this.way = '2';
            }

            /*TODO 获取已经选择地址接口*/
            this.$store.commit("setPageAddress", res.data.data.thirdGovernmentProject.address);


            let backAddress = {
              fromAddress: {
                rcvCity: "",//	收件人城市
                rcvCoutry: "",//		收件人区县
                rcvName: "",//		收件人姓名
                rcvPhone: "",//		收件人电话
                rcvProv: "",//		收件人省份
                rcvStreet: ""//		收件人详细地址
              },
              /*接收地址*/
              backAddress: {
                sendCityM: "",//	发件区域城市
                sendCountryM: "",//	发件区域区县
                sendProvM: "",//	发件区域省份
                sendStrectM: ""//	发件详细地址
              },
            }

            backAddress.fromAddress.rcvName = res.data.data.thirdGovernmentProject.rcvName;
            backAddress.fromAddress.rcvPhone = res.data.data.thirdGovernmentProject.rcvPhone;
            backAddress.fromAddress.rcvStreet = res.data.data.thirdGovernmentProject.rcvStreet;

            backAddress.backAddress.sendNameM = res.data.data.thirdGovernmentProject.sendNameM;
            backAddress.backAddress.mobileM = res.data.data.thirdGovernmentProject.mobileM;
            backAddress.backAddress.sendStrectM = res.data.data.thirdGovernmentProject.sendStrectM;

            this.$store.commit("setAuditAddress", backAddress);

            this.materiallist = res.data.data.materialList;
          })
        } else {
          /*新增申请*/
          axios.post('/myha-server/govService/getAccountGuid.do', {
            idNum: this.getCardId,
            mobile: this.getUserPhone,
            username: this.getUserName
          }).then(res => {
            this.data.accountGuid = res.data.data.IdList[0].accountguid;
            this.data.taskGuid = this.$route.params.taskGuid;
            axios.post('/myha-server/govService/initProjectReturnMaterials.do', {
              //初始化信息接口
              accountGuid: res.data.data.IdList[0].accountguid,
              taskGuid: this.$route.params.taskGuid,
            }).then(res2 => {
              this.data.applyerName = this.getUserName;
              this.data.idCard = this.getCardId;
              this.data.contactMobile = this.getUserPhone;

              /**材料列表接口*/
              this.materiallist = res2.data.data.materiallist;
              for (let i = 0; i < this.materiallist.length; i++) {
                this.materiallist[i].imgList = []
              }
              this.data.projectInfo.initIfExpress = res2.data.data.if_express;
              /*TODO 暂时获取接口提交时候修改*/
              this.data.projectInfo.expressType = res2.data.data.express_type;
              /*TODO 暂时获取接口提交时候修改*/
              this.data.projectGuid = res2.data.data.projectguid;
            })
          })

          axios.post('/myha-server/receiveInfo/queryDefaultInfo.do', {
            userId: this.getUserId,
          }).then(res => {
            if (res.data.message !== '该用户下暂无默认地址') {
              this.$store.commit("setPageAddress", res.data.data.receiveInfo.receiveStreetCode + " " + res.data.data.receiveInfo.receiveAddress);

              let backAddress = {
                fromAddress: {
                  rcvCity: "",//	收件人城市
                  rcvCoutry: "",//		收件人区县
                  rcvName: "",//		收件人姓名
                  rcvPhone: "",//		收件人电话
                  rcvProv: "",//		收件人省份
                  rcvStreet: ""//		收件人详细地址
                },
                /*接收地址*/
                backAddress: {
                  sendCityM: "",//	发件区域城市
                  sendCountryM: "",//	发件区域区县
                  sendProvM: "",//	发件区域省份
                  sendStrectM: ""//	发件详细地址
                },
              }

              backAddress.fromAddress.rcvName = res.data.data.receiveInfo.receivePerson;
              backAddress.fromAddress.rcvPhone = res.data.data.receiveInfo.contactPhone;
              backAddress.fromAddress.rcvStreet = res.data.data.receiveInfo.receiveStreetCode+" "+res.data.data.receiveInfo.receiveAddress;

              backAddress.backAddress.sendNameM = res.data.data.receiveInfo.receivePerson;
              backAddress.backAddress.mobileM = res.data.data.receiveInfo.contactPhone;
              backAddress.backAddress.sendStrectM = res.data.data.receiveInfo.receiveStreetCode+" "+res.data.data.receiveInfo.receiveAddress;

              this.$store.commit("setAuditAddress", backAddress);
            }
          })
        }
      }
    },
    methods: {
      toImg(img){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          window.location.href = img;
        }

        if (isiOS) {
          window.location.href = img+"&hanNewH5";
        }
      },
      load(templateattachguid) {
        mui.init();
        mui.alert('申请材料文本已生成', '复制链接通过浏览器下载', '复制链接', function () {
          let input = document.getElementById("input");
          input.value = templateattachguid; // 修改文本框的内容
          input.select(); // 选中文本
          input.setSelectionRange(0, input.value.length),
            document.execCommand('Copy');
          //alert("已复制链接到剪切板!建议粘贴到电脑浏览器下载此文档");
          input.blur();
        });
      },
      changeCommitMsg() {
        /*是否使用物流寄送结果*/
        /*TODO 注意 is_send 1否2是*/
        if (this.way == '1') {
          /*step3自行邮寄*/
          this.data.ifExpressMa = '1';
          this.data.is_send = '2';
        } else if (this.way == '3') {
          /*step3窗口提交*/
          this.data.ifExpressMa = '2';
          this.data.is_send = '1';
        } else if (this.way == '2') {
          /*step3快递上门 需要快递单号*/
          /*填写rcv信息*/
          this.data.ifExpressMa = '1';
          this.data.is_send = '1';
          this.data.sendNameM = this.getAuditAddress.backAddress.sendNameM;
          this.data.mobileM = this.getAuditAddress.backAddress.mobileM;
          this.data.sendStrectM = this.getAuditAddress.backAddress.sendStrectM;
        }

        this.data.ifExpress = this.way2;
        if (this.way2 == 1) {
          this.data.rcvName = this.getAuditAddress.fromAddress.rcvName;
          this.data.rcvPhone = this.getAuditAddress.fromAddress.rcvPhone;
          this.data.rcvStreet = this.getAuditAddress.fromAddress.rcvStreet;
        }
      },
      init() {
        /*初始化所有值*/
        this.step = 1;
        this.data = {
          areaCode: "",// 区域代码
          companyRowGuid: "",// 获取当前企业的主键标companyguid
          isMobile: "",// 是否手机端申报参数
          orgaleGalIdMumber: "",// 法人代表身份证

          accountGuid: "",// 身份唯一标识
          address: "",//地址
          applyerName: "",// 申请人姓名
          applyerType: "20",// 申请人类型 10企业 20个人
          certType: "",// 证照类型  	证照类型身份22 ；组织机构代码证 14；统一社会信用代码 16；港澳台证件 23
          chkCode: '',//取件验证码(使用物流寄送审批结果时需要传递)
          contactName: "",// 联系人姓名
          contactMobile: "",// 联系人手机
          contactPhone: "",// 联系人电话
          contactIdNum: "",// 联系人身份证
          email: "",// 邮箱
          idCard: "",// 申请人证照编号
          ifExpress: "",// 是否使用物流 1是 2否 要填写物流信息
          ifExpressMa: '',//是否使用物流寄送申报材料1是2否，填写是时需要填写寄送信息
          is_send: '',//是否已寄送1否2是
          legal: "",// 法人代表
          mailNum: '',//快递单号
          orgNameM: '',//办理部门
          postCode: "",// 邮编
          projectGuid: "", // 办件的唯一标识

          rcvCity: "",//	收件人城市
          rcvCoutry: "",//		收件人区县
          rcvName: "",//		收件人姓名
          rcvPhone: "",//		收件人电话
          rcvProv: "",//		收件人省份
          rcvStreet: "",//		收件人详细地址

          remark: "",//备注

          mobileM:"",//发件人手机号码
          sendNameM:"",//发件人姓名
          sendCityM: "",//	发件区域城市
          sendCountryM: "",//	发件区域区县
          sendProvM: "",//	发件区域省份
          sendStrectM: "",//	发件详细地址
          taskGuid: "",//事项业务唯一标识
          projectInfo: {
            initIfExpress: "",//是否支持物流快递1是2否
            expressType: ""//物流类型 1申报材料快递2证照批文快递 3两者都不支持
          },
        };
        this.imgList = [];
        this.materiallist = [];//申报材料列表
        this.way = '';//是否支持物流快递1是2否
        this.way2 = '';//物流类型 1申报材料快递2证照批文快递 3两者都不支持
        this.loading = false;//物流类型 1申报材料快递2证照批文快递 3两者都不支持

        this.$store.commit("setAuditAddress", {

          fromAddress: {
            rcvCity: "",//	收件人城市
            rcvCoutry: "",//		收件人区县
            rcvName: "",//		收件人姓名
            rcvPhone: "",//		收件人电话
            rcvProv: "",//		收件人省份
            rcvStreet: ''
          },

          /*接收地址*/
          backAddress: {
            sendCityM: "",//	发件区域城市
            sendCountryM: "",//	发件区域区县
            sendProvM: "",//	发件区域省份
            sendStrectM: ""//	发件详细地址
          },
        });

        this.$store.commit("setPageAddress", "");
      },

      /*保存草稿*/
      saveProjectInfo() {
        this.changeCommitMsg();

        this.data.address = this.getPageAddress;
        this.data.materiallist = this.materiallist;

        this.loading = true;

        axios.post('/myha-server/govService/saveProjectInfo.do', this.data).then(res => {
          if (res.data.result == 1) {
            this.loading = false;
            mui.toast('保存成功', {duration: 'short', type: 'div'});
            this.$router.go(-1);
          } else {
            this.loading = false;
            mui.toast('网络出了点小差错，请稍后尝试或联系管理人员', {duration: 'short', type: 'div'});
          }
        })
      },

      changeType(n) {
        this.data.applyerType = n;
        if (n == 20) {
          this.data.contactName = "";
          this.data.contactIdNum = "";
          this.data.applyerName = this.getUserName;
          this.data.idCard = this.getCardId;
        } else {
          this.data.contactName = this.getUserName;
          this.data.contactIdNum = this.getCardId;
          this.data.applyerName = "";
          this.data.idCard = "";
        }
      },
      toAddressList(type) {
        this.$router.push("/politicalAudit/CourierAddr/" + type);
      },
      /*切换步骤*/
      changeStep(n) {
        if (n == 0) {
          if (this.step == 1) {
            this.$router.go(-1);
          } else {
            window.scrollTo(0, 0);
            this.step--;
          }
        } else {
          if (this.step == 4) {
            /*提交*/
            /*TODO 数据校验*/
            /*TODO step1 信息验证*/
            if (this.data.applyerType == 20) {
              /*自然人验证*/
              if (this.data.applyerName == "") {
                mui.toast('暂未获取到申请人姓名', {duration: 'short', type: 'div'});
                return
              }
              if (this.data.idCard == "") {
                mui.toast('暂未获取到申请人身份证号码', {duration: 'short', type: 'div'});
                return
              }

              this.data.address = this.getPageAddress;
              if (this.data.address == "") {
                mui.toast('请填写联系地址', {duration: 'short', type: 'div'});
                return
              }
              if (this.data.postCode == "") {
                mui.toast('请填写邮编', {duration: 'short', type: 'div'});
                return
              }
              if (this.data.postCode.length !== 6) {
                mui.toast('请填写正确邮编', {duration: 'short', type: 'div'});
                return
              }
              let myReg = /^[1][3,4,5,7,8][0-9]{9}$/;
              if (!myReg.test(this.data.contactMobile)) {
                mui.toast('请填写正确的电话号码', {duration: 'short', type: 'div'});
                return false;
              }

            } else {
              /*法人验证 this.data.applyerType==20*/
              if (this.data.applyerName == "") {
                mui.toast('请填写申请单位', {duration: 'short', type: 'div'});
                return
              }

              if (this.data.idCard == "") {
                mui.toast('请填写统一社会信用代码', {duration: 'short', type: 'div'});
                return
              }

              if (this.data.contactName == "") {
                mui.toast('请填写法人姓名', {duration: 'short', type: 'div'});
                return
              }

              if (this.data.contactIdNum == "") {
                mui.toast('请填写法人身份证号码', {duration: 'short', type: 'div'});
                return
              }
              let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
              if (reg.test(this.data.contactIdNum) === false) {
                mui.toast('法人身份证号码不合法', {duration: 'short', type: 'div'});
                return
              }

              this.data.address = this.getPageAddress;
              if (this.data.address == "") {
                mui.toast('请填写联系地址', {duration: 'short', type: 'div'});
                return
              }

              if (this.data.postCode == "") {
                mui.toast('请填写邮编', {duration: 'short', type: 'div'});
                return
              }

              let myReg = /^[1][3,4,5,7,8][0-9]{9}$/;
              if (!myReg.test(this.data.contactMobile)) {
                mui.toast('请填写正确的电话号码', {duration: 'short', type: 'div'});
                return
              }
            }
            /*TODO step2 图片验证*/
            for (let i = 0; i < this.materiallist.length; i++) {
              if (this.materiallist[i].submittypecode == 10 || this.materiallist[i].submittypecode == 40) {
                if (this.materiallist[i].necessary == '1' && this.materiallist[i].imgList.length == 0) {
                  mui.toast('请上传' + this.materiallist[i].projectmaterialname, {duration: 'short', type: 'div'});
                  return
                }
              }
            }

            if (this.way == "" && !this.noPaper) {
              mui.toast('请选择纸质材料送达方式', {duration: 'short', type: 'div'});
              return
            }
            if (this.way == '2') {
              if (this.getAuditAddress.backAddress.rcvName == "") {
                mui.toast('请填写上门收件信息', {duration: 'short', type: 'div'});
                return
              }
            }

            if (this.way == '1' && this.data.mailNum == '') {
              mui.toast('请填写EMS单号', {duration: 'short', type: 'div'});
              return
            }

            if (this.way2 == "") {
              mui.toast('请选择领取证件方式', {duration: 'short', type: 'div'});
              return
            }
            if (this.way2 == '1') {
              if (this.getAuditAddress.backAddress.sendStrectM == "") {
                mui.toast('请填写寄送信息', {duration: 'short', type: 'div'});
                return
              }
            }
            this.changeCommitMsg();
            this.data.materiallist = this.materiallist;
            this.loading = true;
            /*提交信息*/
            axios.post('/myha-server/govService/submitProjectByTaskguid.do', this.data).then(res => {
              if (res.data.result == 1) {
                this.loading = false;
                mui.toast('申请成功', {duration: 'short', type: 'div'});
                this.init();
                this.$router.replace('/politicalAudit/successCommit');
              } else {
                this.loading = false;
                mui.toast('网络出了点小差错，请稍后尝试或联系管理人员', {duration: 'short', type: 'div'});
              }
            })
          } else {
            window.scrollTo(0, 0);
            this.step++;
          }
        }
      },
      /*上传图片*/
      myImg(id) {
        var oldUrl = window.location.href;
        /*判断ios  Android*/
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          window.location.href += '#uploadImgByClient?imgNum=0&serverurl=http://58.221.196.5:11001/file-server/upload/upload.do&selectPhotoType=photoAll&isEdit=0';
        }

        if (isiOS) {
          window.location.href = '#uploadImgByClient?imgNum=0&serverurl=http://58.221.196.5:11001/file-server/upload/upload.do&selectPhotoType=photoAll&isEdit=0';
        }

        let that = this;

        window.uploadImgOver = function (str) {
          that.materiallist[id].imgList.push({
            imgId: "",
            imgUrl: JSON.parse(str).data
          });
          that.$forceUpdate();
        }

        if (isAndroid) {
          this.$router.go(-1);
        }

      },
      removeImg(line, index) {
        this.materiallist[line].imgList.splice(index, 1);
        this.$forceUpdate();
      }
    }
  }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    border-bottom: 30px solid #f2f2f2;
    height: 180px;
    width: 100%;
    box-sizing: border-box;
    z-index: 990;
    display: flex;
    justify-content: center;
    background: #fff;
  }

  .buttonList {
    position: fixed;
    bottom: 0;
    height: 99px;
    width: 100%;
    box-sizing: border-box;
    z-index: 990;
    display: flex;
    justify-content: center;
    border-top: 1px solid #eee;
    background: #fff;
  }

  .step {
    flex-grow: 1;
    text-align: center;
    padding-top: 16px;
  }

  .step img {
    width: 44px;
    height: 44px;
    margin-top: 20px;
    margin-bottom: 4px;
  }

  .step p {
    width: 185px;
    text-align: center;
    font-size: 30px;
    color: #999;
  }

  .wall {
    width: 100%;
    padding-top: 180px;
    padding-bottom: 100px;
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

  .blue {
    color: #0778FB !important;
  }

  .list_li {
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    align-items: center;
  }

  .list_li2 {
    border-bottom: 1px solid #f4f4f4;
  }

  .photoList {
    border-bottom: 1px solid #f4f4f4;
    padding: 0 32px;
  }

  .word {
    color: #666;
    font-size: 30px;
    padding-left:40px;
    width: 100%;
    line-height: 98px;
    white-space: nowrap;
  }

  .word2 {
    color: #666;
    font-size: 32px;
    padding-left:32px;
    width: 100%;
    line-height: 98px;
    white-space: nowrap;
  }

  .add_inp {
    margin-bottom: 0;
    padding: 20px 16px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 30px;
    box-sizing: border-box;
    width: 100%;
    line-height: 58px;
  }

  .add_inp2 {
    margin-bottom: 0;
    padding: 20px 40px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 30px;
    box-sizing: border-box;
    width: 100%;
  }

  .add_inp3 {
    margin-bottom: 0;
    padding: 20px 32px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 30px;
    box-sizing: border-box;
    width: 100%;
    line-height: 58px;
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

  .cailiaoMsg {
    background: #fff;
    padding: 16px 32px 16px 40px;
    border-bottom: 1px solid #eee;
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

  .c4 {
    margin-bottom: 20px;
  }

  .c4 > span {
    font-size: 32px;
  }

  #btn {
    width: 750px;
    position: fixed;
    bottom: 0;
    display: flex;
  }

  #btn div {
    width: 50%;
    height: 100%;
    border: 1px solid #eee;
    text-align: center;
    line-height: 100px;
    background: #fff;
    font-size: 36px;
  }

  #btn div:last-child {
    background: #0778fb;
    color: #fff;
  }

  .c3 img {
    vertical-align: middle;
    width: 40px;
  }

  .c3 div:last-child img {
    padding-bottom: 8px;
  }

  .c3 div:last-child a {
    margin-left: 10px;
  }

  .flexLR {
    padding: 16px 48px;
    display: flex;
    justify-content: space-between;
  }

  .addressDetail {
    padding: 16px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .editAddress {
    width: 55px;
    height: 55px;
    margin-left: 16px;
  }

  .noAddress {
    padding: 20px 0 20px 40px;
    font-size: 30px;
  }

  .noTxT {
    text-align: center;
    padding: 32px;
    font-size: 32px;
    color: #999;
  }

  .line30 {
    border-bottom: 30px solid #f2f2f2;
  }

  .mask {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #333;
    opacity: 0.4;
  }

  @-webkit-keyframes rotation {

    from {
      -webkit-transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
    }

  }

  .loading {
    position: fixed;
    z-index: 1002;
    top: 580px;
    left: 335px;
    bottom: 0;
    width: 80px;
    height: 80px;

    -webkit-transform: rotate(360deg);

    animation: rotation 3s linear infinite;

    -moz-animation: rotation 3s linear infinite;

    -webkit-animation: rotation 3s linear infinite;

    -o-animation: rotation 3s linear infinite;
  }

</style>
