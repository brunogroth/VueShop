import cartMutations from "./mutations";
import cartActions from "./actions";
import cartGetters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      cart: {
        items: [],
        qty: 0,
        total: 0,
      },
    };
  },

  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
