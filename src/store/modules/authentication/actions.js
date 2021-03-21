import { UtilsService } from "@/services/utilsService.js";
import { AuthService } from "@/services/authService.js";
import router from "@/router/index.js";

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
        const idUser = response.data.localId;
        commit("setIdToken", idToken);
        commit("setIdUser", idUser);
      })
      .then(() => {
        router.push({ name: "products" });
      })
      .catch((err) => {
        AuthService.manageRequestError(err);
      });
  },
};
