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
const hotLineList19 = ()=>import('@/components/12319hotLine/list'/*webpackChunkName: "hotLine19"*/)
const hotLineDetail19 = ()=>import('@/components/12319hotLine/detail'/*webpackChunkName: "hotLine19"*/)

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

/*公共自行车*/
const bicycle = ()=>import('@/components/bicycle'/*webpackChunkName: "bicycle"*/)
const mapCondition = ()=>import('@/components/bicycle/map'/*webpackChunkName: "bicycle"*/)
const bicycleList = ()=>import('@/components/bicycle/bicycleList'/*webpackChunkName: "bicycle"*/)

/*物业管理*/
const propertyManagement = ()=>import('@/components/propertyManagement'/*webpackChunkName: "propertyManagement"*/)
const propertyList = ()=>import('@/components/propertyManagement/list'/*webpackChunkName: "propertyManagement"*/)
const protectList = ()=>import('@/components/propertyManagement/protectList'/*webpackChunkName: "propertyManagement"*/)
const propertyDetail = ()=>import('@/components/propertyManagement/detail'/*webpackChunkName: "propertyManagement"*/)
const managementRank = ()=>import('@/components/propertyManagement/managementRank'/*webpackChunkName: "propertyManagement"*/)
const managementtingList = ()=>import('@/components/propertyManagement/tingList'/*webpackChunkName: "propertyManagement"*/)
const managementthingDetail = ()=>import('@/components/propertyManagement/thingDetail'/*webpackChunkName: "propertyManagement"*/)
const managementChars = ()=>import('@/components/propertyManagement/chars'/*webpackChunkName: "propertyManagement"*/)
const managementpropertyList = ()=>import('@/components/propertyManagement/propertyList'/*webpackChunkName: "propertyManagement"*/)
const managementpropertyList2 = ()=>import('@/components/propertyManagement/propertyList2'/*webpackChunkName: "propertyManagement"*/)
const managementpropertyListDetail = ()=>import('@/components/propertyManagement/propertyListDetail'/*webpackChunkName: "propertyManagement"*/)
const managementpropertyListDetail2 = ()=>import('@/components/propertyManagement/propertyListDetail2'/*webpackChunkName: "propertyManagement"*/)
const houseIndex = ()=>import('@/components/propertyManagement/houseIndex'/*webpackChunkName: "propertyManagement"*/)
const guideList = ()=>import('@/components/propertyManagement/guideList'/*webpackChunkName: "propertyManagement"*/)
const business = ()=>import('@/components/propertyManagement/business'/*webpackChunkName: "propertyManagement"*/)
const businessDetail = ()=>import('@/components/propertyManagement/businessDetail'/*webpackChunkName: "propertyManagement"*/)
const houseDetail = ()=>import('@/components/propertyManagement/houseDetail'/*webpackChunkName: "propertyManagement"*/)
const houseList = ()=>import('@/components/propertyManagement/houseList'/*webpackChunkName: "propertyManagement"*/)
const protectDetail = ()=>import('@/components/propertyManagement/protectDetail'/*webpackChunkName: "propertyManagement"*/)
const dismantleList = ()=>import('@/components/propertyManagement/dismantleList'/*webpackChunkName: "propertyManagement"*/)
const dismantleDetail = ()=>import('@/components/propertyManagement/dismantleDetail'/*webpackChunkName: "propertyManagement"*/)
const qaList = ()=>import('@/components/propertyManagement/qaList'/*webpackChunkName: "propertyManagement"*/)
const fundDetail = ()=>import('@/components/propertyManagement/fundDetail'/*webpackChunkName: "propertyManagement"*/)


/*医检报告*/
const hospitalPort = ()=>import('@/components/hospital/hospitalPort'/*webpackChunkName: "hospital"*/)
const firstAid = ()=>import('@/components/hospital/firstAid'/*webpackChunkName: "hospital"*/)
const hospitalUserInfo = ()=>import('@/components/hospital/userInfo'/*webpackChunkName: "hospital"*/)
const portDetail = ()=>import('@/components/hospital/portDetail'/*webpackChunkName: "hospital"*/)


