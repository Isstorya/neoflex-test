<template>
  <div class="container">
    <MainHeader @getCart="getCart" />
    <MainCatalog v-if="catalog" />
    <MainCart v-else :cart-elements="cart" />
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import MainCatalog from "../components/catalog/MainCatalog.vue";
import MainCart from "../components/cart/MainCart.vue";
export default {
  components: { MainHeader, MainCatalog, MainCart },
  data() {
    return {
      cart: [],
      cartCount: 0,
      catalog: true,
    };
  },
  methods: {
    getCart() {
      if (sessionStorage.getItem("cart")) {
        if (!this.catalog) {
          const cart = this.$store.state.cart;
          const cartCount = this.$store.state.cartCount;

          sessionStorage.setItem("cart", JSON.stringify(cart));
          sessionStorage.setItem("cartCount", cartCount);
          this.catalog = !this.catalog;
          return;
        }
        const cart = JSON.parse(sessionStorage.getItem("cart"));
        const cartCount = sessionStorage.getItem("cartCount");

        this.cart = cart;
        this.cartCount = cartCount;
        this.$store.commit("setCart", cart);
      }
      this.catalog = !this.catalog;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
}
.container {
  background: #eaeaea;
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
}
.container > * {
  padding-bottom: 20px;
}

h1 {
  font-size: 25px;
  line-height: 30px;
  color: #101010;
}

h2 {
  font-size: 20px;
  line-height: 24px;
  color: #838383;
}
</style>
