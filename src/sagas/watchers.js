import { takeLatest, takeEvery } from 'redux-saga/effects';
import { userLoginSagas} from  './userLogin/index'
import { getAccount} from  "./getDashBoardAccount/getAccountSagas";

import * as types from '../actions/userLogin/loginActionConstant';
import * as typesAccountDetails from '../actions/getDashBoardAccount/getAccountNameConstant';

export default function* watchUserAuthentication() {
  // yield takeLatest(types.GET_ALLSPACELAUNCHES, getAllSpaceLaunches);
  yield takeLatest(types.GET_LOGIN, userLoginSagas);
  yield takeLatest(typesAccountDetails.GET_ACCOUNT_DETAILS, getAccount);
}

