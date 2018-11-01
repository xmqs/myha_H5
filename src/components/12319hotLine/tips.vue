<template>
  <div class="main">
    <div class="content">
      <div class="toptitle">
        <div class="title"> 政务热线APP诉求登记须知</div>
      </div>
      <p> 为了保证您的诉求能正确提交并被及时处理，请仔细阅读以下提示： </p>
      <p> 一、《政务热线APP诉求登记》是12319政务热线的受理方式之一。 </p>
      <p>二、政务热线APP受办理渠道严格按照《海安市12319政务热线管理办法》之规定受办理。</p>
      <p>三、政务热线APP受理渠道适用《中华人民共和国网络安全法》，倡导诚实守信、健康文明的网络行为。 </p>
      <p>四、诉求登记注意事项： <br> 1.每次提交一个问题，如需反映多个问题，须分开提交。 <br> 2.请如实填写：标题、诉求地址、诉求内容（时间、地点、人物、事件等）、诉求目的等关键信息。 <br>
        3.诉求填报如有以下情形，将视为无效诉求： <br> （1）不遵守中华人民共和国各项法律和规定，诉求内容含有侮辱、猥亵、色情、人身攻击及反动言论的，必要时将追究法律责任； <br> （2）诉求内容不属于热线受理范围；
        <br>
        （3）联系方式有误，无法联系核实； <br> （4）诉求内容混乱，或含多个问题； <br> （5）诉求内容信息不全； <br> （6）重复反映相同问题。 </p>
      <p>五、评价反馈：请在诉求办结完成24小时内进行评价，否则视为最优评价。不满意评价的诉求最多办理、评价两次。 </p>
      <div class="bottombox" @click="toAdd">
        已阅知
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tips",
    methods:{
      toAdd(){
        this.$router.replace("/hotLine19/new");
      }
    },
    beforeRouteEnter (to, from, next) {
      if(from.name=="hotLine19"){
        window.scrollTo(0,0);
      }
      next(vm => {

      });
    }
  }
</script>

<style scoped>
  .main {
    height: 100%;
    overflow-y: scroll;
    background: #fff;
  }

  .toptitle {
    margin: 0 30px;
    padding: 20px 0;
    border-bottom: 1px dashed #d8d8d8;
    font-size: 36px;
    text-align: center;
    margin-bottom: 30px;
  }

  .content {
    margin: 32px;
    margin-bottom: 16px;
    font-size: 32px;
  }

  .content p {
    margin-bottom: 20px;
  }
  .bottombox{
    width: 686px;
    height: 88px;
    background: #0d9bf2;
    color: #fff;
    line-height: 88px;
    text-align: center;
    border-radius: 4px;
  }
</style>
