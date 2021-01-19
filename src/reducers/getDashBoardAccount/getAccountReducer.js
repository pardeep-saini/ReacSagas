import * as types from "../../actions/getDashBoardAccount/getAccountNameConstant";

  
export default function getAccountDetails(state = [], action) {
    console.log("getAccountDetails", action)
    let response = action.response;
    switch (action.type) {
      case types.GET_ACCOUNT_DETAILS:
        return { loading: true, ...state };
      case types.GET_ACCOUNT_DETAILS_SUCCESS:
        return { loading: true, data: response };
      case types.GET_ACCOUNT_DETAILS_ERROR:
        return { loading: false, response };
      default:
        return state;
    }
  }

  
