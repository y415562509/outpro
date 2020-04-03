import { get, post } from "@/network/request.js";
export function login(params) {
  return post("/login", params);
}

export const getUserInfo = id => {
  return get(`users/${id}`);
};
