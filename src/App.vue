<template>
  <div>
    <TheHeader @login="login" @logout="logout" />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      // isLoggedIn: false,
      // cart: { items: [], total: 0, qty: 0 },
    };
  },
  // provide() { },
  methods: {
    addProductToCart(productData) {
      this.$store.dispatch("cartModule/addToCart", productData);
    },

    // removeProductFromCart(prodId) {
    //   const productInCartIndex = this.cart.items.findIndex(
    //     (cartItem) => cartItem.productId === prodId
    //   );
    //   const prodData = this.cart.items[productInCartIndex];
    //   this.cart.items.splice(productInCartIndex, 1);
    //   this.cart.qty -= prodData.qty;
    //   this.cart.total -= prodData.price * prodData.qty;
    // },

    login() {
      this.$store.dispatch("sessionModule/login");
    },
    logout() {
      this.$store.dispatch("sessionModule/logout");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
