import { endpoints } from "@/constants/endpoints.js";
import { UtilsService } from "./utilsService.js";
import axios from "axios";

export const AuthService = {
  loginRequest(loginFormData) {
    return axios.post(endpoints["LOGIN"], {
      email: loginFormData.username,
      password: loginFormData.password,
      returnSecureToken: true,
    });
  },
  manageRequestError(err) {
    const error = err.toJSON();
    const invalidCredentialsMessage = "Request failed with status code 400";

    if (error.message == invalidCredentialsMessage) {
      const invalidCredentialsNotification = {
        title: "Error",
        type: "error",
        message: "Username or Password not valid. Please try again",
      };
      UtilsService.showNotification(invalidCredentialsNotification);
    } else {
      const generalErrorNotification = {
        title: "Error",
        type: "error",
        message: "Oops...something went wrong",
      };
      UtilsService.showNotification(generalErrorNotification);
    }
  },
};
