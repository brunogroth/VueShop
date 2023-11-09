export default {
  addToCart(state, payload) {
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
  removeProductFromCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex(
      (cartItem) => cartItem.productId === payload
    );

    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  },
};
