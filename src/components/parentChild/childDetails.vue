<template>
	<div id="details">
		<div class="flex marginBottom">
			<span>随访日期</span>
			<span>{{value.followDate}}</span>
		</div>
		<!--基本信息-->
		<div class="flexBox marginBottom">
			<div class="flex borderLeft">
				<span>出生日期</span>
				<span>{{value.dateOfBirth}}</span>
			</div>
			<div class="flex">
				<span>出生孕周</span>
				<span>{{value.birthOfWeek}}</span>
			</div>
			<div class="flex">
				<span>出生情况</span>
				<span>{{value.birthCondition}}</span>
			</div>
			<div class="flex last">
				<span>新生儿出生体重</span>
				<span>{{value.nbBirthWeight}}</span>
			</div>
			<div class="flex last">
				<span>目前体重</span>
				<span>{{value.currentWeight}}</span>
			</div>	
		</div>
		<!--筛查状况-->
		<div class="marginBottom">
			<div class="flex borderLeft" @click="on1">
				<span>筛查状况</span>
				<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow1}"></span>
				<span class="mui-icon mui-icon-arrowup" :class="{active:isshow1}"></span>
			</div>
			<div class="flex" :class="{active:isshow1}">
				<span>新生儿听力筛查</span>
				<span>{{value.nbHearingScreen}}</span>
			</div>
			<div class="flex" :class="{active:isshow1}">
				<span>新生儿疾病筛查</span>
				<span>{{value.nbDiseaseScreen}}</span>
			</div>
		</div>
		<!--喂养方式-->
		<div class="marginBottom">
			<div class="flex borderLeft" @click="on2">
				<span>喂养方式</span>
				<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow2}"></span>
				<span class="mui-icon mui-icon-arrowup" :class="{active:isshow2}"></span>
			</div>
			<div class="flex" :class="{active:isshow2}">
				<span>吃奶量</span>
				<span>{{value.milkConsumption}}</span>
			</div>
			<div class="flex" :class="{active:isshow2}">
				<span>吃奶次数</span>
				<span>{{value.numberOfBreastfeeds}}</span>
			</div>
		</div>
		<!--体征-->
		<div class="marginBottom">
			<div class="flex borderLeft" @click="on3">
				<span>体征</span>
				<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow3}"></span>
				<span class="mui-icon mui-icon-arrowup" :class="{active:isshow3}"></span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>呕吐</span>
				<span>{{value.vomiting}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>大便</span>
				<span>{{value.stool}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>大便次数</span>
				<span>{{value.stoolFrequency}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>体温</span>
				<span>{{value.bodyTemperature}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>心率</span>
				<span>{{value.heartRate}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>呼吸频率</span>
				<span>{{value.breathRate}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>眼睛</span>
				<span>{{value.eye}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>耳</span>
				<span>{{value.ear}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>口腔</span>
				<span>{{value.oralCavity}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>心肺听诊</span>
				<span>{{value.heartLungAuscultation}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>腹部触诊</span>
				<span>{{value.abdominalPalpation}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>外生殖器</span>
				<span>{{value.externalGenitalia}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>四肢活动度</span>
				<span>{{value.limbActivity}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>颈部包块</span>
				<span>{{value.preBlock}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>皮肤</span>
				<span>{{value.skin}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>肛门</span>
				<span>{{value.anus}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>胸部</span>
				<span>{{value.chest}}</span>
			</div>
			<div class="flex" :class="{active:isshow3}">
				<span>脊柱</span>
				<span>{{value.spine}}</span>
			</div>
		</div>
		<!--健康指导-->
		<div class="marginBottom">
			<div class="flex borderLeft" @click="on4">
				<span>健康指导</span>
				<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow4}"></span>
				<span class="mui-icon mui-icon-arrowup" :class="{active:isshow4}"></span>
			</div>
			<ul class="ul" :class="{active:isshow4}">
				<li v-for="a in arr">{{a}}</li>
			</ul>
		</div>
		<!--访问医生签名-->
		<div class="marginBottom">
			<div class="flex borderLeft" @click="on5">
				<span>访问医生签名</span>
				<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow5}"></span>
				<span class="mui-icon mui-icon-arrowup" :class="{active:isshow5}"></span>
			</div>
			<div class="flex" :class="{active:isshow5}">
				<span>{{value.followDoctorSignature}}</span>
			</div>
		</div>
		<!--下次访问日期-->
		<div class="marginBottom">
			<div class="flex borderLeft" @click="on6">
				<span>下次访问日期</span>
				<span class="mui-icon mui-icon-arrowdown" :class="{active:!isshow6}"></span>
				<span class="mui-icon mui-icon-arrowup" :class="{active:isshow6}"></span>
			</div>
			<div class="flex" :class="{active:isshow6}">
				<span>{{value.nextFollowDate}}</span>
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
				isshow1:false,
				isshow2:false,
				isshow3:false,
				isshow4:false,
				isshow5:false,
				isshow6:false,
				value:{},
				arr:[],
				data:{
					phone:"",
					userName:"",
					userId:"",
				}
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
			},
			on4(){
				this.isshow4=!this.isshow4;
			},
			on5(){
				this.isshow5=!this.isshow5;
			},
			on6(){
				this.isshow6=!this.isshow6;
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
           axios.post("/myha-server/mch/getHaChpeDetail.do",{peId}).then(res=>{
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
		width:50%;
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