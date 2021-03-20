import { UtilsService } from "@/services/utilsService.js";
import { AuthService } from "@/services/authService.js";

export const actions = {
  login: ({ commit }, loginFormData) => {
    let adaptedLoginFormData = {
      ...loginFormData,
    };
    adaptedLoginFormData.username = UtilsService.composeString(
      loginFormData.username,
      "@rs2.com"
    );

    AuthService.loginRequest(adaptedLoginFormData)
      .then((response) => {
        const idToken = response.data.idToken;
        commit("setTokenId", idToken);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
