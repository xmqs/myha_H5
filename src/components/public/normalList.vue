<template>
  <div>
    <div class="searchList">
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post">
        <input type="search" id="input" class="search" placeholder="请输入搜索内容" v-model="searchKey">
      </form>
    </div>
    <div class="wall">
      <div class="scroll">
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
  </div>
</template>

<script>
  export default {
    name: "scrollList",
    data(){
      return{
        searchKey:''
      }
    }
  }
</script>

<style scoped>
  .searchList {
    position: fixed;
    top: 0;
    height: 88px;
    width: 100%;
    background-color: #EFEFF4;
    padding-top: 14px;
    box-sizing: border-box;
    z-index: 999;
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
</style>
