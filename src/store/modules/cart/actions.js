export default {
  addToCart(context, payload) {
    context.commit("addToCart", payload);
  },
  removeProductFromCart(context, payload) {
    context.commit("removeProductFromCart", payload);
  },
};
