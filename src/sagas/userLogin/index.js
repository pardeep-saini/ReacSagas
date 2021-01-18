import { put, call, } from 'redux-saga/effects';
// import * as api from '../utils/api';
import * as types from "../../actions/userLogin/loginActionConstant"
import { pageLoading, alertError, alertSuccess } from "../../actions/alert-actions";
import User from "../../tools/user-service";


export function* userLoginSagas(val) {
  console.log("ValueData_Final", val.username, val.password);
  try {  
    if(User.loginAttempt(val.username, val.password)) {
       yield put({ type: types.GET_LOGIN_SUCCESS, Success: "Successfully Login", statu: "ok" });
       alertSuccess("Login Success")
    }
 
  } catch (error) {
    yield put({ type: types.GET_LOGIN_ERROR, error: 'getting error' });

  }

}