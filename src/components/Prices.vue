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
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  width: 1140px;
}

@media (max-width: 1478px) {
  .card-container {
    margin-left: auto;
    margin-right: auto;
    display: grid;
    width: 1140px;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.card-container {
  width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-row-gap: 50px;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  justify-content: center;
  padding-bottom: 120px;
}
</style>
