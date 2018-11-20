<template>
	<div id="details">
		<div class="flex marginBottom">
			<span>随访日期</span>
			<span>{{value.followDate}}</span>
		</div>
		<!--基本信息-->
		<div class="flexBox marginBottom">
			<div class="flex borderLeft">
				<span>分娩日期</span>
				<span>{{value.childbirthDate}}</span>
			</div>
			<div class="flex">
				<span>出院日期</span>
				<span>{{value.dischargeDate}}</span>
			</div>
			<div class="flex">
				<span>一般健康状况</span>
			</div>
			<div class="flex last">
				{{value.grHealthStatus}}
			</div>	
			<div class="flex">
				<span>一般心理状况</span>
			</div>
			<div class="flex last">
				{{value.grPsychologicalStatus}}
			</div>
		</div>
		<!--体检状况-->
		<div class="marginBottom">
			<div class="flex borderLeft" @click="on1">
				<span>体检状况</span>
				<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow1}"></span>
				<span class="mui-icon mui-icon-arrowup" :class="{active:isshow1}"></span>
			</div>
			<div class="flex" :class="{active:isshow1}">
				<span>血压</span>
				<span>{{value.bloodPressure}}</span>
			</div>
			<div class="flex" :class="{active:isshow1}">
				<span>乳房</span>
				<span>{{value.breast}}</span>
			</div>
			<div class="flex" :class="{active:isshow1}">
				<span>恶露</span>
				<span>{{value.lochia}}</span>
			</div>
			<div class="flex" :class="{active:isshow1}">
				<span>子宫</span>
				<span>{{value.uterus}}</span>
			</div>
			<div class="flex" :class="{active:isshow1}">
				<span>伤口</span>
				<span>{{value.wound}}</span>
			</div>
			<div class="flex" :class="{active:isshow1}">
				<span>其他</span>
				<span>{{value.other}}</span>
			</div>
		</div>
		
		<!--健康指导-->
		<div class="marginBottom">
			<div class="flex borderLeft" @click="on2">
				<span>健康指导</span>
				<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow2}"></span>
				<span class="mui-icon mui-icon-arrowup" :class="{active:isshow2}"></span>
			</div>
			<ul class="ul" :class="{active:isshow2}">
				<li v-for="a in arr">{{a}}</li>
			</ul>
		</div>
		<!--访问医生签名-->
		<div class="marginBottom">
			<div class="flex borderLeft" @click="on3">
				<span>访问医生签名</span>
				<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow3}"></span>
				<span class="mui-icon mui-icon-arrowup" :class="{active:isshow3}"></span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>{{value.followDoctorSignature}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import axios from "axios"
	export default{
		data(){
			return {
				isshow1:false,
				isshow2:false,
				isshow3:false,
				data:{
					phone:"",
					userName:"",
					userId:"",
				},
				value:{},
				arr:[]
			}
		},
		methods:{
			on1(){
				this.isshow1=!this.isshow1;
			},
			on2(){
				this.isshow2=!this.isshow2;
			},
			on3(){
				this.isshow3=!this.isshow3;
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
           this.data.phone = this.getUserPhone;
           this.data.userName = this.getUserName;
           this.data.userId = this.getUserId;
           var peId=this.$route.params.id
           axios.post("/myha-server/mch/getHaPwpeDetail.do",{peId}).then(res=>{
		       this.value=res.data.data
		       this.arr=res.data.data.healthGuidance.split(",");
		       console.log(this.value)
		   })
        },
	}
</script>

<style scoped>
	#details{
		width:100%;
		height:100%;
		overflow: hidden;
		background: #eee;
	}
	.flex{
		display:flex;
		width:100%;
		justify-content:space-between;
		padding:20px 40px;
		background: #fff;
		border-bottom: 1px solid #eee;
		position:relative;
	}
	.marginBottom{
		margin-bottom: 10px;
	}
	.flexBox{
		display:flex;
		justify-content:space-between;
		flex-wrap: wrap;
	}
	.last{
		min-height:300px;
	}
	.active{
		display:none;
	}
	.borderLeft:before {
        content: '';
        position: absolute;
        left: 0;
        top: 20%;
        bottom: auto;
        right: auto;
        height: 60%;
        width: 5px;
        background-color: cadetblue;
    }
    .ul{
    	background: #fff;
    	padding:20px 40px;
    	line-height: 36px;
    }
</style>