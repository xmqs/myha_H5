<template>
  <div>
    <div class="searchList">
      <div :class="{'active':page==1}" @click="toPage(1)">便民热线</div>
      <div :class="{'active':page==2}" @click="toPage(2)">开锁联动</div>
      <div :class="{'active':page==3}" @click="toPage(3)">有线网点</div>
    </div>
    <div class="wall">
      <div class="scroll">
        <div v-show="page==1">
          <a :href="'tel:'+item.tel" class="cell" v-for="item in list">
            <div class="name">
              <div>{{item.department}} - <span class="phone">{{item.tel}}</span></div>
              <div style="color: #777">{{item.remark}}</div>
            </div>
            <img src="./../../../static/img/normal/phone.png" alt="" class="bgPhone">
          </a>
        </div>
        <div v-show="page==2">
          <li v-for="item in list2" class="card">
            <div class="card_title">{{item.unitName}} - {{item.name}}</div>
            <a :href="'tel:'+i" class="cell2" v-for="i in JSON.parse(item.tel)">
              {{i}}
            </a>
            <div class="card_address">{{item.address}}</div>
          </li>
        </div>
        <div v-show="page==3">
          <a :href="'tel:'+item.hallTel[0]" class="cell" v-for="item in list3">
            <div class="name">
              <div>{{item.hallName}} - <span class="phone">{{item.hallTel[0]}}</span></div>
              <div style="color: #777">{{item.hallAddress}}</div>
            </div>
            <img src="./../../../static/img/normal/phone.png" alt="" class="bgPhone">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "scrollList",
    data(){
      return{
        searchKey:'',
        list:[],
        page:1,
        list2:[],
        list3:[]
      }
    },
    methods:{
      toPage(n){
        this.page = n;
        window.scrollTo(0,0);
      }
    },
    mounted(){
      axios.post('/myha-server/houseTelInfo/showInfo.do',{
        pageNo:1,
        pageSize:999
      }).then(res=>{
        this.list = res.data.data;
      })
      axios.post('/myha-server/houseTelUnlock/showUnlockInfo.do',{
        pageNo:1,
        pageSize:999
      }).then(res=>{
        this.list2 = res.data.data;
      })
      axios.get('/myha-server/common/getWiredNetWork.do').then(res=>{
        this.list3 = res.data.data;
      })
    }
  }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    height: 87px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 999;

    display: flex;
    border-bottom: 1px solid #eee;
    justify-content: center;
  }
  .searchList div{
    width: 30%;
    text-align: center;
    font-size: 32px;
    height: 86px;
    line-height: 86px;
    border-bottom: 4px solid #fff;
  }
  .searchList div.active{
    color: #0d9bf2;
    border-bottom: 4px solid #0d9bf2;
  }


  .wall {
    width: 100%;
    padding-top:88px;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
    padding: 0 32px;
  }
  .cell{
    border-bottom: 1px solid #eee;
    padding: 22px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;

    align-items: center;
    justify-content: space-between;
  }
  .cell2{
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;

    color: #0d9bf2;
    font-size: 32px;
    margin-top: 8px;
    height: 40px;
    line-height: 40px;
    background: url("./../../../static/img/normal/phone.png") right no-repeat;
    background-size: 36px;

  }

  .name {
    font-size: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .phone {
    text-align: right;
    color: #008ef3;
    font-size: 30px;
  }
  .bgPhone{
    width: 36px;
    height: 36px;
  }

  .card{
    border-bottom: 1px solid #eee;
    padding: 8px 0;
  }
  .card_title{
    font-size: 30px;
  }
  .card_address{
    margin-top: 8px;
    font-size: 30px;
  }
</style>
