<template>
	<div id="main">
		<!--轮播图-->
		<div>
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
			        	<img src="../../../static/img/travel/demo.jpg" alt="" />
			        </div>
			        <div class="swiper-slide">
			        	<img src="../../../static/img/travel/demo.jpg" alt="" />
			        </div>
			        <div class="swiper-slide">
			        	<img src="../../../static/img/travel/demo.jpg" alt="" />
			        </div>
			    </div>
			    <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <div class="mui-icon mui-icon-back c1"></div>
			</div>
		</div>
		<!--详情介绍-->
		<div>
			<div class="top">
				<div>七星湖生态园</div>
				<span>3A</span>
			</div>
			<div class="middle">
				七星湖生态园位于海安开发区内，占地1900亩，
				水上面 积500亩，园内7个小岛、3个半岛、1个
				月亮广场形成“ 七星拱月”。整个生态园分为主
				入口广场区、景观大道区、 中心广场区、旅游度
				假区、生态湿地区、体育休闲区、传 统人文区和
				水上活动区八大功能区。象征二十一世纪的螺 旋
				喷泉有丰富多变的水形态。中心大道全长300米，
				两侧 建有欧陆风情商业街。临湖的月亮广场面积
				达12000平方 米，可以同时容纳近万游人停留观
				景；广场建有堪称苏中 地区最大的张拉膜观景台，
				张帆起航的造型，气势非凡； 登上观景台，波纹
				广场畔的芙蓉塘水生花卉展示中心以现 代手法再
				现海安历史的“三塘十景”。
			</div>
			<div class="foot">
			   <div>地址</div>
			   <div>海安市开发区黄海大道南侧</div>
			</div>
			<div class="foot">
			   <div>电话</div>
			   <div>0513-81863129</div>
			</div>
		</div>
	</div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
	    data() {
	      return {
	        swiper: {},
	
	      }
	    },
	    mounted(){
	    	this.swiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal', // 垂直切换选项
			    loop: true, // 循环模式选项
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			      type: 'fraction',
			       renderFraction: function (currentClass, totalClass) {
			          return '<span class="' + currentClass + '"></span>' +
			                 ' / ' +
			                 '<span class="' + totalClass + '"></span>'+'张';
			       },
			    }, 
			    navigation: {
				    nextEl: '.c1',
				  },
			})        
	    },
	    methods:{
	    	
	    }
    
  }
</script>

<style scoped>
	.swiper-container{
		position:relative;
	}
	.swiper-slide img{
		width:100%;
	}
	.swiper-pagination{
		left:578px;
		bottom: 30px;
		color:#fff;
		width:146px;
		height:52px;
		background: rgba(0,0,0,.5) url("../../../static/img/bicycle/S2.png") no-repeat;
		background-size:35px;
		background-position: 10px  center;
		padding-left:35px;
		border-radius: 10px;
		line-height: 52px;
	}
	.c1{
		position:absolute;
		top:32px;
		left:32px;
		color:#fff;
		z-index: 9;
	}
	.top{
		width:100%;
		height:48px;
		padding-left:24px;
		margin:50px 0 29px 0;
		display: flex;
		align-items: baseline;
		background: url(../../../static/img/travel/Rectangle4@2x.png) no-repeat;
		background-size: 9px;
	}
	.top img{
		height:48px;
		vertical-align: middle;
	}
	.top div{
		font-size:48px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:48px;
		padding-right:26px;
	}
	.top span{
		background:linear-gradient(135deg,rgba(8,198,195,1) 0%,rgba(78,191,6,1) 100%);
		border-radius:4px;
		font-size:22px;
		padding:4px 6px;
		color:rgba(255,255,255,1);
		line-height:22px;
	}
	.middle{
		font-size:28px;
		font-weight:300;
		color:rgba(51,51,51,1);
		line-height:42px;
		padding:0 24px 26px 24px;
		overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
	}
	.foot{
		display: flex;
		align-items: center;
		padding:0 24px 26px 24px;
	}
	.foot div:first-child{
		width: 13%;
		font-size:26px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:26px;
	}
	.foot div:last-child{
		width: 87%;
		font-size:26px;
		font-weight:300;
		color:rgba(51,51,51,1);
		line-height:30px;
		overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
	}
</style>
