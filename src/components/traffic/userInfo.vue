<template>
  <div>
    <div class="noInfo" v-if="this.list.length==0">
      <img src="./../../../static/img/hotline/hotLint1bg.png" alt="">
    </div>
    <div class="carList" v-for="item in list">
      <div class="item">
        <div class="carId">{{item.plateNumber}}</div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">车牌类型</div>
          </div>
          <div class="elecontent">
            <div class="inps2">{{item.plateType}}</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">上牌时间</div>
          </div>
          <div class="elecontent">
            <div class="inps2">{{item.plateTime}}</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">排放标准</div>
          </div>
          <div class="elecontent2">
            <div class="inps2">{{item.effluentStangard}}
            </div>
            <img src="./../../../static/img/normal/Group@3x.png" alt="" @click="showTips">
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">上次年检</div>
          </div>
          <div class="elecontent">
            <div class="inps2">{{item.lastMto}}</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">年检期限</div>
          </div>
          <div class="elecontent">
            <div class="inps2">截止{{item.mtoTerm}}</div>
          </div>
        </div>
        <div class="ele right_icon" @click="toThings(item.plateNumber)">
          <div class="tit">
            <div class="cntit">未处理违章</div>
          </div>
          <div class="elecontent">
            <div class="inps2">{{item.notViolation}}</div>
          </div>
        </div>
        <div class="ele">
          <div class="tit">
            <div class="cntit">车辆操作</div>
          </div>
          <div class="elecontent">
            <div class="inps3">
              <div class="unbind" @click="unbind(item)">
                解除绑定
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="tips" @click="toAdd">继续添加车辆</div>
      <div class="aadNew">操作指南</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"
    export default {
      name: "userInfo",
      data(){
        return{
          list:[],
          userId:""
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
      methods:{
        toThings(id){
          this.$router.push("/trafficarThings/"+id);
        },
        toAdd(){
          this.$router.push("/trafficaddNewCar");
        },
        showTips(){
          mui.alert(
            "因为各地执行排放标准时间差异，本查询所示车辆排放标准仅适用于海安，不作为车辆转出依据。\n如有疑问，请将车辆登记证书，行驶证（进口车辆提供海关单或者车辆铭牌）拍照后发至：\n xianxingyouxiang@126.com进行核实，或者电询：\n58602769,66600673",
            "特别说明"
          )
        },
        unbind(item){
          let vue = this;
          var btnArray = ['取消', '确定'];
          mui.confirm(
            "系统即将解除本账号<span class='color_red'>（驾驶证号码："+item.driverLicenseNumber+"）</span>与车辆<span class='color_red'>"+item.plateNumber+"</span>的绑定关系，请您确认无误后点击确定进行解绑。",
            "操作确认",
            btnArray,
            function (e) {
              if(e.index==1){
                axios.post("/myha-server/vehicle/unbind.do",{
                  id:item.id,
                  plateNumber:item.plateNumber
                }).then(res=>{
                  if(res.data.result=="1"){
                    mui.toast('解除成功',{ duration:'short', type:'div' });
                  }
                  vue.getList();
                })
              }
            }
          )
        },
        getList(){
          axios.post("/myha-server/vehicle/vehicleList.do",{
            "userId":this.getUserId
          }).then(res=>{
            this.list = res.data.data;
          })
        }
      },
      mounted(){
        this.getList();
      }
    }
</script>

<style scoped>
  .noInfo{
    text-align: center;
    padding: 100px 0 80px 0;
  }
  .noInfo img{
    width: 400px;
  }
  .aadNew{
    width: 550px;
    margin-left: 100px;
    height: 76px;
    line-height: 76px;
    background: #0d9bf2;
    font-size: 32px;
    text-align: center;
    border-radius: 6px;
    color: #fff;
    margin-top: 32px;
  }
  .list{
    padding-top: 20px;
  }
  .tips{

    width: 550px;
    margin-left: 100px;
    height: 76px;
    line-height: 76px;
    background: #ffbf54;
    font-size: 32px;
    text-align: center;
    border-radius: 6px;
    color: #fff;
  }
  .carList{
    padding:16px;
  }
  .item{
    width: 100%;
    border:1px solid #f1f1f1;
  }
  .carId{
    color: #fff;
    background:#0d9bf2;
    font-size: 32px;
    padding: 16px;
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

  .tit {
    color: #333;
    max-width: 35%;
    overflow: hidden;
  }

  .cntit {
    font-size: 32px;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
  }
  .inps2 {
    width: 100%;
    padding: 0 32px 0 0;
    min-height: 88px;
    text-align: right;
    line-height: 88px;
    word-wrap: break-word;
    font-size: 30px;
  }

  .inps3 {
    width: 100%;
    padding: 0 32px 0 0;
    min-height: 88px;
    text-align: right;
    line-height: 88px;
    word-wrap: break-word;
    font-size: 30px;
    display: flex;
    align-items: center;
  }


  .right_icon {
    padding-right: 40px;
    background: url("./../../../static/img/normal/right.png") right no-repeat;
    background-size: 12px;
  }
  .elecontent2{
    display: flex;
    align-items: center;
  }
  .elecontent2 img{
    width: 40px;
    height: 40px;
  }
  .unbind{
    color: #fff;
    background: #ffbf54;
    height: 60px;
    line-height: 60px;
    padding:  0 16px;
    border-radius:8px;
  }
</style>
<style>
  .color_red{
    color: #e4393c;
  }
</style>
