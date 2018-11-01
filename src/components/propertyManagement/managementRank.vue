<template>
  <div class="main">
    <div class="tab">
      <div class="title">
        <div>排名</div>
        <div>街道</div>
        <div>小区</div>
      </div>
      <div class="content">
        <ul>
          <li>
            <div>1</div>
            <div>永安南路永安南路永安南路</div>
            <div>奥体新城</div>
          </li>
          <li>
            <div>2</div>
            <div>永安南路永安南路永安南路</div>
            <div>奥体新城</div>
          </li>
          <li>
            <div>3</div>
            <div>永安南路</div>
            <div>奥体新城</div>
          </li>
          <li>
            <div>4</div>
            <div>永安南路</div>
            <div>奥体新城</div>
          </li>
          <li>
            <div>5</div>
            <div>永安南路永安南路永安南路</div>
            <div>奥体新城</div>
          </li>
          <li>
            <div>6</div>
            <div>永安南路</div>
            <div>奥体新城</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "managementRank"
    }
</script>

<style scoped>
  .main{
    padding: 16px;
  }
  .tab{
    width: 100%;
    box-shadow:  0 0 20px #aaa;
    border-radius: 4px;
  }
  .title{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #000;
    color: #fff;
    border-radius: 4px;
    font-size: 30px;
    padding: 16px 0;
  }
  .content li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 28px;
  }
  .content li div{
    text-align: center;
    display: inline-block;
    width: 238px;
    padding: 16px 6px;
  }
  .content li:nth-child(2n-1){
    background: rgb(227,227,227);
  }
</style>
