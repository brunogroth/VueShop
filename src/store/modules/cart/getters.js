export default {
  cart(state) {
    return state.cart;
  },
  cartTotalItems(state) {
    console.log("cartTotalItems", state.cart);
    return state.cart.total.toFixed(2);
  },
};
