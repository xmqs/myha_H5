<template>
	<div id="myEvent">
	    <div class="event" v-for="data in datas">
	      	<div>{{data.projectname}}</div>
	      	<div>申请时间：{{data.applydate}}</div>
	      	<div>
	      		<div>
	      		   <span class="sparetime">{{data.sparetime}}</span>
	      		   <span class="currentstatus">{{data.currentstatus}}</span>
	      		</div>
	      		<i @click="jumpDetails(data.projectguid,data.currentstatus,data.taskguid)"><span v-if="data.currentstatus=='待提交'">编辑 》</span><span v-else>查看详情 》</span></i>
	      	</div>
	    </div>
	</div>
</template>

<script>
	import {mapGetters} from "vuex"
	import axios from "axios"
	export default{
		data(){
			return {
				accountguid:"",
				userMsg:{
					phone:"",
					userName:"",
					userId:"",
				},
				datas:{}
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
            console.log(this.userMsg.userId)
			//身份验证
			axios.post("/myha-server/govService/getAccountGuid.do",{
				//"idNum":"3e9dff50-54a8-46af-88cf-52ef2d8c8cc3"
				"idNum":this.getCardId
			})
			.then(res=>{
				this.accountguid=res.data.data.IdList[0].accountguid;
				//获取办事列表
				axios.post("/myha-server/govService/myProjects.do",{
				    "currentPage": "0",//当前页
				    "pageSize":"100",//每页数目
				    "keyword":"",//搜索内容
				    "status":"0",//办件状态
				    "accountGuid":this.accountguid,
				    //"accountGuid":this.accountguid,//身份唯一标识，身份验证接口拿到
				    "areaCode":"320621"
				}).then(res=>{
					this.datas=res.data.data;
					console.log(res.data.data)
				})

			})
		},
		methods:{
			jumpDetails(projectguid,type,taskguid){
			  if(type=="待提交"){
          this.$router.push("/politicalAudit/auditCommit/"+taskguid+ "/" + projectguid);
        }else{
          this.$router.push("/politicalAudit/eventDetails/" + projectguid);
        }
			}
		}
	}
</script>

<style scoped>
	#myEvent{
		background: #f2f2f2;
		color:#666;
	}
	.event{
		width:100%;
		min-height: 180px;
		background: #fff;
		padding:20px 32px;
		margin-bottom: 20px;
	}
	.event div:first-child{
		font-size: 32px;
		margin-bottom: 10px;
	}
	.event div:nth-child(2){
		font-size: 30px;
		margin-bottom: 10px;
	}
	.event div:last-child{
		display: flex;
		justify-content: space-between;
	}
	.sparetime{
		display: block;
		float: left;
		padding:10px;
		height:40px;
		line-height: 20px;
		text-align: center;
		color:#fff;
		border-radius: 8px;
		background: #f47d07;
		font-size: 24px;
	}
	.currentstatus{
		display: block;
		float: left;
		margin-right:10px;
		background: #419cf9;
		padding:10px;
		height:40px;
		text-align: center;
		line-height: 20px;
		color:#fff;
		font-size: 24px;
		border-radius: 8px;
    margin-left: 16px;
	}
</style>
