<template>
  <div class="main">
  	  <!--头部搜索框-->
      <div class="top">
      	 <div class="topLeft" @click="selAddr()">
      	 	<span>{{Addr}}</span>
      	 	<span class="mui-icon mui-icon-arrowdown"></span>
      	 </div>
      	 <iframe id="frame" name="iframe" style="display:none;"></iframe>
         <form action="javascript:return true;" method="post">
          <div class="topRight">
            <input type="search" placeholder="请输入学校名称" v-model="searchKey" v-on:keyup.13="search()"/>
            <img src="../../../static/img/schoolIntroduction/searchIcon.png" alt="" />
          </div>
         </form>
      </div>
      <!--列表页-->
      <div class="list">
      	 
      	 <div class="listItem" v-for="item in schoolList" @click="jumpDetails(item.properties.pageUrl)">
      	 	  <img :src="item.properties.cover==''?'./static/img/schoolIntroduction/noImg3.png':item.properties.cover" alt="" />
      	 	  <div>
      	 	  	 <div class="listTitle">{{item.properties.name==""?"暂无":item.properties.name}}</div>
      	 	  	 <div class="listIntro">{{item.properties.remark==""?"暂无介绍信息":(item.properties.remark.length>45?item.properties.remark.slice(0,45)+"...":item.properties.remark)}}</div>
      	 	  	 <div class="listTel" @click.stop="fun()" v-show="item.properties.mobile!=''">联系电话：<a :href="'tel:'+item.properties.mobile">{{item.properties.mobile}}</a></div>
      	 	  	 <div class="listTel" v-show="item.properties.mobile=='' || item.properties.mobile=='暂无'">联系电话：暂无</div>
      	 	  	 <div class="listAddr" @click.stop=toMap(item.properties.name,item.properties.latitude,item.properties.longitude)>
      	 	  	 	  <span>地址：{{item.properties.address==""?"暂无地址信息":item.properties.address}}</span>
      	 	  	 	  <img src="../../../static/img/schoolIntroduction/location.png" alt="" />
      	 	  	 </div>
      	 	  </div>
      	 </div>
      	 
      </div>
      <!--暂无结果-->
      <div class="noList" v-show="isshow">暂无搜索结果</div>
  </div>
</template>

<script>
  import axios from "axios"
  import './../../../static/js/mui.picker.min'
  export default {
    data() {
      return {
           addrList:[],//地区选择
           Addr:"全海安",
           searchKey:"",
           schoolList:[],
           isshow:false,//暂无搜索结果的显示隐藏，不能直接用addrList.length==0页面会优先渲染导致暂无数据闪屏
      }
    },
    mounted() {
				 this.search();
         //获取所有区域接口
   	     axios.get("/myha-server/common/getServiceArea.do")
   	       .then(res=>{
            this.addrList=res.data.data;
            //console.log(this.addrList)
         })        
    },
    //跳转到主页不触发keepAlive
    beforeRouteLeave(to,from,next){
      if(to.name=="schoolMain"){
         from.meta.keepAlive = false
      }
      next();
    },
    methods: {
        selAddr(){
		        //picker选择器
		        let vue=this;
            var picker = new mui.PopPicker();
						picker.setData(vue.addrList);
						picker.show(function (selectItems) {
						    vue.Addr=selectItems[0].text;
						    vue.search();
						})
        },
        search(){
        	 //学校跳转接口
   	       axios.post("/myha-server/schools/search.do",{
   	       	      "catalogAlias":this.$route.params.catalogAlias,
	                "searchKey":this.searchKey,
	                "areaKey":this.Addr
   	       }).then(res=>{
	            this.schoolList=res.data.data;
	            console.log(res.data.data)
	            res.data.data.length==0?this.isshow=true:this.isshow=false;
	         })
        },
        jumpDetails(url){
        	 window.location.href=url;
        },
        //放止点击联系电话触发跳转事件
        fun(){
        	return;
        },
        //地址坐标跳转高德地图
        toMap(name,lat,lon){
        	
	        if(lat==undefined || lat==""){
	          return;
	        }
	        var u = navigator.userAgent;
	        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	
	        if (isAndroid) {
	          if(sessionStorage.getItem("haveAmap") == "false"){
	            window.location.href = 'http://daohang.amap.com/index.php';
	          }else{
	            window.location.href = 'androidamap://navi?sourceApplication=amap&poiname='+name+'&lat='+lon+'&lon='+lat+'&dev=1&style=2';
	          }
	        }
	        if (isiOS) {
	          window.location = 'iosamap://navi?sourceApplication=amap&poiname='+name+'&lat='+lon+'&lon='+lat+'&dev=1&style=2';
	        }
	
	      },
    }
  }
</script>

<style scoped>
	  /*头部样式*/
    .top{
    	width:100%;
    	height:90px;
    	padding:0 30px;
    	position:fixed;
    	top:0;
    	left:0;
    	right:0;
    	display: flex;
    	align-items: center;
    	background: #fff;
    }
    .topLeft{
    	width:160px;
    }
    .topLeft span{
    	color:#0098fb;
    	font-size: 28px;
    }
    .mui-icon{
    	 font-size: 36px !important;
    	 
    }
    .topRight input{
    	width:530px;
    	height:60px;
    	padding:0;
    	margin-bottom: 0;
    	background: #fff;
    	border:1px solid #eee;
    	text-align: left;
    	padding-left:100px;
    	font-size: 28px;
    }
    .topRight img{
    	position: absolute;
    	width:31px;
    	left:230px;
    	top:32px;
    }
    
    /*列表页*/
    .list{
    	padding-top: 90px;
    }
    .listItem{
    	  padding:20px 20px;
    	  min-height:200px;
    	  display: flex;
    	  align-items: center;
    	  border-top:4px solid #eee;
    }
    .listItem>img{
    	  width:210px;
    	  margin-right:20px;
    }
    .listTitle{
    	  font-size: 33px;
    	  color:#383838;
    	  line-height:33px;
				word-break: break-all;
				text-align: justify;
    }
    .listIntro{
    	  font-size: 28px;
    	  color:#999;
    	  line-height:32px;
				word-break: break-all;
				text-align: justify;
				padding-top:25px;
    }
    .listTel{
    	  font-size: 28px;
    	  color:#999;
    	  line-height:28px;
				word-break: break-all;
				text-align: justify;
				padding-top:25px;
    }
    .listAddr{
    	  font-size: 28px;
    	  color:#999;
    	  line-height:32px;
				word-break: break-all;
				text-align: justify;
				padding-top:10px;
				
    }
    .listAddr img{
    	  height:28px;
    	  vertical-align: top;
    }
    .noList{
    	 padding-top: 30px;
    	 width:100%;
    	 text-align: center;
    	 color:#999;
    	 font-size:28px;
    }
</style>
