import { combineReducers } from 'redux';
import userLogin from './userLogin/loginReducers';
import getAccountDetails from './getDashBoardAccount/getAccountReducer';
const rootReducer = combineReducers({
  userLogin,
  getAccountDetails
});

export default rootReducer;