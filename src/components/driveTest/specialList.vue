<template>
	<div id="main">
			<!--一个单元-->
			<div  class="special" v-for="(data,index) in datas">
				<div class="public" @click="show(index,data.children,data.id)"  :class="{title:data.isshow}">
					{{data.name}}
				</div>
				<ul v-show="data.isshow">
					<li class="public"  v-for="(val,i) in data.children" :class="{iscolor:val.iscolor}"  @click="jump(index,i,val.id)">
						{{val.name}}
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return{
				datas:{},
			}
		},
		mounted(){
			axios.get("/myha-server/mockTest/examList.do").then(res=>{
			       this.datas=res.data.data;
			       for(let i=0;i<this.datas.length;i++){
			       	   this.datas[i].isshow=false;
			       	   if(this.datas[i].children!=null){
			       	   	    for(let j=0;j<this.datas[i].children.length;j++){
				       	   	  this.datas[i].children[j].iscolor=false;
				       	   }
			       	   }
			       }
			       console.log(this.datas)
			    })

		},
		methods:{
			show(i,children,examId){
				if(children==null){
					this.$router.push("/driveTest/test/"+null+"/"+examId)
				}{
					this.datas[i].isshow=!this.datas[i].isshow;
			        this.$forceUpdate();
				}

			},
			jump(index,i,examId){
				for(let i=0;i<this.datas.length;i++){
			       	if(this.datas[i].children!=null){
			       	   	for(let j=0;j<this.datas[i].children.length;j++){
				       	   	this.datas[i].children[j].iscolor=false;
				       	}
			       	}
			       }
				this.datas[index].children[i].iscolor=true;
				this.$forceUpdate();
				var t;
				clearTimeout(t)
				t = setTimeout(()=>{
				    console.log('执行了');
				    this.$router.push("/driveTest/test/"+null+"/"+examId)
				}, 100);

			},


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
.iscolor{
    background:#bee0ff !important;
}
</style>
