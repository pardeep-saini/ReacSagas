import { takeLatest, takeEvery } from 'redux-saga/effects';
import { userLoginSagas} from  './userLogin/index'

import * as types from '../actions/userLogin/loginActionConstant';

export default function* watchUserAuthentication() {
  // yield takeLatest(types.GET_ALLSPACELAUNCHES, getAllSpaceLaunches);
  yield takeLatest(types.GET_LOGIN, userLoginSagas);
 
}

