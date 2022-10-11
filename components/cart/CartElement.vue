<template>
  <div class="cartElement element">
    <div class="cartElementTop">
      <img
        :src="elementProps.img"
        :alt="elementProps.title"
        class="cartElementImg"
      />
      <div class="title">
        <h3 class="cartElementTitle">{{ elementProps.title }}</h3>
        <div class="cartElementPrice">{{ elementProps.totalPrice }} Р</div>
      </div>
      <div
        class="btn delBtn"
        @click="$store.commit('removeCartAll', elementProps)"
      >
        X
      </div>
    </div>
    <div class="cartElementBottom">
      <div class="cartElementCounter">
        <div
          class="btn btnMinus"
          @click="$store.commit('removeCart', elementProps)"
        >
          -
        </div>
        {{ elementProps.quantity }}
        <div
          class="btn btnPlus"
          @click="$store.commit('addToCart', elementProps)"
        >
          +
        </div>
      </div>
      <div class="cartElementPrice">{{ elementProps.totalPrice }} P</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elementProps: {
      type: Object,
    },
  },
};
</script>

<style>
.cartElement {
  margin-bottom: 20px;
}
.cartElementTop {
  display: grid;
  grid-template-columns: 150px 1fr 30px;
  gap: 0;
}
.cartElementImg {
  width: 100%;
}
.cartElementTop > .title {
  align-self: center;
}
.cartElementBottom {
  display: flex;
  justify-content: space-between;
}
.cartElementCounter {
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
}
.cartElementCounter > .btn {
  width: 40px;
  height: 40px;
  background: #ffce7f;
  border: solid 1px #ffce7f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
</style>
