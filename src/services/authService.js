import { endpoints } from "@/constants/endpoints.js";
import axios from "axios";

export const AuthService = {
  loginRequest(loginFormData) {
    return axios.post(endpoints["LOGIN"], {
      email: loginFormData.username,
      password: loginFormData.password,
      returnSecureToken: true,
    });
  },
};
