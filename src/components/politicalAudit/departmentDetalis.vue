<template>
  <div id="main">
    <!--搜索框-->
    <div id="search">
      <input type="text" placeholder="请输入部门或业务名称" v-model="requestData.searchCondition" v-on:keyup.13="search()"/>
      <img src="../../../static/img/politicalAudit/search.png" @click="search()"/>
    </div>
    <div id="listMsg">
      <!--市发展改革委员会-->
      <div class="bumen" v-for="vals in shixiangList">
        <div class="bumenTop">
          {{vals.name}}
        </div>
        <div class="bumenMain" v-for="val in vals.children" @click="jumpshenban(val.taskguid,val.allowapp)">
          <div class="accordion">
            <div><img src="./../../../static/img/politicalAudit/Fill16@2x.png"/></div>
            <div>
              <span>{{val.taskname}}</span>
              <span class="ico" v-show="val.allowapp==1">可申办</span>
            </div>
          </div>
        </div>
        <!--子标题结构-->
        <!--<div class="accordion">
                     <div></div>
                     <div class="accordion">
                         <div><img  src="./../../../static/img/politicalAudit/Fill16@2x.png" /></div>
                         <div>
                             <span>养老机构设立许可</span>
                             <span class="ico">可申办</span>
                         </div>
                    </div>
              </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
      	isInit:true,//是否执行activated
        shixiangList: {},
        requestData: {
          "allowApp": "",
          "currentPage": "0",
          "pageSize": "1500",
          "ouGuid": "",
          "dictId": "",
          "userType": "",
          "onlineHandle": "0",
          "areaCode": "320621",
          "searchCondition": "",
          "isHome": false
        }
      }
    },
    activated() {
    	  if(this.isInit){
    	  	  this.requestData.ouGuid = this.$route.params.ouGuid;
			      this.requestData.dictId = this.$route.params.dictId;
			      if(this.$route.params.searchCondition!=='null'){
			          this.requestData.searchCondition = this.$route.params.searchCondition;
			      }
		    	  this.requestData.allowApp = this.$route.params.allowApp
			      this.getData();
    	  }
    },
    beforeRouteLeave(to,from,next){
      if(to.name=="politicalMain"){
        this.shixiangList = [];
        this.requestData.searchCondition = "";
        this.isInit=true;
        window.scrollTo(0,0);
      }else if(to.name=="shenbanMsg"){
      	this.isInit=false;
      }
      next();
    },
    methods: {
      search() {
        this.requestData.ouGuid = "";
        this.requestData.dictId = "";
        this.requestData.allowApp = "";
        console.log(this.requestData)
        this.getData();
      },
      getData() {
        axios.post("/myha-server/govService/taskList.do", this.requestData)
          .then(res => {
            this.shixiangList = res.data.data;
            console.log(res.data.data)
          })
      },
      jumpshenban(taskguid, allowapp) {
          console.log(taskguid)
          this.$router.push("/politicalAudit/shenbanMsg/" + taskguid + "/" + allowapp)
      },
      init(){
      	this.requestData.allowApp="";
      	this.requestData.currentPage="0";
        this.requestData.pageSize="1500";
        this.requestData.ouGuid="";
        this.requestData.dictId="";
        this.requestData.userType= "";
        this.requestData.onlineHandle= "0";
        this.requestData.areaCode="320621";
        this.requestData.searchCondition="";
        this.requestData.isHome= false;
      }
    },
  }
</script>

<style scoped>
  #main {
    color: #666 !important;
  }

  #search {
    width: 100%;
    height: 130px;
    position: fixed;
    line-height: 130px;
    top: 0;
    text-align: center;
    background: #f2f2f2;
  }

  #search img {
    position: absolute;
    right: 70px;
    top: 40px;
    width: 40px;

  }

  #search input {
    width: 700px;
    height: 90px;
    border: none;
    font-size: 32px;
    margin-bottom: 0;
    border-radius: 20px;
    padding-right: 100px;
  }

  #listMsg {
    padding-top: 130px;
  }

  .bumen {
    border-bottom: 30px solid #f2f2f2;
  }

  .bumenTop {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 36px;
    padding: 0 32px;
    background: #fff;
    border-bottom: 1px solid #eee;
  }

  .bumenMain > div {
    border-bottom: 1px solid #eee;
    padding: 10px 32px;
  }

  .accordion {
    width: 100%;
    min-height: 100px;
    display: flex;
    background: #fff;
    align-items: center;
  }

  .accordion div:first-child {
    width: 100px;
    box-sizing: border-box;
    padding-top: 10px;
  }

  .accordion div:last-child {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .accordion div:last-child span:first-child {
    font-size: 30px;
    margin-right: 20px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
  }

  .ico {
    display:block;
    color: #fff;
    height: 40px;
    padding:10px 10px;
    font-size: 24px;
    text-align: center;
    line-height: 20px;
    border-radius: 8px;
    background: #419cf9;
  }

  .accordion img {
    width: 52px;
    height: 50px;
  }
</style>
