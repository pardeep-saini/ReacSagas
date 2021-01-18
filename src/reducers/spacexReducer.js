import * as types from '../actions/spaceActionConstant';
import { combineReducers } from 'redux';

  function getSpacexReducer(state = [], action) {
    console.log("Actions", action)
    let response = action.response;
    switch (action.type) {
      case types.GET_ALLSPACELAUNCHES:
        return { loading: true, ...state };
      case types.GET_ALLSPACELAUNCHES_SUCCESS:
        return { loading: false, response };
      case types.GET_ALLSPACELAUNCHES_ERROR:
        return { loading: false, response };
      default:
        return state;
    }
  }

export default combineReducers({  
  getAllSpacex: getSpacexReducer,
  
})