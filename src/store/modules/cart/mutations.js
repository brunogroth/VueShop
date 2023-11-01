export default {
  addToCart(state, payload) {
    console.log(payload.value);
    //    state.cart.items.push(payload);
    const productInCartIndex = state.cart.items.findIndex(
      (ci) => ci.productId === payload.value.productId
    );
    if (productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;
      console.log("+1");
    } else {
      const newItem = {
        productId: payload.value.productId,
        title: payload.value.title,
        image: payload.value.image,
        price: payload.value.price,
        qty: 1,
      };
      console.log("newItem", newItem);
      state.cart.items.push(newItem);
    }
    state.cart.qty++;
    console.log("payload.value", payload.value);
    state.cart.total += payload.value.price;
  },
};
