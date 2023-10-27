import sessionMutations from "./mutations";
import sessionActions from "./actions";
import sessionGetters from "./getters";

export default {
  namespaced: true,

  state() {
    return {
      isLogged: false,
    };
  },

  mutations: sessionMutations,
  actions: sessionActions,
  getters: sessionGetters,
};
