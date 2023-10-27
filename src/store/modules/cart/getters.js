export default {
  cart(state) {
    return state.cart;
  },
  cartTotalItems(state) {
    return state.cart.total.toFixed(2);
  },
};
