import Vue from "vue";
import Vuex from "vuex";
import authentication from "@/store/modules/authentication/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authentication,
  },
});
