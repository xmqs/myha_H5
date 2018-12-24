<template>
  <div>
     <div>
     	<!--列表一个单元-->
     	<div class="list" v-for="item in list" @click="toDetail(item.formId,item.formStatus)">
     		<div class="list_left">
     			<div>标题：{{item.title}}</div>
     			<div>诉求目的：{{item.caseGoal}}</div>
     			<div>诉求时间：{{item.createTime}}</div>
     		</div>
     		<div class="list_right" :style="iscolor(item.formStatusName)">
     			{{item.formStatusName}}
     		</div>
     	</div>
     	<!--列表一个单元结束-->
     </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"
    export default {
      name: "index",
      data(){
        return{
           list:[]
        }
      },
      methods:{
        toDetail(id,s){
          this.$router.push("/hotLine45/detail/"+id+"/"+s);
        },
      },
      computed: {
        ...mapGetters([
          "getUserId",
          "getUserName",
          "getCardId",
          "getUserPhone",
        ]),
        iscolor(i) {
           return function (i) {
           	   if(i=="未派发"){
           	   	  return {"background": "url('./static/img/hotline/static2.png') no-repeat",}
           	   }else if(i=="已办结"){
           	   	  return {"background": "url('./static/img/hotline/static3.png') no-repeat",}
           	   }else{
           	   	  return {"background": "url('./static/img/hotline/static1.png') no-repeat",}
           	   }
           }
        }
      },
      mounted(){
        axios.post('/third-server/busiform/busiformList.do',{
          "reqData": {
		        "currIndex": "1", 
		        "pageNum": "999", 
		        "paras": {	
		            "incomingPhone": "13814335668",
		            //"incomingPhone":this.getUserPhone,
		            "formOrigin": "20",
		            "formStatus": "", 
		            "createTimeFrom": "", 
		            "createTimeTo": "", 
		            "orderByField": "create_Time",
		            "orderByMode": "desc"
		        }
		    }
        }).then(res=>{
          console.log(res.data.data.resData.jList)
          this.list=res.data.data.resData.jList;
        })
      }
    }
</script>

<style scoped>
   .list{
   	  width:100%;
   	  min-height:156px;
   	  padding-left:25px;
	  border-bottom: 1px solid #eee;
   }
   .list_left{
   	 width:601px;
   	 float: left;
   	 padding:10px 0;
   }
   .list_right{
   	margin-top:10px;
   	 width:104px;
   	 height:47px;
   	 float: right;
   	 background-position: 0 0 !important;
   	 background-size: 138px !important;
	 font-size:24px;
	 color:rgba(255,255,255,1);
	 line-height:49px;
	 text-align: center;
   }
   .list_left div{
   	  font-size:28px;
	  color:rgba(102,102,102,1);
      line-height:28px;
      padding-bottom: 19px;
   }
</style>
