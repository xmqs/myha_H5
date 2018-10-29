import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js';

import 'swiper/dist/css/swiper.css';


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

