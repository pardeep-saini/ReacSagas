import { combineReducers } from 'redux';
import userLogin from './userLogin/loginReducers';
import getAccountDetails from './getDashBoardAccount/getAccountReducer';
import serachResult from './searchAccount/serachAccount';
const rootReducer = combineReducers({
  userLogin,
  getAccountDetails,
  serachResult
});

export default rootReducer;