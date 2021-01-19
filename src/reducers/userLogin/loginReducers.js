import * as types from "../../actions/userLogin/loginActionConstant";


export default function userLogin(state = [], action) {
    console.log("ActionsUserLogin", action)
    let response = action.response;
    switch (action.type) {
      case types.GET_LOGIN:
        return { loading: true, ...state, username: action.username, password: action.password };
      case types.USER_NAME_CHANGE:
        return { loading: true, ...state, username:action.username };
      case types.USER_PASSWORD_CHANGE:
        return { loading: true, ...state, userPassword:action.userPassword };
      case types.GET_LOGIN_SUCCESS:
        return { loading: false, Success: action.Success, Status: action.statu };
      case types.GET_LOGIN_ERROR:
        return { loading: false, response };
      default:
        return state;
    }
  }

  

