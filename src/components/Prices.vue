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
      <div v-for="(data, index) in myJson" :key="index">
        <price :data="data" @scroll="scrollToReservation" />
      </div>
    </div>
  </div>
</template>

<script>
import Price from "./Price.vue";
import json from "../data.json";
export default {
  components: { Price },
  name: "Prices",
  data() {
    return {
      myJson: json,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrollToReservation() {
      //need to fix
      window.scrollTo(0, 2700);
    },
  },
};
</script>

<style>
.prices-container {
  background: #fff;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  width: 1140px;
}
.card-container {
  width: 1140px;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  justify-content: center;
  padding-bottom: 120px;
}

@media only screen and (max-width: 1200px) {
  .card-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .prices-container {
    background: #fff;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
}
</style>
