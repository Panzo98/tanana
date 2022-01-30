<template>
  <div id="app">
    <div>
      <photo-component />
      <navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import PhotoComponent from "./components/PhotoComponent.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    PhotoComponent,
  },
};
</script>

<style>
.section {
  scroll-snap-align: center;
  height: 40vh;
  display: flex;
}
</style>
