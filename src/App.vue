<template>
  <div id="app">
    <div>
      <photo-component />
      <navbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import PhotoComponent from "./components/PhotoComponent.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    PhotoComponent,
    Footer,
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
