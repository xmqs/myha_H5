import * as types from './mutation-type'

export default {
  nameAsyn({commit},{cardId,userId,userName,userPhone}){
    commit(types.setCardId,cardId);
    commit(types.setUserId,userId);
    commit(types.setUserName,userName);
    commit(types.setUserPhone,userPhone);
  }

}
