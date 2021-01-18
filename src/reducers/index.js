import { combineReducers } from 'redux';
import getAllSpacex from './spacexReducer';
import userLogin from './userLogin/loginReducers';
const rootReducer = combineReducers({
  getAllSpacex,
  userLogin
});

export default rootReducer;