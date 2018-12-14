<template>
	<div id="main">
		<!--一个单元-->
		<div class="List" @click="toDetail(item.url)" v-for="item in list">
			<div class="List_left"><img :src="item.properties.cover" alt="" class="foodImg"/></div>
			<div class="List_right">
				<div>{{item.sourceLabel}}</div>
				<div class="l1">
					<span class="icon">{{$route.params.id=='cyha_hatc'?'海安特产':'旅游路线'}}</span>
				</div>
				<div class="l2">{{item.properties.remark}}</div>
			</div>
		</div>
	</div>
</template>

<script>
  import axios from "axios"
  export default {
    name:"travelFood",
    data(){
      return{
        list:[]
      }
    },
    mounted(){
      axios.post("/myha-server/public/source/props/queryExt.do",{
        "catalogAlias" : this.$route.params.id
      }).then(res=>{
        this.list = res.data.data;
      })
    },
    methods:{
      toDetail(url){
        window.location = url;
      }
    }
  }
</script>

<style scoped>
	#main{
		padding:0 46px 0 26px;
	}
	.List{
		width:100%;
		padding:22px 0 22px 0;
		min-height:216px;
		float: left;
		border-bottom: 1px solid #eee;
	}
	.List_left{
		width:172px;
		height:172px;
		float: left;
		border:1px solid #eee;
		margin-right:26px;
	}
	.List_right{
		width:480px;
		min-height: 172px;
		float: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.List_right div:first-child{
		font-size:30px;
		color:rgba(51,51,51,1);
		line-height:30px;
		padding-bottom: 20px;
	}
	.List_right .l1{
		padding-bottom: 18px;
	}
	.List_right .icon{
		border-radius:4px;
		border:1px solid rgba(255,170,0,1);
		font-size:20px;
		color:rgba(255,170,0,1);
		padding:5px 10px;
	}
	.List_right .l2{
		font-size:24px;
		color:rgba(153,153,153,1);
		line-height:33px;
	}
  .foodImg{
    width: 172px;
    height: 172px;
  }
</style>
