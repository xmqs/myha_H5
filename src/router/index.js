import Vue from 'vue'
import Router from 'vue-router'

/*懒加载模块*/
const peopleNews = () => import('@/components/peopleNews'/*webpackChunkName: "peopleNews"*/)

/*hotLine19模块*/
const hotLine19 = () => import('@/components/12319hotLine'/*webpackChunkName: "hotLine19"*/)
const hotLineTip19 = () => import('@/components/12319hotLine/tips'/*webpackChunkName: "hotLine19"*/)
const hotLinePhone19 = () => import('@/components/12319hotLine/phoneNumber'/*webpackChunkName: "hotLine19"*/)
const hotLineNavigation19 = () => import('@/components/12319hotLine/navigation'/*webpackChunkName: "hotLine19"*/)
const hotLineNew19 = () => import('@/components/12319hotLine/add_new'/*webpackChunkName: "hotLine19"*/)
const hotLineList19 = () => import('@/components/12319hotLine/list'/*webpackChunkName: "hotLine19"*/)
const hotLineDetail19 = () => import('@/components/12319hotLine/detail'/*webpackChunkName: "hotLine19"*/)

/*hotLine45模块*/
const hotLine45 = () => import('@/components/12345hotLine'/*webpackChunkName: "hotLine45"*/)
const hotLineTip45 = () => import('@/components/12345hotLine/tips'/*webpackChunkName: "hotLine45"*/)
const hotLinePhone45 = () => import('@/components/12345hotLine/phoneNumber'/*webpackChunkName: "hotLine45"*/)
const hotLineNavigation45 = () => import('@/components/12345hotLine/navigation'/*webpackChunkName: "hotLine45"*/)
const hotLineNew45 = () => import('@/components/12345hotLine/add_new'/*webpackChunkName: "hotLine45"*/)
const hotLineList45 = () => import('@/components/12345hotLine/list'/*webpackChunkName: "hotLine45"*/)
const hotLineDetail45 = () => import('@/components/12345hotLine/detail'/*webpackChunkName: "hotLine45"*/)

/*hotLine49模块*/
const hotLine49 = () => import('@/components/12345hotLine'/*webpackChunkName: "hotLine49"*/)

/*航班模块*/
const flightMainNew = () => import('@/components/flight/flightMain'/*webpackChunkName: "flight"*/)
const PlaneDetail = () => import('@/components/flight/PlaneDetail'/*webpackChunkName: "flight"*/)
const DestinationNew = () => import('@/components/flight/DestinationNew'/*webpackChunkName: "flight"*/)
const cityList = () => import('@/components/flight/cityList'/*webpackChunkName: "flight"*/)
const searchListNew = () => import('@/components/flight/searchListNew'/*webpackChunkName: "flight"*/)
const selectPlane = () => import('@/components/flight/selectPlane'/*webpackChunkName: "flight"*/)

/*智慧旅游*/
const travel = () => import('@/components/travel'/*webpackChunkName: "travel"*/)
const foodDetails = () => import('@/components/travel/foodDetails'/*webpackChunkName: "travel"*/)
const foodList = () => import('@/components/travel/foodList'/*webpackChunkName: "travel"*/)
const sceneryDetails = () => import('@/components/travel/sceneryDetails'/*webpackChunkName: "travel"*/)
const sceneryList = () => import('@/components/travel/sceneryList'/*webpackChunkName: "travel"*/)
const travelList = () => import('@/components/travel/travelList'/*webpackChunkName: "travel"*/)
const lineList = () => import('@/components/travel/lineList'/*webpackChunkName: "travel"*/)
const travelSearch = () => import('@/components/travel/travelSearch'/*webpackChunkName: "travel"*/)

const travelNew = () => import('@/components/travel/indexNew'/*webpackChunkName: "travel"*/)

/*公共自行车*/
const bicycle = () => import('@/components/bicycle'/*webpackChunkName: "bicycle"*/)
const cardSearch = () => import('@/components/bicycle/cardSearch'/*webpackChunkName: "bicycle"*/)
const cardIntro = () => import('@/components/bicycle/cardIntro'/*webpackChunkName: "bicycle"*/)


