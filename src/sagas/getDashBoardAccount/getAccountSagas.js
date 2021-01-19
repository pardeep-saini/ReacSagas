import { put, call, } from 'redux-saga/effects';
import * as api from '../../utils/api';
import * as types from '../../actions/getDashBoardAccount/getAccountNameConstant'


export function* getAccount() {

  try {  
    let response = "";  
     
      response = yield call(api.get, `/users`);

    console.log("DataDefault", response)
    yield put({ type: types.GET_ACCOUNT_DETAILS_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_ACCOUNT_DETAILS_ERROR, error: 'getting error' });

  }
}