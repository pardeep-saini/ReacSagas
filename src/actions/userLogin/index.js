import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_ERROR, USER_NAME_CHANGE, USER_PASSWORD_CHANGE } from "./loginActionConstant";

export const userNameChange = username => {
  const type = USER_NAME_CHANGE;
  return { type, username };
};
export const userPasswordChange = userPassword => {
  const type = USER_PASSWORD_CHANGE;
  return { type, userPassword };
};

export const userLoginSubmit = (username, password) => {
     const type = GET_LOGIN;
     return {type, username, password}
  };
