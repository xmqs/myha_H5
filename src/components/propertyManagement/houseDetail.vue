<template>
  <div>
    <div class="title">
      <div class="t1">
        坐落
      </div>
      <div>
        {{data.address}}
      </div>
    </div>
    <div class="title">
      <div class="t1">
        丘权号
      </div>
      <div>
        {{data.hillockNum}}
      </div>
    </div>
    <div class="title">
      <div class="t1">
        不动产单元号
      </div>
      <div>
        {{data.estateUnitNum}}
      </div>
    </div>
    <div class="title right_icon" @click="pdf(data.estateRegister)">
      <div class="t1">
        不动产登记簿
      </div>
      <div class="blue">
        查看
      </div>
    </div>
    <div class="title right_icon"@click="pdf(data.houseHoldMap)">
      <div class="t1">
        分层分户图
      </div>
      <div class="blue">
        查看
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "business",
    data(){
      return{
        data:{}
      }
    },
    methods:{
      pdf(url){
        window.location  = "http://192.168.0.37:8000/jn/pdf/whjn/pdf.html?url="+url;
      }
    },
    mounted(){
      axios.post("/myha-server/houseRoomInfo/showRoomInfo.do",{
        id:this.$route.params.id
      }).then(res=>{
        this.data = res.data.data
      })
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    align-items: center;
    padding: 16px 32px;
    border-bottom: 1px solid #eee;
    font-size: 32px;
    justify-content: space-between;
  }
  .icon{
    display: flex;
    align-items: center;
  }
  .icon img{
    width: 50px;
    height: 50px;
  }
  .red{
    color: #e4393c;
  }
  .t1{
    min-width: 200px;
    white-space: nowrap;
  }
  .show{
    width: 686px;
    height: 88px;
    border-radius: 6px;
    background: #ec971f;
    color: #fff;
    text-align: center;
    line-height: 88px;
    font-size: 32px;
    margin: 16px 0 0 32px;
  }
  .blue{
    color: #0d9bf2;
  }
</style>
