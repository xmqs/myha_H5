<template>
  <div>
    <div class="content">
      <div class="item" @click="change(index)" v-for="(item,index) in list">
        <div class="title">
          <div>{{item.setLocation}}</div>
          <img src="./../../../static/img/normal/down_icon.png" alt="">
        </div>
        <div class="txt">
          <div>地址：{{item.setLocation}}</div>
          <div>联系人：{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import "./../../../static/js/jquery.min"
    export default {
        name: "propertyListDetail",
      data(){
          return{
            list:[]
          }
      },
      methods:{
        change(index){
          if($($('.item')[index]).hasClass('active')){
            $($('.item')[index]).removeClass("active");
            $($('.item .txt')[index]).removeClass("txt2");
          }else{
            $($('.item')[index]).addClass("active");
            $($('.item .txt')[index]).addClass("txt2");
          }
        }
      },
      mounted(){
          axios.post('/myha-server/property/guid.do',{
            "category":this.$route.params.type
          }).then(res=>{
            this.list = res.data.data;
            for(let i = 0;i<this.list.length;i++){
              this.list[i].active = false;
            }
          })
      }
    }
</script>

<style scoped>
  .content{
    background: #f1f1f1;
    padding: 8px 0;
  }
  .item{
    margin-bottom: 16px;
  }
  .item .title{
    width: 718px;
    min-height: 88px;
    margin:8px 0 0 16px;
    background-size: 12px;

    display: flex;
    padding-left: 32px;
    padding-right: 32px;

    justify-content: space-between;

    align-items: center;
    font-size: 30px;
    color: #666;

    background: #fff;
  }

  .title img{
    transition: all 0.25s;
    width: 30px;
  }
  .txt{
    display: none;

    font-size: 28px;
    color: #fff;
    background:#ec971f;
    width: 718px;
    margin-left: 16px;
    padding: 16px 32px;
  }

  .active .title div{
    color: #ec971f!important;
  }
  .active .title img{
    transform:rotate(180deg);
  }
  .txt2{
    font-size: 28px;
    color: #fff;
    background:#ec971f;
    width: 718px;
    margin-left: 16px;
    padding: 16px 32px;
    display: block!important;
  }
</style>
