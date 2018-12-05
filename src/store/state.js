const state = {
  cardId:'',
  userName:'',
  userId:'',
  userPhone:'',
  childInfo:{
    idCard:{
      number:'',
      front:'',
      back:''
    },
    address:{
      address:['','',''],
      detail:""
    },
    origin:{
      address:['','','',''],
      detail:'',
      picture:''
    },
    marriage:{
      state:'',
      time:'',
      number:'',
      picture:''
    },
    history:[],
    spouseIdCard:{
      number:'',
      front:'',
      back:''
    },
    spouseAddress:{
      address:['','',''],
      detail:""
    },
    spouseOrigin:{
      address:['','','',''],
      detail:'',
      picture:''
    },
    spouseMarriage:{
      state:'',
      time:'',
      number:'',
      picture:''
    },
    spouseHistory:[],
  },

  auditAddress:{
    fromAddress:{
      rcvCity: "",//	收件人城市
      rcvCoutry: "",//		收件人区县
      rcvName: "",//		收件人姓名
      rcvPhone: "",//		收件人电话
      rcvProv: "",//		收件人省份
      rcvStreet:''
    },

    /*接收地址*/
    backAddress:{
      sendCityM: "",//	发件区域城市
      sendCountryM: "",//	发件区域区县
      sendProvM: "",//	发件区域省份
      sendStrectM: ""//	发件详细地址
    },
  },
  pageAddress:""
}

export default state;
