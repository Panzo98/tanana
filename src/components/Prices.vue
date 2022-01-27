<template>
  <div class="prices-container">
    <div class="justify-content-center">
      <div
        class="heading-section ftco-animate text-center fadeInUp ftco-animated mb-5"
      >
        <h5 class="mb-5 mt-5 pt-5 pb-5">CIJENE</h5>
      </div>
    </div>
    <div class="col-md-3 m-3">
      <price />
      <price />
      <price />
      <price />
      <price />
      <price />
    </div>
  </div>
</template>

<script>
import Price from "./Price.vue";
export default {
  components: { Price },
  name: "Prices",
};
</script>

<style>
.prices-container {
  background: #fff;
  height: 100vh;
}
.card-container {
  display: grid;
  grid-column-gap: 50px;
}
</style>
