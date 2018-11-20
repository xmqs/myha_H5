<template>
  <div>
    <ul class="list">
      <li  @click="toDetail(url)">
        <div class="detail">
          <div class="title">孕期保健</div>
          <div class="content1">2017-11-02 10:12:13</div>
        </div>
        <div class="img">
          <img src="./../../../static/img/travel/demo.jpg" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  import {mapGetters} from 'vuex'
    export default {
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
      methods:{
        toDetail(url){
          window.location =url;
        },
      }
    }
</script>

<style scoped>
  .list{
    padding: 0 32px;
  }
  .list li{
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 16px 0;
    align-items: center;
  }
  .img img{
    width: 160px;
    height: 120px;
  }
  .img{
    display: flex;
    align-items: center;
  }
  .detail{
    font-size: 28px;
    padding-left: 16px;
    min-height:120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title{
    width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content1{
    width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    color: #aaa;
  }
</style>
