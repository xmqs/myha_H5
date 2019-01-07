<template>
  <div class="school">
     <div class="sBorder">
     	<div class="sBg">
     	    <img class="img1" @click="jump('school_youeryuan')" src="../../../static/img/schoolIntroduction/组2@2x.png" alt="" />
     	    <img class="img2" @click="jump('school_xiaoxue')" src="../../../static/img/schoolIntroduction/组 2 拷贝@3x.png" alt="" />
     	    <img class="img3" @click="jump('school_zhongxue')" src="../../../static/img/schoolIntroduction/组 1@3x.png" alt="" />
     	    <img class="img4" @click="jump('school_zhiyexuexiao')" src="../../../static/img/schoolIntroduction/组 2 拷贝 2@3x.png" alt="" />
     	    <img class="middleImg" src="../../../static/img/schoolIntroduction/middleImg.png" alt="" />
     	    
     	</div>
     </div>
  </div>
</template>

<script>
  import axios from "axios"
  import './../../../static/js/mui.picker.min'
  //import $ from 'jquery'
  //import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
      }
    },
//  computed: {
//    ...mapGetters([
//      "getUserId",
//      "getUserName",
//      "getCardId",
//      "getUserPhone",
//      "getAuditAddress",
//    ]),
//  },
    mounted() {
         //动态获取屏幕高度，使背景填满屏幕
//       let h=document.documentElement.clientHeight ;//屏幕
//       if(h<=1335){
//       	  //图片高度1335px，相当于178vw。放止屏幕高度不足内容高度时，背景填充不完整的问题
//       	  $('.school').css('height','178vw')
//       }else{
//       	  $('.school').css('height',h+'px')
//       }
    },
    methods: { 
       jump(catalogAlias){
       	   this.$router.push("/schoolIntroduction/schoolList/" + catalogAlias)
       }
    }
  }
</script>

<style scoped>
    .school{
    	width: 100%;
    	height:100%;
	    background: #64d0eb url(./../../../static/img/schoolIntroduction/schoolbg.png) no-repeat top;
	    background-size: 750px;
	    position:absolute;
    }
    .sBorder{
    	width:716px;
    	height:716px;
    	border:1px dashed #fff;
    	position:absolute;
    	bottom:50px;
    	left:17px;
    }
    .sBg{
    	width:684px;
    	height:684px;
    	margin:16px;
    	background: #fff;
    }
    .sBg img{
    	width:244px;
    }
    .middleImg{
    	position:absolute;
    	width:210px;
    	top:235px;
    	left:235px;
    }
    /*.middleImg div{
    	width:98px;
    	height:79px;
    	font-size:40px;
		  font-family:"STBaoliSC-Regular" !important;
		  font-weight:400;
		  color:rgba(254,255,255,1);
		  line-height:49px;
    }*/
    .img1{
    	margin:31px 105px 140px 41px;
    }
    .img2{
    	margin:31px 0 140px 0;
    }
    .img3{
    	margin:0 105px 31px 41px;
    }
    .img4{
    	margin:0 0 31px 0;
    }
</style>
