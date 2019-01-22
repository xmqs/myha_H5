<template>
	<div id="instru">
		<div class="t1">
			<div>审批条件</div>
			<div class="content">{{data.spcondition}}</div>
		</div>
		<div class="t2">
			<div class="flex" @click="on1">
				<span>材料清单</span>
				<span class="mui-icon mui-icon-arrowright" :class="{actived:!isshow1}"></span>
				<span class="mui-icon mui-icon-arrowdown" :class="{actived:isshow1}"></span>
			</div>
			<div class="content" v-show="!isshow1">
				<div v-for="val in data.taskmateriallist">{{val.materialname}}<span style="color:red">*</span></div>
			</div>
		</div>
		<div class="t3" style="border-bottom: 1px solid #f2f2f2;">
			<div>其他说明</div>
			<div>
				<div class="cu">物流配送</div>
				<div class="qi">
					标准寄递服务(单程)<br />
				         代取审批结果，封装寄递到指定地址，包含叠加服务<br />
				市内：12元;省内：18元;外省：20元<br />
				标准寄递服务(双程)<br />
				上门收取材料,代交到相关政府部门，审批结束后代取审批结果，封装寄递到指定地址，包含叠加服务<br />
				市内：12元;省内：18元;外省：不支持<br />
				</div>
				<div class="cu">叠加服务</div>
				<div class="qi">
					1、到付服务<br />
					收到邮件时支付邮费，支持现金、微信、支付宝等多种支付方式<br />
					2、保险<br />
					保险金额200元，邮件确认丢失即赔偿<br />
					3、封装服务<br />
					包装费（包含信封、面单、包装服务）<br />
					4、短信服务<br />
					邮件发出、投递等前后环节,发送提醒短信<br />
					5、本人或指定人签收服务<br />
					通过短信验证码，确保本人或指定人签收。<br />
				</div>
			</div>
		</div>
		<div id="btn" @click="back()">
			返回
		</div>
	</div>
</template>

<script>
	import {mapGetters} from "vuex"
	import axios from "axios"
	export default{
		data(){
			return{
				isshow1:false,
				data:{}
			}
		},
		methods:{
			on1(){
			  this.isshow1=!this.isshow1;
		    },
		    back(){
				history.go(-1)
			}
		},
		mounted(){
			//console.log(this.$route.params.shenbanList)
			//获取申办说明
			axios.post("/third-server/govService/declareProjectNotice.do",
			{
			  "taskGuid":this.$route.params.taskguid
			}).then(res=>{
				this.data=res.data.data;
				console.log(res.data.data)
			})

		}
	}
</script>

<style scoped>
	.t1,.t2{
		border-bottom: 10px solid #f2f2f2;
	}
	.t3{
		padding-bottom: 100px;
	}
	.t3>div:first-child{
		width:100%;
		height:80px;
		font-size: 32px;
		line-height: 80px;
		padding:0 36px;
		border-bottom: 1px solid #f0f0f0;
	}
	.t3>div:last-child{
		width:100%;
		font-size: 30px;
		padding:10px 50px;
	}
	.t1 div:first-child{
		width:100%;
		height:80px;
		font-size: 32px;
		line-height: 80px;
		padding:0 36px;
		border-bottom: 1px solid #f0f0f0;
	}
	.t1 div:last-child{
		width:100%;
		min-height:80px;
		font-size: 30px;
		padding:10px 50px;
		color:#666;
	}
	.content div{
		width:100%;
		min-height:80px;
		font-size: 30px;
		color:#666;
		padding:10px 50px;
		border-bottom: 1px solid #f0f0f0;
	}
	.flex{
		display:flex;
		width:100%;
		min-height:80px;
		justify-content:space-between;
		padding:20px 32px;
		background: #fff;
		border-bottom: 1px solid #eee;
		align-items: center;
   }
   .flex span:first-child{
	   font-size: 32px;
   }
   .actived{
		display:none;
	}
	#btn{
     	position:fixed;
     	bottom: 0;
     	width:100%;
     	height:100px;
     	background: #419cf9;
     	color:#fff;
     	font-size: 32px;
     	text-align: center;
     	line-height: 100px;
     }
     .qi{
     	overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
		color:#666;
     }
</style>
