import Vue from 'vue'
import Router from 'vue-router'

/*默认加载模块*/
import setData from "./../components/vuex/setData"
import getData from "./../components/vuex/getData"




/*懒加载模块*/
const dailyPricde = () => import ("../components/dailyPrice")





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dailyPrice',
      component: dailyPrice,
    },
  ]
})
