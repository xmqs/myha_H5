import * as types from './mutation-type'

export default {
  [types.setCardId](state,cardId){
    state.cardId = cardId;
  },
  [types.setUserName](state,userName){
    state.userName = userName;
  },
  [types.setUserId](state,userId){
    state.userId = userId;
  },
  [types.setUserPhone](state,userPhone){
    state.userPhone = userPhone;
  },
  [types.setChildInfo](state,childInfo){
    state.childInfo = childInfo;
  },
  [types.setAuditAddress](state,auditAddress){
    state.auditAddress = auditAddress;
  },
  [types.setPageAddress](state,pageAddress){
    state.pageAddress = pageAddress;
  },
  [types.setIsLogin](state,isLogin){
    state.isLogin = isLogin;
  }
}
