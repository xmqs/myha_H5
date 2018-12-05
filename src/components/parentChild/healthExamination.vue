<template>
	<div>
		<div class="searchList">
	      <div :class="{'active':page==1}" @click="toPage(1)">孕妇体检报告</div>
	      <div :class="{'active':page==2}" @click="toPage(2)">儿童体检报告</div>
	    </div>
	    <div id="main">
	    	<div class="model" v-show="data.peType==page-1" v-for="(data,index) in pwpeList" @click="jumpdetails(data.peType,data.mchId,data.id)">
	    		<div>{{data.peDate}}</div>
	    		<div><img src="../../../static/img/parentChild/7.png" alt="" /></div>
	    		<div>
	    			<span>{{data.peName}}</span>
	    			<span>{{data.address}}</span>
	    		</div>
	    		<div><img src="../../../static/img/normal/right.png" alt="" /></div>
	    	</div>
	    	<div class="model" v-show="data.peType==page-1" v-for="(data,index) in chpeList" @click="jumpdetails(data.peType,data.mchId,data.id)">
	    		<div>{{data.peDate}}</div>
	    		<div><img src="../../../static/img/parentChild/7.png" alt="" /></div>
	    		<div>
	    			<span>{{data.peName}}</span>
	    			<span>{{data.address}}</span>
	    		</div>
	    		<div><img src="../../../static/img/normal/right.png" alt="" /></div>
	    	</div>
	    </div>
	</div>
</template>

<script>
	import axios from "axios"
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return{
				page:1,
				chpeList:{},
		        pwpeList:{},
				data:{
					phone:"",
					userName:"",
					userId:"",
				}
			
			}
		},
		methods:{
	      toPage(n){
	        this.page = n;
	        window.scrollTo(0,0);
	      },
	      //获取体检报告列表 
	      gethealth(){
	      	var mchId=this.$route.params.id
	      	axios.post("/myha-server/mch/getHaPeReportList.do",{mchId}).then(res=>{
		       this.chpeList=res.data.data.chpeList;
		       this.pwpeList=res.data.data.pwpeList;  
		       console.log(this.chpeList)
		       console.log(this.pwpeList)
		    })
	      },
	      //跳转到体检详情
	      jumpdetails(peType,mchId,id){
	      	peType==0?this.$router.push("/parentChild/motherDetails/"+mchId+"/"+id)
	      	 : this.$router.push("/parentChild/childDetails/"+mchId+"/"+id)
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
           
           this.gethealth()
        }
	}
</script>

<style scoped>
	.searchList {
    position: fixed;
    top: 0;
    height: 87px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 999;

    display: flex;
    border-bottom: 1px solid #eee;
    justify-content: center;
  }
  .searchList div{
    width: 40%;
    text-align: center;
    font-size: 26px;
    height: 86px;
    line-height: 86px;
    border-bottom: 4px solid #fff;
  }
  .searchList div.active{
  	font-size: 32px;
    color: #F8A3C0;
    border-bottom: 4px solid #F8A3C0;
  }
  /*详情*/
  #main{
  	margin-top: 87px;
  }
  .model{
  	width:100%;
  	height:100%;
  	padding:20px 10px;
  	display: flex;
  	flex-wrap: wrap;
  }
  .model div:first-child{
  	width:100%;
  	height:40px;
  	color:#999;
  	padding-left:20px;
  }
  .model div:nth-child(2){
  	width:25%;
  	text-align: center;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  }
  .model div:nth-child(2) img{
  	width:45%;
  }
  .model div:nth-child(3){
  	width:70%;
  	min-height: 120px;
  	line-height: 36px;
  }
  .model div:nth-child(3) span {
  	display:block;
  }
  .model div:last-child{
  	width:5%;
  }
  .model div:last-child img{
  	width:10px;
  }
</style>