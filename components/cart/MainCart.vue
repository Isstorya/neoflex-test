<template>
  <div class="mainCart">
    <div class="elements">
      <CartElement
        :elementProps="element"
        v-for="element in cartElements"
        :key="element.id"
      />
    </div>
    <div class="cartPrice element">
      <div class="cartPriceTop">
        <div class="cartPriceTitle">ИТОГО</div>
        <div class="cartPriceTotal">{{ totalPrice() }}</div>
      </div>
      <div class="btn cartPriceBottom">
        <div class="btn orderBtn">Перейти к оформлению</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartElement from "./CartElement.vue";
export default {
  components: { CartElement },
  props: {
    cartElements: {
      type: Array,
    },
  },
  methods: {
    totalPrice() {
      let totalPrice = 0;
      this.cartElements.forEach((el) => (totalPrice += el.totalPrice));
      return totalPrice;
    },
  },
};
</script>

<style>
.mainCart {
  display: grid;
  grid-template-columns: 1fr 300px;
  column-gap: 120px;
  padding: 0 100px;
}
.elements {
  margin-bottom: 30px;
}
.cartPrice {
  padding-top: 20px !important;
  padding-bottom: 10px !important;
  height: 120px;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.cartPriceTop {
  display: flex;
  justify-content: space-between;
}
.orderBtn {
  background: #000;
  color: #fff;
  height: 60px;
  border: solid 1px #000;
  border-radius: calc(30px - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
