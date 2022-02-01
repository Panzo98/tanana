<template>
  <div>
    <div
      :style="
        'background-image: url(' +
        image +
        '); background-position: 50% ' +
        scroll +
        'px;'
      "
      class="img-container"
    >
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoComponent",
  data() {
    return {
      scroll: "",
      image: "https://technext.github.io/pretty/images/bg_1.jpg",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  methods: {
    getScroll() {
      let scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scroll = -(scroll / 2) - 25;
    },
  },
  computed: {
    scrollChange() {
      return this.scroll; // depends on the data scroll，scroll has changed, scrollChange will change
    },
  },
};
</script>

<style scoped>
.img-container {
  /* Position and center the image to scale nicely on all screens */
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 50% -25px;
  background-attachment: fixed;
}
.img-container ::before ::after {
  box-sizing: border-box;
}
@media only screen and (max-width: 1200px) {
  .img-container {
    /* Position and center the image to scale nicely on all screens */
    height: 100vh;
    background-position: center center !important;
    background-attachment: scroll;
  }
}
</style>
