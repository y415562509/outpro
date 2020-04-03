import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import { getToken } from "@/network/auth";
import store from "../store";
import { MessageBox } from "element-ui";

Vue.use(VueRouter);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const menuList = store.state.user.menus;
console.log(menuList);
// router.beforeEach((to, from, next) => {
//   if (getToken()) {
//     if (to.path === "/") {
//       console.log(menuList);
//       next({ path: "/" });
//     }
//   } else {
//     next("/");
//   }
// });

export default router;
