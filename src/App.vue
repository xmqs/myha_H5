<template>
  <div id="app">
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed:{
    includedComponents:state=>state.includedComponents,
    excludedComponents:state=>state.excludedComponents
  },
  mounted(){

  }
}
</script>

<style>
  html {
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    text-size-adjust: none;
  }

  body {
    overflow-x: auto;
    font-size: 14px;
    color: #333;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; }

  a {
    outline: none;
    text-decoration: none;
    color: inherit; }

  a:hover {
    text-decoration: none; }

  html {
    zoom: 1; }

  html * {
    outline: 0;
    zoom: 1; }

  html button::-moz-focus-inner {
    border-color: transparent !important; }

  /*设置margin和padding为0*/
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0; }

  table {
    border-collapse: collapse;
    border-spacing: 0; }

  fieldset, a img {
    border: 0; }

  address, caption, cite, code, dfn, em, th, var，i {
    font-style: normal;
    font-weight: normal; }

  li {
    list-style: none; }

  caption, th {
    text-align: left; }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal; }

  q:before, q:after {
    content: ''; }

  em, i {
    font-style: normal; }

  input[type="submit"], input[type="reset"], input[type="button"], input[type=date], button, select, input[type=text] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    tap-highlight-color: transparent !important; }

  a, input[type=text], select, input[type=password], textarea {
    tap-highlight-color: transparent !important; }

  input::-webkit-input-placeholder {
    color: #aaa; }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  /*TODO 修改mint与postcss-px-to-viewport冲突样式*/
  /*下拉刷新样式修正*/
  .mint-loadmore-text{
    font-size: 26px;
  }


  /*TODO 修改mui弹出框位置提高到屏幕中央*/
  .mui-toast-container {
    line-height: 34px;
    position: fixed;
    z-index: 9999;
    bottom: 40%;
    left: 50%;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    opacity: 0;
  }
</style>
