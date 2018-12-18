<template>
	<div id="main">
		<!--一个单元-->
		<div class="List" v-for="item in list">
			<div class="List_left" @click="toDetail(item.properties.pageUrl)"><img :src="item.properties.cover" alt="" class="foodImg"/></div>
			<div class="List_right">
				<div @click="toDetail(item.properties.pageUrl)">{{item.sourceLabel}}</div>
        <div class="icon" @click="toDetail(item.properties.pageUrl)">{{item.properties.signpost}}</div>
				<div class="l2" @click="toDetail(item.properties.pageUrl)">{{item.properties.remark}}</div>
			    <div class="l3">
			    	<img src="../../../static/img/travel/Group 3@2x.png" alt=""  @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)"/>
			    	<div @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">{{item.properties.address}}</div>
			    </div>
			    <div class="l3">
			    	<img src="../../../static/img/travel/Group 14@2x.png" alt="" />
			    	<div>
              <a class="phone" :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a></div>
			    </div>
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
      	console.log(res.data.data)
        this.list = res.data.data;
      })
    },
    methods:{
      toDetail(url){
        window.location = url;
      },
      toMap(name,lat,lon){
        if(lat=="暂无"||lat==""){
          return;
        }
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          if(sessionStorage.getItem("haveAmap") == "false"){
            window.location.href = 'http://daohang.amap.com/index.php';
          }else{
            window.location.href = 'androidamap://navi?sourceApplication=amap&poiname='+name+'&lat='+lat+'&lon='+lon+'&dev=1&style=2';
          }
        }
        if (isiOS) {
          window.location = 'iosamap://navi?sourceApplication=amap&poiname='+name+'&lat='+lat+'&lon='+lon+'&dev=1&style=2';
        }

      },
    }
  }
</script>

<style scoped>
	#main{
		padding:0 46px 0 26px;
	}
	.List{
		width:100%;
		padding:24px 0 10px 0;
		min-height:257px;
		border-bottom: 1px solid #eee;
    display: flex;
	}
	.List_left{
    float: left;
		width:198px;
		height:198px;
		border:1px solid #eee;
		margin-right:24px;
	}
	.List_right{
		width:456px;
		min-height: 198px;
		float: right;
	}
  .List_right>div{
    margin-bottom: 16px;
  }
	.List_right div:first-child{
		font-size:30px;
		color:rgba(51,51,51,1);
		line-height:30px;
		/*padding-bottom: 16px;*/
	}
	/*.List_right .l1{
		padding-bottom: 16px;
	}*/
	.List_right .icon{
    display: inline-block;
		border-radius:4px;
		border:1px solid rgba(255,170,0,1);
		font-size:20px;
		color:rgba(255,170,0,1);
		padding:5px 10px;

	}
	.List_right .l2{
		font-size:24px;
		color:rgba(153,153,153,1);
		line-height:28px;
		overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
        white-space: nowrap;
		text-align: justify;
		/*padding-bottom: 12px;*/
        text-overflow: ellipsis;
	}
	.List_right .l3{
		display: flex;
	}
	.l3 div{
		font-size:24px;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:33px;
		overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
	}
  .phone{
    font-size:24px;
  }
	.l3 img{
		width:30px;
		height:30px;
		margin-right:10px;
	}
  .foodImg{
    width: 198px;
    height: 198px;
  }
</style>
