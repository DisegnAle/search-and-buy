import { state } from "@/store/modules/authentication/state.js";
import { mutations } from "@/store/modules/authentication/mutations.js";
import { actions } from "@/store/modules/authentication/actions.js";
import { getters } from "@/store/modules/authentication/getters.js";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
