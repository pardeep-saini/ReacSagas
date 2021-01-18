const storage = {
  token: "userToken",
  userInfo: "userInfo",
  userName: "chetu",
  password: "123"
};
class User {
  setToken = token => {
    console.log("Token", token)
    localStorage.setItem(storage.token, token);
  };
  getDataKey = key => {
    return localStorage.getItem(key);
  };
  setUserInfo = info => {
    console.log("Inof::", info)
    localStorage.setItem(storage.userInfo, info);
  };
  isLogin() {
    return localStorage.getItem(storage.token) &&
      localStorage.getItem(storage.userInfo)
      ? true
      : false;
  }

  loginAttempt = (username, password) => {
    if (storage.userName === username && storage.password === password) {
      const userInfo = {
        username: username,
        password: password
      }
      this.setToken(Math.random())
      this.setUserInfo(userInfo)
      return true;
    }
    return false;
  };

  clearData() {
    localStorage.removeItem(storage.token);
    localStorage.removeItem(storage.userInfo);
  }
}
export default new User();
