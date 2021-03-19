import { state } from "@/store/modules/products/state.js";
import { mutations } from "@/store/modules/products/mutations.js";
import { actions } from "@/store/modules/products/actions.js";
import { getters } from "@/store/modules/products/getters.js";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
