const getters = {
  userType: state => state.user.userType,
  token: state => state.user.token,
  userName: state => state.user.userName,
  menus: state => state.user.menus,
  userId: state => state.user.userId
};
export default getters;
