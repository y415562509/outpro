const TokenKey = "lempToken";
const UserIdKey = "lempUserId";
const UserInfo = "lempUserInfo";
export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, JSON.stringify(token));
}

export function getUserId() {
  return localStorage.getItem(UserIdKey);
}

export function setUserId(userId) {
  return localStorage.setItem(UserIdKey, JSON.stringify(userId));
}

export function getUserInfo() {
  return localStorage.getItem(UserIdKey);
}

export function setUserInfo(userInfo) {
  return localStorage.setItem(UserInfo, JSON.stringify(userInfo));
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
