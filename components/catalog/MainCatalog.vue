<template>
  <div class="mainCatalog">
    <CatalogElement
      v-for="element in headphones"
      :key="element.id"
      :elementProps="element"
    ></CatalogElement>
  </div>
</template>

<script>
import CatalogElement from "./CatalogElement.vue";
import headphones from "../../server/headphones";
export default {
  data() {
    return {
      headphones: headphones,
    };
  },
  components: { CatalogElement },
};
</script>

<style>
.mainCatalog {
  display: grid;
  grid-template-columns: repeat(3, 320px);
  justify-content: center;
  gap: 30px;
}
</style>
