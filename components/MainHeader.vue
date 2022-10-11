<template>
  <header class="header">
    <div class="title">
      <h1 class="title">QPICK</h1>
      <h2 class="subtitle">Наушники</h2>
    </div>
    <div class="headerActions">
      <div class="btn follow"><img src="/icons/heart.svg" alt="F" /></div>
      <div class="btn cart" @click="$emit('getCart')">
        <img src="/icons/cart.svg" alt="C" />
        <div class="counter">{{ $store.state.cartCount }}</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
}
.title {
  padding-bottom: 15px;
}
.headerActions {
  width: 100px;
  display: flex;
  justify-content: space-between;
}
.headerActions > * {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerActions img {
  width: 100%;
}
</style>
