<template>
  <div class="container">
    <div class="contact-info-container">
      <div class="left-info-container"></div>
      <div style="width: 95px"></div>
      <div class="right-info-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.container {
  padding: 7em 0;
  width: 100%;
  min-height: 464px;
}
.contact-info-container {
  display: flex;
  max-width: 1140px;
  height: 416px;
  margin: auto;
}
@media only screen and (max-width: 527px) {
  .contact-info-container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 416px;
    margin: auto;
  }
}
.left-info-container {
  height: 100%;
  width: 416px;
  padding: 0 15px;
}
.right-info-container {
  flex-grow: 1;
}
</style>
