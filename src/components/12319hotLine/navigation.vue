<template>
  <div>
    <div class="searchList">
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post">
        <input type="search" id="input" class="search" placeholder="请输入搜索内容" v-model="searchKey">
      </form>
    </div>
    <div class="tab">
      <div :class="{'active':page==1}">事项</div>
      <div :class="{'active':page==2}">区域</div>
    </div>
    <div class="wall">
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
      <div class="cell_right_side">
        为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "navigation",
      data(){
          return{
            page:1,
            searchKey:''
          }
      }
    }
</script>

<style scoped>
  .searchList {
    height: 88px;
    width: 100%;
    background-color: #EFEFF4;
    padding-top: 14px;
    box-sizing: border-box;
  }

  .search {
    width: 686px;
    height: 60px;
    border-radius: 10px;
    background: #fff url("./../../../static/img/hotline/searchicon.png") no-repeat;
    background-size: 30px;
    background-position: 20px center;
    margin: 0 auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    border: 0;
    outline: 0;
    box-sizing: border-box;
    padding-left: 60px;
  }

  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  .tab{
    height: 92px;
    display: flex;
    vertical-align: center;
    justify-content: center;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .tab div{
    width: 40%;
    font-size: 34px;
    text-align: center;
    line-height: 88px;
  }
  .tab div.active{
    color: #0d9bf2;
    border-bottom: 4px solid #0d9bf2;
  }
  .wall {
    width: 100%;
    height: 1153px;
    overflow-y: scroll;
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
    background-size: 16px;
    font-size: 32px;
  }
</style>
