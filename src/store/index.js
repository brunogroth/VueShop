import { createStore } from "vuex";
import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";

// MODULES
import sessionModule from "./modules/session";
import cartModule from "./modules/cart";
import productsModule from "./modules/products";

const store = createStore({
  modules: {
    sessionModule: sessionModule,
    cartModule: cartModule,
    productsModule: productsModule,
  },

  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
