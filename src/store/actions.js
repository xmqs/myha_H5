import * as types from './mutation-type'

export default {
  nameAsyn({commit},{cardId,userId,userName,userPhone,childInfo,auditAddress,pageAddress}){
    commit(types.setCardId,cardId);
    commit(types.setUserId,userId);
    commit(types.setUserName,userName);
    commit(types.setUserPhone,userPhone);
    commit(types.setChildInfo,childInfo);
    commit(types.setAuditAddress,auditAddress);
    commit(types.setPageAddress,pageAddress);
  }

}
