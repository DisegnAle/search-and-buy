export const getters = {
  getLoginData(state) {
    return state.loginForm;
  },
  getIdToken(state) {
    return state.idToken;
  },
  getIdUser(state) {
    return state.idUser;
  },
  isAuthenticated(state) {
    return !!state.idToken;
  },
};
