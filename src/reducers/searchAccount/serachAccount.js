import * as types from "../../actions/searchAccount/serachAccountConstant";


export default function serachAccount(state = [], action) {
    console.log("ActionsserachAccount", action)
   
    switch (action.type) {
      case types.SEARCH_RESULT:
        return { loading: true, ...state, action};
      
      default:
        return state;
    }
  }

  

