import {
  getToken,
  setToken,
  getUserId,
  setUserId,
  setUserInfo
} from "@/network/auth";
import { login } from "@/api/login";

const user = {
  state: {
    token: getToken(),
    userName: "",
    userId: getUserId(),
    userType: "",
    menus: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERNAME: (state, userName) => {
      state.userName = userName;
    },
    SET_USERID: (state, userId) => {
      state.userId = userId;
    },
    SET_USERTYPE: (state, userType) => {
      state.userType = userType;
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(res => {
            if (res.status === 200) {
              console.log(res.data, "user");
              setToken(res.data.token);
              setUserId(res.data.id);
              setUserInfo(res.data);
              commit("SET_TOKEN", res.data.token);
              commit("SET_USERNAME", res.data.id);
              commit("SET_USERID", res.data.id);
              commit("SET_USERTYPE", res.data.userType);
              commit("SET_MENUS", res.data.menus);
            }
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};

export default user;
