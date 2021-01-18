import { put, call, } from 'redux-saga/effects';
import * as api from '../utils/api';
import * as types from '../actions/spaceActionConstant'


export function* getAllSpaceLaunches(val) {
  console.log("ValueData", val);
  try {  
    let response = "";  
     
      response = yield call(api.get, `/users`);
    
    yield put({ type: types.GET_ALLSPACELAUNCHES_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_ALLSPACELAUNCHES_ERROR, error: 'getting error' });

  }
}