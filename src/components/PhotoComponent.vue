<template>
  <div>
    <div
      class="img-container"
      :style="
        'background-image: url(' +
        image +
        '); background-position: 50% ' +
        scroll +
        'px;'
      "
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
      this.scroll = scroll - 25;
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
  background-position: 50%;
}
.img-container ::before ::after {
  box-sizing: border-box;
}
</style>
