import { state } from "@/store/modules/basket/state.js";
import { mutations } from "@/store/modules/basket/mutations.js";
import { actions } from "@/store/modules/basket/actions.js";
import { getters } from "@/store/modules/basket/getters.js";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
