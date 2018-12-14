<template>
	<div>
		<!--一个单元-->
		<div class="main" v-for="item in list">
			<div><img src="../../../static/img/travel/Group2@2x.png" alt="" /></div>
			<div>
				<div class="t1">{{item.sourceLabel}}</div>
				<div class="t2"  @click="toMap(item.sourceLabel,item.properties.latitude,item.properties.longitude)">地址：{{item.properties.address}}</div>
				<div class="t2">联系电话：{{item.properties.mobile}}</div>
				<div class="t2">负责人：{{item.properties.mobile}}</div>
				<div class="t2">手机号：
          <a :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a>
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
        "catalogAlias" : 'cyha_xcyld'
      }).then(res=>{
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
	.main{
		float: left;
		width:100%;
		min-height: 240px;
		padding:29px 26px;
		border-bottom: 1px solid #eee;
	}
	.main>div{
		float: left;
	}
	.main img{
		width:72px;
	}
	.main>div:first-child{
		width:15%;
		text-align: center;
	}
	.main>div:last-child{
		width:85%;
		min-height: 240px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.t1{
		font-size:30px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:30px;
	}
	.t2{
		font-size:24px;
		font-weight:400;
		color:rgba(102,102,102,1);
		line-height:28px;
	}
  .t2 a{
    font-size:24px;
  }
</style>