/*物业管理*/
const propertyManagement = () => import('@/components/propertyManagement'/*webpackChunkName: "propertyManagement"*/)
const propertyList = () => import('@/components/propertyManagement/list'/*webpackChunkName: "propertyManagement"*/)
const protectList = () => import('@/components/propertyManagement/protectList'/*webpackChunkName: "propertyManagement"*/)
const propertyDetail = () => import('@/components/propertyManagement/detail'/*webpackChunkName: "propertyManagement"*/)
const managementRank = () => import('@/components/propertyManagement/managementRank'/*webpackChunkName: "propertyManagement"*/)
const managementtingList = () => import('@/components/propertyManagement/tingList'/*webpackChunkName: "propertyManagement"*/)
const managementthingDetail = () => import('@/components/propertyManagement/thingDetail'/*webpackChunkName: "propertyManagement"*/)
const managementChars = () => import('@/components/propertyManagement/chars'/*webpackChunkName: "propertyManagement"*/)
const managementpropertyList = () => import('@/components/propertyManagement/propertyList'/*webpackChunkName: "propertyManagement"*/)
const managementpropertyList2 = () => import('@/components/propertyManagement/propertyList2'/*webpackChunkName: "propertyManagement"*/)
const managementpropertyListDetail = () => import('@/components/propertyManagement/propertyListDetail'/*webpackChunkName: "propertyManagement"*/)
const managementpropertyListDetail2 = () => import('@/components/propertyManagement/propertyListDetail2'/*webpackChunkName: "propertyManagement"*/)
const houseIndex = () => import('@/components/propertyManagement/houseIndex'/*webpackChunkName: "propertyManagement"*/)
const guideList = () => import('@/components/propertyManagement/guideList'/*webpackChunkName: "propertyManagement"*/)
const business = () => import('@/components/propertyManagement/business'/*webpackChunkName: "propertyManagement"*/)
const businessDetail = () => import('@/components/propertyManagement/businessDetail'/*webpackChunkName: "propertyManagement"*/)
const houseDetail = () => import('@/components/propertyManagement/houseDetail'/*webpackChunkName: "propertyManagement"*/)
const houseList = () => import('@/components/propertyManagement/houseList'/*webpackChunkName: "propertyManagement"*/)
const protectDetail = () => import('@/components/propertyManagement/protectDetail'/*webpackChunkName: "propertyManagement"*/)
const dismantleList = () => import('@/components/propertyManagement/dismantleList'/*webpackChunkName: "propertyManagement"*/)
const dismantleDetail = () => import('@/components/propertyManagement/dismantleDetail'/*webpackChunkName: "propertyManagement"*/)
const qaList = () => import('@/components/propertyManagement/qaList'/*webpackChunkName: "propertyManagement"*/)
const fundDetail = () => import('@/components/propertyManagement/fundDetail'/*webpackChunkName: "propertyManagement"*/)


/*医检报告*/
const hospitalPort = () => import('@/components/hospital/hospitalPort'/*webpackChunkName: "hospital"*/)
const firstAid = () => import('@/components/hospital/firstAid'/*webpackChunkName: "hospital"*/)
const hospitalUserInfo = () => import('@/components/hospital/userInfo'/*webpackChunkName: "hospital"*/)
const portDetail = () => import('@/components/hospital/portDetail'/*webpackChunkName: "hospital"*/)


/*车辆违章*/
const trafficUserInfo = () => import('@/components/traffic/userInfo'/*webpackChunkName: "traffic"*/)
const traffic = () => import('@/components/traffic/peccancy'/*webpackChunkName: "traffic"*/)
const trafficlicense = () => import('@/components/traffic/license'/*webpackChunkName: "traffic"*/)
const trafficlicenseList = () => import('@/components/traffic/licenseList'/*webpackChunkName: "traffic"*/)
const trafficaddNewCar = () => import('@/components/traffic/addNewCar'/*webpackChunkName: "traffic"*/)
const trafficarThings = () => import('@/components/traffic/carThings'/*webpackChunkName: "traffic"*/)


/*生育登记*/
const birthIndex = () => import('@/components/birth'/*webpackChunkName: "birth"*/)
const birthAdd = () => import('@/components/birth/birthAdd'/*webpackChunkName: "birth"*/)
const birthIdCard = () => import('@/components/birth/birthIdCard'/*webpackChunkName: "birth"*/)
const birthAddress = () => import('@/components/birth/birthAddress'/*webpackChunkName: "birth"*/)
const birthOrigin = () => import('@/components/birth/birthOrigin'/*webpackChunkName: "birth"*/)
const birthState = () => import('@/components/birth/birthState'/*webpackChunkName: "birth"*/)
const birthHistory = () => import('@/components/birth/birthHistory'/*webpackChunkName: "birth"*/)

/*解锁电话+热线*/
const unlockLine = () => import('@/components/unlockLine'/*webpackChunkName: "unlockLine"*/)

