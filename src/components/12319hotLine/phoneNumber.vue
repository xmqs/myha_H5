<template>

  <div>
    <div class="searchList">
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post">
        <input type="search" id="input" class="search" placeholder="请输入搜索内容" v-model="searchKey">
      </form>
    </div>
    <div class="wall">
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
      <a class="cell" href="tel:025-84688712">
        <div class="name">公交热线</div>
        <div class="phone"><a>96155</a></div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "phoneNumber",
    data() {
      return {
        searchKey: ""
      }
    },
    mounted() {

    },
    methods: {
      search() {

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
  .wall {
    width: 100%;
    height: 1246px;
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
    background-size: 12px;
    font-size: 32px;
  }


  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  .wall {
    width: 100%;
    max-height: 1246px;
    overflow-y: scroll;
    background: #fff;
    padding: 0 32px 88px 32px;
  }
  .cell{
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 22px 0;
  }
  .name, .phone {
    font-size: 32px;
  }
  .name {
    width: calc(100% - 170px);
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .phone {
    width: 170px;
    float: right;
    text-align: right;
    color: #008ef3;
  }
</style>
