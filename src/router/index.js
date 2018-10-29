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

/*hotLine45模块*/
const hotLine45 = ()=>import('@/components/12345hotLine'/*webpackChunkName: "hotLine45"*/)
const hotLineTip45 = ()=>import('@/components/12345hotLine/tips'/*webpackChunkName: "hotLine45"*/)
const hotLinePhone45 = ()=>import('@/components/12345hotLine/phoneNumber'/*webpackChunkName: "hotLine45"*/)
const hotLineNavigation45 = ()=>import('@/components/12345hotLine/navigation'/*webpackChunkName: "hotLine45"*/)
const hotLineNew45 = ()=>import('@/components/12345hotLine/add_new'/*webpackChunkName: "hotLine45"*/)
const hotLineList45 = ()=>import('@/components/12345hotLine/list'/*webpackChunkName: "hotLine45"*/)
const hotLineDetail45 = ()=>import('@/components/12345hotLine/detail'/*webpackChunkName: "hotLine45"*/)


/*hotLine49模块*/
const hotLine49 = ()=>import('@/components/12345hotLine'/*webpackChunkName: "hotLine49"*/)


/*航班模块*/
const flightMainNew = ()=>import('@/components/flight/flightMain'/*webpackChunkName: "flight"*/)
const PlaneDetail = ()=>import('@/components/flight/PlaneDetail'/*webpackChunkName: "flight"*/)
const DestinationNew = ()=>import('@/components/flight/DestinationNew'/*webpackChunkName: "flight"*/)
const cityList = ()=>import('@/components/flight/cityList'/*webpackChunkName: "flight"*/)
const searchListNew = ()=>import('@/components/flight/searchListNew'/*webpackChunkName: "flight"*/)
const selectPlane = ()=>import('@/components/flight/selectPlane'/*webpackChunkName: "flight"*/)

/*智慧旅游*/
const travel = ()=>import('@/components/travel'/*webpackChunkName: "travel"*/)
const travelList = ()=>import('@/components/travel/list'/*webpackChunkName: "travel"*/)


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
    {
      path: '/hotLine45',/*12345*/
      name: 'hotLine45',
      component: hotLine45,
    },
    {
      path: '/hotLine45/tip',/*45说明指南*/
      name: 'hotLineTip45',
      component: hotLineTip45,
    },
    {
      path: '/hotLine45/phone',/*45常用电话*/
      name: 'hotLinePhone45',
      component: hotLinePhone45,
    },
    {
      path: '/hotLine45/navigation',/*45便民导航*/
      name: 'hotLineNavigation45',
      component: hotLineNavigation45,
    },
    {
      path: '/hotLine45/new',/*45新增诉讼*/
      name: 'hotLineNew45',
      component: hotLineNew45,
    },
    {
      path: '/hotLine45/list',/*45新增诉讼*/
      name: 'hotLineList45',
      component: hotLineList45,
    },
    {
      path: '/hotLine45/detail/:id',/*45新增诉讼*/
      name: 'hotLineDetail45',
      component: hotLineDetail45,
    },

    /*航班*/
    {
      path: '/flight/flightMainNew',
      name: 'flightMainNew',
      component: flightMainNew,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/flight/planeDetail/:flightIdentity/:direction/:countryType',
      name: 'PlaneDetail',
      component: PlaneDetail,
    },
    {
      path: '/flight/DestinationNew',
      name: 'DestinationNew',
      component: DestinationNew,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/flight/selectPlane',
      name: 'selectPlane',
      component: selectPlane,
    },
    {
      path: '/flight/cityList',
      name: 'cityList',
      component: cityList,
    },
    {
      path: '/flight/searchListNew',
      name: 'searchListNew',
      component: searchListNew,
      meta: {
        keepAlive: true
      }
    },

    /*旅游模块*/
    {
      path: '/travel',/*普通列表*/
      name: 'travel',
      component: travel,
    },
    {
      path: '/travel/list/:key',/*普通列表*/
      name: 'travelList',
      component: travelList,
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
