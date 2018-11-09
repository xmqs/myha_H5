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
  }
}