/*妇幼健康*/
const pcMain = () => import ("../components/parentChild/pcMain"/*webpackChunkName: "parentChild"*/)
const healthExamination = () => import ("../components/parentChild/healthExamination"/*webpackChunkName: "parentChild"*/)
const childDetails = () => import ("../components/parentChild/childDetails"/*webpackChunkName: "parentChild"*/)
const motherDetails = () => import ("../components/parentChild/motherDetails"/*webpackChunkName: "parentChild"*/)
const importantTime = () => import ("../components/parentChild/importantTime"/*webpackChunkName: "parentChild"*/)
const selHospital = () => import ("../components/parentChild/selHospital"/*webpackChunkName: "parentChild"*/)
const selOffice = () => import ("../components/parentChild/selOffice"/*webpackChunkName: "parentChild"*/)
const popularization = () => import ("../components/parentChild/popularization"/*webpackChunkName: "parentChild"*/)
const pcIndex = () => import ("../components/parentChild/pcIndex"/*webpackChunkName: "parentChild"*/)
const pcText = () => import ("../components/parentChild/pcText"/*webpackChunkName: "parentChild"*/)


/*服务中心*/
const serviceCenter = () => import('@/components/serviceCenter'/*webpackChunkName: "serviceCenter"*/)
/*服务中心*/
const busLine = () => import('@/components/busLine'/*webpackChunkName: "busLine"*/)

/*公共特殊页面*/
const normalList = () => import ("../components/public/normalList"/*webpackChunkName: "static"*/)
const newsList = () => import ("../components/public/newsList"/*webpackChunkName: "static"*/)
const normalList2 = () => import ("../components/public/normalList2"/*webpackChunkName: "static"*/)
const scrollList = () => import ("../components/public/scrollList"/*webpackChunkName: "static"*/)
const userAddress = () => import ("../components/public/userAddress"/*webpackChunkName: "static"*/)

/*行政审批*/
const politicalMain = () => import ("../components/politicalAudit/politicalMain"/*webpackChunkName: "politicalAudit"*/)
const departmentDetalis = () => import ("../components/politicalAudit/departmentDetalis"/*webpackChunkName: "politicalAudit"*/)
const shenbanMsg = () => import ("../components/politicalAudit/shenbanMsg"/*webpackChunkName: "politicalAudit"*/)
const CourierAddr = () => import ("../components/politicalAudit/CourierAddr"/*webpackChunkName: "politicalAudit"*/)
const auditCommit = () => import ("../components/politicalAudit/auditCommit"/*webpackChunkName: "politicalAudit"*/)
const addAddr = () => import ("../components/politicalAudit/addAddr"/*webpackChunkName: "politicalAudit"*/)
const myEvent = () => import ("../components/politicalAudit/myEvent"/*webpackChunkName: "politicalAudit"*/)
const shenbanInstru = () => import ("../components/politicalAudit/shenbanInstru"/*webpackChunkName: "politicalAudit"*/)
const successCommit = () => import ("../components/politicalAudit/successCommit"/*webpackChunkName: "politicalAudit"*/)
const eventDetails = () => import ("../components/politicalAudit/eventDetails"/*webpackChunkName: "politicalAudit"*/)

const showPage = () => import ("../components/politicalAudit/showPage"/*webpackChunkName: "politicalAudit"*/)

