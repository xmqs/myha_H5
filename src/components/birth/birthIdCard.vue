<template>
  <div>
    <div class="tips">身份证信息</div>
    <ul class="list_ui">
      <li class="list_li">
        <div class="word"><span class="must">*</span>身份证</div>
        <input type="text" name="" value="" placeholder="请填身份证"  class="add_inp">
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "birthIdCard",
      data(){
        return{

        }
      }
    }
</script>

<style scoped>
  .main {
    -webkit-overflow-scrolling: touch;
  }

  .list_ui {
    padding: 0 32px;
    background: #fff;
  }

  .list_li {
    border-bottom: 1px solid #c8c7cc;
    display: flex;
    align-items: center;
  }

  .list_li2 {
    display: flex;
  }

  .list_li3 {
    display: flex;
    border-bottom: 1px solid #c8c7cc;
  }

  .list_li4 {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid #c8c7cc;
  }
  .list_li5 {
    display: flex;
    border-bottom: 1px solid #c8c7cc;
    justify-content: space-between;
    align-items: center;
  }
  .list_li6 {
    border-bottom: 1px solid #c8c7cc;
    padding: 16px 0;
  }
  .tips{
    background: #f5f5f5;
    font-size: 28px;
    padding:16px 32px;
  }

  .right_icon {
    padding-right: 40px;
    background: url("./../../../static/img/normal/right.png") right no-repeat;
    background-size: 12px;
  }

  .word {
    color: #666;
    font-size: 32px;
    min-width: 180px;
    line-height: 88px;
    white-space: nowrap;
  }

  .add_inp {
    height: 88px;
    margin-bottom: 0;
    padding: 20px 16px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 32px;
    box-sizing: border-box;
    width: 100%;
  }
  .add_inp2 {
    line-height: 48px;
    margin-bottom: 0;
    padding: 20px 16px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 32px;
    box-sizing: border-box;
    max-width: 490px;

    word-break:break-all;
    word-wrap:break-word;
    color: #666;
  }
  .add_inp3 {
    line-height: 48px;
    margin-bottom: 0;
    padding: 20px 16px;
    -webkit-user-select: text;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-size: 32px;
    box-sizing: border-box;
    width: 100%;
    text-align: right;
  }

  .must{
    color: #e4393c;
    margin-right: 4px;
  }
  .bottom88{
    margin-bottom: 88px;
  }
</style>
