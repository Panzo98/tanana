<template>
  <div id="app">
    <div>
      <photo-component />
      <navbar />
      <employers-info />
      <prices />
    </div>
  </div>
</template>

<script>
import PhotoComponent from "./components/PhotoComponent.vue";
import Navbar from "./components/Navbar.vue";
import EmployersInfo from "./components/EmployersInfo.vue";
import Prices from "./components/Prices.vue";

export default {
  name: "App",
  components: { PhotoComponent, Navbar, EmployersInfo, Prices },
};
</script>

<style>
.section {
  scroll-snap-align: center;
  height: 40vh;
  display: flex;
}
</style>
