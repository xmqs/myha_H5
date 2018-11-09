<template>
    <div>
      <div class="wall">
        <div class="scroll">
          <div class="title" v-if="data.cardPaper">心电图</div>
          <div class="cell_right_side"  v-if="data.cardPaper" v-for="(item,index) in JSON.parse(data.cardPaper)" @click="pdf(item)">
            {{index+1}}、心电图
          </div>
          <div class="title" v-if="data.inspectPaper">检验单</div>
          <div class="cell_right_side" v-if="data.inspectPaper" v-for="(item,index) in JSON.parse(data.inspectPaper)" @click="pdf(item)">
            {{index+1}}、检验单
          </div>
          <div class="title" v-if="data.videoPaper">影像单</div>
          <div class="cell_right_side" v-if="data.videoPaper" v-for="(item,index) in JSON.parse(data.videoPaper)" @click="pdf(item)">
            {{index+1}}、影像单
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
      name: "portDetail",
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
        axios.post('/myha-server/medical/showPaper.do',{
          id:this.$route.params.id
        }).then(res=>{
          this.data = res.data.data;
        })
      }
    }
</script>

<style scoped>
  .wall {
    width: 100%;
  }

  .scroll{
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    background: #fff;
    padding: 0 32px;
  }
  .cell_right_side{
    border-bottom: 1px solid #eee;
    padding: 22px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 40px;
    background: url("./../../../static/img/normal/right.png")  right no-repeat ;
    background-size: 12px;
    font-size: 32px;
  }
  .title{
    font-size: 32px;
    padding: 16px 0;
  }
</style>
