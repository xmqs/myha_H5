<template>
    <div>
      <p @click="toPoliticalAudit">申请入口</p>

      <p @click="toMyList">我的申请（模拟数据）</p>
    </div>
</template>

<script>
    export default {
        name: "showPage",
      methods:{
        toPoliticalAudit(){
          this.$router.push("/politicalAudit");
        },
        toMyList(){
          this.$router.push("/politicalAudit");
        }
      }
    }
</script>

<style scoped>
  p{
    text-align: center;
    font-size: 48px;
    padding-top: 26px;
  }
</style>
