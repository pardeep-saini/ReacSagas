import {
  ALERT_ERROR,
  ALERT_SUCCESS,
  LOADING,
  ALERT_CLOSE
} from "../actions/userLogin/loginActionConstant";

export const alertError = error => {
  const type = ALERT_ERROR;
  return {
    type,
    error
  };
};
export const pageLoading = () => {
  console.log("Success_Pradeep")
  const type = LOADING;
  return { type };
};
export const alertSuccess = success => {
  console.log("Success_Pradeep")
  const type = ALERT_SUCCESS;
  return {
    type,
    success
  };
};

export const alertClose = success => {
  console.log("Success_Pradeep")
  const type = ALERT_CLOSE;
  return {
    type
  };
};
