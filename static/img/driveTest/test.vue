<template>
	<div class="swiper-container">
		    <div class="swiper-wrapper">
		    	<!--一个单元-->
		        <div class="swiper-slide" v-for="(data,index) in datas" :class="'slide'+index">
		        	<div class="top">
						<div class="c1" @click="prev(index)">上一题</div>
						<div class="c2"  @click="next(index)">下一题</div>
					</div>
					<div class="main">
						<div>{{data.question}}</div>
						<div v-show="data.imgUrl!=undefined">
						   <img v-for="val in data.imgUrl" style="width:50%" :src="val" alt="" />
						</div>
					</div>
					<ul  class="foot">
						<li :class="'f'+index"  v-for="(opt,i) in data.option" @click.once="sel(index,data.answer)">
							<div class="ico"><img :src="'../../../static/img/driveTest/a'+i+'.png'" alt="" /></div>
							<div class="mui-input-row mui-radio mui-left">
								<label>{{opt}}</label>
								<input :data-i="i" name="radio1" type="radio">
							</div> 
						</li>
					</ul>
					<div class="answer" style="display:none" v-show="data.userAnswer">
						正确答案：{{data.answer==0?"A":(data.answer==1?"B":(data.answer==2?"C":"D"))}}、{{data.option[data.answer]}}
					</div>
					
		        </div>
		        <!--一个单元年结束-->
		        
		    </div>
	</div>
</template>

<script>
	import axios from "axios"
	import Swiper from 'swiper'
	import $ from 'jquery'
	export default{
		data(){
			return{
				obj:{
					"params": {
				        "type": "1",
				        "examId": ""
				    },
				    "pageNo": "1",
				    "pageSize": "1000"
				},
				datas:{},
				swiper:{},
				total:"",
				
			}
		},
		computed:{
			isshow(){
				
			}
		},
		mounted(){
			this.$route.params.Number=='null'?this.obj.pageSize=1000:this.obj.pageSize=this.$route.params.Number
			this.$route.params.type=='null'?this.obj.params.type="":this.obj.params.type=this.$route.params.type;
			this.$route.params.examId=='null'?this.obj.params.examId="7C2B5CBD7CBED63CE050007F01000787":this.obj.params.examId=this.$route.params.examId;
			this.getDate()
		},
		methods:{
			getDate(){
				axios.post("/myha-server/mockTest/questionListByPage.do",this.obj).then(res=>{
			       this.datas=res.data.data;
			       this.total=res.data.page.total;
			       console.log(res.data);
			       for(let i = 0;i<this.datas.length;i++){
			       	this.datas.userAnswer = false;
			       }
			       this.$nextTick(()=>{
			       	this.swiper = new Swiper ('.swiper-container', {
	                    direction: 'horizontal', // 垂直切换选项
						loop: false, // 循环模式选项
						autoHeight:true,
						observer:true,
                        observeParents:true,
                        navigation: {
					      nextEl: '.c2',
					      prevEl: '.c1',
					    },
	                })
			       })
			       
			    })
			},
			sel(i,answer,j){
				if(answer==$('.f'+i+' input:checked').attr("data-i")){
					console.log("回答正确")
					this.swiper.slideTo(i+1)
					$('.f'+i+' input:checked').prev().css("color","#49c500");
					$('.f'+i+' input').attr("disabled","true");
					$('.f'+i+' input:checked').parent().prev().children().attr("src",'../../../static/img/driveTest/dui.png')
				}else{
					console.log("回答错误")
					
					//this.datas[i].userAnswer = true;
					//this.$forceUpdate();
					$('.f'+i+' input:checked').prev().css("color","#f40000");
					$('.f'+i+' input').attr("disabled","true");
					$('.f'+i+' input:checked').parent().prev().children().attr("src",'../../../static/img/driveTest/cha.png')
				}
				this.datas[i].userAnswer = true;
				this.$forceUpdate();
				this.$nextTick(()=>{
					this.swiper.update();
				})
			},
			next(i){
				if(i+1==this.total){
					alert("已经是最后一题了")
					
				}
			},
			prev(i){
				if(i==0){
					alert("已经是第一题了")
				}
				
			}
		}
	}
</script>

<style scoped>
li{
   list-style-type:none;
}
.clear::after{
    content:"";
    display: block;
    clear:both;
}
.top{
   padding:30px;
   display: flex;
   justify-content: space-between;
}
.c1{
    width:144px;
    height:60px;
    border:1px solid #3184f0;
    color:#3184f0;
    font-size: 26px;
    line-height: 60px;
    text-align: center;
    border-radius: 26px;
}
.c2{
    width:144px;
    height:60px;
    background: #3184f0;
    color:#fff;
    font-size: 26px;
    line-height: 60px;
    text-align: center;
    border-radius: 26px;
}
.main div:first-child{
    width:100%;
    box-sizing: border-box;
    padding:20px;
    font-size: 32px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
}
.main div:last-child{
    width:100%;
    box-sizing: border-box;
    padding:0 20px;
}
.img{
    display:flex ;
    width:100%;
    flex-wrap: wrap;
    display: none;
}
.img img{
    margin-right:20px;
    margin-bottom:20px;
    height:180px;
}
.foot li{
    width:100%;
    min-height:100px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    /*padding:20px;*/
    position:relative;
}
.ico{
    width:50px;
    height:50px;
    left:40px;
    top:18px;
    position:absolute;
}
.ico img{
    width:100%;
}
.foot>li div:first-child img{
    width:50px;
}
.foot>li div:last-child{
    width:100%;
    padding:0 20px;
    font-size: 32px;
    box-sizing: border-box;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
}
.answer{
    width:100%;
    box-sizing: border-box;
    min-height:100px;
    font-size: 32px;
    padding:30px 20px;
    border-top:20px solid #f5f5f5;
    border-bottom:20px solid #f5f5f5;
}

.swiper-container {
    width: 750px;
  }
  .swiper-slide{
    width: 750px !important;
  }
.mui-radio input[type=radio]:before {
    content: '';
}
.mui-radio.mui-left label{
	margin:0;
    padding-right: 0;
    padding-left:90px;
    box-sizing: border-box;
    width:100%;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
}
</style>