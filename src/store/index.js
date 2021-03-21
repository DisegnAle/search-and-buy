import Vue from "vue";
import Vuex from "vuex";
import authentication from "@/store/modules/authentication/index.js";
import products from "@/store/modules/products/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    authentication,
    products,
  },
});
