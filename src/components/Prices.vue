<template>
  <div class="prices-container">
    <div class="justify-content-center">
      <div
        class="heading-section ftco-animate text-center fadeInUp ftco-animated mb-5"
      >
        <h5 class="mb-5 mt-5 pt-5 pb-5">CIJENE</h5>
      </div>
    </div>
    <div class="card-container">
      <price />
      <price />
      <price />
      <price />
      <price />
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
  display: flex;
  flex-direction: row;
}
.card-container:after {
  content: "";
  display: table;
  clear: both;
}
</style>
