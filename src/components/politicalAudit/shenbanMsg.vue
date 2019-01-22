<template>
	<div id="Msg">
		<!--头部-->
		<div id="top">
			<div>{{shenbanList.taskname}}</div>
			<div class="c1">
				<div>{{shenbanList.taskbasic.anticipateday}}</div>
				<div>{{shenbanList.if_express==1?"可邮寄":"不可邮寄"}}</div>
			</div>
		</div>
		<!--部门信息-->
		<div id="bumenMsg">
			<div>
				<span>主管部门</span>
				<span>{{shenbanList.taskbasic.implementsubject}}</span>
			</div>
			<div>
				<span>事项编码</span>
				<span>{{shenbanList.itemid}}</span>
			</div>
			<div>
				<span>咨询电话</span>
        <div class="phoneLine">
          <a :href="'tel:'+item" v-for="item in shenbanList.taskbasic.linktel.split(',')">{{item}}</a>
        </div>
			</div>
		</div>
		<!--切换栏-->
		<div id="cutMsg">
			<!--切换条-->
			<div class="c2">
				<div :class="{'active':page==1}" @click="toPage(1)">基本信息</div>
        <div :class="{'active':page==2}" @click="toPage(2)">申请材料</div>
			</div>
			<!--下拉菜单-->
			<div>
				<!--基本信息-->
				<div v-show="page==1">
					<div>
						<div class="flex" @click="on1">
							<span>线下办理时间、地点</span>
							<span class="mui-icon mui-icon-arrowright" :class="{actived:!isshow1}"></span>
							<span class="mui-icon mui-icon-arrowdown" :class="{actived:isshow1}"></span>
						</div>
						<div class="content" v-show="!isshow1">
							<div>办理时间：{{shenbanList.taskbasic.handletime==undefined?"":shenbanList.taskbasic.handletime}}</div>
							<div>办理地点：{{shenbanList.taskbasic.handleaddress==undefined?"":shenbanList.taskbasic.handleaddress}}</div>
						</div>
					</div>
					<div>
						<div class="flex" @click="on2">
							<span>办理条件</span>
							<span class="mui-icon mui-icon-arrowright" :class="{actived:!isshow2}"></span>
							<span class="mui-icon mui-icon-arrowdown" :class="{actived:isshow2}"></span>
						</div>
						<div class="content" v-show="!isshow2">
							<div>{{shenbanList.handlecondition==undefined?"":shenbanList.handlecondition}}</div>
						</div>
					</div>
					<div>
						<div class="flex" @click="on3">
							<span>办理流程</span>
							<span class="mui-icon mui-icon-arrowright" :class="{actived:!isshow3}"></span>
							<span class="mui-icon mui-icon-arrowdown" :class="{actived:isshow3}"></span>
						</div>
						<div class="content" v-show="!isshow3">
							<div><img v-show="shenbanList.taskoutimg!=undefined && shenbanList.taskoutimg!=''" style="width:100%;" :src="shenbanList.taskoutimg"/></div>
						</div>
					</div>
					<div>
						<div class="flex" @click="on4">
							<span>设定依据</span>
							<span class="mui-icon mui-icon-arrowright" :class="{actived:!isshow4}"></span>
							<span class="mui-icon mui-icon-arrowdown" :class="{actived:isshow4}"></span>
						</div>
						<div class="content" v-show="!isshow4">
							<div>{{shenbanList.setting==undefined?"":shenbanList.setting}}</div>
						</div>
					</div>
				</div>
				<!--申请材料-->
				<div v-show="page==2">
					<div class="cailiaoMsg" v-for="val in materiallist">
						<div class="c4">
							<span>{{val.projectmaterialname}}</span>
							<span style="color:red" v-show="val.necessary==1">*</span>
						</div>
						<div class="c3">
						   <div>
							   <div v-if="val.necessary==1">必选</div>
							   <div v-else="val.necessary!=1">可选</div>
							   <div>{{val.submittype}}</div>
						   </div>
						   <div>
						   	 <a @click="toImg(val.imageFlag,val.exampleattachguid)"><img  src="../../../static/img/politicalAudit/Group 5@2x.png"/>&nbsp;&nbsp;预览</a>
						   	 <a @click="load(val.templateattachguid)"><img  src="../../../static/img/politicalAudit/Fill 1@2x.png"/>&nbsp;&nbsp;下载</a>
						   </div>
						</div>
					</div>
				</div>
				<!--按钮-->
				<div id="btn">
					<div class="shuomingBtn" @click="jumpInstru()">申办说明</div>
					<div class="shenbanBtn" @click="online()" :class="{iscolor:allowapp==0}">在线申办</div>
				</div>
			</div>
		</div>
		<!--用于接收复制文本-->
		<input style='opacity: 0;bottom:0; position:fixed;' id="input" type="text" />
	</div>