/*车辆违章*/
const trafficUserInfo = ()=>import('@/components/traffic/userInfo'/*webpackChunkName: "traffic"*/)
const traffic = ()=>import('@/components/traffic/peccancy'/*webpackChunkName: "traffic"*/)
const trafficlicense = ()=>import('@/components/traffic/license'/*webpackChunkName: "traffic"*/)
const trafficlicenseList = ()=>import('@/components/traffic/licenseList'/*webpackChunkName: "traffic"*/)
const trafficaddNewCar = ()=>import('@/components/traffic/addNewCar'/*webpackChunkName: "traffic"*/)
const trafficarThings = ()=>import('@/components/traffic/carThings'/*webpackChunkName: "traffic"*/)


/*生育登记*/
const birthIndex = ()=>import('@/components/birth'/*webpackChunkName: "birth"*/)
const birthAdd = ()=>import('@/components/birth/birthAdd'/*webpackChunkName: "birth"*/)
const birthIdCard = ()=>import('@/components/birth/birthIdCard'/*webpackChunkName: "birth"*/)
const birthAddress = ()=>import('@/components/birth/birthAddress'/*webpackChunkName: "birth"*/)
const birthOrigin = ()=>import('@/components/birth/birthOrigin'/*webpackChunkName: "birth"*/)
const birthState = ()=>import('@/components/birth/birthState'/*webpackChunkName: "birth"*/)
const birthHistory = ()=>import('@/components/birth/birthHistory'/*webpackChunkName: "birth"*/)

/*解锁电话+热线*/
const unlockLine = ()=>import('@/components/unlockLine'/*webpackChunkName: "unlockLine"*/)

/*服务中心*/
const serviceCenter = ()=>import('@/components/serviceCenter'/*webpackChunkName: "serviceCenter"*/)

