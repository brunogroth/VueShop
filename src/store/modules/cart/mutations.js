export default {
  addToCart(state, payload) {
    state.cart.total++;
    //    state.cart.items.push(payload);
    const productInCartIndex = this.state.cart.items.findIndex(
      (ci) => ci.productId === productData.id
    );
    if (productInCartIndex >= 0) {
      this.cart.items[productInCartIndex].qty++;
      console.log("+1");
    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1,
      };
      console.log(newItem);
      this.cart.items.push(newItem);
    }
    this.store.cart.qty++;
    this.store.cart.total += productData.price;
  },
};
