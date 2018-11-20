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
import axios from "axios";
export default {
  name: 'App',
  data(){
    return{
      data:{
        idNumber:"",
        userName:"",
        userId:"",
        mobile:"",
        token:"",
        type:""
      }
    }
  },
  computed:{
    includedComponents:state=>state.includedComponents,
    excludedComponents:state=>state.excludedComponents
  },
  mounted(){
    this.getparam();
  },
  methods:{
    getUrlParam(id) {
      let url = window.document.location.href.toString();
      let u = url.split("?");
      let arr = [];
      if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        for(let i in u){
          let a = (u[i].split("="));
          arr[a[0]] = a[1];
        }
      }
      return arr[id]
    },
    getparam() {

      this.token=this.getUrlParam('token')!==undefined?this.getUrlParam('token'):'';
      sessionStorage.setItem("token", this.token);

      this.type=this.getUrlParam('type')!==undefined?this.getUrlParam('type'):'';
      sessionStorage.setItem("type", this.type);

      if(sessionStorage.getItem("userId")){

        this.$store.commit("setCardId",sessionStorage.getItem("idcard"));
        /*TODO  Url decode*/
        this.$store.commit("setUserName",sessionStorage.getItem("userName"));
        this.$store.commit("setUserId",sessionStorage.getItem("userId"));
        this.$store.commit("setUserPhone",sessionStorage.getItem("tel"));

      }else{
        this.idNumber=this.getUrlParam('znmh_idNumber')!==undefined?this.getUrlParam('znmh_idNumber'):'';
        this.userName=this.getUrlParam('znmh_userName')!==undefined?this.getUrlParam('znmh_userName'):'';
        this.userId=this.getUrlParam('userId')!==undefined?this.getUrlParam('userId'):'';
        this.mobile=this.getUrlParam('znmh_mobile')!==undefined?this.getUrlParam('znmh_mobile'):'';


        axios.post("/myha-server/public/rsa/getRsaUser.do",{
          userid: this.userId,
          idcard: this.idNumber,
          username: this.userName,
          tel: this.mobile,
          rsaKey:"basic_des_key"
        }).then(res=>{
          console.log(res.data.data);
          let data = res.data.data;

          this.$store.commit("setCardId",data.idcard);
          /*TODO  Url decode*/
          this.$store.commit("setUserName",data.userName);
          this.$store.commit("setUserId",data.userId);
          this.$store.commit("setUserPhone",data.tel);

          sessionStorage.setItem("idcard", data.idcard);
          sessionStorage.setItem("userName", data.userName);
          sessionStorage.setItem("userId", data.userId);
          sessionStorage.setItem("tel", data.tel);
        })
      }
    }
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
    zoom: 1;
    font-size: 28px;
  }

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