/*公共特殊页面*/
const normalList = () => import ("../components/public/normalList"/*webpackChunkName: "static"*/)
const newsList = () => import ("../components/public/newsList"/*webpackChunkName: "static"*/)
const normalList2 = () => import ("../components/public/normalList2"/*webpackChunkName: "static"*/)
const scrollList = () => import ("../components/public/scrollList"/*webpackChunkName: "static"*/)




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
      path: '/hotLine19/list',/*19新增诉讼*/
      name: 'hotLineList19',
      component: hotLineList19,
    },
    {
      path: '/hotLine19/detail/:id',/*19新增诉讼*/
      name: 'hotLineDetail19',
      component: hotLineDetail19,
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
    /*公共自行车*/
    {
      path: '/bicycle',/**/
      name: 'bicycle',
      component: bicycle,
    },
    {
      path: '/mapCondition',/*监控*/
      name: 'mapCondition',
      component: mapCondition,
    },
    {
      path: '/bicycleList',/**/
      name: 'bicycleList',
      component: bicycleList,
    },
    /*物业管理*/
    {
      path: '/propertyManagement',
      name: 'propertyManagement',
      component: propertyManagement,
    },
    {
      path: '/propertyManagement/list',
      name: 'propertyList',
      component: propertyList,
    },
    {
      path: '/propertyManagement/protectList',
      name: 'protectList',
      component: protectList,
    },
    {
      path: '/propertyDetail/:id',
      name: 'propertyDetail',
      component: propertyDetail,
    },
    {
      path: '/protectDetail/:id',
      name: 'protectDetail',
      component: protectDetail,
    },
    {
      path: '/managementRank',
      name: 'managementRank',
      component: managementRank,
    },
    {
      path: '/managementtingList',
      name: 'managementtingList',
      component: managementtingList,
    },
    {
      path: '/managementthingDetail/:id',
      name: 'managementthingDetail',
      component: managementthingDetail,
    },
    {
      path: '/managementChars/:id',
      name: 'managementChars',
      component: managementChars,
    },
    {
      path: '/managementpropertyList',
      name: 'managementpropertyList',
      component: managementpropertyList,
    },
    {
      path: '/managementpropertyList2',
      name: 'managementpropertyList2',
      component: managementpropertyList2,
    },
    {
      path: '/house/qaList',
      name: 'qaList',
      component: qaList,
    },
    {
      path: '/house/fundDetail',
      name: 'fundDetail',
      component: fundDetail,
    },
    {
      path: '/managementpropertyListDetail/:type',
      name: 'managementpropertyListDetail',
      component: managementpropertyListDetail,
    },
    {
      path: '/managementpropertyListDetail2/:type',
      name: 'managementpropertyListDetail2',
      component: managementpropertyListDetail2,
    },
    {
      path: '/houseIndex',
      name: 'houseIndex',
      component: houseIndex,
    },
    {
      path: '/guideList',
      name: 'guideList',
      component: guideList,
    },
    {
      path: '/business',
      name: 'business',
      component: business,
    },
    {
      path: '/businessDetail/:id',
      name: 'businessDetail',
      component: businessDetail,
    },
    {
      path: '/houseList',
      name: 'houseList',
      component: houseList,
    },
    {
      path: '/houseDetail/:id',
      name: 'houseDetail',
      component: houseDetail,
    },
    {
      path: '/dismantleList',
      name: 'dismantleList',
      component: dismantleList,
    },
    {
      path: '/dismantleDetail/:id',
      name: 'dismantleDetail',
      component: dismantleDetail,
    },

    /*医检报告*/
    {
      path: '/hospital/port',
      name: 'hospitalPort',
      component: hospitalPort,
      meta:{
        keepAlive:true
      }

    },
    {
      path: '/hospital/portDetail/:id',
      name: 'portDetail',
      component: portDetail,
    },
    {
      path: '/hospital/firstAid',
      name: 'firstAid',
      component: firstAid,
    },
    {
      path: '/hospital/userInfo',
      name: 'hospitalUserInfo',
      component: hospitalUserInfo,
    },
    /*机动车违章信息*/
    {
      path: '/trafficUserInfo',
      name: 'trafficUserInfo',
      component: trafficUserInfo,
    },
    {
      path: '/trafficaddNewCar',
      name: 'trafficaddNewCar',
      component: trafficaddNewCar,
    },
    {
      path: '/trafficlicense',/*驾照*/
      name: 'trafficlicense',
      component: trafficlicense,
    },
    {
      path: '/trafficlicenseList/:id',/*扣分详情*/
      name: 'trafficlicenseList',
      component: trafficlicenseList,
    },
    {
      path: '/trafficarThings/:id',/*扣分详情*/
      name: 'trafficarThings',
      component: trafficarThings,
    },

    /*生育登记*/
    {
      path: '/birthIndex',/*生育登记首页*/
      name: 'birthIndex',
      component: birthIndex,
    },
    {
      path: '/birthAdd',/*新增页面*/
      name: 'birthAdd',
      component: birthAdd,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/birthIdCard',/*身份证页面*/
      name: 'birthIdCard',
      component: birthIdCard,
    },
    {
      path: '/birthAddress',/*生育登记居住地*/
      name: 'birthAddress',
      component: birthAddress,
    },
    {
      path: '/birthOrigin',/*生育登记户籍*/
      name: 'birthOrigin',
      component: birthOrigin,
    },
    {
      path: '/birthState',/*生育登记婚姻状况*/
      name: 'birthState',
      component: birthState,
    },
    {
      path: '/birthHistory',/*生育登记本人生育史*/
      name: 'birthHistory',
      component: birthHistory,
    },
    /*解锁电话热线*/
    {
      path: '/unlockLine',/*unlockLine*/
      name: 'unlockLine',
      component: unlockLine,
    },
    /*服务中心*/
    {
      path: '/serviceCenter',/*serviceCenter*/
      name: 'serviceCenter',
      component: serviceCenter,
    },



    /*特殊公共样式*/
    {
      path: '/list/normalList/:key1?/:key2?/:key3?',/*普通列表*/
      name: 'normalList',
      component: normalList,
    },
    {
      path: '/list/normalList2/:key1?/:key2?/:key3?',/*普通列表*/
      name: 'normalList2',
      component: normalList2,
    },
    {
      path: '/list/scrollList/:key1?/:key2?/:key3?',/*滚动刷新列表*/
      name: 'scrollList',
      component: scrollList,
    },
    {
      path: '/newsList/:key',/*滚动刷新列表*/
      name: 'newsList',
      component: newsList,
    },
  ]
})
