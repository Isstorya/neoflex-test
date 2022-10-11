export const state = () => ({
  cart: [],
  cartCount: 0,
});

export const mutations = {
  addToCart(state, item) {
    let found = state.cart.find((el) => el.id == item.id);
    if (found) {
      found.quantity++;
      found.totalPrice = found.quantity * found.price;
    } else {
      item.quantity = 1;
      item.totalPrice = item.quantity * item.price;
      state.cart.push(item);
    }
    state.cartCount++;
    sessionStorage.setItem("cart", JSON.stringify(state.cart));
    sessionStorage.setItem("cartCount", state.cartCount);
  },

  setCart(state, items) {
    state.cart = items;
  },

  setCartCount(state, count) {
    state.cartCount = count;
  },

  removeCart(state, item) {
    let found = state.cart.find((el) => el.id == item.id);
    if (found) {
      if (found.quantity == 1) {
        let index = state.cart.indexOf(item);

        if (index > -1) {
          let product = state.cart[index];
          state.cartCount -= product.quantity;

          state.cart.splice(index, 1);
        }
      } else {
        found.quantity--;
        found.totalPrice = found.quantity * found.price;
      }
    } else {
      return;
    }
  },

  removeCartAll(state, items) {
    let index = state.cart.indexOf(items);

    if (index > -1) {
      let product = state.cart[index];
      state.cartCount -= product.quantity;

      state.cart.splice(index, 1);
    }
  },
};
