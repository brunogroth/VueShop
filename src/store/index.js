import { createStore } from "vuex";
import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";

const store = createStore({
  state() {
    return {
      isLogged: false,
    };
  },

  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
