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
		<div class="t1 t3" style="border-bottom: 1px solid #f2f2f2;">
			<div>其他说明</div>
			<div></div>
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
			axios.post("/myha-server/govService/declareProjectNotice.do",
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
</style>