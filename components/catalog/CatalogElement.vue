<template>
  <div class="catalogElement element">
    <img
      :src="elementProps.img"
      :alt="elementProps.title"
      class="catalogElementImg"
    />
    <div class="catalogElementTop">
      <h3 class="elementTitle">{{ elementProps.title }}</h3>
      <div class="elementPrice">
        {{ elementProps.price }} Р
        <div class="oldPrice" v-if="elementProps.oldPrice">
          {{ elementProps.oldPrice }} Р
        </div>
      </div>
    </div>
    <div class="catalogElementBottom">
      <div class="elementRate">{{ elementProps.rate }}</div>
      <div class="btn buyBtn" @click="addToCart">Купить</div>
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
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.elementProps);
    },
  },
};
</script>

<style>
.element {
  border: solid 1px white;
  background: white;
  border-radius: 30px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 20px;

  box-shadow: 8px 12px 24px -7px rgba(0, 0, 0, 0.21);
}
.catalogElementTop {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
}
.catalogElementBottom {
  padding-top: 12px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
}
.elementPrice {
  color: #ffa542;
}
.oldPrice {
  color: #ffce7f;
}
.catalogElementImg {
  max-height: 260px;
  max-width: 300px;
}
.btn {
  cursor: pointer;
  font-weight: bold;
}
.buyBtn {
  width: 100px;
  height: 30px;
  background: #eaeaea;
  border: solid 1px #eaeaea;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