/*驾考模拟*/
const test = () => import ("../components/driveTest/test"/*webpackChunkName: "driveTest"*/)
const driveMain = () => import ("../components/driveTest/driveMain"/*webpackChunkName: "driveTest"*/)
const driveSel = () => import ("../components/driveTest/driveSel"/*webpackChunkName: "driveTest"*/)
const specialList = () => import ("../components/driveTest/specialList"/*webpackChunkName: "driveTest"*/)
const driveExam = () => import ("../components/driveTest/driveExam"/*webpackChunkName: "driveTest"*/)
/*分享*/
const shareHaian = () => import ("../components/shareHaian/shareHaian"/*webpackChunkName: "shareHaian"*/)



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/peopleNews', /*民生资讯*/
      name: 'peopleNews',
      component: peopleNews,
    },
    {
      path: '/hotLine19', /*12319*/
      name: 'hotLine19',
      component: hotLine19,
    },
    {
      path: '/hotLine19/tip', /*19说明指南*/
      name: 'hotLineTip19',
      component: hotLineTip19,
    },
    {
      path: '/hotLine19/phone', /*19常用电话*/
      name: 'hotLinePhone19',
      component: hotLinePhone19,
    },
    {
      path: '/hotLine19/navigation', /*19便民导航*/
      name: 'hotLineNavigation19',
      component: hotLineNavigation19,
    },
    {
      path: '/hotLine19/new', /*19新增诉讼*/
      name: 'hotLineNew19',
      component: hotLineNew19,
    },
    {
      path: '/hotLine19/list', /*19新增诉讼*/
      name: 'hotLineList19',
      component: hotLineList19,
    },
    {
      path: '/hotLine19/detail/:id', /*19新增诉讼*/
      name: 'hotLineDetail19',
      component: hotLineDetail19,
    },
    {
      path: '/hotLine45', /*12345*/
      name: 'hotLine45',
      component: hotLine45,
    },
    {
      path: '/hotLine45/tip', /*45说明指南*/
      name: 'hotLineTip45',
      component: hotLineTip45,
    },
    {
      path: '/hotLine45/phone', /*45常用电话*/
      name: 'hotLinePhone45',
      component: hotLinePhone45,
    },
    {
      path: '/hotLine45/navigation', /*45便民导航*/
      name: 'hotLineNavigation45',
      component: hotLineNavigation45,
    },
    {
      path: '/hotLine45/new', /*45新增诉讼*/
      name: 'hotLineNew45',
      component: hotLineNew45,
    },
    {
      path: '/hotLine45/list', /*45新增诉讼*/
      name: 'hotLineList45',
      component: hotLineList45,
    },
    {
      path: '/hotLine45/detail/:id', /*45新增诉讼*/
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
      path: '/travel', /*普通列表*/
      name: 'travel',
      component: travel,
    },
    {
      path: '/travel/foodDetails', /*美食详情*/
      name: 'foodDetails',
      component: foodDetails,
    },
    {
      path: '/travel/foodList', /*美食列表*/
      name: 'foodList',
      component: foodList,
    },
    {
      path: '/travel/sceneryDetails', /*景点详情*/
      name: 'sceneryDetails',
      component: sceneryDetails,
    },
    {
      path: '/travel/sceneryList', /*景点列表*/
      name: 'sceneryList',
      component: sceneryList,
    },
    {
      path: '/travel/travelList', /*旅行社列表*/
      name: 'travelList',
      component: travelList,
    },
    {
      path: '/travel/lineList', /*路线列表*/
      name: 'lineList',
      component: lineList,
    },
    {
      path: '/travel/travelSearch', /*搜索页面*/
      name: 'travelSearch',
      component: travelSearch,
    },

    {
      path: '/travelNew', /*普通列表*/
      name: 'travelNew',
      component: travelNew,
    },
    /*公共自行车*/
    {
      path: '/bicycle',
      name: 'bicycle',
      component: bicycle,
    },
    {
      path: '/bicycle/cardSearch',
      name: 'cardSearch',
      component: cardSearch,
    },
    {
      path: '/bicycle/cardIntro',
      name: 'cardIntro',
      component: cardIntro,
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
      meta: {
        keepAlive: true
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
      path: '/trafficlicense', /*驾照*/
      name: 'trafficlicense',
      component: trafficlicense,
    },
    {
      path: '/trafficlicenseList/:id', /*扣分详情*/
      name: 'trafficlicenseList',
      component: trafficlicenseList,
    },
    {
      path: '/trafficarThings/:id', /*扣分详情*/
      name: 'trafficarThings',
      component: trafficarThings,
    },

    /*生育登记*/
    {
      path: '/birthIndex', /*生育登记首页*/
      name: 'birthIndex',
      component: birthIndex,
    },
    {
      path: '/birthAdd', /*新增页面*/
      name: 'birthAdd',
      component: birthAdd,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/birthIdCard', /*身份证页面*/
      name: 'birthIdCard',
      component: birthIdCard,
    },
    {
      path: '/birthAddress', /*生育登记居住地*/
      name: 'birthAddress',
      component: birthAddress,
    },
    {
      path: '/birthOrigin', /*生育登记户籍*/
      name: 'birthOrigin',
      component: birthOrigin,
    },
    {
      path: '/birthState', /*生育登记婚姻状况*/
      name: 'birthState',
      component: birthState,
    },
    {
      path: '/birthHistory', /*生育登记本人生育史*/
      name: 'birthHistory',
      component: birthHistory,
    },
    /*解锁电话热线*/
    {
      path: '/unlockLine', /*unlockLine*/
      name: 'unlockLine',
      component: unlockLine,
    },
    /*服务中心*/
    {
      path: '/serviceCenter', /*serviceCenter*/
      name: 'serviceCenter',
      component: serviceCenter,
    },
    /*公交查询*/
    {
      path: '/busLine', /*公交查询*/
      name: 'busLine',
      component: busLine,
    },
    /*妇幼健康*////////////////////////////////////////////////
    {
      path: '/parentChild/pcMain',
      name: 'pcMain',
      component: pcMain,
    },
    {
      path: '/parentChild/healthExamination/:id',/*传入用户id查询体检表*/
      name: 'healthExamination',
      component: healthExamination,
    },
    {
      path: '/parentChild/childDetails/:mchId/:id',/*妇幼id和id跳转对应妇幼对应的表详情*/
      name: 'childDetails',
      component: childDetails,
    },
    {
      path: '/parentChild/motherDetails/:mchId/:id',/*妇幼id和id跳转对应妇幼对应的表详情*/
      name: 'motherDetails',
      component: motherDetails,
    },
    {
      path: '/parentChild/importantTime',/*parentChild*/
      name: 'importantTime',
      component: importantTime,
    },
    {
      path: '/parentChild/selHospital',/*parentChild*/
      name: 'selHospital',
      component: selHospital,
    },
    {
      path: '/parentChild/selOffice',/*parentChild*/
      name: 'selOffice',
      component: selOffice,
    },
    {
      path: '/parentChild/popularization',/*parentChild*/
      name: 'popularization',
      component: popularization,
    },
    {
      path: '/parentChild',/*妇幼知识主页*/
      name: 'pcIndex',
      component: pcIndex,
    },
    {
      path: '/parentChild/pcText/:i',/*妇幼知识文档显示页*/
      name: 'pcText',
      component: pcText,
    },

    /*行政审批*/
    {
      path: '/politicalAudit/showPage', /*行政审批主页*/
      name: 'showPage',
      component: showPage,
    },
    {
      path: '/politicalAudit', /*行政审批主页*/
      name: 'politicalMain',
      component: politicalMain,
      meta:{
        keepAlive: true
      }
    },
    {
      path: '/politicalAudit/departmentDetalis/:ouGuid/:dictId/:searchCondition/:allowApp',/*关键词，部门id，主题id,是否可申办*/
      name: 'departmentDetalis',
      component: departmentDetalis,
      meta:{
        keepAlive: true
      }
    },
    {
      path: '/politicalAudit/shenbanMsg/:taskguid/:allowapp', /*申办详情*/
      name: 'shenbanMsg',
      component: shenbanMsg,
    },
    {
      path: '/politicalAudit/myEvent', /*我的办事*/
      name: 'myEvent',
      component: myEvent,
    },
    {
      path: '/politicalAudit/eventDetails/:projectguid',/*办事详情*/
      name: 'eventDetails',
      component: eventDetails,
    },

    {
      path: '/politicalAudit/CourierAddr/:type', /*收货地址*/
      name: 'CourierAddr',
      component: CourierAddr,
    },

    {
      path: '/politicalAudit/auditCommit/:taskGuid?/:projectguid?', /*提交*/
      name: 'auditCommit',
      component: auditCommit,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/politicalAudit/addAddr/:id?', /*新增地址*/
      name: 'addAddr',
      component: addAddr,
    },
    {
      path: '/politicalAudit/successCommit', /*申办成功*/
      name: 'successCommit',
      component: successCommit,
    },
    {
      path: '/politicalAudit/shenbanInstru/:taskguid',/*申办说明*/
      name: 'shenbanInstru',
      component: shenbanInstru,
    },

    /*驾考模拟*/
    {
      path: '/driveTest/test/:type/:examId',/*考试*/
      name: 'test',
      component: test,
    },
    {
      path: '/driveTest',/*考试*/
      name: 'driveMain',
      component: driveMain,
    },
    {
      path: '/driveTest/driveSel',/*考试*/
      name: 'driveSel',
      component: driveSel,
    },
    {
      path: '/driveTest/specialList',/*考试*/
      name: 'specialList',
      component: specialList,
    },
    {
      path: '/driveTest/driveExam/:Number',/*考试*/
      name: 'driveExam',
      component: driveExam,
    },
    /*分享*/
    {
      path: '/shareHaian',/*考试*/
      name: 'shareHaian',
      component: shareHaian,
    },


    /*公共模块*/
    {
      path: '/userAddress', /*普通列表*/
      name: 'userAddress',
      component: userAddress,
    },
    /*特殊公共样式*/
    {
      path: '/list/normalList/:key1?/:key2?/:key3?', /*普通列表*/
      name: 'normalList',
      component: normalList,
    },
    {
      path: '/list/normalList2/:key1?/:key2?/:key3?', /*普通列表*/
      name: 'normalList2',
      component: normalList2,
    },
    {
      path: '/list/scrollList/:key1?/:key2?/:key3?', /*滚动刷新列表*/
      name: 'scrollList',
      component: scrollList,
    },
    {
      path: '/newsList/:key', /*滚动刷新列表*/
      name: 'newsList',
      component: newsList,
    },
  ]
})
