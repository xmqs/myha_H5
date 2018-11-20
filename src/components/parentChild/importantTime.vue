<template>
	<div id="main">
	   <div>
	   	  儿童<br />
	   	  1.从出生XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	   </div>
	   <div>
	   	  体检时间分别为<br />
	   	  1.从出生XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	   </div>
	   <div>
	   	  2.计划免疫接种月龄<br />
	   	  1.从出生XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	   </div>
	   <div>
	   	  各种疫苗接种时间(按月龄)<br />
	   	  1.从出生XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	   </div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return{
				data:{
					phone:"",
					userName:"",
					userId:"",
				}
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
        },
	}
</script>

<style scoped> 
	#main{
		width:100%;
		height:100%;
		overflow: hidden;
	}
	#main div{
		overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
		padding:30px;
		border-bottom: 1px solid #eee;
	}
</style>