</template>

<script>
  import {mapGetters} from "vuex"
  import axios from "axios"

  export default{
		data(){
			return {
				page:1,
				isshow1:true,
				isshow2:true,
				isshow3:true,
				isshow4:true,
				isshow5:true,
				requestData:{
				    "taskGuid":"",
				    "taskCaseGuid":"",
				    "isNeedAll":"1",
				    "roleType":"20"
				},
				allowapp:"",//是否可申办
				shenbanList:{
					taskbasic:{
					    handletime:0
					},
					resultJson:{
						resultname:0
					}
				},
				accountguid:"",//身份标识
				userMsg:{
					phone:"",
					userName:"",
					userId:"",
				},
				materiallist:[],
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
			this.userMsg.phone = this.getUserPhone;
            this.userMsg.userName = this.getUserName;
            this.userMsg.userId = this.getUserId;
            //身份验证
			axios.post("/third-server/govService/getAccountGuid.do",{
				//"idNum":"3e9dff50-54a8-46af-88cf-52ef2d8c8cc3"
				"idNum":this.userMsg.userId
			})
			.then(res=>{
				this.accountguid=res.data.data.IdList[0].accountguid;
				//申请材料接口
				axios.post("/third-server/govService/initProjectReturnMaterials.do",{
					"accountGuid":this.accountguid,
					"taskGuid":this.requestData.taskGuid,
				})
				.then(res=>{
					this.materiallist=res.data.data.materiallist;
					console.log(res.data.data.materiallist)
				})
			})
			//获取事项详情
			this.requestData.taskGuid=this.$route.params.taskguid;
			this.allowapp=this.$route.params.allowapp;
			axios.post("/third-server/govService/taskBasicInfo.do",this.requestData)
			.then(res=>{
				this.shenbanList=res.data.data;
				console.log("事项详情数据")
				console.log(this.shenbanList);
			})

		},
		methods:{
      toImg(isImg,img){
        if(isImg){
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

          if (isAndroid) {
            window.location.href = img;
          }

          if (isiOS) {
            window.location.href = img+"&hanNewH5";
          }
        }else{
          let json = {
            "file_title":"文件详情",
            "file_url":img
          }
          json = JSON.stringify(json);
          window.haFile.openFile(json);
        }

      },
	      toPage(n){
	        this.page = n;
	      },
	      on1(){
			this.isshow1=!this.isshow1;
		  },
		  on2(){
			this.isshow2=!this.isshow2;
		  },
		  on3(){
			this.isshow3=!this.isshow3;
		  },
		  on4(){
			this.isshow4=!this.isshow4;
		  },
		  on5(){
			this.isshow5=!this.isshow5;
		  },
		  online(){
		  	if(this.allowapp==1){
		  		this.$router.push("/politicalAudit/auditCommit/"+this.$route.params.taskguid);
		  	}
		  },
		  load(templateattachguid){
		  	mui.init();
		  	mui.alert('申请材料文本已生成', '复制链接通过浏览器下载','复制链接' ,function() {
		            let input = document.getElementById("input");
		            input.value =templateattachguid; // 修改文本框的内容
		            input.select(); // 选中文本
		            input.setSelectionRange(0, input.value.length),
		            document.execCommand('Copy');
		            //alert("已复制链接到剪切板!建议粘贴到电脑浏览器下载此文档");
		            mui.toast("已复制链接到剪切板!建议粘贴到电脑浏览器下载此文档", {duration: 'short', type: 'div'});
		            input.blur();
               });
		  },
		  jumpInstru(){
		  	  this.$router.push("/politicalAudit/shenbanInstru"+"/"+this.$route.params.taskguid)
		  }

	    },


	}
</script>

<style scoped>
	#Msg{
		color:#666 !important;
	}
	#top{
		width:100%;
		border-bottom: 1px solid #eee;
		background: #fff;
        padding:32px;
	}
	#top>div:first-child{
		font-size: 36px;
        margin-bottom: 16px;
	}
	.c1{
		display: flex;
	}
	.c1 div:first-child{
		background: #419cf9;
		height:40px;
		text-align: center;
		line-height: 40px;
		padding: 0 10px;
		color:#fff;
		font-size: 24px;
		border-radius: 8px;
		margin-right:20px;
	}
	.c1 div:last-child{
		background: #f47d07;
		height:40px;
		line-height: 40px;
		padding:0 10px;
		text-align: center;
		font-size: 24px;
		color:#fff;
		border-radius: 8px;
		margin-right:10px;
	}
	#bumenMsg{
		border-bottom: 20px solid #eee;
	}
	#bumenMsg>div{
		width:100%;
		min-height:100px;
		display: flex;
		justify-content: space-between;
		background: #fff;
		font-size: 34px;
		padding:20px 32px;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	#bumenMsg>div span{
		font-size: 32px;
	}
	#bumenMsg>div:last-child a{
		font-size: 32px;
	}
	#bumenMsg>div span:first-child{
		width:30%;
	}
	#bumenMsg>div span:last-child{
		overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
	}
	#cutMsg{
		padding-bottom:100px;
	}
	.c2 {
    height: 99px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding:0 32px;
    display: flex;
    border-bottom: 1px solid #eee;
    justify-content:space-around;
  }
  .c2 div{
    width: 30%;
    text-align: center;
    font-size: 32px;
    height: 98px;
    line-height: 98px;
    border-bottom: 4px solid transparent;
  }
  .c2 div.active{
  	font-size: 32px;
    color: #419cf9;
    height: 98px;
    line-height: 98px;
    border-bottom: 4px solid #419cf9;
  }
  .flex{
	display:flex;
	width:100%;
	min-height:100px;
	justify-content:space-between;
	padding:20px 32px;
	background: #fff;
	border-bottom: 1px solid #eee;
	align-items: center;
   }
   .flex span:first-child{
	font-size: 30px;
   }
   .actived{
		display:none;
	}
	.content{
		width:100%;
		min-height: 160px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding:20px 32px;
		background: #fff;
		border-bottom: 1px solid #eee;
	}
	.content div{
	    font-size: 28px;
	    overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
	}
	.cailiaoMsg{
		background: #fff;
		min-height: 160px;
		padding:30px 32px 20px 32px;
		border-bottom: 1px solid #eee;
	}
	.c3{
		width:100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.c3>div:first-child div:first-child{
		background: #419cf9;
		padding:0 10px;
		height:40px;
		line-height: 40px;
		text-align: center;
		color:#fff;
		border-radius: 10px;
		font-size: 25px;
		margin-right:10px;
		float: left;
	}
	.c3>div:first-child div:nth-child(2){
		float: left;
		background: #f47d07;
		height:40px;
		padding:0 10px;
		line-height: 40px;
		text-align: center;
		font-size: 25px;
		color:#fff;
		border-radius: 10px;
	}
	.c4{
		margin-bottom: 10px;
	}
	.c4>span{
		font-size: 32px;
	}
	#btn{
		z-index: 10;
		width:750px;
		position:fixed;
		bottom:0;
		display: flex;
    height: 100px;
    box-sizing: border-box;
	}
	#btn div{
		width:50%;
		height:100%;
		text-align: center;
		line-height: 100px;
		background: #fff;
		font-size: 36px;

	}
  #btn div:first-child{
    height: 100px;
    box-sizing: border-box;
    border-top: 1px solid #eee;
  }
	#btn div:last-child{
		background: #419cf9;
		color:#fff;
	}
	.c3  img{
		vertical-align: middle;
		width:40px;
	}
	.c3 div:last-child img{
		padding-bottom: 8px;
	}
	.c3 div:last-child a{
		margin-left:10px;
	}
	/*不可申办按钮灰色*/
	.iscolor{
		background: #eee !important;
		color:#666 !important;
	}
	.contentImg{

	}
  .phoneLine a{
    display: block;
    margin-bottom: 6px;
    text-align: right;
  }
</style>
