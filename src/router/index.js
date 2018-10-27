import Vue from 'vue'
import Router from 'vue-router'

/*懒加载模块*/
const peopleNews = ()=>import('@/components/peopleNews'/*webpackChunkName: "peopleNews"*/)


/*hotLine19模块*/
const hotLine19 = ()=>import('@/components/12319hotLine'/*webpackChunkName: "hotLine19"*/)
const hotLineTip19 = ()=>import('@/components/12319hotLine/tips'/*webpackChunkName: "hotLine19"*/)
const hotLinePhone19 = ()=>import('@/components/12319hotLine/phoneNumber'/*webpackChunkName: "hotLine19"*/)
const hotLineNavigation19 = ()=>import('@/components/12319hotLine/navigation'/*webpackChunkName: "hotLine19"*/)
const hotLineNew19 = ()=>import('@/components/12319hotLine/add_new'/*webpackChunkName: "hotLine19"*/)


/*hotLine49模块*/
const hotLine49 = ()=>import('@/components/12345hotLine'/*webpackChunkName: "hotLine49"*/)


/*公共列表样式*/

const normalList = () => import ("../components/public/normalList")
const scrollList = () => import ("../components/public/scrollList")




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/peopleNews',/*民生资讯*/
      name: 'peopleNews',
      component: peopleNews,
    },
    {
      path: '/hotLine19',/*12319*/
      name: 'hotLine19',
      component: hotLine19,
    },
    {
      path: '/hotLine19/tip',/*19说明指南*/
      name: 'hotLineTip19',
      component: hotLineTip19,
    },
    {
      path: '/hotLine19/phone',/*19常用电话*/
      name: 'hotLinePhone19',
      component: hotLinePhone19,
    },
    {
      path: '/hotLine19/navigation',/*19便民导航*/
      name: 'hotLineNavigation19',
      component: hotLineNavigation19,
    },
    {
      path: '/hotLine19/new',/*19新增诉讼*/
      name: 'hotLineNew19',
      component: hotLineNew19,
    },

    /*特殊公共样式*/
    {
      path: '/list/normalList/:key1?/:key2?/:key3?',/*普通列表*/
      name: 'normalList',
      component: normalList,
    },
    {
      path: '/list/scrollList/:key1?/:key2?/:key3?',/*滚动刷新列表*/
      name: 'scrollList',
      component: scrollList,
    },
  ]
})
