<template>
	<div id="main">
		<div v-for="item in list" @click="toDetail(item.url)">
			<div><img :src="item.cover" alt="" /></div>
			<div class="f1">{{item.sourceLabel}}</div>
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
      axios.get("/myha-server/public/catalog/querySource.do?catalogAlias=cyha_hams&sourceType=03").then(res=>{
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
		padding:20px;
		background:rgba(245,245,245,1);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	#main>div{
		width:345px;
		height:426px;
		border-radius:8px;
		margin-bottom: 20px;
		background:rgba(255,255,255,1);
	}
	#main img{
		width:345px;
        height:348px;
	}
	.f1{
		width:100%;
		height:78px;
		font-size:30px;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:78px;
		padding-left:25px;

	}
</style>
