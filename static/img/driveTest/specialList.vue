<template>
	<div id="main">
			<!--一个单元-->
			<div  class="special" v-for="(data,index) in datas">
				<div class="public" @click="show($event)">
					{{data.name}}
				</div>
				<ul style="display:none">
					<li class="public" v-for="val in data.children" :data-id="val.id" @click="jump($event)">
						{{val.name}}
					</li>
				</ul>
			</div>
			
		</div>
</template>

<script>
	import axios from "axios"
	import $ from 'jquery'
	export default{
		data(){
			return{
				datas:{},
			}
		},
		mounted(){
			axios.get("/myha-server/mockTest/examList.do").then(res=>{
			       this.datas=res.data.data;
			       console.log(this.datas)
			    })
			    
		},
		methods:{
			show(e){
			   $(e.target).toggleClass("title");
			   $(e.target).next().toggle();
			},
			jump(e){
			   $(e.target).toggleClass("iscolor");
			   $(e.target).siblings().removeClass("iscolor");
			   $(e.target).parent().parent().siblings().find("li").removeClass("iscolor");
			   let examId=$(e.target).attr("data-id");
			   this.$router.push("/driveTest/test/"+null+"/"+null+"/"+examId) 
			}
		}
	}
</script>

<style scoped>
li{
    list-style-type:none;
}
.public{
   width:100%;
   border-bottom: 1px solid #eee;
   font-size: 32px;
   padding:26px 20px;
   box-sizing: border-box;
   overflow: hidden;
   word-break: break-all;
   word-wrap: break-word;
   text-align: justify;
}
li{
    background: #e9e9e9;
    padding-left:50px !important;
}
.title{
    border-top:20px solid #f5f5f5;
}
.iscolor{
    background:#bee0ff !important;
}	
</style>